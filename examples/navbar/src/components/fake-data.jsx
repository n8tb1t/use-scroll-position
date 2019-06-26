import React from 'react'
import { Chance } from 'chance'

const fakeData = Array.from({ length: 20 }, (x, i) => (
  <p key={i}>{Chance().paragraph({ sentences: 10 })}</p>
))

export default () => fakeData
