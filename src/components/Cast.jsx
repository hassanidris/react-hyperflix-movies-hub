const Cast = ({ name, character, image }) => {
  const notFoundPerson = <img src={`https://www.cincinnatichildrens.org/-/media/Cincinnati-Childrens/Global-Shared/Biographies/g/DefaultUser.jpg?iar=0&mh=360&mw=240&hash=3EC38B6E48635B6FBFB5120B6C4407D8`}/>
  return (
    <div>
      <div>{name}</div>
      <div>{character}</div>

      {image? <img src={`https://image.tmdb.org/t/p/w200/${image}`}/> : notFoundPerson }
      
    </div>
  )
}

export default Cast;
