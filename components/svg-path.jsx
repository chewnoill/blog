import React from "react";
import { Div, divSet } from "ui";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import {findIndex, sum} from 'ramda';


const followPath = keyframes`
   from {
     offset-distance: 0%;
   }
   to {
     offset-distance: 100%;
}`;

const Follower = styled(Div)(
  {
    transition: "offset-distance 1.5s linear"
  },
    ({ offsetPath, offsetDistance }) => ({
        offsetPath,
        offsetDistance
  }),
  divSet
);

export const SvgLine = () => {
  const refs = useListRefs();
    const [offsetDistance, setOffsetDistance] = React.useState(0);

  let counter = 0;
  const width = refs[0] && refs[0].current.offsetWidth + 110;
  const offsets = refs.map(r => {
    const ret = r.current.offsetTop - counter;
    counter = r.current.offsetTop;
    return ret;
  });

  const options = {
    rootMargin: "0px",
    threshold: 0
  };
  React.useEffect(() => {
    const observer = new IntersectionObserver((intersections, obs) => {
        console.log({ intersections, obs });
        const visible = intersections.filter(intersection => intersection.isIntersecting)[0]
        if(visible){
            //find ref
            const indexOf = findIndex(ref => ref.current === visible.target, refs);

            const counters = [1,55,...offsets.slice(0,indexOf+1), width*(indexOf+1), width/-2];
            const distance = sum(counters);
            setOffsetDistance(distance);
            console.log({counters},`found ${distance}`)
        }
    }, options);
    refs.forEach(ref => observer.observe(ref.current));
  }, [refs]);

    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        var height = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        setHeight(height);
    }, []);


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
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${width || 0} ${height}`}
          height={`${height}px`}
          width={`${width}px`}
          stroke="gray"
          fill="none"
          transition="stroke-dashoffset 1.5s linear"
          strokeDashoffset={27500-offsetDistance}
          strokeDasharray={27500}
        >
          <path d={path} />
        </svg>
      </Div>
      <Follower
        pos="absolute"
        mt="-15px"
        bg="black"
        s={4}
        offsetPath={`path('${path}')`}
        offsetDistance={`${offsetDistance}px`}
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
