import React from "react";

const EventHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-28 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default EventHeader;
