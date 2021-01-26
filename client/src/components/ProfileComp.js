import React from "react";
import "../css/index.css";
import profile from "../images/profile.png";
class ProfileComp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div className={"dashboard-header-container"}>
          <div className={"dashboard-banner-overlay"}></div>

          <div className={"dashboard-profile-div"}>
          <div className={'dashboard-profile-img-container'}>

              <img src={profile} className={"dashboard-profile-img"} />
              <div className={"social-profile-container"}>
              <a
                href="https://www.facebook.com/profile.php?id=100004772745550"
                target="_blank"
              >
                <i class=" fa fa-facebook social-profile-icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/neeraj-maurya-616824167/"
                target="_blank"
              >
                <i class=" fa fa-linkedin social-profile-icon"></i>
              </a>
              <a href="https://github.com/Neeraj7668" target="_blank">
                <i class=" fa fa-github social-profile-icon"></i>
              </a>
              <a href="https://www.instagram.com/crazy.neeraj/" target="_blank">
                <i class=" fa fa-instagram social-profile-icon"></i>
              </a>
              <a href="https://twitter.com/Neeraj20688170" target="_blank">
                <i class=" fa fa-twitter social-profile-icon"></i>
              </a>
            </div>
           
            </div>
            <div className={"dashboard-profile-details-container"}>
              <p className={"dashboard-profile-name-label"}>
                Hello, I'm
                <span className={"dashboard-profile-name"}> Neeraj</span>
              </p>
              <p className={"dashboard-profile-deatils"}>
                I'm a Junier Web Developer specialized in Web application
                development, In terms of the Web framework having experience in
                both back-end and front-end development, developed many
                <br /> full-stack based web application using Node.js, React.js
                & MongoDB. My strength is that i can adapt quickly to any
                enviroment and i am quick learner.
              </p>
            </div>

            <div class="font_icons">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100004772745550"
                  target="_blank"
                >
                  <i class=" fa fa-facebook"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/neeraj-maurya-616824167/"
                  target="_blank"
                >
                  <i class=" fa fa-linkedin"></i>
                </a>
              </div>
              <div>
                <a href="https://github.com/Neeraj7668" target="_blank">
                  <i class=" fa fa-github"></i>
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/crazy.neeraj/"
                  target="_blank"
                >
                  <i class=" fa fa-instagram"></i>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/Neeraj20688170" target="_blank">
                  <i class=" fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <img className={"dashboard-banner-img"} />
        </div>
      </div>
    );
  }
}
export default ProfileComp;
