import React, { useState } from "react";
import Container from "../common/Container";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../../features/cart/cartSlice";
import { FaTrash, FaShoppingBag, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useToast } from "../common/Toast";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const { addToast } = useToast() || { addToast: () => {} };

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [checkedOut, setCheckedOut] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "OREBI10") {
      setDiscount(totalAmount * 0.1);
      addToast?.("Promo code OREBI10 applied (10% OFF)!", "success");
    } else {
      addToast?.("Invalid promo code. Try 'OREBI10'", "error");
    }
  };

  const finalTotal = Math.max(0, totalAmount - discount);

  const handleCheckout = () => {
    if (items.length === 0) return;
    setCheckedOut(true);
    dispatch(clearCart());
    addToast?.("Order placed successfully! Thank you for shopping with Orebi.", "success");
  };

  if (checkedOut) {
    return (
      <div className="py-20 bg-gray-50 dark:bg-slate-900 min-h-screen flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl text-center shadow-xl border border-gray-100 dark:border-slate-700 space-y-4">
            <FaCheckCircle className="text-6xl text-emerald-500 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Order Confirmed!</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We have received your order. A confirmation receipt has been sent to your email.
            </p>
            <Link
              to="/shop"
              onClick={() => setCheckedOut(false)}
              className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <Container>
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/shop"
            className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <FaArrowLeft className="text-xs" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white">Shopping Cart</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {items.length} product(s) in your basket
            </p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-16 text-center border border-gray-100 dark:border-slate-700/60 shadow-sm max-w-xl mx-auto space-y-4">
            <FaShoppingBag className="text-6xl text-gray-300 dark:text-gray-600 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Cart is Empty</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Looks like you haven't added any products to your shopping cart yet.
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              Explore Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Items Table */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-slate-700 text-xs uppercase font-bold text-gray-400 tracking-wider">
                      <th className="pb-4">Product</th>
                      <th className="pb-4">Price</th>
                      <th className="pb-4">Quantity</th>
                      <th className="pb-4 text-right">Total</th>
                      <th className="pb-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-700/50 text-sm">
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-14 h-14 object-contain rounded-xl bg-gray-50 dark:bg-slate-900 p-1 border dark:border-slate-700"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">
                                {item.title}
                              </h4>
                              <span className="text-xs text-gray-400">{item.category}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 font-medium text-gray-700 dark:text-gray-300">
                          ${Number(item.price).toFixed(2)}
                        </td>
                        <td className="py-4">
                          <div className="flex items-center border border-gray-200 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-900 w-max overflow-hidden">
                            <button
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                              className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 font-bold text-gray-900 dark:text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                              className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-right font-bold text-gray-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="p-2 text-gray-400 hover:text-rose-500 transition-colors"
                          >
                            <FaTrash className="text-sm" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="px-4 py-2 border border-rose-200 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 rounded-xl text-xs font-semibold hover:bg-rose-50 dark:hover:bg-rose-950/30"
                >
                  Clear Cart
                </button>
                <Link
                  to="/shop"
                  className="text-xs font-semibold text-gray-700 dark:text-gray-300 underline underline-offset-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-gray-100 dark:border-slate-700/60 shadow-sm space-y-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-slate-700 pb-4">
                  Order Summary
                </h3>

                {/* Promo Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Promo Code (Try OREBI10)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="OREBI10"
                      className="flex-1 px-3 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none uppercase font-bold"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-semibold hover:opacity-90"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-slate-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900 dark:text-white">${totalAmount.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-emerald-500 font-bold">Free</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white pt-3 border-t border-gray-200 dark:border-slate-700">
                    <span>Grand Total</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-lg">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl text-sm hover:opacity-90 transition-opacity shadow-xl"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

          </div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
