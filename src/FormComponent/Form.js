import { useState } from "react";

function Form() {
  const [question, setQuestion] = useState("");
  const [dquestion, setDquestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [inputFields, setInputFields] = useState([
    { placeholder: "", min: "", max: "" },
  ]);

  const addFields = () => {
    const newField = { placeholder: "", min: "", max: "" };
    setInputFields([...inputFields, newField]);
  };

  const removeFields = (index) => {
    const list = [...inputFields];
    list.splice(index, 1);
    setInputFields(list);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Form Submitted...");

    const userDetails = {
      questionTitle: question,
      questionDescription: dquestion,
      answer: answer,
      inputFields: inputFields,
    };
    console.log("userDetails", userDetails);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="container-xxl"
          style={{
            backgroundColor: "#e3f2fd",
            padding: "60px",
          }}
        >
          <h3>Add Question </h3>
          <br />

          <div className="mb-3">
            <label htmlFor="questiontitle" className="form-label">
              Question Title
            </label>
            <input
              type="text"
              className="form-control"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter Question Title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="questiondescription" className="form-label">
              Question Description
            </label>
            <input
              type="text"
              className="form-control"
              value={dquestion}
              onChange={(e) => setDquestion(e.target.value)}
              placeholder="Enter Question Description"
            />
          </div>
          <br />

          <div className="col-md-5">
            <label htmlFor="answer" className="form-label">
              Answer Type
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            >
              <option value="null">None</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="select">Select</option>
              <option value="teaxtarea">TeaxtArea</option>
              <option value="radio">Radio</option>
              <option value="checkbox">Checkbox</option>
              <option value="slider">Slider</option>
            </select>
          </div>
          <br />

          <div className="container">
            {inputFields.map((input, index) => {
              return (
                <div key={index}>
                  <br />
                  <label> Option : {index + 1} </label>
                  <br />
                  <input
                    type="number"
                    name="placeholder"
                    id="typeNumber"
                    className="m-1"
                    placeholder="Placeholder"
                    value={input.placeholder}
                    onChange={(event) => handleFormChange(index, event)}
                  />

                  <input
                    type="number"
                    name="min"
                    id="typeNumber"
                    className="m-1"
                    placeholder="Min"
                    value={input.min}
                    onChange={(event) => handleFormChange(index, event)}
                  />

                  <input
                    type="number"
                    id="typeNumber"
                    placeholder="Max"
                    className="m-1"
                    name="max"
                    value={input.max}
                    onChange={(event) => handleFormChange(index, event)}
                  />

                  {inputFields.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeFields(index)}
                    >
                      {" "}
                      - Remove
                    </button>
                  )}
                </div>
              );
            })}
            <div className="container mt-2 text-end">
              <button
                type="button"
                className="btn btn-success"
                onClick={addFields}
              >
                + Add More
              </button>
            </div>
          </div>

          <br />
          <br />

          <div className="container">
            <button type="submit" className="btn btn-primary">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
