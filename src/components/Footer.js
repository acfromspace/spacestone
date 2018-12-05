import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    {/* classname "copyright" adjusts text */}
    <p className="copyright">Photo by NASA</p>
  </footer>
)

Footer.propTypes = {
  timeout: React.PropTypes.bool,
}

export default Footer
