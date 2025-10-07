import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ img, title }) => {
    return (
        <div class={styles.card}>
            <img src={img} alt="" />
            <div class={styles.card__content}>
                <p class={styles.card__title}>Card Title</p>
                <p class={styles.card__description}>
                    {title}
                </p>
            </div>
        </div>
    );
};

export default Card;
