import React, { useState, useRef, useMemo, Fragment } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import NavLinks from '../components/nav-links'
import FakeData from '../components/fake-data'

import { Sidebar, Content, Footer } from '../styles'

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
        <Sidebar show={hideOnScroll}><NavLinks/></Sidebar>
        <Content><FakeData/></Content>
        <Footer>
          <b>RENDER COUNT: {++rendersCount.current}</b>
        </Footer>
      </Fragment>
    ),
    [hideOnScroll]
  )
}
