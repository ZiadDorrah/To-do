import React, { useState } from "react";
import styles from "./Card.module.css";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdRadioButtonUnchecked, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/store";
import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";

const Card = ({ id, title, notes, date, completed }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const checkHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const delHandler = (id) => {
    dispatch(deleteTodo(id));
    setModalOpen(false);
  };

  return (
    <div className={styles.card}>
      <Link to={`/${title}/${id}`}><h3 className={`text-center ${styles.title}`}>{title}</h3></Link>
      <p className={styles.notes}>{notes}</p>
      <span className={styles.date}>{date}</span>

      {/* Delete button */}
      <button onClick={() => setModalOpen(true)} className={`btn ${styles.delBtn}`}>
        <MdDelete />
      </button>

      {/* Complete button */}
      <p className={styles.completed}>
        <button
          className={styles.CheckBtn}
          onClick={() => checkHandler(id)}
        >
          {completed ? <IoCheckmarkDone /> : <MdRadioButtonUnchecked />}
        </button>
      </p>

      {/* Modal */}
      {modalOpen && (
        <DeleteModal
          onClose={() => setModalOpen(false)}
          onConfirm={() => delHandler(id)}
        />
      )}
    </div>
  );
};

export default Card;
