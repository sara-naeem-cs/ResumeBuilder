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
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
        linkedin: formData.get('linkedin'),
        github: formData.get('github')
      }
      console.log(updatedGenInfoValues)
      setGenInfo(updatedGenInfoValues)
    }

    function clearForm() {
      // Clear the form values by resetting the state to empty
      setGenInfo({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        linkedin: '',
        github: ''
      });
    }

    return (
      <>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            First Name: <input name="firstName" defaultValue={genInfo.firstName} />
          </label>
          <label>
            Last Name: <input name="lastName" defaultValue={genInfo.lastName} />
          </label>
          <label>
            Email: <input name="email" defaultValue={genInfo.email} />
          </label>
          <label>
            Phone Number: <input name="phoneNumber" defaultValue={genInfo.phoneNumber} />
          </label>
          <label>
            Linkedin: (Recommended) <input name="linkedin" defaultValue={genInfo.linkedin} />
          </label>
          <label>
            GitHub: (Recommended) <input name="github" defaultValue={genInfo.github} />
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
      <h3>General Information</h3>
      <GeneralInformationForm></GeneralInformationForm>
    </>
  )

}