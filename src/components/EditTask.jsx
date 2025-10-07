import React, { useState } from "react";
import styles from "./EditTask.module.css";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/store";

const EditTask = ({id, titleTodo, notesTodo, dateTodo }) => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    const [title, setTitle] = useState(titleTodo)
    const [notes, setNotes] = useState(notesTodo)
    const [date, setDate] = useState(dateTodo)

    const editTask = () => {
        if (!title || !notes || !date) {
            return;
        }

        dispatch(editTodo({
            id,
            title,
            notes,
            date

        }));
        setModal(false);


    };

    return (
        <div
            className={`${styles.editTaskSection} d-flex justify-content-end align-items-center mb-5`}
        >
            <button
                className={`btn ${styles.editTaskBtn}`}
                onClick={() => setModal(true)}
            >
                Edit Task
            </button>

            {modal && (
                <div className={styles.modalBackdrop} onClick={() => setModal(false)}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>Edit Task</h5>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setModal(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="my-3">
                            <input
                                type="text"
                                placeholder={titleTodo}
                                value={title}
                                className="form-control mb-2"
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder={notesTodo}
                                value={notes}
                                className="form-control mb-2"
                                onChange={(e) => setNotes(e.target.value)}
                                required
                            ></textarea>
                            <input
                                className="form-control"
                                type="date"
                                id="taskDate"
                                name="taskDate"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.modalFooter}>
                            <button
                                className={`btn ${styles.closeTaskBtn}`}
                                onClick={() => setModal(false)}
                            >
                                Close
                            </button>
                            <button
                                onClick={() => editTask()}
                                className={`btn ${styles.saveTaskBtn}`}
                            >
                                Save Task
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditTask;
