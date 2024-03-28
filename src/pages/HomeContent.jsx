import { Link, NavLink } from "react-router-dom"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import Card from "../components/Card"

const HomeContent = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("/Data.json")
        .then((response) => response.json())
        .then((data) => setBooks(data))
    }, [])
    
  return (
    <div className="container px-2 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-14 md:gap-0 mt-4 justify-between items-center py-10 md:py-20 px-6 md:px-14 bg-[#13131313] rounded-lg">
            <div className="basis-1/2">
                <h1 className="text-[3rem] leading-tight font-bold mb-4 md:mb-8">Books to freshen up your bookshelf</h1>
                <NavLink to={"/listedbooks"}><Button text={"View The List"} bgColor={"bg-green"} textColor={"text-white"}></Button></NavLink>
            </div>
            <div className="basis-1/2">
                <img src="/HeroImg.png" alt="" className="mx-auto"/>
            </div>
        </div>
        <h1 className="mt-20 mb-10 text-center text-4xl font-bold">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <div className="border border-gray-300 p-5 rounded-lg">
                <div className=" py-7 bg-gray-200 rounded-lg flex justify-center items-center" >
                    <img src="/src/assets/Book1.png" alt="" />
                </div>
                <div className="flex mt-3 gap-3">
                    <div className="px-2 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">Young Adult</div>
                    <div className="px-2 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">Identity</div>
                </div>
                <h1 className="text-2xl font-semibold my-3">The Catcher in the Rye</h1>
                <h3 className="text-xl font-semibold">By : Awlad Hossain</h3>
                <div className="flex justify-between mt-5">
                    <h1 className="font-semibold text-lg">Fiction</h1>
                    <div className="text-lg font-semibold flex gap-2 items-center">
                        <p>5.00</p>
                        <img src="/src/assets/star.png" alt="" />
                    </div>
                </div>
            </div> */}
            
            {
                books.map((book) => (
                    <Card key={book.bookId} img={book.image} name={book.bookName} tag1={book.tags[0]} tag2={book.tags[1]} writer={book.author} category={book.category} rating={book.rating} review={book.review} book={book}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default HomeContent
