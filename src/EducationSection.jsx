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
          School Name: <input name="schoolName" defaultValue="" />
        </label>
        <label>
          Degree Type: <input name="degreeType" defaultValue="" />
        </label>
        <label>
          Major: <input name="major" defaultValue="" />
        </label>
        <label>
          City: <input name="schoolLocation" defaultValue="" />
        </label>
        <label>
          Start Date: <input type="date" name="" />
        </label>
        <label>
          End Date: <input type="date" name="" />
        </label>

        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </>
  );
}

export default function EducationSection({ educations, setEducations }) {

  function deleteEducation(index) {
    const newEducationsList = educations.filter((education) => education.id !== index);
    setEducations(newEducationsList);
  }

  const listEducations = educations.map((education) =>
    <li key={education.id}>
      <h5><b>{education.schoolName}:</b> {education.degreeType}{' ' + education.major + ' '}</h5>
      <div className="button-container">
        <button type="button" onClick={() => deleteEducation(education.id)}>Delete</button>
        <button type="button">Edit</button>
      </div>
    </li>
  );

  return (
    <>
      <h3>Education:</h3>
      <EducationForm setEducations={setEducations} length={educations.length} ></EducationForm>
      <ul>{listEducations}</ul>

    </>
  )

}