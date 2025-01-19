import styles from "./Tag.module.styl";
import PropTypes from "prop-types";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

export const Tag = React.memo(({ tag, onDeleteClick }) => {
  const rgbGenerator = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const rgb = rgbGenerator();

  return (
    <div className={styles.tag} style={{ backgroundColor: rgb }} data-testid='tag-element'>
      <span className={styles.deleteTitle} data-testid='tag-title'>{tag}</span>
      <button
        data-testid='tag-button'
        className={styles.deleteButton}
        onClick={() => onDeleteClick(tag)}
      >
        <MdDeleteOutline />
      </button>
    </div>
  );
});

Tag.propTypes = {
  tag: PropTypes.string,
  onDeleteClick: PropTypes.func,
};

Tag.displayName = "Tag";
