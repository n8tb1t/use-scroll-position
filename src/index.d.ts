import { DependencyList, EffectCallback, MutableRefObject } from "react";

interface ScrollProps {
  prevPos: {
    x: number;
    y: number;
  },
  currPos: {
    x: number;
    y: number;
  }
}

export declare function useScrollPosition(
  effect: (props: ScrollProps) => void,
  deps?: DependencyList,
  element?: MutableRefObject<HTMLElement | null>,
  useWindow?: boolean,
  wait?: number
): void;
