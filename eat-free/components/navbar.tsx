import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
    return (
        <>
            <div className="navbar flex flex-col items-center justify-between py-2">
                <div className="logo">
                    <Image src="/eat-free-48.png" alt="Logo" width={50} height={50} className="rounded " />
                </div>
                <div className="flex flex-col text-xl gap-[25px]">
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="dashboard/orders">Orders</Link>
                    <Link href="dashboard/foods">Foods</Link>
                </div>
                <div className="flex flex-col items-center justify-between text-xl gap-[45px]">
                    <FaShoppingCart />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </>
    )
}

export default Navigation;