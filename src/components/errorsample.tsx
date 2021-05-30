import React, { useState } from "react";

const ErrorSample = () => {
  const [isOnline, setIsOnline] = useState(true);

  if (!isOnline) {
    throw new Error("Offline!");
  }
  return (
    <div
      onClick={() => {
        setIsOnline((prevState) => !prevState);
      }}
    >
      Click me to trigger error
    </div>
  );
};

export default ErrorSample;
