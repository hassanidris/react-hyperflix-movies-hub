import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContextProvider";

const Account = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const { truncateTitle } = useContext(MovieContext);

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);

  const removeFromFavMovies = async (movie) => {
    const userDoc = doc(db, "users", user.email);

    await updateDoc(userDoc, {
      favShows: arrayRemove(movie),
    });
  };

  if (!user) {
    return (
      <>
        <p>You must be logged in to see this content.</p>
      </>
    );
  }

  return (
    <div className=" p-4">
      <h2>My Favorite Movies</h2>
      <p className=" italic text-sm">{user.email}</p>
      <div className=" mt-10 px-8">
        <ul className=" flex flex-wrap gap-4">
          {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> */}
          {movies.map((movie) => (
            <div
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-3 hover:bg-m_darkGrey cursor-pointer"
              key={movie.id}
            >
              <Link to={{ pathname: `/movie/${movie.id}` }}>
                <div>
                  <img
                    className="w-full h-[150px] block object-cover"
                    src={`https://image.tmdb.org/t/p/w500${
                      movie.backdrop_path || movie.poster_path
                    }`}
                    alt={movie.title}
                  />
                </div>
              </Link>
              <div className="flex justify-between items-center p-2">
                <p className=" text-sm">{truncateTitle(movie.title, 25)}</p>
                <p>
                  <AiOutlineClose
                    size={25}
                    onClick={() => removeFromFavMovies(movie)}
                    className=" absolute top-0 right-0 bg-m_white text-m_darkGrey rounded-full p-1"
                  />
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Account;
