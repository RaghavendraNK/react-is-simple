import React, { Profiler, useEffect, useState } from "react";
import { unstable_trace as trace } from "scheduler/tracing";
import PureSample from "./memoalternativs";
import { MemoSample, WithoutMemoSample } from "./memosample";
import { CallBackSample } from "./usecallbacksample";

type phase = "mount" | "update";
const ProfilerSample = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [params, setParams] = useState({
    param1: 1,
    param2: 1,
  });
  const getProfilerStats = (
    id: string,
    phase: phase,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: any
  ) => {
    const info = {
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    };

    console.info(info);
  };

  useEffect(() => {
    setIsSuccess((prevValue) => !prevValue);
  }, []);

  return (
    <>
      {/* <div>Profiler</div>
      {isSuccess && <div>Success</div>}
      {!isSuccess && <div>Failure</div>} */}
      {/* <input
        id="btn"
        type="button"
        onClick={() =>
          trace("Toggle button click", performance.now(), () => {
            setIsSuccess((prevsValue) => !prevsValue);
          })
        }
        value="Toggle"
      /> */}
      <Profiler id="withMemoprofile" onRender={getProfilerStats}>
        <MemoSample {...params} handleParams={(params) => setParams(params)} />
      </Profiler>
      <Profiler id="withoutMemoprofile" onRender={getProfilerStats}>
        <WithoutMemoSample
          {...params}
          handleParams={(params) => setParams(params)}
        />
      </Profiler>
      <Profiler id="withPureComponent" onRender={getProfilerStats}>
        <PureSample {...params} handleParams={(params) => setParams(params)} />
      </Profiler>
      <Profiler id="callBackSample" onRender={getProfilerStats}>
        <CallBackSample
          {...params}
          handleParams={(params) => setParams(params)}
        />
      </Profiler>
    </>
  );
};

export default ProfilerSample;
