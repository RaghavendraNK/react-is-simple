import React from "react";
import HOCSample from "./hocsample";

const ListItem = ({ title }: { title: string }) => {
  return <h6>{title}</h6>;
};

const ListItems = ({ data }: { data?: string[] }): any => {
  return (
    <>
      {data &&
        data.map((dataItem) => (
          <ListItem title={dataItem} key={`data-${dataItem}`} />
        ))}
    </>
  );
};

const HOCExample = () => {
  const doms = [
    {
      title: "photos",
      component: HOCSample(ListItems, "photos"),
    },
    { title: "todos", component: HOCSample(ListItems, "todos") },
    {
      title: "posts",
      component: HOCSample(ListItems, "posts"),
    },
  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        {doms.map((dom) => (
          <div>
            <h2 style={{ textTransform: "capitalize" }}>{dom.title}</h2>
            <dom.component />
          </div>
        ))}
      </div>
    </>
  );
};

export default HOCExample;
