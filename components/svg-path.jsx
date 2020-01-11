import React from "react";
import { Div, divSet } from "ui";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const followPath = keyframes`
   from {
     offset-distance: 0%;
   }
   to {
     offset-distance: 100%;
}`

const Follower = styled(Div)({

    animation:`${followPath} 400s linear infinite`
}, ({offsetPath})=>({
    offsetPath
}),divSet)

export const SvgLine = () => {
  const refs = useListRefs();

  let counter = 0;
  const width = refs[0] && refs[0].current.offsetWidth + 110;
  const offsets = refs.map(r => {
    const ret = r.current.offsetTop - counter;
    counter = r.current.offsetTop;
    return ret;
  });
  if (offsets.length === 0) {
    return null;
  }

  var height = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const path = [
    "m 1 1 l 0 55",
    ...offsets.map((offset, i) =>
      [
        `l 0 ${offset - 20}`,
        `q ${i % 2 === 0 ? "0 10 10 10" : "0 10 -10 10"}`,
        `l ${i % 2 === 0 ? "" : "-"}${width - 22} 0`,
        `q ${i % 2 === 0 ? "10 0 10 10" : "-10 0 -10 10"}`
      ].join(" ")
    ),
    `l 0 ${height - counter}`
  ].join(" ");

  return (
    <Div pos="relative">
      <Div pos="absolute" marginTop="-15px" pointerEvents="none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${width} ${height}`}
          height={`${height}px`}
          width={`${width}px`}
          stroke="gray"
          fill="none"
          strokeDasharray={25000}
        >
          <path d={path} />
        </svg>
      </Div>
      <Follower
        pos="absolute" mt="-15px" bg="black" s={4} offsetPath={`path('${path}')`}
        />
    </Div>
  );
};

const RefContext = React.createContext();

export const RefProvider = props => {
  const [refs, setRefs] = React.useState([]);

  return (
    <RefContext.Provider
      {...props}
      value={{ refs, addRef: ref => setRefs(refs => [...refs, ref]) }}
    />
  );
};

export const H1ref = props => {
  const addRef = useAddRef();
  const ref = React.useRef();

  React.useEffect(() => {
    addRef(ref);
  }, []);

  return <h1 ref={ref} {...props} />;
};

export const useAddRef = () => React.useContext(RefContext).addRef;

export const useListRefs = () => React.useContext(RefContext).refs;
