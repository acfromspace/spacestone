import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-moon-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                {/* Main title everyone sees */}
                <h1>AC De Leon</h1>
                <p>Software engineer and photographer.</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* Listing of all sub-menus */}
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('projects') }}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
