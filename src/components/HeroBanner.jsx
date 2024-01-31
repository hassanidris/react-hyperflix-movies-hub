import Details from "../pages/Details";
import Trailer from "./Trailer";

const HeroBanner = ({items}) => {

  console.log(items)

  return(
    <div className="bg-slate-900 text-white">
      
      <Trailer/>
      <Details/>
    </div>
  )
}

export default HeroBanner;