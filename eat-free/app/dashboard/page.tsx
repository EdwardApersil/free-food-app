import AppSidebar from "@/components/app-sidebar"
import ListOfOrders from "@/components/ListofOrder"
import MostOrderedFood from "@/components/mostOrdered"

const MainHome = () => {
    return (
        <div className="">

            <div>
                <AppSidebar pageTitle="Hell">
                    <div className="dashboard flex flex-1 flex-col gap-8 p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-4 my-4">
                            <div className="aspect-video shadow-md rounded-xl bg-muted/50" >
                                <div className="card p-10">
                                    <h3 className="text-xl font-semibold text-green-500 mb-2">Total Revenue</h3>
                                    <p className="text-2xl font-bold text-gray-700">$1,234,567</p>
                                </div>
                            </div>
                            <div className="aspect-video shadow-md rounded-xl bg-muted/50" >
                                <div className="card p-10">
                                    <h3 className="text-xl font-semibold text-green-500 mb-2">Total Orders</h3>
                                    <p className="text-2xl font-bold text-gray-700">12,345</p>
                                </div>
                            </div>
                            <div className="aspect-video shadow-md rounded-xl bg-muted/50" >
                                <div className="card p-10">
                                    <h3 className="text-xl font-semibold text-green-500  mb-2">Total Customers</h3>
                                    <p className="text-2xl font-bold text-gray-700">8,765</p>
                                </div>
                            </div>
                            <div className="aspect-video shadow-md rounded-xl bg-muted/50" >
                                <div className="card  p-10">
                                    <h3 className="text-xl font-semibold text-green-500  mb-2">Total Products</h3>
                                    <p className="text-2xl font-bold text-gray-700">1,234</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex-1 rounded-xl bg-muted/50 md:min-h-min p-5 my-10">
                            <ListOfOrders />
                            <MostOrderedFood />
                        </div>
                    </div>
                </AppSidebar>
            </div>
        </div>
    )
}


export default MainHome