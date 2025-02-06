import { useState } from 'react'

function GeneralInformationForm({ currentGeneralInfo }) {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }  
  return (
      <>
        <form method="post" onSubmit={handleSubmit}>
        <label>
          First Name: <input name="firstName" defaultValue={currentGeneralInfo.firstName} />
        </label>
        <label>
          Last Name: <input name="lastName" defaultValue={currentGeneralInfo.lastName} />
        </label>
        <hr />
        <label>
          Phone Number: <input name="phoneNumber" defaultValue={currentGeneralInfo.phoneNumber} />
        </label>
        <hr />
        <label>
          Linkedin: <input name="linkedin" defaultValue={currentGeneralInfo.linkedin}/>
        </label>
        <hr />
        <label>
          GitHub: <input name="github" defaultValue={currentGeneralInfo.github} />
        </label>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
        </form>
      </>
    );
  }

export default function GeneralInformation() {
    const [genInfo, setGenInfo] = useState({
      firstName: 'John',
      lastName: 'Smith',
      phoneNumber: '555-555-5555',
      linkedin: '',
      github: ''
  });
  
  
    return (
      <>
        <h3>General Information</h3>
        <GeneralInformationForm currentGeneralInfo={genInfo} ></GeneralInformationForm>
      </>
    )
  
}