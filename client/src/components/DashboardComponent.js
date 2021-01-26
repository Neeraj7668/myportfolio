import React from "react";
import { NavLink } from "react-bootstrap";
import "../css/index.css";
import BlogComp from "./BlogComp";
import ContactComp from "./ContactComp";
import ProfileComp from "./ProfileComp";
import ProjectComp from "./ProjectComp";
import SkillComp from "./SkillComp";


class DashboardComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          tabItem: ['HOME', 'SKILLS', 'PROJECTS', 'BLOGS'],
          selectedItem: 'HOME'
      }
  }

  componentDidMount() {

  }

  setSelectedTab = (item) => {
      this.setState({
          selectedItem: item
      })
  }

  renderTabContents = () => {
      var tabItem = this.state.selectedItem;
      if (tabItem === 'HOME') {
          return (
              <ProfileComp />
          )
      }
      if (tabItem === 'skills') {
          return (
              <SkillComp />
          )
      }
      if (tabItem === 'PROJECTS') {
          return (
              <ProjectComp />
          )
      }
      if (tabItem === 'BLOGS') {
          return (
              <BlogComp />
          )
      }
  }

  render() {
  return (
    <div className="desktop-parent-container">
      <div className="menu-bar-container ">
        <nav className="navbar navbar-expand-lg navbar-light text-white container">
          <NavLink className="navbar-brand text-white" href="/">
            My Portfolio
          </NavLink>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto menu-list">
              <li className="nav-item active ">
                <a className="nav-link text-white" href="/">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#skills">
                  Skills
                </a>
              </li>    <li className="nav-item">
              <a className="nav-link text-white" href="/Projects">
                Projects
              </a>
            </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ProfileComp />

      <div className={"dashboard-down-arrow-container"}>
        <a href="#skills" className={"menu-item-txt"}>
          <i class="fa fa-chevron-circle-down dashboard-down-arrow"></i>
        </a>
      </div>

      <div className={"dashboard-skill-sets-container"}>
        <div className={"skills-container"}>
          <span className={"dashboard-skills-label"}>Technical Skills</span>
        </div>
        <SkillComp/>
      </div>
     
      <div id={"projects"} className={"projects-parent-container"}>
        <div className={"project-container"}>
          <span className={"dashboard-skills-label"}>Projects</span>
        </div>
        <ProjectComp />
      </div>

      <div id={"blogs"} className={"blogs-parent-container"}>
        <div className={"blog-container"}>
          <span className={"dashboard-skills-label"}>Blogs</span>
        </div>
        <BlogComp />
      </div>

      <div id={"contacts"} className={"contacts-parent-container"}>
        <div className={"contact-container"}>
          <span className={"dashboard-skills-label"}>Contacts</span>
        </div>
        <ContactComp />
      </div>
    </div>
  );
}
}
export default DashboardComponent;
