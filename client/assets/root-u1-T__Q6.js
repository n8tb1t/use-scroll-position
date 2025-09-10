import { o as jsxRuntimeExports, p as isRouteErrorResponse, M as Meta, L as Links, S as ScrollRestoration, q as Scripts, w as withComponentProps, O as Outlet } from "./chunk-NL6KNZEE-Cz7MpE0V.js";
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
const HydrateFallback = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." });
const ErrorBoundary = ({ error }) => {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto p-4 pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: details }),
    stack
  ] });
};
const Layout = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { charSet: "utf-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Links, {})
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "bg-gray-900 text-gray-300", children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
  ] })
] });
const root = withComponentProps(Outlet);
export {
  ErrorBoundary,
  HydrateFallback,
  Layout,
  root as default,
  links
};
