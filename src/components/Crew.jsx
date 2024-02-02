
export default function crew({ name, character, image }) {
  return (
    <div>
      <div>{name}</div>
      <div>{character}</div>
      <img src={`https://image.tmdb.org/t/p/w200/${image}`}/>
    </div>
  )
}
