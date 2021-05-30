import React, { Fragment, useMemo } from "react";

export const MemoChildA = ({
  param,
  updateParam,
}: {
  param: number;
  updateParam: (value: number) => void;
}) => {
  const handleChange = (e: any) => {
    const { target } = e;
    updateParam(parseInt(target.value) + 1);
  };
  return (
    <input
      id="textA"
      type="text"
      value={param}
      onChange={(e) => handleChange(e)}
    />
  );
};

export const MemoChildB = ({
  param,
  updateParam,
}: {
  param: number;
  updateParam: (value: number) => void;
}) => {
  const handleChange = (e: any) => {
    const { target } = e;
    updateParam(parseInt(target.value) + 1);
  };
  return (
    <input
      id="textB"
      type="text"
      value={param}
      onChange={(e) => handleChange(e)}
    />
  );
};

interface Props {
  param1: number;
  param2: number;
  handleParams: (params: { param1: number; param2: number }) => void;
}

export const MemoSample = ({
  param1,
  param2,
  handleParams,
}: Props): JSX.Element => {
  const MemoizedChildA = useMemo(
    () => (
      <MemoChildA
        param={param1}
        updateParam={(paramValue) =>
          handleParams({ param1: paramValue, param2 })
        }
      />
    ),
    [param1]
  );
  const MemoizedChildB = useMemo(
    () => (
      <MemoChildB
        param={param2}
        updateParam={(paramValue) =>
          handleParams({ param2: paramValue, param1 })
        }
      />
    ),
    [param2]
  );

  return (
    <Fragment>
      {MemoizedChildA}
      {MemoizedChildB}
      <input
        type="button"
        value="Randomize Params"
        onClick={() => handleParams({ param1: param1 + 1, param2: param2 + 2 })}
      />
    </Fragment>
  );
};

export const WithoutMemoSample = ({
  param1,
  param2,
  handleParams,
}: Props): JSX.Element => {
  return (
    <Fragment>
      <input
        type="button"
        value="Randomize Params"
        onClick={() => handleParams({ param1: param2, param2: param1 })}
      />
      <MemoChildA
        param={param1}
        updateParam={(paramValue) =>
          handleParams({ param1: paramValue, param2 })
        }
      />
      <MemoChildB
        param={param2}
        updateParam={(paramValue) =>
          handleParams({ param2: paramValue, param1 })
        }
      />
    </Fragment>
  );
};
