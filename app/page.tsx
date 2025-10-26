import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

const events = [
  { image: "/images/event1.png", title: "Event 1" },
  { image: "/images/event2.png", title: "Event 2" },
];

function Home() {
  return (
    <>
      <section>
        <h1 className="text-center ">
          The Hub For Every Dev <br /> Event You Can&apos;t Miss
        </h1>
        <p className="text-center mt-5">
          Hackathons , Meetups , and Conferences, All in One Place
        </p>
        <ExploreBtn />
        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>
          <ul className="events">
            {events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
