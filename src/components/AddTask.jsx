import React, { useState } from "react";
import styles from "./AddTask.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/store";

const AddTask = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const addTask = (e) => {
    if (!title || !notes || !date) {
      return;
    }
    console.log(title, notes, date);

    dispatch(addTodo({ title, notes, date }));

    setTitle("");
    setNotes("");
    setDate("");
    setModal(false);
  };

  return (
    <div
      className={`${styles.addTaskSection} d-flex justify-content-end align-items-center mb-5`}
    >
      <button
        className={`btn ${styles.addTaskBtn}`}
        onClick={() => setModal(true)}
      >
        Add Task
      </button>

      {modal && (
        <div className={styles.modalBackdrop} onClick={() => setModal(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h5 className={styles.modalTitle}>Add Task</h5>
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
                placeholder="Task title"
                className="form-control mb-2"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Notes..."
                className="form-control mb-2"
                onChange={(e) => setNotes(e.target.value)}
                required
              ></textarea>
              <input
                className="form-control"
                type="date"
                id="taskDate"
                name="taskDate"
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
                onClick={() => addTask()}
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

export default AddTask;
