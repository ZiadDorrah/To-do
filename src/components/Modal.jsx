// Modal.jsx
import styles from "./Modal.module.css";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click closing
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
