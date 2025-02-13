import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./resume.css"; // Ensure you have styles for the resume layout

export default function Resume({ genInfo, skills, experiences, educations }) {
  const resumeRef = useRef(); // Reference to the resume div

  const downloadResume = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
      <button onClick={downloadResume} className="download-btn">
        Download PDF
      </button>
      <div ref={resumeRef} className="resume-page-container">      
        <h1>
          {genInfo.firstName} {genInfo.lastName}
        </h1>
        <section>
        <h3>
          {genInfo.email && <span>{genInfo.email} </span>}
          {genInfo.phoneNumber && <span>{genInfo.phoneNumber} </span>}
          {genInfo.linkedin && <span>{genInfo.linkedin} </span>}
          {genInfo.github && <span>{genInfo.github} </span>}
        </h3>
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
                <h4>
                  {exp.companyName} - {exp.position}
                </h4>
                <p>
                  {exp.experienceStartDate} to {exp.experienceEndDate}
                </p>
                <p>{exp.jobDescription}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <ul>
            {educations.map((education) => (
              <li key={education.id}>
                <h3>
                  {education.schoolName} - {education.major}, {education.degreeType}
                </h3>
                <p>{education.schoolLocation}</p>
                <p>
                  {education.educationStartDate} to {education.educationEndDate}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
