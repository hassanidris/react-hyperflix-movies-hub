import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContextProvider";
import apiConfig from "../data/apiConfig";
import defaultMovie from "../assets/movie-nf.png";
import Skeleton from "../components/ui-components/Skeleton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { UserAuth } from "../context/AuthContext";

const SearchResults = () => {
  const { query } = useParams();
  const [resultsQuery, setResultsQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(resultsQuery.map(() => false));

  const { truncateTitle } = useContext(MovieContext);

  const { user } = UserAuth();

  const markFavShow = async (index) => {
    const userEmail = user?.email;

    if (userEmail) {
      const userDoc = doc(db, "users", userEmail);
      const newLikes = [...likes];
      newLikes[index] = !newLikes[index];
      setLikes(newLikes);

      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...resultsQuery[index] }),
      });
    } else {
      alert("Please login to favorite this movie");
    }
  };

  const navigate = useNavigate();

  const navigateToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        let data = await apiConfig.getSearchMovie(query);
        setResultsQuery(data.results);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleResultClick = (movieId) => {
    navigateToMovie(movieId);
    // Clear the search query when navigating to a movie
    // You might want to clear it after a delay to ensure it's cleared after navigation
    setTimeout(() => setResultsQuery([]), 100);
  };

  if (loading) {
    return (
      <div className="pt-[120px]">
        <h2 className="p-4">Search Results</h2>
        <div className="px-8">
          <ul className="flex flex-wrap gap-4">
            {[...Array(15)].map((_, index) => (
              <li
                className="p-3 hover:bg-m_darkGrey cursor-pointer"
                key={index}
              >
                <div className="w-[80vw] sm:w-[40vw] md:w-[16vw] lg:w-[16vw] h-[220px] inline-block overflow-hidden">
                  <Skeleton className="w-[600px] h-64 rounded-md" />
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">
                    <Skeleton className="w-[100px] h-4 my-2" />
                  </p>
                  <Skeleton className="w-[30px] h-4 my-2" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className=" p-4">Search Results</h2>
      <div className=" px-8">
        {/* <ul className=' flex flex-wrap gap-4'> */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {resultsQuery.map((movie, index) => (
            <li
              className=" p-3 hover:bg-m_darkGrey cursor-pointer"
              key={movie.id}
            >
              <Link to={{ pathname: `/movie/${movie.id}` }}>
                <div className="w-full h-[220px] sm:h-[220px] md:h-[220px] lg:h-[220px] xl:h-[220px] overflow-hidden">
                  <img
                    className="w-full h-full block object-cover"
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultMovie
                    }
                    alt={movie.title}
                  />
                </div>
              </Link>
              <div className="flex justify-between items-center p-2">
                <p className=" text-sm">{truncateTitle(movie.title, 25)}</p>
                <p
                  onClick={() => markFavShow(index)}
                  className=" cursor-pointer"
                >
                  {likes[index] ? <FaHeart /> : <FaRegHeart />}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
