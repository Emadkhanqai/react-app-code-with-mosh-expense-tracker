import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  const [showAlert, setAlertShow] = useState(true);
  return (
    <>
      <div
        className={`alert alert-warning alert-dismissible fade`}
        role="alert"
      >
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => setAlertShow(false)}
        ></button>
      </div>
    </>
  );
};

export default Alert;
