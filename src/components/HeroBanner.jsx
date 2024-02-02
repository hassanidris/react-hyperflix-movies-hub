import { useNavigate } from "react-router-dom";
import BtnDetails from "./BtnDetails";
import Trailer from "./Trailer";

const HeroBanner = ({itemBanner}) => {


  const navigate = useNavigate();

  const navigateToMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }

  //const originalImg = 'https://image.tmdb.org/t/p/original';


 

  let releaseYear = new Date(itemBanner.release_date);

  let genres = [];
    for(let i in itemBanner.genres) {
        genres.push( itemBanner.genres[i].name );
    }


  console.log(itemBanner)
  // flex items-end bg-gray-800 text-white h-[80vh] pt-20
  return (
    <div className="w-full h-[80vh] text-white font-open_sans relative">
      <div
        className="h-full w-full flex items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            itemBanner.backdrop_path || itemBanner.poster_path
          })`,
          backgroundSize: 'cover',
        }}
      >
        {/* Dark overlay */}
        {/* <div className="bg-black opacity-50 z-10"></div> */}

        <div className="w-full h-full flex items-end p-10 gap-5 bg-m_black/80">
          <div className="w-[300px] h-auto">
            <img
              className="w-full h-full object-cover hidden lg:block"
              src={`https://image.tmdb.org/t/p/w200${itemBanner.poster_path}`}
              alt={itemBanner.title}
            />
          </div>
          <div className="text-m_white font-open_sans font-medium">
            <div>
              <h2 className="text-m_white font-amaranth text-5xl">
                {itemBanner.title}
              </h2>
              <p className="font-open_sans text-m_white italic text-sm mb-3">
                <span>{releaseYear.getFullYear()}</span> .
                <span> {genres.join(', ')}</span>
              </p>
              <p className="w-full lg:w-2/3">{itemBanner.overview}</p>
            </div>
            <div className=" flex mt-4 gap-3">
              <Trailer />
              <BtnDetails onClick={() => navigateToMovie(itemBanner.id)} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;