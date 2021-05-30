import React, { createContext, useState, lazy, Suspense } from "react";

export const TitleContext = createContext("");
TitleContext.displayName = "Example";

const Child1 = lazy(() => import("./child1"));

const ContextSample = () => {
  const [title, setTitle] = useState("Context Sample");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TitleContext.Provider value={title}>
        <Child1 />
      </TitleContext.Provider>
    </Suspense>
  );
};

export default ContextSample;
