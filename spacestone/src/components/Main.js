import React from 'react'
import Link from 'gatsby-link'

import agl from '../images/agl.jpg'
import sirtet from '../images/sirtet.jpg'
import memebrulee from '../images/memebrulee.jpg'

// Don't "prettier" this, it'll make it unreadable

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        {/* About section */}
        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <p>Greetings traveler, I'm AC De Leon.</p>
          <p>I'm a front-end developer, <a href="https://acfromspace.itch.io/" target="_blank">game developer</a>, and creative director for the <a href="https://aztecgamelab.com/" target="_blank">Aztec Game Lab</a>.
             I have recently graduated from San Diego State University with a B.S. in Computer Science.</p>
          <p>I create <a href="https://www.flickr.com/people/andrewthelion/" target="_blank">photography</a>, <a href="https://www.youtube.com/watch?v=hzmfGUfRsQo" target="_blank">videography</a>, <a href="https://soundcloud.com/acfromspace/im-not-yours-anymore" target="_blank">lo-fi</a>, and do powerlifting when I'm not otherwise coding.</p>
          <p>Forever learning because nobody really knows everything.</p>
          {/* Resume link to google drive */}
          <p>Here is my <a href="https://drive.google.com/open?id=1IEawrbAU3pTcfx9TfDjKcHwNunFom4in" target="_blank">resume</a>, let's connect.</p>
          {close}
        </article>

        {/* Projects section */}
        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Projects</h2>
          <p>I've worked on many types of projects both personal and professional.<br />
            Here are some projects I've developed/created.</p>

          <h3><a href="https://aztecgamelab.com" target="_blank">Aztec Game Lab</a></h3>
          <span className="image main"><img src={agl} alt="" /></span>
          <p>Front-end developer, <a href="https://acfromspace.itch.io" target="_blank">game developer</a>, designed <a href="https://www.youtube.com/watch?v=JqLlA0fZ1ck" target="_blank">aesthetics</a> for the <a href="https://go.sdsu.edu/student_affairs/atstate/gamelab.aspx" target="_blank">organization</a><br />
            <i>Built With: React.js, Node.js, Semantic UI</i></p>

          <h3><a href="https://acfromspace.itch.io/sirtet" target="_blank">Sirtet</a></h3>
          <span className="image main"><img src={sirtet} alt="" /></span>
          <p>Creator (heavily inspired by puzzle game Tetris and Undertale)<br />
            <i>Built With: Unity, Adobe Photoshop</i></p>

          <h3><a href="https://memebrulee.netlify.com/" target="_blank">Memebrulee</a></h3>
          <span className="image main"><img src={memebrulee} alt="" /></span>
          <p>Co-creator, created within 48 hours for <a href="https://www.youtube.com/watch?v=MJlubZQ1uTo" target="_blank">Reactathon</a> using sponsor APIs<br />
            <i>Built With: React.js, Node.js, Ant-Design UI, Netlify, Opentok</i></p>

          <p>For people who go to SDSU who need my <a href="https://quizlet.com/acfromspace" target="_blank">study sets.</a></p>
          {close}
        </article>

        {/* Contact section */}
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
            <li><a href="https://unsplash.com/@acfromspace" className="icon fa-camera-retro" target="_blank"></a></li>
            <li><a href="https://www.instagram.com/acfromspace/" className="icon fa-instagram" target="_blank"></a></li>
            <li><a href="https://soundcloud.com/acfromspace" className="icon fa-soundcloud" target="_blank"></a></li>
            <li><a href="https://open.spotify.com/user/1252712964" className="icon fa-spotify" target="_blank"></a></li>
            <li><a href="https://twitter.com/acfromspace" className="icon fa-twitter" target="_blank"></a></li>
            <li><a href="https://www.youtube.com/acfromspace" className="icon fa-youtube" target="_blank"></a></li>
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