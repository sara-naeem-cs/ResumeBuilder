import React, { useState } from 'react'

function addExperience(setExperiences, newExperience) {
  setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
}

function ExperienceForm({ setExperiences, length }) {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    
    const experienceWithId = { ...formJson, id: length + 1 };

    addExperience(setExperiences, experienceWithId)
  }  
  return (
      <>
        <form method="post" onSubmit={handleSubmit}>
        <label>
          Company Name: <input name="companyName" defaultValue="Company Name" />
        </label>
        <label>
          Position: <input name="position" defaultValue="Some Position" />
        </label>
        <label>
          Start Date: <input type="date" name="experienceStartDate" />
        </label>
        <label>
          End Date: <input type="date" name="experienceEndDate" />
        </label>
        <label>
          Description: 
          <textarea
            name="jobDescription"
            defaultValue="A job description would go here!"
            rows="4" // Initial height
            cols="50" // Initial width
          />
        </label>
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
        </form>
      </>
    );
  }

export default function GeneralInformation() {
    
  const [experiences, setExperiences] = useState([]); //Declare empty list to start

  function deleteExperience(index){
    const newExperiencesList = experiences.filter((experience) => experience.id !== index);
    setExperiences(newExperiencesList);
  }

  const listExperiences = experiences.map((experience) =>
    <li  key={experience.id}>
       
       <h5><b>{experience.companyName}:</b> {' ' + experience.position + ' '}</h5>
        <h6>{experience.experienceStartDate} - {experience.experienceEndDate}</h6>
        <p>{experience.jobDescription}</p>
       <button type="button" onClick={() => deleteExperience(experience.id)}>Delete</button>
    </li>
  );

    return (
      <>
        <h3>Experience:</h3>
        <ExperienceForm setExperiences={setExperiences} length={experiences.length}></ExperienceForm>
        <ul>{listExperiences}</ul> {/* Render the experiences list here */}

      </>
    )
  
}


// Figure out how to edit or delete an experience.
// Look into how to do an edit