import React, { useState, useRef, useMemo } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import NavLinks from '../components/nav-links'
import FakeData from '../components/fake-data'

import { Navbar, Content, Position, Wrapper, RedBox } from '../styles'

const round = value => Math.round(value)

export default () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [elementPosition, setElementPosition] = useState({ x: 20, y: 150 })
  const positionRef = useRef()
  const redBoxRef = useRef()

  // Viewport scroll position
  useScrollPosition(
    ({ currPos }) => {
      setPosition(currPos)
      const { style } = positionRef.current
      style.top = `${150 + currPos.y}px`
      style.left = `${10 + currPos.x}px`
    },
    [], false, true
  )

  // Element scroll position
  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos)
    },
    [], redBoxRef
  )

  return useMemo(
    () => (
      <Wrapper >
        <RedBox ref={redBoxRef}>RED BOX</RedBox>
        <Position ref={positionRef}>
          <b>
            <div>
              VIEWPORT SCROLL POSITION:<br/>
              X:{round(position.x)} Y:{round(position.y)}</div>
            <div>
              RED BOX SCROLL POSITION:<br/>
              X:{round(elementPosition.x)} Y:{round(elementPosition.y)}
            </div>
          </b>
        </Position>
        <Navbar show={true}>
          <NavLinks />
        </Navbar>
        <Content mt="45">
          <FakeData />
        </Content>
      </Wrapper>
    ),
    [position]
  )
}
