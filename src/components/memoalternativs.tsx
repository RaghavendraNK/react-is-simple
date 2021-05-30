import React, { Fragment, PureComponent } from "react";
import { MemoChildA, MemoChildB } from "./memosample";

interface Props {
  param1: number;
  param2: number;
  handleParams: (params: { param1: number; param2: number }) => void;
}

interface State {}

class PureSample extends PureComponent<Props, State> {
  render() {
    const { param1, param2, handleParams } = this.props;
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
  }
}

export default PureSample;
