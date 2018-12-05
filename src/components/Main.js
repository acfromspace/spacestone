import React from 'react'
import Link from 'gatsby-link'

import agl from '../images/agl.jpg'
import sirtet from '../images/sirtet.gif'
import memebrulee from '../images/memebrulee.jpg'
import timestone from '../images/timestone.gif'
import weatherchecker from '../images/weatherchecker.gif'
import whoisthecutest from '../images/whoisthecutest.gif'

// <span className="image main"> creates it so the images are scaled accordingly (no need to photoshop)

// Don't "prettier" this, it'll make it unreadable
// Too late

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* ABOUT SECTION */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>Greetings traveler, I'm AC De Leon.</p>
          <p>
            I'm a{' '}
            <a href="https://github.com/acfromspace" target="_blank">
              front-end developer
            </a>{' '}
            (React/Node) and{' '}
            <a href="https://acfromspace.itch.io/" target="_blank">
              game developer
            </a>{' '}
            (Unity/Unreal). I've recently graduated from San Diego State
            University with a B.S. in Computer Science. Currently I do freelance
            software development, work with colleagues on our{' '}
            <a
              href="https://github.com/AztecGameLab/AztecGameLaboratory"
              target="_blank"
            >
              super cool React project
            </a>{' '}
            , and manage a{' '}
            <a href="https://timestone.netlify.com" target="_blank">
              blog
            </a>{' '}
            filled with software development and personal development in order
            to document my learnings.
          </p>
          <p>
            I create{' '}
            <a
              href="https://www.flickr.com/people/andrewthelion/"
              target="_blank"
            >
              photography
            </a>
            ,{' '}
            <a href="https://youtube.com/watch?v=hzmfGUfRsQo" target="_blank">
              videography
            </a>
            ,{' '}
            <a
              href="https://www.youtube.com/watch?v=d2rHqW4g_iM"
              target="_blank"
            >
              lo-fi
            </a>
            , and do{' '}
            <a href="https://tinyurl.com/standardworkout" target="_blank">
              powerlifting
            </a>{' '}
            in my free time.
          </p>
          <p>
            Forever learning because nobody really knows everything.
            <br />
            <br />
            Here is my{' '}
            <a
              href="https://resume.creddle.io/resume/ayjgtizt9n7"
              target="_blank"
            >
              resume
            </a>
            , let's connect!
          </p>
          {close}
        </article>

        {/* PROJECTS SECTION */}
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <p>
            I've worked on many types of projects both personal and
            professional.
            <br />
            Here are some projects I've developed/created.
          </p>

          {/* sirtet */}
          <h3>
            <a href="https://acfromspace.itch.io/sirtet" target="_blank">
              Sirtet
            </a>
          </h3>
          <span className="image main">
            <img src={sirtet} alt="" />
          </span>
          <p>
            Creator (heavily inspired by puzzle game Tetris and Undertale)
            <br />
            <i>Built With: Unity, Adobe Photoshop</i>
          </p>

          {/* timestone */}
          <h3>
            <a href="https://timestone.netlify.com" target="_blank">
              Development Blog
            </a>
          </h3>
          <span className="image main">
            <img src={timestone} alt="" />
          </span>
          <p>
            Creator, Front-end developer.
            <br />
            <i>Built With: React.js, Node.js, Gatsby.js, Algolia</i>
          </p>

          {/* weatherchecker */}
          <h3>
            <a href="https://weatherchecker.netlify.com" target="_blank">
              Weather Checker
            </a>
          </h3>
          <span className="image main">
            <img src={weatherchecker} alt="" />
          </span>
          <p>
            Creator, Front-end developer.
            <br />
            <i>Built With: React.js, Node.js, Bootstrap</i>
          </p>

          {/* whoisthecutest */}
          <h3>
            <a href="https://whoisthecutest.netlify.com" target="_blank">
              Who is the cutest?
            </a>
          </h3>
          <span className="image main">
            <img src={whoisthecutest} alt="" />
          </span>
          <p>
            Creator, Front-end developer.
            <br />
            <i>Built With: React.js, Node.js, Gatsby.js, Semantic UI</i>
          </p>

          {/* aztecgamelab */}
          <h3>
            <a href="https://aztecgamelab.com" target="_blank">
              Aztec Game Lab
            </a>
          </h3>
          <span className="image main">
            <img src={agl} alt="" />
          </span>
          <p>
            Front-end developer,{' '}
            <a href="https://acfromspace.itch.io" target="_blank">
              game developer
            </a>
            , designed{' '}
            <a href="https://youtube.com/watch?v=JqLlA0fZ1ck" target="_blank">
              aesthetics
            </a>{' '}
            for the{' '}
            <a
              href="https://go.sdsu.edu/student_affairs/atstate/gamelab.aspx"
              target="_blank"
            >
              organization
            </a>
            <br />
            <i>Built With: React.js, Node.js, Semantic UI</i>
          </p>

          {/* memebrulee */}
          <h3>
            <a href="https://memebrulee.netlify.com/" target="_blank">
              Memebrulee
            </a>
          </h3>
          <span className="image main">
            <img src={memebrulee} alt="" />
          </span>
          <p>
            Co-creator, created within 48 hours for{' '}
            <a href="https://youtube.com/watch?v=MJlubZQ1uTo" target="_blank">
              Reactathon
            </a>{' '}
            using sponsor APIs
            <br />
            <i>
              Built With: React.js, Node.js, Ant-Design UI, Netlify, Opentok
            </i>
          </p>

          <p>
            For people who go to SDSU who need my{' '}
            <a href="https://quizlet.com/acfromspace" target="_blank">
              study sets.
            </a>
          </p>
          {close}
        </article>

        {/* CONTACT SECTION */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <p>Feel free to contact me below, I would love to communicate.</p>
            <p>
              <a href="mailto:aadeleon@sdsu.edu">aadeleon@sdsu.edu</a>
            </p>
            {/* href requires your link, className is the icon being used */}
            {/* Figure out what exactly is <span className="label">Twitter</span> */}
            {/* Answer: It's used mainly to tag inline elements, primarily for readability for the developer (but why not just use comments?) */}
            <li>
              <a
                href="https://github.com/acfromspace"
                className="icon fa-github"
                target="_blank"
              />
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ac-de-leon-81782980/"
                className="icon fa-linkedin"
                target="_blank"
              />
            </li>
            <li>
              <a
                href="https://www.flickr.com/people/andrewthelion/"
                className="icon fa-flickr"
                target="_blank"
              />
            </li>
            <li>
              <a
                href="https://acfromspace.itch.io/"
                className="icon fa-gamepad"
                target="_blank"
              />
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/1252712964"
                className="icon fa-spotify"
                target="_blank"
              />
            </li>
            <li>
              <a
                href="https://twitter.com/acfromspace"
                className="icon fa-twitter"
                target="_blank"
              />
            </li>
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
  timeout: React.PropTypes.bool,
}

export default Main
