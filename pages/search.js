import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import {format} from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({searchResults}) {
  const router = useRouter();

  const {location, startDate, endDate, numberGuest} = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} au ${formattedEndDate}`;

  console.log(searchResults);

  return (
    <div className="h-min-screen">
      <Header placeholder={`${location} | ${range} | ${numberGuest}`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">+ de 300 séjours pour {numberGuest} du {range}.</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Logements à {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="result-filter-btn">Annulation gratuite</p>
            <p className="result-filter-btn">Wifi</p>
            <p className="result-filter-btn">Cuisine</p>
            <p className="result-filter-btn">Parking Gratuit</p>
            <p className="result-filter-btn">Chiens accéptés</p>
          </div>

          <div className="flex flex-col">
          {searchResults.map (({img, location, title, description, star, price, total}) =>(
            <InfoCard 
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          ))}
          </div>
          

        </section>

      </main>


      <Footer />  
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz")
  .then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults
    }
  }

}
