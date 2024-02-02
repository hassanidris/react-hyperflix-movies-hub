import { FaSearch } from "react-icons/fa";

const SearchField = () => {
  

  return(
    <form className=" flex justify-center items-center gap-2"> 
      <input className=" rounded-full border-2 w-[60vw] md:w-[50vw] h-10 border-m_gold p-2" type="text" placeholder="Search for a movie ..." />

      <FaSearch className=" text-m_gold" size={30} />
      
    </form>
  )
}

export default SearchField;