import React from "react";
import PropTypes from 'prop-types';

export const Hello = ({ word }) => {
  return <h1 data-testid="title-test">Hello, {word || "World"}!</h1>;
};

Hello.propTypes = {
  word: PropTypes.string,
};
