
export const AVATAR = process.env.REACT_APP_AVATAR;
export const LOGO = process.env.REACT_APP_LOGO;
export const BACKGROUND_URL = process.env.REACT_APP_BACKGROUND_URL;
export const tmdb_url = process.env.REACT_APP_TMDB_URL;
export const IMG_CDN_URL = process.env.REACT_APP_IMG_CDN_URL;
export const GEMINI_AI_KEY = process.env.REACT_APP_GEMINI_AI_KEY;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_AUTHORIZATION,
  }
};
