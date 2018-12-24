import React from 'react'
// import Link from 'gatsby-link'

// For all incoming images, "Copy Image Location" from respective repo

// <span className="image main"> creates it so the images are scaled accordingly (no need to photoshop)

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
            <img
              src="https://user-images.githubusercontent.com/10361542/45566631-22564e80-b80c-11e8-8d9e-5474309409d8.gif"
              alt="sirtet"
            />
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
            <img
              src="https://user-images.githubusercontent.com/10361542/50402901-2967f380-074f-11e9-979a-902279283def.gif"
              alt="timestone"
            />
          </span>
          <p>
            Creator, Front-end developer
            <br />
            <i>Built With: React.js, Node.js, Gatsby.js, Algolia</i>
          </p>

          {/* thisismybeet */}
          <h3>
            <a href="https://thisismybeet.netlify.com" target="_blank">
              This is my Beet
            </a>
          </h3>
          <span className="image main">
            <img
              src="https://user-images.githubusercontent.com/10361542/48317465-952f3c00-e5a7-11e8-8cd0-e4b56d6d7b25.gif"
              alt="thisismybeet"
            />
          </span>
          <p>
            Creator, Front-end developer
            <br />
            <i>Built With: Pure JavaScript, CSS, HTML</i>
          </p>

          {/* happyhalloween */}
          <h3>
            <a href="https://happyhalloween.netlify.com" target="_blank">
              Happy Halloween
            </a>
          </h3>
          <span className="image main">
            <img
              src="https://user-images.githubusercontent.com/10361542/48293180-b4f12380-e432-11e8-877d-300e55a6ec02.gif"
              alt="happyhalloween"
            />
          </span>
          <p>
            Creator, Front-end developer
            <br />
            <i>Built With: React.js, Node.js, Gatsby.js, CSS</i>
          </p>

          {/* weatherchecker */}
          <h3>
            <a href="https://weatherchecker.netlify.com" target="_blank">
              Weather Checker
            </a>
          </h3>
          <span className="image main">
            <img
              src="https://user-images.githubusercontent.com/10361542/50403547-45ba5f00-0754-11e9-97da-fcca05bcfaf5.gif"
              alt="weatherchecker"
            />
          </span>
          <p>
            Creator, Front-end developer
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
            <img
              src="https://user-images.githubusercontent.com/10361542/45251420-ac795100-b2fa-11e8-9b3e-a5daae6ae74b.GIF"
              alt="whoisthecutest"
            />
          </span>
          <p>
            Creator, Front-end developer
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
            <img
              src="https://user-images.githubusercontent.com/10361542/50403600-a6e23280-0754-11e9-98a0-fb95271e996d.jpg"
              alt="agl"
            />
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
            <img
              src="https://user-images.githubusercontent.com/10361542/50403604-aa75b980-0754-11e9-9524-03d245c62d60.jpg"
              alt="memebrulee"
            />
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
