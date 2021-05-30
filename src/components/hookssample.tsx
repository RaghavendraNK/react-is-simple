import React, {
  Fragment,
  useDebugValue,
  useEffect,
  useReducer,
  useState,
} from "react";

const CustomHook = () => {
  const [isCustomHook, setIsCustomHook] = useState(true);
  useDebugValue(isCustomHook ? "Custom Hook" : "Not a custom hook");
  const updateCusomHook = () => {
    setIsCustomHook((prevVaue) => !prevVaue);
  };
  return { isCustomHook, updateCusomHook };
};

interface Props {
  type: string;
}

const findLazy = (props: Props) => props.type === "lazy";

const StateSample = (props: Props) => {
  const [booleanProp, setBooleanProp] = useState(false);
  const [objectProp, setObjectProp] =
    useState<{ id: number; title: string } | null>(null);
  const [arrayProps, setArrayProp] = useState<
    [{ id: number; title: string }] | []
  >([]);
  const [stringProp, setStringProp] = useState("");
  const [lazyInitial, setLazyInitial] = useState(() => {
    const isLazy = findLazy(props);
    return isLazy;
  });

  useEffect(() => {
    setBooleanProp(true);
    setObjectProp({ id: 1, title: "Title" });
    setArrayProp([{ id: 1, title: "Title" }]);
    setStringProp("Title");
    return () => {
      console.info("Will clean up here");
    };
  }, []);

  useEffect(() => {
    setLazyInitial(findLazy(props));
  }, [props]);

  return (
    <Fragment>
      <h1>useState & useEffect</h1>
      <div
        onClick={() => {
          setBooleanProp((prevVal) => !prevVal);
        }}
      >
        {booleanProp ? "Boolean True" : "Boolean False"}
      </div>
      <div
        onClick={() => {
          setObjectProp({
            id: Math.floor(Math.random() * 100),
            title: "some string",
          });
        }}
      >{`objectProp: ${JSON.stringify(objectProp)}`}</div>
      <div>{`arrayProps: ${JSON.stringify(arrayProps)}`}</div>
      <div>{`stringProp: ${stringProp}`}</div>
      <div>{lazyInitial && "Lazy"}</div>
    </Fragment>
  );
};

const ActionTypes = {
  SET_BOOLEAN: "SET_BOOLEAN",
  SET_OBJECT: "SET_OBJECT",
  SET_ARRAY: "SET_ARRAY",
  SET_STRING: "SET_STRING",
  SET_LAZY: "SET_LAZY",
  SET_ALL: "SET_ALL",
};

const ReducerSample = (props: Props) => {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      const { type } = action;
      switch (type) {
        case ActionTypes.SET_BOOLEAN:
          return { ...state, booleanProp: action.data };
        case ActionTypes.SET_OBJECT:
          return { ...state, objectProp: action.data };
        case ActionTypes.SET_ARRAY:
          return { ...state, arrayProps: action.data };
        case ActionTypes.SET_STRING:
          return { ...state, stringProp: action.data };
        case ActionTypes.SET_LAZY:
          return { ...state, lazyInitial: action.data };
        case ActionTypes.SET_ALL:
          return { ...state, ...action.data };
        default:
          return { ...state };
      }
    },
    {
      booleanProp: false,
      objectProp: null,
      arrayProps: [],
      stringProp: "",
      lazyInitial: false,
    }
  );
  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_ALL,
      data: {
        booleanProp: true,
        objectProp: { id: 1, title: "Title" },
        arrayProps: [{ id: 1, title: "Title" }],
        stringProp: "Title",
        lazyInitial: false,
      },
    });
    return () => {
      console.info("Will clean up here");
    };
  }, []);

  const { booleanProp, objectProp, arrayProps, stringProp, lazyInitial } =
    state;

  return (
    <Fragment>
      <h1>useReducer & useEffect</h1>
      <div
        onClick={() => {
          dispatch({ type: ActionTypes.SET_BOOLEAN, data: !booleanProp });
        }}
      >
        {booleanProp ? "Boolean True" : "Boolean False"}
      </div>
      <div
        onClick={() => {
          dispatch({
            type: ActionTypes.SET_OBJECT,
            data: {
              id: Math.floor(Math.random() * 100),
              title: "some string",
            },
          });
        }}
      >{`objectProp: ${JSON.stringify(objectProp)}`}</div>
      <div>{`arrayProps: ${JSON.stringify(arrayProps)}`}</div>
      <div>{`stringProp: ${stringProp}`}</div>
      <div>{lazyInitial && "Lazy"}</div>
    </Fragment>
  );
};

const HooksSample = () => {
  const { isCustomHook, updateCusomHook } = CustomHook();

  return (
    <Fragment>
      <h1 onClick={() => updateCusomHook()}>
        Toggle {isCustomHook ? "Custom" : "Default"}
      </h1>
      <StateSample type="lazy" />
      <ReducerSample type="lazy" />
    </Fragment>
  );
};

export default HooksSample;
