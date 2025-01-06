import CartRow from '../../../components/CartRow/CartRow';
import DashboardRoutes from '../../../components/DashboardRoutes/DashboardRoutes';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Spinner from '../../../components/Spinner/Spinner';
import useCart from '../../../hooks/useCart';

const Cart = () => {
    const [cart, isPending, isError, error, refetch] = useCart();

    return (
        <section>
            <DashboardRoutes />

            <div className='container mx-auto px-6 py-12'>
                <SectionTitle sub_title="My Cart" title="Wanna Add More?" />

                <section className="container px-4 mx-auto">
                    {/* cart header (table) */}
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-x-3 mb-1">
                                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total orders:</h2>

                                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{cart.length > 0 ? cart.length : 0}</span>
                            </div>

                            <div className="flex items-center gap-x-3">
                                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total price:</h2>

                                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">$ {cart.length > 0 ? cart.reduce((total, item) => total + item?.price, 0).toFixed(2) : 0}</span>
                            </div>
                        </div>

                        <button className="border border-blue-600 outline-none rounded-md px-4 py-1.5 text-blue-600 text-sm hover:bg-blue-100 active:bg-white">Pay</button>
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>Name</span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Price</span>
                                                    </button>
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Category</span>
                                                    </button>
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Email address</th>

                                                <th scope="col" className="relative py-3.5 px-4">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {
                                                isPending ? (
                                                    <Spinner />
                                                ) : isError ? (
                                                    <div className='w-full py-10 flex items-center justify-center'>
                                                        <h1 className='text-2xl font-medium text-red-500'>{error?.message}</h1>
                                                    </div>
                                                ) : (
                                                    cart?.map(item => <CartRow key={item?._id} item={item} />)
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Cart;