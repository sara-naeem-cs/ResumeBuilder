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

    clearForm();

  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Company Name: <input name="companyName" defaultValue="" />
        </label>
        <label>
          Position: <input name="position" defaultValue="" />
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
            defaultValue=""
            rows="5" // Initial height
            cols="40" // Initial width
          />
        </label>
        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </>
  );
}

export default function ExperienceSection({ experiences, setExperiences }) {
  const [editExperience, setEditExperience] = useState(null);

  function deleteExperience(index) {
    const newExperiencesList = experiences.filter((experience) => experience.id !== index);
    setExperiences(newExperiencesList);
  }

  const listExperiences = experiences.map((experience) =>
    <li key={experience.id}>

      <h5><b>{experience.companyName}:</b> {' ' + experience.position + ' '}</h5>
      <p>{experience.jobDescription}</p>
      <div className="button-container">
        <button type="button" onClick={() => deleteExperience(experience.id)}>Delete</button>
        <button type="button">Edit</button>
      </div>

    </li>
  );

  return (
    <>
      <h3>Experience:</h3>
      <ExperienceForm setExperiences={setExperiences} length={experiences.length}></ExperienceForm>
      <ul>{listExperiences}</ul>
    </>
  )

}
