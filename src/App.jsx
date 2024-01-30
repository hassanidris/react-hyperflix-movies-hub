//components
import Movies from "./components/Movies";
//data 
import apiConfig from "./data/apiConfig";
//hooks 
import { useEffect, useState } from "react";

export default function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      
      //catching the lists 
      let list = await apiConfig.getHomeList();
      setMovieList(list)
      console.log(list)

      let detailss = await apiConfig.getMovieDetails();
      console.log(detailss)

      //catching details 
      
    }
    loadAll();
  }, [])

  return (
    <div>
      <header>Header</header>
      <div>
        <div>
          {movieList.map((item, key)=>(
            <Movies key={key} title={item.title} items={item.items}/>
          ))}
        </div>
      </div>
      <div>footer</div>
    </div>
  );
}
