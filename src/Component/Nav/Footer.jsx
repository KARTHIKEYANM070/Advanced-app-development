import React from "react";
import './footer.css';
import fb from "./facebook.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
import linkedin from "./linked.png";

const Footer = () => {
  return (
    <div className="footer">
        <div className="sb__footer section__padding">
            <div className="sb_footer-links">
                <div className="sb__footer-links_div">
                <h4>Top Mnc Company</h4>
                <a href="/">
                  <p>Apple</p>
                </a> 
                <a href="/">
                  <p>Google</p>
                </a>
                <a href="/">
                  <p>ZOHO</p>
                </a>

                </div>
                <div className="sb__footer-links_div">
                    <h4>Resoures</h4>
                    <a href="/">
                        <p>Fede back Form</p>
                    </a>
                    <a href="/">
                        <p>Contact Information</p>
                    </a>
                    <a href="/">
                        <p></p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Coming soon on</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt=""/></p>
                        <p><img src={twitter} alt=""/></p>
                        <p><img src={linkedin} alt=""/></p>
                        <p><img src={instagram} alt=""/></p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/">
                        <div>
                            <p>Terms & Conditions</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <p>Privacy</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <p>Security</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <p>Cookie Declaration</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer