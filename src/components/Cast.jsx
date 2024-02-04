

const Cast = ({ name, character, image }) => {

  

   const notFoundPerson = <img src={`https://www.cincinnatichildrens.org/-/media/Cincinnati-Childrens/Global-Shared/Biographies/g/DefaultUser.jpg?iar=0&mh=360&mw=240&hash=3EC38B6E48635B6FBFB5120B6C4407D8`}/>
  return (
    // <div>
    //   <div>{name}</div>
    //   <div>{character}</div>
    //   <img src={`https://image.tmdb.org/t/p/w200/${image}`}/>
    // </div>
    <div className=" w-[90px] sm:w-[130px] md:w-[170px] lg:w-[210px]  inline-block cursor-pointer relative p-2 shadow-lg">
              <img className=" w-full h-full block object-cover object-top" src={image? <img src={`https://image.tmdb.org/t/p/w200/${image}`}/> : notFoundPerson } alt={name}/>
              <div className=" absolute top-0 left-0 w-full h-full hover:bg-m_black/80 opacity-0 hover:opacity-100 text-m_white">
              <div className='flex flex-col justify-center items-center gap-2 h-full text-center'>
                <p className=" text-m_white whitespace-normal font-open_sans text-xs md:text-sm font-bold ">{name}</p>
                <p className=" text-m_white whitespace-normal font-open_sans text-xs md:text-sm">{character}</p>
              </div>
              </div>
            </div>

  )
}

export default Cast;
