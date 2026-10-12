import { useState } from "react";

interface productType {
    // id: number,
    name: string,
    price: number,
    image: string
};

const ProductCard: React.FC<productType> = ({ name, price, image }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    }
    return (
        <div className="rounded-lg shadow-lg p-4 my-4 bg-white">
            {/* Use this wrapper version as it is a better practice to have a wrapper div for the image and the content below it. This allows for better styling and layout control. */}
            <div className="relative w-full h-48">
                {!imageLoaded && (
                    <div className="animate-pulse absolute inset-0 rounded-md bg-gray-200"></div>
                )}
                <img src={image} alt={name} className={`h-full w-full rounded-md object-contain  transition-opacity duration-100 ${imageLoaded ? "opacity-100" : "opacity-0"}`} onLoad={handleImageLoad} />
            </div>
            {/* <img src={image} alt={name} className="h-48 w-full rounded-md object-contain border-2 border-red-600" /> */}
            <div className="flex justify-between items-center mt-1">
                <div className="">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className=" text-gray-600">${price}</p>
                </div>
                <button className="bg-sky-500 px-4 py-2 rounded text-gray-100 hover:bg-sky-600 transition-colors duration-300 text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard