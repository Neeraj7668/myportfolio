import React from "react";

function SkillComp() {
  return (
    <div className="container">
    
      <div className={"skills-sets-container mt-5"}>
        <div className={"skills-label-container"}>
          <span className={"skills-label"}>Programming Language</span>
        </div>

        <div className={"skills-separator-container"}>
          <div className={"skills-separator-line"}></div>
          <div className={"skills-separator-circle"}>
            <div className={"skills-separator-inner-circle"}></div>
          </div>
        </div>
        <div className={"skills-items-container"}>
          <span className={"skills-item-container"}>C Language</span>
          <span className={"skills-item-container"}>JavaScript</span>
          <span className={"skills-item-container"}>Python</span>
        </div>
      </div>

      <div className={"skills-sets-container "}>
        <div className={"skills-label-container"}>
          <span className={"skills-label"}>Web Front End</span>
        </div>

        <div className={"skills-separator-container"}>
          <div className={"skills-separator-line"}></div>
          <div className={"skills-separator-circle"}>
            <div className={"skills-separator-inner-circle"}></div>
          </div>
        </div>
        <div className={"skills-items-container"}>
          <span className={"skills-item-container"}>React/Redux </span>
          <span className={"skills-item-container"}>Vue js</span>
          <span className={"skills-item-container"}>HTML 5</span>
          <span className={"skills-item-container"}>CSS3</span>
          <span className={"skills-item-container"}>Bootstrap 4</span>
        </div>
      </div>

      <div className={"skills-sets-container"}>
        <div className={"skills-label-container"}>
          <span className={"skills-label"}>Web Back End</span>
        </div>

        <div className={"skills-separator-container"}>
          <div className={"skills-separator-line"}></div>
          <div className={"skills-separator-circle"}>
            <div className={"skills-separator-inner-circle"}></div>
          </div>
        </div>
        <div className={"skills-items-container"}>
          <span className={"skills-item-container"}>Node js</span>
          <span className={"skills-item-container"}>Express js</span>
        </div>
      </div>

      <div className={"skills-sets-container"}>
        <div className={"skills-label-container"}>
          <span className={"skills-label"}>Database</span>
        </div>

        <div className={"skills-separator-container"}>
          <div className={"skills-separator-line"}></div>
          <div className={"skills-separator-circle"}>
            <div className={"skills-separator-inner-circle"}></div>
          </div>
        </div>
        <div className={"skills-items-container"}>
          <span className={"skills-item-container"}>MongoDB</span>
        </div>
      </div>

      
    </div>
  );
}

export default SkillComp;
