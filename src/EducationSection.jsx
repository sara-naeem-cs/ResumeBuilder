import { useState } from 'react'

function EducationForm() {
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
          School: <input name="mySchool" defaultValue="Princeton" />
        </label>
        <label>
          City: <input name="mySchoolCity" defaultValue="Chicago" />
        </label>
        <hr />
        <label>
          Start Date: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <label>
          End Date: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
        </form>
      </>
    );
}

export default function EducationSection() {
    /*const [count, setCount] = useState(0)
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const handleButtonClick = (url) => {
      window.location.href = url;
    };*/
  
    return (
      <>
        <h3>Education:</h3>
        <EducationForm></EducationForm>
      </>
    )
  
  }