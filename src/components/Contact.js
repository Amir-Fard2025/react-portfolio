import { useState } from "react";
import EmailValidator from "email-validator";
function Contact() {
  let [msg, setMessage] = useState("this is the sample message ...");
  // email validator
  const validateEmail = (e) => {
    // evaluate if the email is valid or not
    console.log("Curent Email:", e.target.value);
    const emailValidator = EmailValidator.validate(e.target.value);
    if (emailValidator === true) {
      console.log("Curent Email is valid");
    } else {
      setMessage("email is not valid, please enter a valid email");
      console.log("msg:", msg);
    }
  };
  // Full Name validator

  const validateFullName = (e) => {
    const fullName = e.target.value.trim();
    console.log("Curent Name:", fullName);

    if (fullName && fullName.length > 0) {
      console.log("Current Full Name is valid");
    } else {
      setMessage("name is not valid, please enter a valid name");
      console.log("msg:", msg);
    }
  };

  return (
    <div className="pt-6">
      <form className="w-full max-w-sm">
        {/* Fullname */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Jane Doe"
              onBlur={validateFullName}
            />
          </div>
        </div>
        {/* Email */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              placeholder="email"
              onBlur={validateEmail}
            />
          </div>
        </div>
        {/* User's Message */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              placeholder="Please write your message here"
            />
          </div>
        </div>
        {/* Validation's Message */}

        <div className="md:w-full pb-6">
          <label
            className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            {msg}
          </label>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
