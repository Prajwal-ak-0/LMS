import { FaBookReader } from "react-icons/fa";

const AuthLayout = ({
    children
}) => {
    return (
        <div>
            <div className=" items-center justify-center flex py-4 sm:py-12 px-6 md:px-10 h-16 shadow-md">
                <FaBookReader size={36} />
                <p className="hidden text-xl pt-2 sm:block pl-2 font-bold text-inherit">EduHub</p>
            </div>
            <h1 className=" text-center px-2 sm:py-4 py-8 pb-16 text-4xl ">
                "Unlock the Power of Knowledge with <span className=" font-bold " >EduHub</span>"
            </h1>
            <div className="flex">
                <div className="w-full mb-10 flex flex-col pt-8 items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;