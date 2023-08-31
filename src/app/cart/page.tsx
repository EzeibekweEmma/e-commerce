"use client";

import React from "react";
import { useStore } from "@/store/store";
import { StoreProduct } from "../../../type";
import CartProduct from "./CartProduct";
import Link from "next/link";
import ResetCart from "./ResetCart";
/**
 * Cart component displays the user's shopping cart with a list of cart items.
 */
const Cart = () => {
    const cart = useStore((state) => state.cart);
    const cartQuantity = useStore((state) => state.cartQuantity);

    return (
        <main className="max-w-screen-2xl mx-auto px-6 grid grid-cols-7 gap-10 py-4">
            {cart.length > 0 ? (
                <section className="bg-white col-span-5 p-4 rounded-lg">
                    <div
                        className="flex items-center justify-between border-b-2
                         border-b-gray-400 pb-1 text-gray-700"
                    >
                        <p className="font-semibold text-lg">
                            Shopping Cart ({cartQuantity})
                        </p>
                        <p className="font-semibold">Subtotal</p>
                    </div>

                    {cart.map((item: StoreProduct) => (
                        <div
                            key={item._id}
                            className="pt-2 flex flex-col gag-2"
                        >
                            <CartProduct item={item} />
                        </div>
                    ))}
                    <ResetCart />
                </section>
            ) : (
                <section
                    className="bg-white h-52 col-span-7 flex flex-col py-5 rounded-lg
                items-center justify-center shadow-lg"
                >
                    <h1 className="text-lg font-semibold">
                        Nothing is in your cart!
                    </h1>
                    <Link
                        href="/"
                        className="text-sm text-green-600 underline p-2"
                    >
                        Back to shopping
                    </Link>
                </section>
            )}
        </main>
    );
};

export default Cart;
