import { useState } from 'react'

function addExperience(setEducations, newEducation) {
  setEducations((prevEducations) => [...prevEducations, newEducation]);
}

function EducationForm({ setEducations, length }) {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        const educationWithId = { ...formJson, id: length + 1 };

        addExperience(setEducations, educationWithId)
        
      }
    return (
      <>
        <form method="post" onSubmit={handleSubmit}>
        <label>
          School Name: <input name="schoolName" defaultValue="State University" />
        </label>
        <label>
          Major: <input name="major" defaultValue="History" />
        </label>
        <label>
          City: <input name="schoolLocation" defaultValue="Chicago" />
        </label>
        <label>
          Start Date: <input type="date" name="educationStartDate" />
        </label>
        <label>
          End Date: <input type="date" name="educationEndDate" />
        </label>
        
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
        </form>
      </>
    );
}

export default function EducationSection() {
    const [educations, setEducations] = useState([]); //Declare empty list to start
  
    function deleteEducation(index){
      const newEducationsList = educations.filter((education) => education.id !== index);
      setEducations(newEducationsList);
    }

    const listEducations = educations.map((education) =>
      <li  key={education.id}>
         
         <h5><b>{education.schoolName}:</b> {' ' + education.major + ' '} {education.schoolLocation}</h5>
         <p>{education.educationStartDate} to {education.educationEndDate}</p>        
         <button type="button" onClick={() => deleteEducation(education.id)}>Delete</button>
      </li>
    );
  
    return (
      <>
        <h3>Education:</h3>
        <EducationForm setEducations={setEducations} length={educations.length} ></EducationForm>
        <ul>{listEducations}</ul> {/* Render the experiences list here */}

      </>
    )
  
  }