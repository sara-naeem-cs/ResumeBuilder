import { useState } from 'react'

function GeneralInformationForm() {
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
          First Name: <input name="mySchool" defaultValue="" />
        </label>
        <label>
          Last Name: <input name="mySchoolCity" defaultValue="" />
        </label>
        <hr />
        <label>
          Phone Number: <input name="phoneNumber" defaultValue="" />
        </label>
        <hr />
        <label>
          Linkedin: <input name="linkedin" defaultValue="" />
        </label>
        <hr />
        <label>
          GitHub: <input name="github" defaultValue="" />
        </label>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
        </form>
      </>
    );
  }

export default function GeneralInformation() {
    /*const [count, setCount] = useState(0)
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const handleButtonClick = (url) => {
      window.location.href = url;
    };*/
  
    return (
      <>
        <h3>General Information</h3>
        <GeneralInformationForm></GeneralInformationForm>
      </>
    )
  
}