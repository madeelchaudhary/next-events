import NotificationContext from "@/store/notification-context";
import React, { FormEvent, useRef, useState, useContext } from "react";
import Loading from "../Icons/loading";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mailInputRef = useRef() as any;

  const { showNotification, hideNotification } =
    useContext(NotificationContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!mailInputRef.current.value) {
      return;
    }

    setIsLoading(true);
    showNotification({
      title: "Pending",
      message: "Signing up for newsletter in progress!",
      status: "pending",
    });

    const data = { email: mailInputRef.current.value };
    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          showNotification({
            title: "Success",
            message: "Signing up for newsletter Successed!",
            status: "success",
          });
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.error);
        });
      })
      .catch((err) => {
        showNotification({
          title: "Error",
          message: err.message,
          status: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const form = (
    <form
      onSubmit={submitHandler}
      action="#"
      className="flex flex-col items-center w-full md:flex-row"
    >
      <label
        htmlFor="email"
        className="flex-shrink-0 mb-2 mr-auto  font-medium text-gray-500 md:mb-0 md:mr-4 dark:text-gray-200 md:m-0"
      >
        Sign up for our newsletter
      </label>
      <input
        ref={mailInputRef}
        type="email"
        id="email"
        placeholder="Enter your email"
        className="bg-white border-2 border-gray-300 text-gray-900 md:w-72 mb-2 md:mb-0 md:mr-4 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <button
        disabled={isLoading}
        type="submit"
        className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoading && <Loading size={6} />}
        Subscribe
      </button>
    </form>
  );

  return (
    <div className="flex justify-between w-full rounded-md shadow-lg p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-500">
      <div className="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto">
        {!submitted && form}
        {submitted && (
          <p className="font-medium text-gray-500 md:mb-0 md:mr-4 dark:text-gray-200 text-xl">
            You have successfully signed up!
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
