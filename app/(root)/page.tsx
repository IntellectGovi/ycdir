import Image from "next/image";
import SearchForm from "../../components/ui/SearchForm";
import StartupCard from "@/components/ui/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {


  const posts = [{
    _createdAt:new Date(),
    views:55,
    author:{_id:1 , name:"Govind Upadhyay"},
    _id: 1,
    description:"This is a description",
    image:"https://www.imagemakerclicks.com/auth/upload/slider/image-maker-clicks-best-photographers-in-gorakhpur-slider-2.jpg",
    category:"Robots",
    title:"We Robots"
  }]


  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup , Connect with Entreprenures
        </h1>

        <p className="sub-heading">
          Submit Ideas , vote on Pitches and get Noticed
        </p>

        <SearchForm query={query} />
      </section>

      <section>

        <p className="text-30-semibold">
          {query ? `Search Result for "${query}"` : "All startup"}
        </p>


        <ul className="mt-7 card_grid">
            {
              posts?.length > 0 ? (posts.map((post:StartupCardType) => (
                <StartupCard key={post?._id} post={post}/>
              ))) : (
                <p className="no-results">No startup Found</p>
              )
            }
        </ul>

      </section>
    </>
  );
}
