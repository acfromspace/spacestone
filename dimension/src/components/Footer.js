import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        {/* Put icons here */}
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
