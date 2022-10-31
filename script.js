const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};
const getMovies1 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "Creed II",
    }
  });

  for (let movie of movieData.data.results) {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });
    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');
    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`
    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  }
};
const getMovies2 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "Spider-Man: No Way Home",
    }
  });

  movieData.data.results.forEach(async (movie) => {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });

    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');

    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`

    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  });
};

const getMovies3 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "Avengers: Infinity War",
    }
  });

  movieData.data.results.forEach(async (movie) => {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });

    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');

    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`

    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  });
};

const getMovies4 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "Avengers: Endgame",
    }
  });

  movieData.data.results.forEach(async (movie) => {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });

    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');

    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`

    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  });
};

const getMovies5 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "Star Wars: The Force Awakens",
    }
  });

  movieData.data.results.forEach(async (movie) => {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });

    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');

    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`

    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  });
};

const getMovies6 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "Skyfall",
    }
  });

  movieData.data.results.forEach(async (movie) => {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });

    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');

    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`

    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  });
};

const getMovies7 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "Transformers: Age of Extinction",
    }
  });

  movieData.data.results.forEach(async (movie) => {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });

    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');

    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`

    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  });
};

const getMovies8 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "Ocean's Thirteen",
    }
  });

  movieData.data.results.forEach(async (movie) => {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });
    
    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');
    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`
    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  });
};

const getMovies9 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "f944b70daa59b60504fca0c383e63483",
      query: "The Fate of the Furious",
    }
  });

  movieData.data.results.forEach(async (movie) => {
    const extraData = await getData(`https://api.themoviedb.org/3/movie/${movie.id}`, {
      params: {
        api_key: "f944b70daa59b60504fca0c383e63483",
        append_to_response: "videos",
      }
    });

    const trailer = extraData.data.videos.results.filter((video) => video.type === "Trailer").at(0).key;
    const p = document.createElement('p');
    const img = document.createElement('img');
    const iframe = document.createElement('iframe');

    p.innerHTML = `${movie.title} -- ${movie.release_date} -- ${movie.popularity}`;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    iframe.src = `https://www.youtube.com/embed/${trailer}`

    document.body.append(p);
    document.body.append(img);
    document.body.append(iframe);
  });
};


getMovies1();
getMovies2();
getMovies3();
getMovies4();
getMovies5();
getMovies6();
getMovies7();
getMovies8();
getMovies9();

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}