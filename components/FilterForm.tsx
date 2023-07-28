import { useRef, FormEvent } from "react";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FilterForm = ({ onSearch }: { onSearch(arg0: object): void }) => {
  const monthRef = useRef() as any;
  const yearRef = useRef() as any;
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!monthRef.current.value || !yearRef.current.value) {
      return;
    }

    onSearch({ year: yearRef.current.value, month: monthRef.current.value });
  };

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md shadow-[#fef2f23a] sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        onSubmit={submitHandler}
        className="space-y-6 md:space-y-0 gap-7 md:flex items-center"
      >
        <div className="md:flex items-center gap-3 w-full">
          <select
            ref={monthRef}
            id="month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          >
            <option value="">Month</option>
            {MONTHS.map((month, i) => (
              <option value={i} key={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="md:flex items-center gap-3 w-full">
          <select
            ref={yearRef}
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          >
            <option defaultChecked value="">
              Year
            </option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full  md:w-auto min-w-max text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-8 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search Events
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
