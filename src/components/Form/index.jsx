// Imports the useState as a React hook
import { useState } from "react";

// Imports the helper function that checks if the email is valid
import { validateEmail } from "../../utils/helpers";

function Form() {
    // Creates state variables for form fields and also sets their starting values to being empty
    const [contactName, setContactName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on inputType, the name/email/message is changed
        if (inputType === "contactName") {
            setContactName(inputValue);
        } else if (inputType === "email") {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleSubmitForm = (e) => {
        // Prevents default behavior of form submitting (page refresh)
        e.preventDefault();

        // Checks to see if the email is valid or if a contact name was provided
        if (!validateEmail(email) || !contactName) {
            setErrorMessage("Email or username is invalid. Please try again.");
            // Exits out of code statement so user can retry
            return;
        }
        if (!message) {
            setErrorMessage("The message field cannot be left blank.");
            return;
        }
        alert(`Thanks for your message  ${contactName}!`);

        // Assuming the message was successfully submitted, the states will reset
        setContactName("");
        setEmail("");
        setMessage("");
    };

    // Renders the form parts
    return (
        <div className="form-box">
            <h1>Hello! If you want to send me a message, submit it here!</h1>
            <form onSubmit={handleSubmitForm}>
                <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your first and last name here"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter your email address here"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Leave your message for me here"
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;