export const getGifs = async({topic = 'wanda', limit = 10, page = 0} = {}) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=hxXdAkqFqzINc3cvXIufm2wdB14B6lOW&q=${topic}&limit=${limit}&offset=${page*limit}&rating=g&lang=en`
  
  const response = await fetch(API_URL);
  const data = await response.json();
  return desmenuzado(data);
  
};

function desmenuzado(response) {
  const {data = []} = response
  if (Array.isArray(data)) {
    const gifs = data.map((item) => {
      const { id, title, images } = item;
      const { url } = images.downsized_medium;
      return { id, title, url };
    });
    return gifs;
  }
  return [];
}
