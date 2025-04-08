import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store.ts"
import SearchBar from "./SearchBar";

const Header = ()=>{
    const cartItems = useSelector((state: RootState) => state.cart)
    const navigate = useNavigate();
    const handleViewCartClick = () =>{
        navigate('/cart');
    }
    const cartItemCount = cartItems.length;
    return (<>
        <div className="border-b">
            <div className="flex ml-[135px] mt-2 mb-2 items-center">
                <Link to="/" className="font-Inter font-bold text-2xl mr-48" >
                    <img src= "assets/images/png/landingPage/EIcon.png" className="w-20 h-20"/>
                </Link>
                <div className=" font-semibold text-sm flex justify-around gap-x-12 mr-36">
                    <Link to="/" className="hover:underline underline-offset-4">
                        Home
                    </Link>
                    <Link to="/contact" className="hover:underline underline-offset-4">
                        Contact
                    </Link>
                    <Link to="/about" className="hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link to="/sign-up" className="hover:underline underline-offset-4">
                        Sign Up
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <SearchBar />
                    <img  src="/assets/images/svg/landingPage/heart.svg" alt="Heart Img" className="w-7 h-7 cursor-pointer" />
                    <div className="relative">
                        <img onClick={handleViewCartClick} src="/assets/images/svg/landingPage/cart.svg" alt="Cart Img" className="w-8 h-8 cursor-pointer" />
                        {cartItemCount > 0 && (
                            <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                                {cartItemCount}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Header;