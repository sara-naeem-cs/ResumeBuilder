import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import GeneralInformation from './GeneralInformation.jsx'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import Resume from './resume.jsx'

//createRoot(document.getElementById('root')).render(
function App (){
  const [genInfo, setGenInfo] = useState({
    firstName: 'John',
    lastName: 'Smith',
    phoneNumber: '555-555-5555',
    linkedin: '',
    github: ''
});
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      companyName: "Tech Corp",
      position: "Software Engineer",
      experienceStartDate: "2020-06-01",
      experienceEndDate: "2023-09-30",
      jobDescription: "Developed web applications and led frontend development."
    },
    {
      id: 2,
      companyName: "InnovateX",
      position: "Data Analyst",
      experienceStartDate: "2018-04-15",
      experienceEndDate: "2020-05-30",
      jobDescription: "Performed data analysis and visualization to improve business decisions."
    }
  ]);

  // Hardcoded sample education
  const [educations, setEducations] = useState([
    {
      id: 1,
      schoolName: "State University",
      major: "Computer Science",
      schoolLocation: "New York, NY",
      educationStartDate: "2016-08-01",
      educationEndDate: "2020-05-15"
    },
    {
      id: 2,
      schoolName: "City College",
      major: "Mathematics",
      schoolLocation: "Los Angeles, CA",
      educationStartDate: "2012-08-01",
      educationEndDate: "2016-06-10"
    }
  ]);
  return(
  <StrictMode>
    <GeneralInformation></GeneralInformation>
    <EducationSection></EducationSection>
    <ExperienceSection></ExperienceSection>
    <Resume generalInformation={genInfo} experiences={experiences} educations={educations} />
  </StrictMode>
  )
}
createRoot(document.getElementById('root')).render(<App />);
