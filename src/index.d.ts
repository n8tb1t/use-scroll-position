import {DependencyList, EffectCallback, MutableRefObject} from "react";

interface ScrollProps {
  prevPos: {
    x: Number;
    y: Number;
  },
  currPos: {
    x: Number;
    y: Number;
  }
}

export declare function useScrollPosition(
  effect: (arg0: ScrollProps) => void,
  deps?: DependencyList,
  element?: MutableRefObject<HTMLElement | null>,
  useWindow?: boolean,
  wait?: number
): void;
