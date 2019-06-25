import React, { useState, useRef, useMemo, Fragment } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { lorem } from 'faker'

import { Navbar, Content, Footer } from '../styles'

const navLinks = Array.from({ length: 5 }, (x, i) => (
  <a key={i} href="/">
    Link {i}
  </a>
))

const paragraphs = Array.from({ length: 20 }, (x, i) => (
  <p key={i}>{lorem.paragraph(30)}</p>
))

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const rendersCount = useRef(0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

  return useMemo(
    () => (
      <Fragment>
        <Navbar show={hideOnScroll}>{navLinks}</Navbar>
        <Content>{paragraphs}</Content>
        <Footer>
          <b>RENDER COUNT: {++rendersCount.current}</b>
        </Footer>
      </Fragment>
    ),
    [hideOnScroll]
  )
}
