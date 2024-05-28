import { Link } from "react-router-dom";

const SmallHorizontalCard = ({link, imageSrc, text}) => {
  return (
    <Link to={link}>
        <div className=" flex mt-2 border-t pt-4">
            <div className="relative group w-1/4">
                <img src={imageSrc} alt="no image" className="w-full h-full object-cover transition-transform group-hover:scale-100"/>
            </div>
            <h4 className="text-base self-start ml-2 hover:underline hover:text-gray-700 w-3/4">
                {text}
            </h4>
        </div>
    </Link>
  )
}

export default SmallHorizontalCard;