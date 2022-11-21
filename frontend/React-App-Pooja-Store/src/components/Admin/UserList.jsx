import React from 'react'
import Sidebar from '../../components/Admin/Dashboard/Sidebar'

function UserList() {
    return (

        <>
            <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6 border-r-0">
                <section class="sidebar md:col-span-1 "> <Sidebar /></section>

                <div class="overflow-x-auto relative sm:rounded-lg border-l-0 ">
                    <h1 className='flex justify-center font-bold mt-20 text-[40px]'>All Users</h1>
                    <table class="w-full mt-20 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                    Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                    Phone Number
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Image
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Apple MacBook Pro 17"
                                </td>
                                <td class="py-4 px-6">
                                    Sliver
                                </td>
                                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                                    Laptop
                                </td>
                                <td class="py-4 px-6">
                                    $2999
                                </td>
                                <td>
                                    <button className='m-5'>Block & unblock</button>
                                   
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


                <div className="  ">

                </div>
            </div>
        </>
    )
}

export default UserList