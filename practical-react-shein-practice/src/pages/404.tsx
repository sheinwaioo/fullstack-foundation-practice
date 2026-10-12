import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="flex grow border-2 border-blue-600 items-center bg-gray-100">
            <div className=" border-2 border-red-600 container mx-auto text-center p-8 md:text-left" >
                <h2 className="font-bold text-6xl mb-4 text-gray-800">404</h2>
                <p className="mb-8 text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded shadow ">Go Back Home</Link>
            </div>
        </section>

        // <section className="flex grow border-2 border-blue-600 items-center bg-gray-100">
        //     <div className="md:items-start flex flex-col gap-4 items-center container mx-auto border-2 border-red-600 p-8 text-center" >
        //         <h2 className="font-bold text-6xl">404</h2>
        //         <p className=" text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        //         <Link to="/" className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded shadow ">Go Back Home</Link>
        //     </div>
        // </section>
    )
}

export default NotFound;