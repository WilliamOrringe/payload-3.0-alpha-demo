import React from 'react'
import './globals.scss'
import Navbar from '@/components/Navbar'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body className="dark:bg-backgroundDark dark:text-textDark dark:accent-accentDark bg-backgroundLight text-textLight accent-accentLight">
        <Navbar />
        <main className="p-10">{children}</main>
      </body>
    </html>
  )
}

export default Layout
