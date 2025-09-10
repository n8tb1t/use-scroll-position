import type { RefObject } from 'react'

export type Ref<El extends Element = HTMLDivElement> =
  RefObject<El | null> | null

export interface ScrollPosition {
  x: number
  y: number
}
