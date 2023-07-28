import EventsList from "@/components/Events/EventsList";
import Newsletter from "@/components/Input/Newsletter";
import { getFeaturedEvents } from "@/lib/events/events";
import { EventStructure } from "@/types/Event";

function Home({ events }: { events: EventStructure[] }) {
  if (events.length === 0)
    return <h1 className="text-4xl text-center my-5">Hello Next World!</h1>;

  return (
    <>
      <section className="mt-7">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>
      <section className="py-5">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl dark:text-gray-50 font-bold my-6">
            Featured Events
          </h1>
          <EventsList events={events} />
        </div>
      </section>
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  if (!events) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      events,
    },
  };
}
