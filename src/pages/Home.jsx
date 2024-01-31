//components
import HeroBanner from "../components/HeroBanner";
import Movies from "../components/Movies";
//data 
import apiConfig from "../data/apiConfig";
//hooks 
import { useEffect, useState } from "react";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [movieBanner, setMovieBanner] = useState(null);

  useEffect(() => {
    const loadAll = async () => {

      //catching the lists 
      let list = await apiConfig.getHomeList();
      setMovieList(list)
      //console.log(list)

      //Catching HeroBanner (random)
      //filter the first list setted on apiConfig
      let bannerTrending = list.filter(i => i.slug === 'trending');
      //Math the list to be able to random the results of list
      let randomBanner = Math.floor(Math.random() * (bannerTrending[0].items.results.length - 1));
      // catch the specificly movie 
      let catchBanner = bannerTrending[0].items.results[randomBanner];
      //match the link of list and the link with more informations about the movie 
      let randomInformation = await apiConfig.getMovieDetails(catchBanner.id)
      // change the state of hero banner 
      setMovieBanner(randomInformation);
      
      //console.log(randomInformation);
      //catching details 
      //let details = await apiConfig.getMovieDetails();
      //console.log(details)
    }
    loadAll();
  }, [])

  return (
      <main>
        <div className="flex">
          {movieBanner &&
            <HeroBanner items={movieBanner} />
          }
        </div>
        <div className="flex">
          {movieList.map((item, key)=>(
            <Movies key={key} title={item.title} items={item.items} />
          ))}
        </div>
      </main>
  );
}
