import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import GeneralInformation from './GeneralInformation.jsx'
import EducationSection from './EducationSection.jsx'
import ExperienceSection from './ExperienceSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInformation></GeneralInformation>
    <EducationSection></EducationSection>
    <ExperienceSection></ExperienceSection>
  </StrictMode>
)
