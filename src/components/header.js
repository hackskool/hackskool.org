import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.svg"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"HackSkool"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                <div className={"right-nav"}>
                <a href={"/blog"}>blog</a>
                    <a href={"/about"}>About Us</a>
                </div>
                
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
