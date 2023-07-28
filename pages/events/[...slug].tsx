import EventsList from "@/components/Events/EventsList";
import Loader from "@/components/UI/Loader";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const FilteredEvents = () => {
  const router = useRouter();
  const { query, isReady } = router;
  const { slug } = query;
  const [year, month] = slug || ["", ""];

  const { isLoading, isError, data } = useQuery(
    ["events", { y: year, m: month }],
    async () => {
      const res = await fetch(`/api/events/?type=search&y=${year}&m=${month}`);
      if (!res.ok) {
        throw new Error("An error occured");
      }
      return res.json();
    },
    { enabled: isReady }
  );

  if (!isReady || isLoading) {
    return <Loader />;
  }

  if (+year < 2020 || +year > 2022 || +month < 0 || +month > 11 || isError) {
    return <p className="text-5xl dark:text-gray-50">Invalid Search Query</p>;
  }

  const date = new Date(+year, +month);
  if (!data || data.length === 0) {
    return (
      <h2 className="text-slate-200 text-3xl font-semibold max-w-5xl mx-auto my-8">
        No Events Found for {date.toLocaleString("en-us", { month: "long" })},{" "}
        {year}
      </h2>
    );
  }

  return (
    <>
      <section className="py-7">
        <div className="max-w-5xl mx-auto max-lg:px-4">
          <h1 className="mb-5 dark:text-gray-50 text-3xl font-semibold">
            Events for {date.toLocaleString("en-us", { month: "long" })}, {year}
          </h1>
          <EventsList events={data} />
        </div>
      </section>
    </>
  );
};

const queryClient = new QueryClient();
export default function FilterEventsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilteredEvents />
    </QueryClientProvider>
  );
}
