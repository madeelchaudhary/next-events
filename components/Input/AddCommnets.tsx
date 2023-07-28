import React, { FormEvent, useRef, useState } from "react";
import Loading from "../Icons/loading";
import { mutate } from "swr";

const AddCommnets = ({ eventId }: { eventId: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mailInputRef = useRef() as any;
  const nameInputRef = useRef() as any;
  const messageInputRef = useRef() as any;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const email = mailInputRef.current.value;
    const message = messageInputRef.current.value;
    const name = nameInputRef.current.value;
    if (!email || !name || !message) {
      return;
    }

    setIsLoading(true);

    const data = { email, message, name };

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) {
        setIsLoading(false);
        alert("Unsuccessfull!");
      } else {
        mutate("/api/comments" + eventId);
        setSubmitted(true);
      }
    });
  };

  const form = (
    <form onSubmit={submitHandler}>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            ref={mailInputRef}
            type="email"
            name="user_mail"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            ref={nameInputRef}
            type="text"
            name="full_name"
            id="floating_name"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <textarea
          ref={messageInputRef}
          name="user_message"
          id="floating_text"
          rows={4}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        ></textarea>

        <label
          htmlFor="floating_text"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Your Message
        </label>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="flex mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-fit px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoading && <Loading size={5} />}
        Submit
      </button>
    </form>
  );

  return (
    <div className="bg-slate-900 px-5 py-10">
      {!submitted && form}
      {submitted && (
        <p className="text-xl dark:text-white font-medium">
          Your comment has been added!
        </p>
      )}
    </div>
  );
};

export default AddCommnets;
