import React from 'react'
import Link from 'gatsby-link'

// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <p>Greetings traveler, I'm AC De Leon.</p>
          <p>I'm a front-end developer, <a href="https://acfromspace.itch.io/" target="_blank">game developer</a>, and creative director for the <a href="https://aztecgamelab.com/" target="_blank">Aztec Game Lab</a>.
             I have recently graduated from San Diego State University with a B.S. in Computer Science.</p>
          <p>I do photography and powerlifting when I'm not otherwise coding.</p>
          <p>Forever learning because nobody really knows everything.</p>
          {/* <p>Please <a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>contact me</a> if you'd like to work together.</p> */}
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Projects</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <p>Thanos snapped this to non-existence, currently re-creating...</p>
          {/* <h3>Aztecgamelab.com</h3>
          <p>Built with: React.js</p> */}
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <p>Feel free to contact me below, I would love to communicate.</p>
            <p><a href="mailto:aadeleon@sdsu.edu">aadeleon@sdsu.edu</a></p>
            {/* href requires your link, className is the icon being used */}
            {/* Figure out what exactly is <span className="label">Twitter</span> */}
            {/* Answer: It's used mainly to tag inline elements, primarily for readability for the developer (but why not just use comments?) */}
            <li><a href="https://github.com/acfromspace" className="icon fa-github" target="_blank"></a></li>
            <li><a href="https://www.linkedin.com/in/ac-de-leon-81782980/" className="icon fa-linkedin" target="_blank"></a></li>
            <li><a href="https://www.flickr.com/people/andrewthelion/" className="icon fa-flickr" target="_blank" ></a></li>
            <li><a href="https://acfromspace.itch.io/" className="icon fa-gamepad" target="_blank"></a></li>
            <li><a href="https://www.instagram.com/acfromspace/" className="icon fa-instagram" target="_blank"></a></li>
            <li><a href="https://soundcloud.com/acfromspace" className="icon fa-soundcloud" target="_blank"></a></li>
            <li><a href="https://open.spotify.com/user/1252712964" className="icon fa-spotify" target="_blank"></a></li>
            <li><a href="https://twitter.com/acfromspace" className="icon fa-twitter" target="_blank"></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main