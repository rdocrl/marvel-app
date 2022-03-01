export const getApiUrl = (path, query = '') =>
  `${process.env.REACT_APP_API_URL}${path}?${getApiAuth()}${query}`;

export const getApiAuth = () =>
  `apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}&ts=${process.env.REACT_APP_API_TS}`;
