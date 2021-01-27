import React from "react"

import SvgLogo from "./svg/Logo"
import SvgCart from "./svg/Cart"

function Header () {
    return (
        <header className="header_container">
            <div className="header">
                <a className="header_link" href="https://www.lettre-resiliation.com/">
                    <SvgLogo/>
                </a>
                <a className="header_link" href="https://www.lettre-resiliation.com/lettre-de-resiliation.html">
                    <SvgCart className="header_img header_img--cart"/>
                </a>
            </div>
        </header>
    )
}

export default Header