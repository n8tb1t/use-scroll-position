import type { PropsWithChildren } from 'react'
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router'

export const Layout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body className="bg-gray-900 text-gray-300">
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
)
