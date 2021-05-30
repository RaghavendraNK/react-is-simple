import React, {
  createRef,
  Fragment,
  useRef,
  forwardRef,
  useEffect,
} from "react";

const RefsFunctionalSample = (): JSX.Element => {
  const inputElement: any = useRef(null);
  const handleButtonClick = () => {
    if (inputElement && inputElement.current) {
      inputElement.current.style.borderColor = "red";
    }
  };
  return (
    <Fragment>
      <input ref={inputElement} type="text" />
      <input
        type="button"
        onClick={() => handleButtonClick()}
        value="Highlight"
      />
    </Fragment>
  );
};

const RefsForwardSample = forwardRef((props: any, ref: any) => {
  useEffect(() => {
    ref.current.style.backgroundColor = "green";
  }, []);
  return <button ref={ref}>{props.children}</button>;
});

const RefsParent = () => {
  const ref = createRef();

  return (
    <>
      <RefsFunctionalSample />
      <RefsForwardSample ref={ref}>Click</RefsForwardSample>
    </>
  );
};

export default RefsParent;
