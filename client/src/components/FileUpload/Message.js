import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/Registration/Error.css";

const Message = ({ msg }) => {
  return (
    <div className ={"container_error"}>
       <p className={"container_error-item"}>{msg}</p>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
