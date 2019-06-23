# `use-scroll-position`

[![Node version](https://img.shields.io/npm/v/@n8tb1t/use-scroll-position.svg?style=flat)](https://www.npmjs.com/package/@n8tb1t/use-scroll-position)
[![Node version](https://img.shields.io/librariesio/github/n8tb1t/use-scroll-position.svg?style=flat)](https://libraries.io/npm/@n8tb1t%2Fuse-scroll-position)
[![Node version](https://img.shields.io/github/license/n8tb1t/use-scroll-position.svg?style=flat)](https://github.com/n8tb1t/use-scroll-position/blob/master/LICENSE)

## Install
```
yarn add @n8tb1t/use-scroll-position
```

## Usage

```jsx
import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const [hideOnScroll, setHideOnScroll] = useState(true)
  
useScrollPosition(({ prevPos, currPos }) => {
  const isShow = currPos.y > prevPos.y
  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
}, [hideOnScroll])
```