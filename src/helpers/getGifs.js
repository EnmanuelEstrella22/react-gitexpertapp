export const getGrifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=rG3xOaKrmcty6JIhaWqE2TLwRfQhbXET`;

  const { data } = await fetch(url).then((res) => res.json());

  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return {
        id,
        title,
        url,
      };
    }
  );
  return gifs;
};
