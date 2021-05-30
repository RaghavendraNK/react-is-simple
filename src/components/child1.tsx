import React, { useContext, PureComponent } from "react";
import { TitleContext } from "./contextsample";

class Child5ClassBasedComponent extends PureComponent {
  render() {
    return (
      <TitleContext.Consumer>
        {(title) => <h1>{title}</h1>}
      </TitleContext.Consumer>
    );
  }
}

const Child5 = () => {
  const title: string = useContext(TitleContext);
  return <h1>{title}</h1>;
};

const Child4 = () => {
  return <Child5 />;
};

const Child3 = () => {
  return <Child4 />;
};

const Child2 = () => {
  return <Child3 />;
};

const Child1 = () => {
  return <Child2 />;
};

export default Child1;
