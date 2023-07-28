import { EventStructure } from "@/types/Event";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCalendarWeek, BsGeoAlt } from "react-icons/bs";

const EventItem = ({ event }: { event: EventStructure }) => {
  const formatedDate = new Date(event.date).toLocaleString("en-us", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const formatedLocation = event.location.replace(", ", "\n");

  return (
    <div className="max-sm:max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow dark:border-gray-700">
      <div className="flex flex-col w-full md:flex-row h-full">
        <a href={`/events/${event.id}`} className="block">
          <Image
            className="md:h-full md:min-h-[18rem] md:max-w-[20rem]"
            src={event.image}
            alt={event.title}
            width={480}
            height={320}
          />
        </a>
        <div className="flex-grow p-5 dark:bg-gray-800">
          <div className="flex flex-col justify-center h-full">
            <a href={`/events/${event.id}`}>
              <h3 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {event.title}
              </h3>
            </a>
            <p className="mb-3 font-semibold text-lg flex gap-3 items-center text-gray-700 dark:text-gray-100">
              <span>
                <BsCalendarWeek />
              </span>
              {formatedDate}
            </p>
            <p className="mb-5 flex gap-3 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              <span className="mt-2">
                <BsGeoAlt />
              </span>
              {formatedLocation}
            </p>
            <Link
              href={`/events/${event.id}`}
              className="group inline-flex items-center px-4 hover:pr-5 focus:pr-5 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-fit"
            >
              <span>Read more</span>
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 transition-transform group-focus:translate-x-1 group-hover:translate-x-1 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
