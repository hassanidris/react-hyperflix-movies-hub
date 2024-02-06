import defaultImage from '../../../assets/default-user.png'

const Reviews = ({ author, content, image, date }) => {
 

  return (
    
    <div className=' flex justify-start items-start gap-4 border-[1px] border-m_gold rounded-xl p-8 mb-6'>
        <div className=' w-[10%] rounded-[50%]'>
          <img className="w-full h-full block object-cover object-top mb-2" src={image ? `https://image.tmdb.org/t/p/w200/${image}` : defaultImage} alt={author} />
        </div>
    
        
        <div className=' flex flex-col w-[90%]'>
            <h4 className=" text-m_white whitespace-normal font-open_sans text-xs md:text-sm font-bold ">{author}</h4>
            <p className=" text-m_white whitespace-normal font-open_sans text-xs italic mb-3">{date}</p>
            <p className=" text-m_white whitespace-normal font-open_sans text-xs md:text-sm">{content}</p>
            
        
        </div>
              
    </div>

  )
}

export default Reviews;
