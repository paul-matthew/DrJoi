import React, { useState } from "react";
import styles from "./style.module.css";
import { cartUtilities } from "../../utils/cart";

export function CartItem({ id, qty, update, product }) {
  const [count, setCount] = useState(qty);
  if (!product) return <p>loading cart item...</p>;
  const currSkus = product.variants.find((sku) => sku.sku === id);
  function upsert(e) {
    const val = e.target.value <= 0 ? 1 : e.target.value;
    setCount(() => val);
    cartUtilities.upsert({
      id,
      qty: parseInt(val),
    });
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
      <div className={styles.content}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>
          variant : <span>{currSkus.title}</span>
        </p>
        <p className={styles.price}>
          price : <span>${currSkus.price / 100}</span>
        </p>
        <label className={styles.price}>
          qty :
          <input
            type="number"
            min={1}
            value={count}
            className={styles.input}
            onChange={upsert}
          />
        </label>
        <p className={styles.price}>
          total : <span>${(currSkus.price * count) / 100}</span>
        </p>
        <button className={styles.remove} onClick={remove}>
          remove
        </button>
      </div>
    </div>
  );
}
