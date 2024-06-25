import React, { useState } from "react";
import styles from "./style.module.css";
import { cartUtilities } from "../../utils/cart";

export function CartItem({ id, qty, update, product }) {
  const [count, setCount] = useState(qty);
  if (!product) return <p>loading cart item...</p>;
  const currSkus = product.variants.find((sku) => sku.sku === id);
  function add() {
    setCount((prev) => (prev += 1));
    cartUtilities.add({ id, qty: 1 });
  }

  function reduce() {
    setCount((prev) => (prev -= 1));
    cartUtilities.reduce(id);
  }

  function remove() {
    cartUtilities.remove(id);
    update();
  }

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img loading="lazy" src={product.images[0].src} alt={product.title} />
      </div>
      <div>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>
          variant : <span>{currSkus.title}</span>
        </p>
        <p className={styles.price}>
          price : <span>${currSkus.price / 100}</span>
        </p>
        <p className={styles.price}>
          total : <span>${(currSkus.price * count) / 100}</span>
        </p>
        <div className={styles.controls}>
          <div className={styles.qty_container}>
            <button className={styles.btn} onClick={add}>
              add
            </button>
            <p className={styles.qty}>{count}</p>
            <button className={styles.reduce_btn} onClick={reduce}>
              reduce
            </button>
          </div>
          <button className={styles.remove} onClick={remove}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}
