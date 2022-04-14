import "./intro.css"
import Display from "../../images/Display.jpg"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
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
                <p className="i-skills">Languages: Python, Javascript, HTML, CSS, Java, C#, SQL <br />
                Frameworks: React, Node, Express, NoSQL, Android SDK, Django, PyTest, Pandas, WordPress <br />
                Tools: Git, GitHub, Firebase, MongoDB, TravisCI, Bootstrap, Scrum, Slack, Figma</p>
            </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Display} alt="" className="i-img" />
        </div>
        
    </div>
  )
}

export default Intro