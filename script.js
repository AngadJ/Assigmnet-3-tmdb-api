const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};
 
const getMovies1 = async () => {
  let datatag = document.getElementById("datatag");
  datatag.innerHTML = "";
  let selectedMovie = document.getElementById("mainselect");
  console.log("selected movie: " + selectedMovie.value);
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: selectedMovie.value,
    }
  });
 
  console.log("size: " + movieData.data.results.length)
  if (movieData.data.results.length < 1) {
    return;
  }
 
    let movie = movieData.data.results[0];
    console.log("movie: " + movie)
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });

    const iframe = document.createElement('iframe');
    const p = document.createElement('p');
    p.setAttribute('id','para1')
    const img = document.createElement('img');
    const h1 =document.createElement("h1")
    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
 
    p.innerHTML = `${movie.title} -- Release Date: ${movie.release_date} -- Rating: ${extraData.data.vote_average}/10 Stars -- Length of Film: ${extraData.data.runtime} minutes -- Popularity: ${movie.popularity} -- 
    Box Office: ${extraData.data.revenue} USD -- Budget: ${extraData.data.budget} USD -- Overview: ${movie.overview}`
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    h1.innerHTML = `${extraData.data.original_title}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`

    datatag.append(h1);
    datatag.append(p);
    datatag.append(img);
    datatag.append(iframe);

};