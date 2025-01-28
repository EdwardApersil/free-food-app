import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
    return (
        <>
            <div className="navbar flex items-center justify-between py-2">
                <div className="logo">
                    <Image src="/eat-free-48.png" alt="Logo" width={50} height={50} className="rounded "/>
                </div>
                <div className="flex text-xl gap-[25px]">
                    <Link href="/home">Home</Link>
                    <Link href="/about">Restaurants</Link>
                    <Link href="/foods">Foods</Link>
                </div>
                <div className="flex items-center justify-between text-xl gap-[45px]">
                    <FaShoppingCart />
                    <FaRegUser />
                </div>
            </div>
        </>
    )
}

export default Navigation;