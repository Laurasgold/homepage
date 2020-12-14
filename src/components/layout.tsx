import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/vars.css"
import "../styles/reset.css"
import "../styles/global.css"
import "../styles/classes.css"

const Layout = ({ children, location }) => {
  const isQrMenu = location.pathname.startsWith("/qr")
  return (
    <>
      {!isQrMenu && <Header />}
      <main>{children}</main>
      {!isQrMenu && <Footer />}
    </>
  )
}

export default Layout
