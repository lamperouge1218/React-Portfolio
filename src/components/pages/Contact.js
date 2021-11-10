import React, { useState } from "react";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting me, ${name}! I'll get back to you soon!`);
    setName("");
    setEmailAddress("");
    setBody("");
  };

  // TODO: Make it such that the form cannot be submitted with empty values and displays messages in README

  return (
    <div>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Contact Me!</h1>
            <p class="col-lg-10 fs-4">
              Input your full name, email address, and a short message, and I
              will get back to you as soon as possible! Thanks for checking out
              my page!
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 rounded-3 bg-dark">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  value={name}
                  name="name"
                  class="form-control"
                  id="exampleFormControlInput3"
                  onChange={handleInputChange}
                />
                <label for="exampleFormControlInput3" class="form-label">
                  Name
                </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  value={emailAddress}
                  name="emailAddress"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={handleInputChange}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Email Address
                </label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  type="text"
                  value={body}
                  name="body"
                  class="form-control h-25"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  onChange={handleInputChange}
                />
                <label for="exampleFormControlTextarea2" class="form-label">
                  Type Your Message!
                </label>
              </div>
              <button
                class="w-100 btn btn-lg btn-success"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
              <hr class="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
