import Image from "next/image";
import React from "react";
import { BsCalendarWeek, BsGeoAlt } from "react-icons/bs";

const EventDetail = ({
  image,
  alt,
  location,
  date,
}: {
  image: string;
  location: string;
  date: string;
  alt: string;
}) => {
  const formatedDate = new Date(date).toLocaleString("en-us", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const formatedLocation = location.replace(", ", "\n");

  return (
    <div className="max-sm:max-w-sm max-w-4xl bg-white border border-gray-200 rounded-lg overflow-hidden shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col w-full md:flex-row md:justify-center  gap-10 md:gap-14 h-full px-4 py-10">
        <div className="rounded-full overflow-hidden ring-4 ring-white max-w-[15.25rem] h-[15.25rem]">
          <Image
            className="w-full h-full object-cover object-center "
            src={image}
            alt={alt}
            width={480}
            height={320}
          />
        </div>

        <div className="max-md:flex-grow">
          <div className="flex flex-col justify-center h-full font-semibold text-2xl">
            <p className="mb-7 flex gap-3 items-center text-gray-700 dark:text-gray-100">
              <span>
                <BsCalendarWeek />
              </span>
              {formatedDate}
            </p>
            <p className="mb-3 flex gap-3 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              <span className="mt-2">
                <BsGeoAlt />
              </span>
              {formatedLocation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
