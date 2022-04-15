import "./arrival.css";
import ARRIVAL from './../../images/arrival';
import GITHUB from './../../images/github.png'


const About = () => {    
  return (
    <div className="a" id="arrival">
        <div className="a-left">
            <div className="a-card">
                <img src={ ARRIVAL.Arrival } alt="" className="a-Arrival" />
                <h1 className="a-title">Arrival</h1>
                <p><i>Java, Android SDK, FirebaseAuth, Firebase Firestore, 
                    Firebase Storage, TravisCI</i></p>
                <p>Arrival is an Edmonton-based ride sharing platform for Android. 
                Users can sign up as a Rider, or Driver, depending on their needs. 
                Riders are able to request rides between two locations within 
                Edmonton city limits, while Drivers can view Rider's open 
                requests in their area, and are able to accept the requests 
                they wish to complete. More information about the app's 
                features and development can be found on the project's Wiki.
                </p>
                <a className="a-external" href={"https://github.com/CMPUT301W20T07/arrival/wiki"} target="_blank" rel="noreferrer">
                    <img src={ GITHUB } alt="" className="a-github" />
                </a>
            </div>
        </div>
        <div className="a-right">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
                <li data-target="#myCarousel" data-slide-to="7"></li>
                <li data-target="#myCarousel" data-slide-to="8"></li>
            </ol>
            <div className="carousel-inner">
                <div className="item active">
                <img src={ ARRIVAL.Arrival1 } alt="" className="a-arrival1-9" />
                <div className="carousel-caption">
                <h4 className="carousel-header">Edit Account</h4>
                <p>Make changes to a users email and password.</p>
                </div>
                </div>

                <div className="item">
                <img src={ ARRIVAL.Arrival2 } alt="" className="a-arrival1-9" />
                <div className="carousel-caption">
                <h4 className="carousel-header">Forgot Password</h4>
                <p>User can enter their email if they forgot their 
                    password where they will be sent a link to change their password.</p>
                </div>
                </div>

                <div className="item">
                <img src={ ARRIVAL.Arrival3 } alt="" className="a-arrival1-9" />
                <div className="carousel-caption">
                <h4 className="carousel-header">Notifications</h4>
                <p>The rider gets notified when 
                a driver accepts their request.</p>
                </div>
                </div>

                <div className="item">
                <img src={ ARRIVAL.Arrival4 } alt="" className="a-arrival1-9" />
                <div className="carousel-caption">
                <h4 className="carousel-header">Geolocation</h4>
                <p>Identifies user's current location.</p>
                </div>
                </div>

                <div className="item">
                <img src={ ARRIVAL.Arrival5 } alt="" className="a-arrival1-9" />
                <div className="carousel-caption">
                <h4 className="carousel-header">Offline</h4>
                <p>Users can see the current request while offline.</p>
                </div>
                </div>

                <div className="item">
                <img src={ ARRIVAL.Arrival6 } alt="" className="a-arrival1-9"/>
                <div className="carousel-caption">
                <h4 className="carousel-header">Cancel Ride</h4>
                <p>Riders can cancel a request 
                before they are picked up.</p>
                </div>
                </div>

                <div className="item">
                <img src={ ARRIVAL.Arrival7 } alt="" className="a-arrival1-9" />
                <div className="carousel-caption">
                <h4 className="carousel-header">In-App Payment</h4>
                <p>Riders can pay with QR bucks by 
                having the driver scan the QR code.</p>
                </div>
                </div>

                <div className="item">
                <img src={ ARRIVAL.Arrival8 } alt="" className="a-arrival1-9" />
                <div className="carousel-caption">
                <h4 className="carousel-header">Rating</h4>
                <p>Riders can anonymously rate 
                the driver at the end of the ride.</p>
                </div>
                </div>

                <div className="item">
                <img src={ ARRIVAL.Arrival9 } alt="" className="a-arrival1-9"/>
                <div className="carousel-caption">
                <h4 className="carousel-header">Ride History</h4>
                <p>The user can view their ride 
                history from the handy navigation menu.</p>
                </div>
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
  );
};

export default About

