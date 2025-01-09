import { useState } from 'react'

function GeneralInformationForm() {
    return (
      <>
        <label>
          First Name: <input name="mySchool" defaultValue="" />
        </label>
        <label>
          Last Name: <input name="mySchoolCity" defaultValue="" />
        </label>
        <hr />
        <label>
          Start Date: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <label>
          End Date: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
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