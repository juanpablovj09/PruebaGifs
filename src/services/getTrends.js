export const getTrends = async() => {
  const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=hxXdAkqFqzINc3cvXIufm2wdB14B6lOW&limit=10&rating=g
  `
  const response = await fetch(API_URL);
  const data = await response.json();
  return data  
};

