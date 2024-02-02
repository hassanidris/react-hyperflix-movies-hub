import { apiUrl, apiKey } from "./apiData";

const basicFetch = async (keyPass) => {
  const response = await fetch(`${apiUrl}${keyPass}`);
  const json = await response.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        listId: 1,
        slug: "trending",
        title: "Trending",
        items: await basicFetch(`/trending/all/week?&api_key=${apiKey}`),
      },
      {
        listId: 2,
        slug: "toprated",
        title: "Toprated",
        items: await basicFetch(`/movie/top_rated?&api_key=${apiKey}`),
      },
      {
        listId: 3,
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${apiKey}`
        ),
      },
      {
        listId: 4,
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${apiKey}`
        ),
      },
      {
        listId: 5,
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${apiKey}`
        ),
      },
      {
        listId: 6,
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${apiKey}`
        ),
      },
      //   {
      //     listId: 7,
      //     slug: "documentary",
      //     title: "Documentary",
      //     items: await basicFetch(
      //       `/discover/movie?with_genres=99&api_key=${apiKey}`
      //     ),
      //   },
    ];
  },
  getMovieDetails: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?api_key=${apiKey}&language=en-US&append_to_response=credits`
          );
          // example path https://api.themoviedb.org/3/movie/550?api_key=60d07ebef5dc7eac7a2c1943ca443902&language=en-US&append_to_response=credits
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
