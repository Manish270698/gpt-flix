export const SEARCH = "http://www.w3.org/2000/svg";
export const NOTIFICATION = "http://www.w3.org/2000/svg";
export const PROFILE_PIC =
  "https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const TRENDING_MOVIES =
  "https://api.themoviedb.org/3/trending/movie/day?page=1";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TO_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const TRENDING_TV =
  "https://api.themoviedb.org/3/trending/tv/day?page=1";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500";

export const LANGAUGES = {
  en: {
    name: "English",
    value: "en",
    searchText: "Search",
    findText: "What would you like to watch today?",
  },
  hin: {
    name: "हिंदी",
    value: "hin",
    searchText: "खोजे",
    findText: "आज आप क्या देखना चाहेंगे?",
  },
  esp: {
    name: "español",
    value: "esp",
    searchText: "buscar",
    findText: "¿Qué te gustaría ver hoy?",
  },
};

export const OPENAI_KEY = process.env.REACT_APP_GPT_KEY;

export const MOVIE_SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?query=";
