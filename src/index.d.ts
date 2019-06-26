import {DependencyList, EffectCallback, MutableRefObject} from "react";
import {element} from "prop-types";

export declare function useScrollPosition(
  effect: EffectCallback,
  deps?: DependencyList,
  element?: MutableRefObject<any>,
  useWindow?: boolean
);
