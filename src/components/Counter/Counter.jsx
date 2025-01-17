import React from "react";
import { useCounter } from "../../hooks/useCounter/useCounter";
import styles from "./Counter.module.styl";

export const Counter = () => {
  const { value, decrement, increment } = useCounter(0);

  return (
    <section className={styles.counter}>
      <div className={styles.counterValue} data-testid="value-test">
        {value}
      </div>
      <div className={styles.counterButtons}>
        <button onClick={decrement} className={styles.counterButtonsButton}>
          decrement
        </button>
        <button onClick={increment} className={styles.counterButtonsButton}>
          increment
        </button>
      </div>
      <p>Click buttons to change value</p>
    </section>
  );
};
