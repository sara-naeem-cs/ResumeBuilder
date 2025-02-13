import { useState } from 'react'

export default function Skills({ skillsInfo, setSkillsInfo }) {

  function SkillsForm() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();

      // Read the form data
      const form = e.target;
      const formData = new FormData(form);

      setSkillsInfo(formData.get('skillsDescription'))

    }

    function clearForm(){
      setSkillsInfo("");
    }

    return (
      <>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            <textarea
              name="skillsDescription"
              defaultValue={skillsInfo}
              rows="5" // Initial height
              cols="40" // Initial width
            />
          </label>
          <div className="button-container">
          <button type="submit">Update</button>
          <button onClick={clearForm}>Clear</button>
        </div>
        </form>
      </>
    );
  }

  return (
    <>
      <h3>Skills</h3>
      <SkillsForm></SkillsForm>
    </>
  )

}