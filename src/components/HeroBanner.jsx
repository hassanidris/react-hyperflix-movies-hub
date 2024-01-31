import Details from "../pages/Details";
import Trailer from "./Trailer";

const HeroBanner = ({item}) => {

  console.log(item)

  return(
    <div className="bg-slate-900 text-white">
      <Trailer/>
      <Details/>
    </div>
  )
}

export default HeroBanner;