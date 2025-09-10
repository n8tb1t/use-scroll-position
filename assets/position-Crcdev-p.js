import { a as reactExports, o as jsxRuntimeExports, w as withComponentProps } from "./chunk-NL6KNZEE-Cz7MpE0V.js";
import { S, P as Panel, N as NavLinks, L as LoremIpsum } from "./nav-links-CiczGcQB.js";
const useElementPosition = () => {
  const [renderCount, triggerReRender] = reactExports.useState(0);
  const throttleTimeout = reactExports.useRef(null);
  const elementPosition = reactExports.useRef({ x: 0, y: 0 });
  const viewportPosition = reactExports.useRef({ x: 0, y: 0 });
  const setElementPosition = reactExports.useCallback(
    (element) => (position2) => {
      element.current = position2;
      if (throttleTimeout.current !== null) return;
      throttleTimeout.current = setTimeout(() => {
        throttleTimeout.current = null;
        triggerReRender((renderCount2) => renderCount2 + 1);
      }, 300);
    },
    []
  );
  return reactExports.useMemo(
    () => ({
      elementPosition: elementPosition.current,
      viewportPosition: viewportPosition.current,
      setElementPosition: setElementPosition(elementPosition),
      setViewportPosition: setElementPosition(viewportPosition),
      renderCount
    }),
    [renderCount, setElementPosition]
  );
};
const Position = () => {
  const positionsStore = useElementPosition();
  const viewportRef = reactExports.useRef(null);
  const redBoxRef = reactExports.useRef(null);
  S(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos);
      const viewPort = viewportRef.current;
      if (viewPort) {
        viewPort.style.top = `${150 + currPos.y}px`;
      }
    },
    [],
    null,
    true
  );
  S(
    ({ currPos }) => positionsStore.setElementPosition(currPos),
    [],
    redBoxRef,
    false,
    0
  );
  return reactExports.useMemo(
    () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: redBoxRef,
          className: "absolute top-[400px] left-12 rounded-sm bg-red-400 p-4 text-red-950 ring-3 ring-red-600",
          children: "Red Box"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: viewportRef,
          className: "absolute top-[150px] left-12 grid gap-2 rounded-sm bg-gray-400 p-3 text-lg text-sm text-gray-950 ring-3 ring-gray-600",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium tracking-tight text-blue-950", children: "Deferred Renders:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: positionsStore.renderCount })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium tracking-tight text-blue-950", children: "Viewport Scroll:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "x: ",
                  positionsStore.viewportPosition.x
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "y: ",
                  positionsStore.viewportPosition.y
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium tracking-tight text-blue-950", children: "Red Box Scroll:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  " x: ",
                  positionsStore.elementPosition.x
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "y: ",
                  positionsStore.elementPosition.y
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { placement: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, { variant: "orange" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoremIpsum, {})
    ] }),
    [positionsStore]
  );
};
const position = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Position, {});
const meta = () => [{
  title: "Position"
}, {
  name: "description",
  content: "Track scroll position"
}];
const position$1 = withComponentProps(position);
export {
  position$1 as default,
  meta
};
