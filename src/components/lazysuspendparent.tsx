import React, { Suspense, lazy } from "react";
const LazyChild = lazy(() => import("./lazysuspendchild"));
const Loader = lazy(() => import("./loader"));

const LazyParent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LazyChild />
    </Suspense>
  );
};

export default LazyParent;
