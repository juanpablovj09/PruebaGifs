export const getSingleGif = async({id}) => {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=hxXdAkqFqzINc3cvXIufm2wdB14B6lOW`;

  const response = await fetch(API_URL);
  const data = await response.json();
  return desmenuzado(data.data)
};

const desmenuzado = (data) => {
  const obj = {
    id: data.id,
    url: data.images.downsized_medium.url,
    title: data.title
  }

  return obj
}

