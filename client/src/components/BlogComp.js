import React from "react";
import "../css/index.css";
import blog from "../images/bg.png";

class BlogComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className={"blogs-parent-contents-container"}>
        <p className={"blogs-text"}>
          Here are some of my popular blogs posted on my site, for more blogs
          please follow my{" "}
          <a href="/" className={"blogs-details-link"} target="_blank">
            website
          </a>
          .
        </p>
        <div className={"blogs-contents-container"}>
          <div className={"blogs-poster-container"}>
            <a className={"blogs-details-link"} target="_blank">
              <img src={blog} className={"blogs-poster-img"} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogComp;
