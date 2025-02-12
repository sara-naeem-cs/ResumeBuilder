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
    return (
      <>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Skills:
            <textarea
              name="skillsDescription"
              defaultValue=""
              rows="4" // Initial height
              cols="50" // Initial width
            />
          </label>
          <button type="reset">Clear</button>
          <button type="submit">Update</button>
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