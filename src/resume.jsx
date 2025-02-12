import React from 'react';
import './resume.css'; // Ensure you have styles for the resume layout

export default function Resume({ genInfo, skills, experiences, educations }) {
  return (
    <div className="resume-container">
      <h1>{genInfo.firstName} {genInfo.lastName}</h1>
      <section>
        <h3>{genInfo.phoneNumber} {genInfo.linkedin} {genInfo.github}</h3>

      </section>

      <section>
        <h2>Skills</h2>
        <p>{skills}</p>

      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.id}>
              <h3>{exp.companyName} - {exp.position}</h3>
              <p>{exp.experienceStartDate} to {exp.experienceEndDate}</p>
              <p>{exp.jobDescription}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          {educations.map((edu) => (
            <li key={edu.id}>
              <h3>{edu.schoolName} - {edu.major}</h3>
              <p>{edu.schoolLocation}</p>
              <p>{edu.educationStartDate} to {edu.educationEndDate}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
