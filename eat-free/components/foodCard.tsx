import Image from "next/image";
import { IoFastFood } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";


type FoodCardType = {
    name: string,
    description: string
    isFree: boolean,
    available: boolean
    image: string
    freeDelivery: boolean
    restaurantsName?: string
    location?: string
}

const FoodCard: React.FC<FoodCardType> = ({name, description, isFree, available, freeDelivery, image, restaurantsName, location}) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-auto">
                {/* <Image src={image} alt={image} width={64} height={64}/> */}
                <Image src='/hero-pic.png' alt={image} width={100} height={100} className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{name}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <p className="text-gray-600 mb-4 flex items-center gap-2 text-bold"> 
                        <IoFastFood/> 
                        {restaurantsName}
                    </p>
                    <p className="text-gray-600 mb-4 flex items-center gap-2 text-bold"> 
                        <CiLocationOn/> 
                        {location}</p>
                    <div className="flex items-center justify-between">
                        <span className={`text-yellow-500 text-sm ${isFree? 'opacity-50' : ''}`}>Available until: {available}</span>
                        <span className={`text-white rounded-md p-1 text-sm bg-green-500 ${freeDelivery? 'opacity-50' : ''}`}>{freeDelivery? 'Free' : 'Paid'}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodCard