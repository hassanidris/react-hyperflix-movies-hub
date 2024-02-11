import { FaInfoCircle } from "react-icons/fa";
const BtnDetails = ({onClick, title}) => {
  return(
    <button className="btn flex justify-center items-center gap-1 rounded-lg" onClick={onClick}><FaInfoCircle /> {title}</button>
  )
}
export default BtnDetails;
