/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import AppSidebar from "@/components/app-sidebar"
import FoodCard from "@/components/foodCard"
import axios from "axios"
import { useEffect, useState } from "react"

const FoodsList = () => {
    const [restaurants, setRestaurants] = useState<any[]>([])
    const [foods, setFoods] = useState<any[]>([])
    const [filteredFoods, setFilteredFoods] = useState<any[]>([])
    const [selectedRestaurant, setSelectedRestaurant] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                const response = await axios.get("http://localhost:8000/restaurants", {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if (response.status === 200) {
                    setRestaurants(response.data)
                    const allFoods = response.data.flatMap((restaurant: any) => (
                        restaurant.foods || []).map((food: any) => (
                            {
                                ...food,
                                restaurantId: restaurant.id,
                                location: restaurant.location
                            }
                        )))
                    setFoods(allFoods)
                    setFilteredFoods(allFoods)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getRestaurants()
    }, [])

    useEffect(() => {
        filterFoods()
    }, [selectedRestaurant, selectedCategory, selectedLocation])

    const filterFoods = () => {
        let filtered = foods

        if (selectedRestaurant) {
            filtered = filtered.filter(food => food.restaurantId === selectedRestaurant)
        }

        if (selectedCategory) {
            filtered = filtered.filter(food => food.category === selectedCategory)
        }

        if (selectedLocation) {
            filtered = filtered.filter(food => food.location === selectedLocation)
        }

        setFilteredFoods(filtered)
    }

    return (
        <>
            <AppSidebar pageTitle="">
                <div className="foods flex flex-col justify-between gap-[25px]">
                    <div className="filters flex items-center gap-[40px]">
                        <div>
                            <label htmlFor="restaurant-select">Filter Restaurants</label>
                            <select
                                id="restaurant-select"
                                value={selectedRestaurant}
                                onChange={(e) => setSelectedRestaurant(e.target.value)}
                                className="px-4 py-2 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select a restaurant</option>
                                {restaurants.map((restaurant) => (
                                    <option key={restaurant.id} value={restaurant.id}>{restaurant.restaurantName}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="category-select">Category</label>
                            <select
                                id="category-select"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-2 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select a category</option>
                                {[...new Set(foods.map(food => food.category))].map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="location-select">Location</label>
                            <select
                                id="location-select"
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="px-4 py-2 w-full rounded text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select a location</option>
                                {[...new Set(restaurants.map(restaurant => restaurant.location))].map((location) => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {filteredFoods.length > 0 ? (
                            filteredFoods.map((food) => (
                                <div key={food.id}>
                                    <FoodCard
                                        image={food.image}
                                        name={food.name}
                                        description={food.description}
                                        restaurantsName={food.restaurantName}
                                        location={food.location}
                                        isFree={food.isFree}
                                        available={food.availability}
                                        freeDelivery={food.freeDelivery}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No foods available for the selected filters.</p>
                        )}
                    </div>
                </div>
            </AppSidebar>
        </>
    )
}

export default FoodsList