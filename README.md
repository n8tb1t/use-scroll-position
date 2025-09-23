# use-scroll-position

[![NPM Version](https://img.shields.io/npm/v/@n8tb1t/use-scroll-position.svg?style=flat)](https://www.npmjs.com/package/@n8tb1t/use-scroll-position)
[![Downloads](https://img.shields.io/npm/dw/@n8tb1t/use-scroll-position)](https://www.npmjs.com/package/@n8tb1t/use-scroll-position)
[![License](https://img.shields.io/github/license/n8tb1t/use-scroll-position.svg?style=flat)](https://github.com/n8tb1t/use-scroll-position/blob/master/LICENSE)

![Screenshot](https://github.com/n8tb1t/use-scroll-position/raw/develop/packages/docs/screenshot.png)

`use-scroll-position` is a **lightweight, tree-shakable React hook library** for detecting and tracking scroll position — either of the **window** or a specific **element**. Designed for performance-sensitive use cases.

> ⚡️ Version **4.0.0** is a complete rewrite of the library.  
> For older versions, see the [legacy docs](https://github.com/n8tb1t/use-scroll-position/blob/develop/README-LEGACY.md).

---

## ⚡️ Quickstart

Track the global **window scroll position** in just a few lines:

```tsx
import { useWindowScrollPosition } from '@n8tb1t/use-scroll-position'

useWindowScrollPosition(({ currPos }) => {
  console.log('Current scroll position:', currPos.y)
})
```

---

## 📖 Documentation

👉 [Full Docs Site](https://n8tb1t.github.io/use-scroll-position)

- [useWindowScrollPosition](https://n8tb1t.github.io/use-scroll-position/use-window-scroll-position) – track global window scroll or specific element position.
- [useBodyScrollPosition](https://n8tb1t.github.io/use-scroll-position/use-body-scroll-position) – similar to window scroll, with a different detection method.
- [useOverflowScrollPosition](https://n8tb1t.github.io/use-scroll-position/use-overflow-scroll-position) – track scroll inside an overflow container (supports root + child target refs).

---

## ✨ Features

- ✅ React 19 support  
- ✅ SSR-ready  
- ✅ LLM-friendly docs  
- ✅ Native TypeScript  

---

## 📦 Installation

Using **NPM**:

```bash
npm install @n8tb1t/use-scroll-position
```

Using **PNPM**:

```bash
pnpm add @n8tb1t/use-scroll-position
```

---

## 🚀 Usage

### Track window scroll position

```tsx
useWindowScrollPosition(({ prevPos, currPos, top, bottom }) => {
  console.log(prevPos, currPos, top, bottom)
})
```

```tsx
useBodyScrollPosition(({ prevPos, currPos, top, bottom }) => {
  console.log(prevPos, currPos, top, bottom)
})
```

---

### Track element position in the viewport (window)

```tsx
const setElementRef = useWindowScrollPosition(({ prevPos, currPos, top, bottom }) => {
  console.log(prevPos, currPos, top, bottom)
})

return <div ref={setElementRef} />
```

```tsx
const setElementRef = useBodyScrollPosition(({ prevPos, currPos, top, bottom }) => {
  console.log(prevPos, currPos, top, bottom)
})

return <div ref={setElementRef} />
```

---

### Track scroll position in an overflow container

```tsx
const [setRootRef] = useOverflowScrollPosition(({ prevPos, currPos, top, bottom }) => {
  console.log(prevPos, currPos, top, bottom) // root container scroll
})

return (
  <div ref={setRootRef} style={{ height: '100px', width: '300px', overflow: 'auto' }} />
)
```

---

### Track element scroll position inside an overflow container

```tsx
const [setRootRef, setTargetRef] = useOverflowScrollPosition(({ prevPos, currPos, top, bottom }) => {
  console.log(prevPos, currPos, top, bottom) // target element scroll
})

return (
  <div ref={setRootRef} style={{ height: '100px', width: '300px', overflow: 'auto' }}>
    <div ref={setTargetRef} />
  </div>
)
```

---

## 💡 Use Cases

Here are some common ways developers use `use-scroll-position`:

- **Sticky Headers & Navbars** – hide, reveal, or shrink navigation bars depending on scroll direction.  
- **Infinite Scrolling** – detect when the user reaches the bottom of a container or the window to load more data.  
- **Scroll-Based Animations** – trigger animations or transitions as elements enter the viewport.  
- **Active Section Highlighting** – update navigation menus (scrollspy effect) as the user scrolls through sections.  
- **Custom Parallax Effects** – adjust element positions or backgrounds smoothly based on scroll position.  
- **Performance Monitoring** – track scroll behavior for analytics or user experience optimization.  

---

## 🤝 Contributing

See the [Contributing Rules](https://github.com/n8tb1t/use-scroll-position/blob/develop/CONTRIBUTING.md).

---
