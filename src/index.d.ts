import {DependencyList, EffectCallback, MutableRefObject} from "react";


export declare function useScrollPosition(
  effect: EffectCallback | Object,
  deps?: DependencyList,
  element?: MutableRefObject<HTMLElement | null>,
  useWindow?: boolean,
  wait?: number
): void;
