import { useState, useEffect } from 'react';

function addEducation(setEducations, newEducation) {
  setEducations((prevEducations) => [...prevEducations, newEducation]);
}

function updateEducation(setEducations, updatedEducation) {
  setEducations((prevEducations) =>
    prevEducations.map((education) =>
      education.id === updatedEducation.id ? updatedEducation : education
    )
  );
}

function EducationForm({ setEducations, length, editEducation, setEditEducation }) {
  const [formData, setFormData] = useState(editEducation || {
    schoolName: '',
    degreeType: '',
    major: '',
    schoolLocation: '',
    educationStartDate: '',
    educationEndDate: '',
  });

  // Update form when switching to edit mode
  useEffect(() => {
    setFormData(editEducation || {
      schoolName: '',
      degreeType: '',
      major: '',
      schoolLocation: '',
      educationStartDate: '',
      educationEndDate: '',
    });
  }, [editEducation]);

  function handleSubmit(e) {
    e.preventDefault();

    if (editEducation) {
      updateEducation(setEducations, formData);
      setEditEducation(null); // Reset edit mode
    } else {
      const newEducationWithId = { ...formData, id: length + 1 };
      addEducation(setEducations, newEducationWithId);
    }

    setFormData({
      schoolName: '',
      degreeType: '',
      major: '',
      schoolLocation: '',
      educationStartDate: '',
      educationEndDate: '',
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        School Name: <input name="schoolName" value={formData.schoolName} onChange={handleChange} />
      </label>
      <label>
        Degree Type: <input name="degreeType" value={formData.degreeType} onChange={handleChange} />
      </label>
      <label>
        Major: <input name="major" value={formData.major} onChange={handleChange} />
      </label>
      <label>
        City: <input name="schoolLocation" value={formData.schoolLocation} onChange={handleChange} />
      </label>
      <label>
        Start Date: <input type="date" name="educationStartDate" value={formData.educationStartDate} onChange={handleChange} />
      </label>
      <label>
        End Date: <input type="date" name="educationEndDate" value={formData.educationEndDate} onChange={handleChange} />
      </label>

      <div className="button-container">
        <button type="submit">{editEducation ? 'Update' : 'Submit'}</button>
        <button type="button" onClick={() => setEditEducation(null)}>Cancel</button>
      </div>
    </form>
  );
}

export default function EducationSection({ educations, setEducations }) {
  const [editEducation, setEditEducation] = useState(null);

  function deleteEducation(index) {
    setEducations((prevEducations) => prevEducations.filter((education) => education.id !== index));
  }

  const listEducations = educations.map((education) => (
    <li key={education.id}>
      <h5><b>{education.schoolName}:</b> {education.degreeType}{' ' + education.major + ' '}</h5>
      <div className="button-container">
        <button type="button" onClick={() => deleteEducation(education.id)}>Delete</button>
        <button type="button" onClick={() => setEditEducation(education)}>Edit</button>
      </div>
    </li>
  ));

  return (
    <>
      <h3>Education:</h3>
      <EducationForm
        setEducations={setEducations}
        length={educations.length}
        editEducation={editEducation}
        setEditEducation={setEditEducation}
      />
      <ul>{listEducations}</ul>
    </>
  );
}
