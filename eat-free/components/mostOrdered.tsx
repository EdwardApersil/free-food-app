/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import FoodCard from "./foodCard";
import Link from "next/link";

interface Food {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    isFree: boolean;
    availability: boolean;
    freeDelivery: boolean;
}


const MostOrderedFood = () => {
    const [allFoods, setAllFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // const [restName, setRestName] = useState('')


    const getOrderedFood = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: "http://localhost:5000/restaurants",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Hello",response.data.name)
            if (response.status === 200) {
                const foods = response.data.flatMap((restaurant: { id: string, location: string, foods?: any[] }) => 
                restaurant.foods?.map((food: Food) => ({
                   ...food,
                    restaurantId: restaurant.id,
                    location: restaurant.location,
                })));
                setAllFoods(foods.slice(0, 4));
            } else {
                setError("Failed to fetch foods.");
            }
        } catch (error) {
            console.log(error)
            setError("An error occurred while fetching data.");
        }
        setLoading(false);
    };

    useEffect(() => {
        getOrderedFood();
    }, []);

    return (
        <div className="flex flex-col gap-8 p-10">
            
            <div className="flex items-center justify-between">
                <h2 className="text-3xl flex items-start font-bold text-center">Most Ordered Foods</h2>
                <Link href="/foods" className="text-yellow-500">All Foods</Link>
            </div>

            {loading ? ( 
                <div className="flex items-center justify-center h-full col-span-full">
                    <Image src="/loading.gif" alt="Loading..." width={64} height={64} />
                </div>
            ) : error ? (
                <div className="text-red-500 text-center">{error}</div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {allFoods.length > 0 ? (
                        allFoods.map((food) => (
                            <div key={food.id}>
                                <FoodCard
                                    image={food.image}
                                    name={food.name}
                                    description={food.description}
                                    // restaurantsName={food.restaurantName}
                                    location={food.location}
                                    isFree={food.isFree}
                                    available={food.availability}
                                    freeDelivery={food.freeDelivery}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            No foods available at the moment.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MostOrderedFood;
