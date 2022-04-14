import "./contact.css";


const Contact = () => {
  return (
    <div className="c">
        <div className="c-wrapper">
        <p className="c-desc">
            If you would like to get in contact then feel free to send an email!
        </p>
        <a href="mailto:radaa.sirak@gmail.com?subject=feedback" target="_blank" rel="noreferrer">
            <button>Reach Out!</button>
        </a>
        </div>
        
    </div>
  )
}

export default Contact