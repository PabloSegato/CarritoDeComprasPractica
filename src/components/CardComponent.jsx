import { useState } from "react";
import styles from "../styles/CardComponent.module.css";

const CardComponent = ({
  image,
  title,
  description,
  price,
  handleAdd,
  handleRemove,
}) => {
  const [added, setAdded] = useState(false);
  const addProduct = () => {
    handleAdd();
    setAdded(true);
  };
  const removeProduct = () => {
    handleRemove();
    setAdded(false);
  };
  return (
    <div className={styles.card}>
      <img src={image} alt="Imagen Producto" className={styles.cardImg} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardPrice}>{price} </p>
        {added ? (
          <button
            type="button"
            className={styles.removeButton}
            onClick={removeProduct}
          >
            Quitar del carrito
          </button>
        ) : (
          <button
            type="button"
            className={styles.addButton}
            onClick={addProduct}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
