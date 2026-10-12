function Cart() {
    return (
        // <div className="flex flex-col grow  items-center mt-6 border-2 border-red-500">
        //     <h2 className="font-bold text-3xl">Shopping Cart</h2>
        //     <p className="text-gray-900">Your cart is empty</p>
        // </div>
        <section className="flex grow bg-gray-100 border-2 border-blue-600" >
            <div className="border-2 border-red-500 container mx-auto text-center p-8 md:text-left">
                <h2 className="text-3xl font-bold">Shopping Cart</h2>
                <p>Your cart is empty</p>
            </div>
        </section>
    );
}

export default Cart;