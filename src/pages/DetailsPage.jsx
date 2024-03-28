import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsPage = () => {
  const {id} = useParams()
  const [data, setData] = useState([])
  const [readList, setReadList] = useState([])
  const [wishList, setWishList] = useState([])
  useEffect(() => {
    fetch("/Data.json")
    .then((response) => response.json())
    .then((data) => setData(data))
}, [])
const handleReadList = (item) => {
  const existingReadList = JSON.parse(localStorage.getItem("readList")) || [];
  
  const isNewArrayIncluded = existingReadList.some(book => book.bookId === item.bookId);
  
  if (isNewArrayIncluded) {
    console.log("The new array is already included in the main array.");
    toast("Already Added")
  } else {
    const updatedReadList = [...existingReadList, item];
    
    setReadList(updatedReadList);
    
    localStorage.setItem("readList", JSON.stringify(updatedReadList));
    
    toast("Added")
  }
}

const handleWishList = (item) => {
  const existingWishList = JSON.parse(localStorage.getItem("wishList")) || [];
  
  const isNewArrayIncluded = existingWishList.some(book => book.bookId === item.bookId);
  const isNewArrayIncluded2 = readList.some(book => book.bookId === item.bookId);
  
  if (isNewArrayIncluded) {
    console.log("The new array is already included in the main array.");
    toast("Already Added")
  } else if(isNewArrayIncluded2){
    toast("You added this in read list")
  } else {
    const updatedWishList = [...existingWishList, item];
    
    setWishList(updatedWishList);
    
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    
    toast("Added")
  }
}

// useEffect(() => {
//   // Store updated readList in localStorage
//   localStorage.setItem("readList", JSON.stringify(readList));
// }, [readList]);


  const book = data.find(book => book.bookId === parseInt(id, 10));  
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container px-2 md:px-6 mx-auto">
      <div className={`bg-white`}>
                    <div className="mt-5">
                        <div className="flex justify-end">
                        </div>
                        <div className="flex mt-10 flex-col md:flex-row h-full">
                            <div className="basis-2/5 flex justify-center">
                                <div className="w-full h-96">
                                <img src={`${book.image}`} alt="" className="h-full mx-auto"/>
                                </div>
                            </div>
                            <div className="basis-3/5">
                                <h1 className="text-[2.1rem] font-semibold mb-2">{book.bookName}</h1>
                                <h3 className="text-xl font-semibold">By : {book.author}</h3>
                                <hr className="w-full border border-gray-300 my-2"/>
                                <h1 className="font-semibold text-lg">{book.category}</h1>
                                <hr className="w-full border border-gray-300 my-2"/>
                                <h3><span className="font-bold">Review:</span> <span>{book.review}</span></h3>
                                <div className="flex gap-4 mt-5">
                                    <h1>Tag</h1>
                                    <div className="px-2 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">
                                        {book.tags[0]}
                                    </div>
                                    <div className="px-2 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">
                                        {book.tags[1]}
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
                                <div className="flex gap-5 mt-4">
                                <button className="px-4 border py-1 border-gray-500 rounded-md" onClick={() => handleReadList(book)}>Read</button>
                                <button onClick={() => handleWishList(book)} className="px-4 text-white py-1 bg-lightGreen rounded-md">Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
    </div>
  )
}

export default DetailsPage
