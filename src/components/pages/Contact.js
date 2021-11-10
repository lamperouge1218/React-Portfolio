import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [body, setBody] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "emailAddress") {
      setEmailAddress(value);
    } else if (name === "body") {
      setBody(value);
    }
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Thanks for contacting me, ${name}! I'll get back to you soon!`);
  //   setName("");
  //   setEmailAddress("");
  //   setBody("");
  // };

  // TODO: Make it such that the form cannot be submitted with empty values and displays messages in README

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(emailAddress)) {
      alert("Email is invalid. Please enter a valid email address.");

      return;
    }
    if (name === "" || emailAddress === "" || body === "") {
      alert("Please fill out required fields.");
      return;
    }

    alert(`Thanks for your message, ${name}! I'll get back to you soon!`);

    setName("");
    setEmailAddress("");
    setBody("");
  };

  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Contact Me!</h1>
            <p className="col-lg-10 fs-4">
              Contact me at philbohn1791@gmail.com or fill out the form to the
              right to send me a message!
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 rounded-3 bg-dark">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  value={name}
                  name="name"
                  className="form-control"
                  id="exampleFormControlInput3"
                  onChange={handleInputChange}
                />
                <label for="exampleFormControlInput3" className="form-label">
                  Name
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  value={emailAddress}
                  name="emailAddress"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={handleInputChange}
                />
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  type="text"
                  value={body}
                  name="body"
                  className="form-control h-25"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  onChange={handleInputChange}
                />
                <label for="exampleFormControlTextarea2" className="form-label">
                  Type Your Message!
                </label>
              </div>
              <button
                className="w-100 btn btn-lg btn-success"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
