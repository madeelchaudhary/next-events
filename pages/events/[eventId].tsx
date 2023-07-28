import Comments from "@/components/Events/Comments";
import EventDetail from "@/components/Events/EventDetail";
import EventHeader from "@/components/Events/EventHeader";
import AddCommnets from "@/components/Input/AddCommnets";
import { getEventById, getEventsId } from "@/lib/events/events";
import { EventStructure } from "@/types/Event";
import { GetStaticPropsContext } from "next";
import { useState } from "react";

const DetailEventPage = ({ event }: { event: EventStructure }) => {
  const [commentShown, setCommentShown] = useState(false);

  return (
    <>
      <EventHeader title={event.title} desc={event.description} />
      <div className="max-w-4xl mx-auto -mt-20">
        <EventDetail
          image={event.image}
          alt={event.title}
          date={event.date}
          location={event.location}
        />
      </div>

      <aside className="py-10 mt-10">
        <div className="max-w-4xl mx-auto">
          <button
            className="text-white border border-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800 mx-auto w-fit block mb-10"
            onClick={() => setCommentShown((prevState) => !prevState)}
          >
            {commentShown ? "Hide" : "Show"} Comments
          </button>
          {commentShown && (
            <>
              <AddCommnets eventId={event.id} />
              <Comments eventId={event.id} />
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default DetailEventPage;

export async function getStaticPaths() {
  const idsObj = await getEventsId();
  const pathsWithParams = idsObj.map((obj: any) => ({
    params: { eventId: obj.id.toString() },
  }));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params) {
    return {
      redirect: "",
    };
  }
  const eventId = params.eventId as string;

  const event = await getEventById(eventId);

  if (!event) {
    return { notFound: true };
  }

  return {
    revalidate: 45,
    props: { event },
  };
}
