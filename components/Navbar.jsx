import React from 'react'
import { FaBookReader } from 'react-icons/fa'
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full h-20 dark:shadow-red  dark:shadow-2xl">
            <div className="flex pl-8">
                <FaBookReader size={28} />
                <p className="hidden text-lg pt-1 sm:block pl-2 font-bold text-inherit">EduHub</p>
            </div>
            <div className="flex items-center justify-center">
                SearchBar
            </div>
            <div className="right-0 pr-6 flex gap-4">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar