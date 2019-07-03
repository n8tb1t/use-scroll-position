import React, { useState, useRef, useMemo, Fragment } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import NavLinks from '../components/nav-links'
import FakeData from '../components/fake-data'

import { Navbar, Content, Footer } from '../styles'

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const rendersCount = useRef(0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  return useMemo(
    () => (
      <Fragment>
        <Navbar show={hideOnScroll}>
          <NavLinks />
        </Navbar>
        <Content mt="45">
          <FakeData />
        </Content>
        <Footer>
          <b>RENDER COUNT: {++rendersCount.current}</b>
        </Footer>
      </Fragment>
    ),
    [hideOnScroll]
  )
}
