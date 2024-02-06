import { FaInfoCircle } from "react-icons/fa";
const BtnDetailsBig = ({onClick}) => {
  return(
    <button className="btn-outline flex justify-center items-center gap-1" onClick={onClick}><FaInfoCircle /> More Details</button>
  )
}
export default BtnDetailsBig;
