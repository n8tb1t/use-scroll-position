import {DependencyList, EffectCallback, MutableRefObject} from "react";


export declare function useScrollPosition(
  effect: EffectCallback,
  deps?: DependencyList,
  element?: MutableRefObject<HTMLElement | null>,
  useWindow?: boolean,
  wait?: number
);
