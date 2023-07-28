import EventsList from "@/components/Events/EventsList";
import FilterForm from "@/components/FilterForm";
import { getAllEvents } from "@/lib/events/events";
import { EventStructure } from "@/types/Event";
import { useRouter } from "next/router";

const EventsPage = ({ events }: { events: EventStructure[] }) => {
  const router = useRouter();
  if (events.length === 0)
    return <h1 className="text-4xl text-center my-5">Hello Next World!</h1>;

  const searchHandler = ({ year, month }: { year: string; month: string }) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <FilterForm onSearch={searchHandler} />
        </div>
      </section>
      <section className="pb-10">
        <div className="max-w-4xl mx-auto max-lg:px-4">
          <h1 className="text-4xl dark:text-gray-50 font-bold my-6">
            All Events
          </h1>
          <EventsList events={events} />
        </div>
      </section>
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();
  if (!events) {
    return {
      notFound: true,
    };
  }

  return {
    revalidate: 600,
    props: {
      events,
    },
  };
}
