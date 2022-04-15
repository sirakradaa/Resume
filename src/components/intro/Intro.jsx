import "./intro.css"
import Display from "../../images/Display.jpg"
import { Link } from 'react-scroll'

const Intro = () => {


  return (
    <div className="i">
        <div className="i-left">
          <div className="i-jumpto-wrapper">
            <Link activeClass="active"
              className="i-jumpto"
              to="arrival"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
            <Link activeClass="active"
              className="i-jumpto"
              to="certifications"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Certifications
            </Link>
            <Link activeClass="active"
              className="i-jumpto"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact Me
            </Link>
          </div>
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hi, my name is</h2>
                <h2 className="i-name">Sirak Radaa</h2>
                <div className="i-title-item">I am looking for job opportunities in</div>
                <div className="i-title-item">Front-End Development</div>
                <div className="i-title-item">Back-End Development</div>
                <div className="i-title-item">Full-Stack Development</div>
                <h2><b>About Me:</b></h2>
                <p className="i-desc">
                I am a 4th year Computing Science student at the University of Alberta 
                graduating in April 2022, and I am excited to start a career in development. 
                I look forward to improving as a developer and a coder because it seems that 
                the learning never stops.
                </p>
                <h2><b>Skills:</b></h2>
                <p className="i-skills"><b>Languages:</b> Python, Javascript, HTML, CSS, Java, C#, SQL <br />
                <b>Frameworks:</b> React, Node, Express, NoSQL, Android SDK, Django, PyTest, Pandas, WordPress <br />
                <b>Tools:</b> Git, GitHub, Firebase, MongoDB, TravisCI, Bootstrap, Scrum, Slack, Figma</p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Display} alt="" className="i-img" />
        </div>
        
    </div>
  )
}

export default Intro