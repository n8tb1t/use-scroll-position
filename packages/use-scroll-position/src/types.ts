type _Combine<
  T,
  K extends PropertyKey = T extends unknown ? keyof T : never
> = T extends unknown ? T & Partial<Record<Exclude<K, keyof T>, never>> : never

export type Combine<T> = { [K in keyof _Combine<T>]: _Combine<T>[K] }

export interface ScrollPosition {
  x: number
  y: number
}
