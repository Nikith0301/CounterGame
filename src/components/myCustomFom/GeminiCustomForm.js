import { useEffect, useState, useRef } from "react";

export default function CustomForm(props) {
  // Using state to store form elements:
  const [formElements, setFormElements] = useState([]);

  useEffect(() => {
    // Create form elements based on props on component mount:
    const elements = Object.keys(props).map((key) => {
      if (props[key].isInput) {
        // For input fields, return an input element:
        return <input key={key} type={props[key].type} placeholder={props[key].label} />;
      } else {
        // For other elements, return a descriptive paragraph:
        return <p key={key}>This is not an input field: {key}</p>;
      }
    });

    setFormElements(elements);
  }, [props]); // Update form elements whenever props change

  return (
    <>
      <p>Keys of props object:</p>
      <p>{Object.keys(props)}</p>

      <form>
        {/* Render the created form elements */}
        {formElements}
      </form>
    </>
  );
}