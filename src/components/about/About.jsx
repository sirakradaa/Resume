import "./about.css";
import ARRIVAL from './../../images/arrival';

const About = () => {
    const Wiki = <a href={"https://github.com/CMPUT301W20T07/arrival/wiki"}>Wiki</a>
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card">
                <img src={ ARRIVAL.Arrival } alt="" className="a-Arrival" />
                <h1>Arrival</h1>
                <p>Arrival is an Edmonton-based ride sharing platform for Android. 
                Users can sign up as a Rider, or Driver, depending on their needs. 
                Riders are able to request rides between two locations within 
                Edmonton city limits, while Drivers can view Rider's open 
                requests in their area, and are able to accept the requests 
                they wish to complete. More information about the app's 
                features and development can be found on the project's {Wiki}.
                </p>
            </div>
        </div>
        <div className="a-right">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
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
                <div class="item active">
                <img src={ ARRIVAL.Arrival1 } alt="" className="a-arrival1-9" />
                <div class="carousel-caption">
                <h4>Edit Account</h4>
                <h4>Make changes to email and password.</h4>
                </div>
                </div>

                <div class="item">
                <img src={ ARRIVAL.Arrival2 } alt="" className="a-arrival1-9" />
                <div class="carousel-caption">
                <h4>Forgot Password</h4>
                <p>User can enter their email if they forgot their 
                    password where they will be sent a link to change their password.</p>
                </div>
                </div>

                <div class="item">
                <img src={ ARRIVAL.Arrival3 } alt="" className="a-arrival1-9" />
                <div class="carousel-caption">
                <h4>Notifications</h4>
                <p>The rider gets notified when 
                a driver accepts their request.</p>
                </div>
                </div>

                <div class="item">
                <img src={ ARRIVAL.Arrival4 } alt="" className="a-arrival1-9" />
                <div class="carousel-caption">
                <h4>Geolocation</h4>
                <p>Identifies user's current location.</p>
                </div>
                </div>

                <div class="item">
                <img src={ ARRIVAL.Arrival5 } alt="" className="a-arrival1-9" />
                <div class="carousel-caption">
                <h4>Offline</h4>
                <p>Users can see the current request while offline.</p>
                </div>
                </div>

                <div class="item">
                <img src={ ARRIVAL.Arrival6 } alt="" className="a-arrival1-9"/>
                <div class="carousel-caption">
                <h4>Cancel Ride</h4>
                <p>Riders can cancel a request 
                before they are picked up.</p>
                </div>
                </div>

                <div class="item">
                <img src={ ARRIVAL.Arrival7 } alt="" className="a-arrival1-9" />
                <div class="carousel-caption">
                <h4>In-App Payment</h4>
                <p>Riders can pay with QR bucks by 
                having the driver scan the QR code.</p>
                </div>
                </div>

                <div class="item">
                <img src={ ARRIVAL.Arrival8 } alt="" className="a-arrival1-9" />
                <div class="carousel-caption">
                <h4>Rating</h4>
                <p>Riders can anonymously rate 
                the driver at the end of the ride.</p>
                </div>
                </div>

                <div class="item">
                <img src={ ARRIVAL.Arrival9 } alt="" className="a-arrival1-9"/>
                <div class="carousel-caption">
                <h4>Ride History</h4>
                <p>The user can view their ride 
                history from the handy navigation menu.</p>
                </div>
                </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
  );
};

export default About

