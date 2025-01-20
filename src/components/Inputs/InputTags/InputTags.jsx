import PropTypes from "prop-types";
import styles from "./InputTags.module.styl";
import { useCallback, useState } from "react";
import { Tag } from "./Tag/Tag";
import React from "react";

export const InputTags = ({ initialTags = [] }) => {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    if (inputValue != false) {
      setTags((prev) => [...prev, inputValue]);
      setInputValue("");
    } else {
      alert("Please enter a tag first!");
    }
  };

  const handleTagDelete = useCallback((tagToDelete) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  }, []);

  return (
    <section className={styles.wrapper} data-testid="tags-section">
      <div className={styles.wrapperControllers}>
        <input
          data-testid="tags-input"
          className={styles.wrapperControllersInput}
          type="text"
          placeholder="Enter your tag"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          data-testid="tags-button"
          className={styles.wrapperControllersButton}
          onClick={handleButtonClick}
        >
          Tag it!
        </button>
      </div>
      <div className={styles.wrapperTags} data-testid="tags-list">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Tag tag={tag} key={tag} onDeleteClick={handleTagDelete} />
          ))
        ) : (
          <p className={styles.wrapperTagsMessage} data-testid="tags-message">
            No tags yet.
          </p>
        )}
      </div>
    </section>
  );
};

InputTags.propTypes = {
  initialTags: PropTypes.arrayOf(PropTypes.string),
};
