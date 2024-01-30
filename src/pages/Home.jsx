//components
import HeroBanner from "../components/HeroBanner";
import Movies from "../components/Movies";
import Navbar from "../components/NavBar";
//data 
import apiConfig from "../data/apiConfig";
//hooks 
import { useEffect, useState } from "react";

export default function Home() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      
      //catching the lists 
      let list = await apiConfig.getHomeList();
      setMovieList(list)
      console.log(list)

      let details = await apiConfig.getMovieDetails();
      console.log(details)

      //catching details 
      
    }
    loadAll();
  }, [])

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <div>
          <HeroBanner/>
        </div>

        <div>
          {movieList.map((item, key)=>(
            <Movies key={key} title={item.title} items={item.items}/>
          ))}
        </div>

      </main>
      
      <div>footer</div>
    </div>
  );
}
