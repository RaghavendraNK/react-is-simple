import React, { Fragment, useState } from "react";

const Parent = () => {
  const [name, setName] = useState("Name");
  return (
    <Fragment>
      <h1>{name}</h1>
      <Child
        name={name}
        handleNameChange={(name: string) => {
          setName(name);
        }}
      />
    </Fragment>
  );
};

const Child = ({
  name,
  handleNameChange,
}: {
  name: string;
  handleNameChange: (name: string) => void;
}) => {
  return (
    <input type="text" onChange={(e) => handleNameChange(e.target.value)} />
  );
};

export default Parent;
