import { useState } from 'react'


export default function GeneralInformation({ genInfo, setGenInfo }) {

  function GeneralInformationForm() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();

      // Read the form data
      const form = e.target;
      const formData = new FormData(form);

      const updatedGenInfoValues = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phoneNumber: formData.get('phoneNumber'),
        linkedin: formData.get('linkedin'),
        github: formData.get('github')
      }
      console.log(updatedGenInfoValues)
      setGenInfo(updatedGenInfoValues)
    }
    return (
      <>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            First Name: <input name="firstName" defaultValue="" />
          </label>
          <label>
            Last Name: <input name="lastName" defaultValue="" />
          </label>
          <label>
            Phone Number: <input name="phoneNumber" defaultValue="" />
          </label>
          <label>
            Linkedin: <input name="linkedin" defaultValue="" />
          </label>
          <label>
            GitHub: <input name="github" defaultValue="" />
          </label>
          <button type="reset">Reset form</button>
          <button type="submit">Update</button>
        </form>
      </>
    );
  }

  return (
    <>
      <h3>General Information</h3>
      <GeneralInformationForm></GeneralInformationForm>
    </>
  )

}