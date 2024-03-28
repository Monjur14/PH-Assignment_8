import { useState } from "react"
import { SlClose } from "react-icons/sl";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Card = ({img, tag1, tag2, name, writer, category, rating, review, book }) => {
    const [details, setDetails] = useState(false)
    const toggleDetails = () => {
        setDetails(!details)
    }
  return (
    <Link to={`/details/${book.bookId}`} className=" border border-gray-300 p-5 rounded-lg cursor-pointer" onClick={toggleDetails}>
                <div className=" h-56 bg-gray-200 rounded-lg flex justify-center items-center" >
                    <img src={`${img}`} alt="" />
                </div>
                <div className="flex mt-3 gap-3">
                    <div className="px-2 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">
                        {tag1}
                    </div>
                    <div className="px-2 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">
                        {tag2}
                    </div>
                </div>
                <h1 className="text-2xl font-semibold h-20 my-3">{name}</h1>
                <h3 className="text-xl font-semibold">By : {writer}</h3>
                <div className="flex justify-between mt-5">
                    <h1 className="font-semibold text-lg">{category}</h1>
                    <div className="text-lg font-semibold flex gap-2 items-center">
                        <p>{rating}</p>
                        <img src="/src/assets/star.png" alt="" />
                    </div>
                </div>
                {/* <div className={`${details ? "fixed" : "hidden"} bg-white shadow-2xl py-3 px-3 rounded-lg w-full h-fit top-0 left-0 mx-auto`}>
                    <Navbar/>
                    <div className="mt-5">
                        <div className="flex justify-end" onClick={toggleDetails}>
                            <SlClose fontSize={35}/>
                        </div>
                        <div className="flex mt-10 h-full">
                            <div className="basis-2/5 flex justify-center">
                                <div className="w-full h-96">
                                <img src={`${img}`} alt="" className="h-full mx-auto"/>
                                </div>
                            </div>
                            <div className="basis-3/5">
                                <h1 className="text-[2.1rem] font-semibold mb-2">{name}</h1>
                                <h3 className="text-xl font-semibold">By : {writer}</h3>
                                <hr className="w-full border border-gray-300 my-2"/>
                                <h1 className="font-semibold text-lg">{category}</h1>
                                <hr className="w-full border border-gray-300 my-2"/>
                                <h3><span className="font-bold">Review:</span> <span>{review}</span></h3>
                                <div className="flex gap-4 mt-5">
                                    <h1>Tag</h1>
                                    <div className="px-2 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">
                                        {tag1}
                                    </div>
                                    <div className="px-2 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">
                                        {tag2}
                                    </div>
                                </div>
                                <hr className="w-full border border-gray-300 mt-3 mb-2"/>
                                <div>
                                    <div className="flex w-full">
                                        <p className="basis-2/5">Number of Pages:</p>
                                        <p>{book.totalPages}</p>
                                    </div>
                                    <div className="flex w-full">
                                        <p className="basis-2/5">Publisher:</p>
                                        <p>{book.publisher}</p>
                                    </div>
                                    <div className="flex w-full">
                                        <p className="basis-2/5">Year of Publishing:</p>
                                        <p>{book.yearOfPublishing}</p>
                                    </div>
                                    <div className="flex w-full">
                                        <p className="basis-2/5">Rating:</p>
                                        <p>{book.rating}</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 mt-2">
                                <button className="px-4 border py-1 border-gray-500 rounded-md">Read</button>
                                <button className="px-4 text-white py-1 bg-lightGreen rounded-md">Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Link>
  )
}

export default Card
