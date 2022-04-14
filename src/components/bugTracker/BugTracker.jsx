import "./bugTracker.css";
import BUGTRACKER from './../../videos/BugTracker.mp4';
import GITHUB from './../../images/github.png';
import BUG from './../../images/bug.png';
import ReactPlayer from 'react-player';


const About = () => {    
  return (
    <div className="b">
        <div className="b-left">
            <div className="b-card">
                <img src={ BUG } alt="" className="b-BugTracker" />
                <h1 className="b-title">BugTracker</h1>
                <p><i>Node.js, React, React Testing Library, HTML, CSS</i></p>
                <p>A bug tracker that allows users to input bugs with a 
                    description and priority (Low, Medium, High). Bugs can 
                    also be resolved to remove them from the list. 
                    Developed using React, Node.js, HTML, CSS. Includes 
                    testing with React Testing Library.</p>
                <a href={"https://github.com/sirakradaa/BugTracker"} target="_blank" rel="noreferrer">
                    <img src={ GITHUB } alt="" className="github" />
                </a>
            </div>
        </div>
        <div className="b-right">
            <ReactPlayer
            className='bug-video'
            url= {BUGTRACKER}
            width='100%'
            height='100%'
            controls = {true}
            />
        </div>
    </div>
  );
};

export default About

