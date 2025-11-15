const CharacterCard = ({ item }) => {
  const IMG_URL = "https://cdn.thesimpsonsapi.com/500/character/";

  return (
    <li key={item.id}>
      <h1>{item.name}</h1>

      <img src={`${IMG_URL}${item.id}.webp`} alt="" />

      <p>{item.occupation}</p>

      <p>{item.status}</p>
    </li>
  );
};

export default CharacterCard;
