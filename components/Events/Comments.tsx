import useSwr from "swr";
import Loader from "../UI/Loader";

interface Comment {
  name: string;
  message: string;
}

const Comments = ({ eventId }: { eventId: string }) => {
  const { data, error, isLoading } = useSwr(
    "/api/comments/" + eventId,
    (...args) =>
      fetch(...args).then((res) => {
        if (!res.ok) {
          return new Error("An error occured!");
        }

        return res.json();
      }),
    { dedupingInterval: 8000 }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <p>Empty!</p>;
  }

  return (
    <div className="px-5 mt-5">
      <ul>
        {data.map((cm: any, i: any) => (
          <li className="border-b py-5" key={i}>
            <div className="dark:text-gray-300">
              <p>{cm.message}</p>
              <p className="text-sm text-right text-gray-400">By {cm.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
