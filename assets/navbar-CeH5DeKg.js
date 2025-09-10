import { a as reactExports, o as jsxRuntimeExports, w as withComponentProps } from "./chunk-NL6KNZEE-Cz7MpE0V.js";
import { S, P as Panel, N as NavLinks, L as LoremIpsum } from "./nav-links-CiczGcQB.js";
const Navbar = () => {
  const rendersCount = reactExports.useRef(0);
  const visibleRef = reactExports.useRef(true);
  const [visible, setVisible] = reactExports.useState(true);
  S(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y >= prevPos.y;
      if (visibleRef.current !== isVisible) {
        visibleRef.current = isVisible;
        setVisible(isVisible);
      }
    },
    [setVisible],
    null,
    false,
    300
  );
  return reactExports.useMemo(
    () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { visible, placement: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, { variant: "orange" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoremIpsum, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { className: "items-center", placement: "bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 bg-orange-400 p-2 text-sm text-white", children: [
        "Renders count:",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800", children: ++rendersCount.current })
      ] }) })
    ] }),
    [visible]
  );
};
const navbar = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {});
const meta = () => [{
  title: "Navbar"
}, {
  name: "description",
  content: "Simple Navbar Example"
}];
const navbar$1 = withComponentProps(navbar);
export {
  navbar$1 as default,
  meta
};
