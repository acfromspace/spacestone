import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        {/* Anything goes here */}
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
