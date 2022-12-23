import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}
        <footer style={{ textAlign: 'center' }}><Link href="https://github.com/JackHowa">Made by jackhowa <Image width={25} height={25} alt="" src="https://avatars.githubusercontent.com/u/5950956?v=4" /></Link></footer>
      </body>
    </html>
  )
}
