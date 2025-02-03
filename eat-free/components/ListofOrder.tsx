'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const ListOfOrders = () => {
    interface Order {
        name: string;
        userLocation: string;
        status: string;
        date: string;
        orderId: string;
        id: string;
    }
    const [orderTable, setOrderTable] = useState<Order[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)


    orderTable.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/orders')
                const sortedOrders = response.data.sort((a: Order, b: Order) => new Date(b.date).getTime() - new Date(a.date).getTime()); setOrderTable(response.data)
                console.log(sortedOrders)
                setOrderTable(sortedOrders)
                setTotal(sortedOrders.length)
                setLoading(false)
            } catch (error) {
                setError(`Error fetching orders: ${error}`)
                setLoading(false)
            }
        }

        fetchData()
    }, [])


    return (
        <>
            {/* display the order in a table form */}
            <div className="bg-white rounded-sm shadow-md p-9">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <h3 className="text-2xl font-bold py-4">Recent ordered food</h3>
                <Table>
                    <TableCaption>A list of your recent orders.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Order Number</TableHead>
                            <TableHead className="text-right">Date</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orderTable.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.name}</TableCell>
                                <TableCell>{order.userLocation}</TableCell>
                                <TableCell>{order.orderId}</TableCell>
                                <TableCell className="text-right">{order.date}</TableCell>
                                <TableCell className="text-right">{order.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">{total}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>

        </>
    )
}

export default ListOfOrders;