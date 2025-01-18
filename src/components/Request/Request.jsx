import React from "react";
import styles from "./Request.module.styl";
import { useFetch } from "../../hooks/useFetch/useFetch";
import PropTypes from "prop-types";

export const Request = ({ requestId = 1 }) => {
  const { data, isLoading, isError } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${requestId}`
  );

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <>
      <div className={styles.request}>Request</div>
      {data && (
        <div>
          <p role="name">Name: {data.name}</p>
          <p role="email">Email: {data.email}</p>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

Request.propTypes = {
  requestId: PropTypes.number,
};
