import { memo } from 'react'

import { cn } from './utils'

export const LoremIpsum = memo(
  ({ className, length = 20 }: { className?: string; length?: number }) => {
    const ipsum = Array.from(
      { length },
      () =>
        ' The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'
    )

    return (
      <div className={cn(className, 'grid gap-4 p-14 text-sm')}>
        {ipsum.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    )
  }
)
