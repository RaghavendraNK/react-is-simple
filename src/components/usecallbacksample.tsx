import React, { Fragment, useCallback } from "react";
import { MemoChildA, MemoChildB } from "./memosample";

interface Props {
  param1: number;
  param2: number;
  handleParams: (params: { param1: number; param2: number }) => void;
}

export const CallBackSample = ({
  param1,
  param2,
  handleParams,
}: Props): JSX.Element => {
  const CallBackChildA = useCallback(
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
  const CallBackChildB = useCallback(
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
      {CallBackChildA}
      {CallBackChildB}
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
