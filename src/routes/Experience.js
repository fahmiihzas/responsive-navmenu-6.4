import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

const Experience = () => {
  return (
    <div className="">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(9, 190, 240)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(9, 190, 240)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(9, 190, 240)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat metus, dictum sed diam quis, posuere rutrum nulla.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat metus, dictum sed diam quis, posuere rutrum nulla.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default Experience;
