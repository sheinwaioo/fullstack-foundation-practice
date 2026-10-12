import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="flex grow items-center bg-gray-100 ">
            <div className="p-8 text-center md:text-left container mx-auto">
                <h1 className="font-bold mb-4 text-3xl md:text-5xl">Welcome to Our Fashion Shop</h1>
                <p className="mb-8 text-lg text-gray-700 md:text-xl">This is a simple landing page build with React and TypeScript and Tailwind CSS.</p>
                <Link to="/shop" className="bg-sky-600 px-6 py-3 text-white rounded-md hover:bg-sky-700 shadow">Get Started</Link>
            </div>
        </section>
    );
}

export default Home;