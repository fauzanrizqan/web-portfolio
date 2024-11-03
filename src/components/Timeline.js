import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';
import './Timeline.css';

function Timeline() {
    return (
        <div className="timeline">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Timeline</h1>
            <VerticalTimeline style={{ zIndex: 3 }}>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Aug 2021 - June 2022"
                dateClassName="date"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaSuitcase />}
                style={{ zIndex: 3 }}
              >
                <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Indonesia, Depok</h4>
                <p>
                Contributed as a Teaching Assistant for <strong>Linear Algebra</strong> and <strong>Automata Theory</strong>, supporting the professor in lectures and materials preparation, conducting tutorials, and grading for over <strong>180</strong> students.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jul 2022 - Dec 2024 (Expected)"
                dateClassName="date"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaGraduationCap />}
                style={{ zIndex: 3 }}
              >
                <h3 className="vertical-timeline-element-title">Graduate</h3>
                <h4 className="vertical-timeline-element-subtitle">Australian National University, Canberra</h4>
                <p>
                  Pursuing a Bachelor of Advanced Computing (Honours) degree with a specialisation in Machine Learning. Awarded the ANU Chancellor's International
                  Scholarship for achieving high GPA.
                </p>
                
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Aug 2020 - Dec 2024 (Expected)"
                dateClassName="date"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaGraduationCap />}
                style={{ zIndex: 3 }}
              >
                <h3 className="vertical-timeline-element-title">Graduate</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Indonesia, Depok</h4>
                <p>
                  Enrolled in a double degree (2+2) program in adjacent to my study at ANU. Pursuing a Bachelor of Computer Science degree with a final GPA of <strong>3.74/4.00</strong>.
                </p>
                
              </VerticalTimelineElement>
              {/* Add more events as necessary */}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
