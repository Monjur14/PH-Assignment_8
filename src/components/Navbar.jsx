import { Link, NavLink } from "react-router-dom"
import Button from "./Button"
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const toggleNav = () => {
    setToggle(!toggle)
  }
  return (
    <div className="container relative mx-auto px-2 lg:px-6 py-2 flex justify-between items-center">
      <Link to={"/"} className="text-[2rem] cursor-pointer font-bold">Book<span className="text-green">Shop</span></Link>
      <ul className="hidden md:flex text-lg gap-3 font-semibold">
        <NavLink to="/" className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>Home</NavLink>
        <NavLink to="/listedbooks" className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>Listed Books</NavLink>
        <NavLink to="/pagetoread" className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>Page to Read</NavLink>
         
        <NavLink to="/faq" className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>FAQ</NavLink>
        <NavLink to="/contactus" className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>Contact Us</NavLink>
      </ul>
      <div className="text-lg gap-3 hidden md:flex">
        <Button bgColor="bg-green" textColor={"text-white"} text={"Sign In"}></Button>
        <Button bgColor={"bg-lightGreen"} textColor={"text-white"} text={"Sign Up"}></Button>
      </div>
      <div className="cursor-pointer block md:hidden">
        <RxHamburgerMenu onClick={toggleNav} fontSize={36}/>
      </div>


      <div className={`${toggle ? "block" : "hidden"} w-full h-screen bg-white top-0 fixed py-2 px-2`}>
        <div className="flex justify-end cursor-pointer">
          <MdOutlineClose onClick={toggleNav} fontSize={50}/>
        </div>
        <div>
        <ul className="flex flex-col justify-center items-center  h-screen text-2xl gap-8 font-semibold">
          <NavLink to="/" onClick={toggleNav} className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>Home</NavLink>
          <NavLink to="/listedbooks" onClick={toggleNav} className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>Listed Books</NavLink>
          <NavLink to="/wanttoread" onClick={toggleNav} className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>Pages to Read</NavLink>
          <NavLink to="/faq" onClick={toggleNav} className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>FAQ</NavLink>
          <NavLink to="/contactus" onClick={toggleNav} className={({isActive}) => isActive ? "cursor-pointer px-3 py-1 rounded-md text-white bg-green" : "cursor-pointer px-3 py-1 rounded-md"}>Contact Us</NavLink>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
