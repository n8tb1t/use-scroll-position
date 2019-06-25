# `use-scroll-position`

[![Node version](https://img.shields.io/npm/v/@n8tb1t/use-scroll-position.svg?style=flat)](https://www.npmjs.com/package/@n8tb1t/use-scroll-position)
[![Node version](https://img.shields.io/librariesio/github/n8tb1t/use-scroll-position.svg?style=flat)](https://libraries.io/npm/@n8tb1t%2Fuse-scroll-position)
[![Node version](https://img.shields.io/github/license/n8tb1t/use-scroll-position.svg?style=flat)](https://github.com/n8tb1t/use-scroll-position/blob/master/LICENSE)


`use-scroll-position` is a React [hook](https://reactjs.org/docs/hooks-reference.html) that returns the browser viewport X and Y scroll position. It is highly optimized and using the special technics to avoid unnecessary rerenders!

> It uses the default react hooks rendering lifecycle, which allows you to fully control its behavior and prevent unnecessary renders.

## Demo

- [Hide navbar on scroll](https://n8tb1t.github.io/use-scroll-position/navbar/)

## Install
```
yarn add @n8tb1t/use-scroll-position
```

## Usage

```jsx
useScrollPosition(effect,deps)
```

| Arguments | Description |
| --------- | ----------- |
`effect`    | Effect callback.
`deps`      | For effects  to fire on selected dependencies change.

> The `useScrollPosition` returns `prevPos` and `currPos`.

## Examples

```jsx
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
  
useScrollPosition(({ prevPos, currPos }) => {
  console.log(currPos.x)
  console.log(currPos.y)
})
```

```jsx
import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const [hideOnScroll, setHideOnScroll] = useState(true)
  
useScrollPosition(({ prevPos, currPos }) => {
  const isShow = currPos.y > prevPos.y
  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
}, [hideOnScroll])
```

## Why to use
`use-scroll-position` returns the scroll position of the browser window, using a modern, stable and performant implementation.

Most of the time scroll listeners do very expensive work, such as querying dom elements, reading height / width and so on.
`use-scroll-position` solves this by using [`requestAnimationFrame`](https://stackoverflow.com/a/44779316) technic to avoid too many reflows (the browser to recalculate everything)