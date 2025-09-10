import { memo } from 'react'

import { cn } from './utils'

const ipsum = Array.from(
  { length: 20 },
  () =>
    ' The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'
)

export const LoremIpsum = memo(({ className }: { className?: string }) => (
  <div className={cn(className, 'grid gap-4 p-14 text-sm')}>
    {ipsum.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
))
