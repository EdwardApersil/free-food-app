import Hero from "@/components/hero"
import MostOrderedFood from "@/components/mostOrdered"
import Navigation from "@/components/navbar"

const MainHome = () => {
    return (
        <>
            <div className="home flex flex-col justify-between gap-[25px]">
                <Navigation />
                <Hero />
                <MostOrderedFood/>
            </div>
        </>
    )
}

export default MainHome