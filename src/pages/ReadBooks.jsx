import { IoLocationSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineContactPage } from "react-icons/md";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ReadBooks = () => {
    const [sortingOption, setSortingOption] = useState('');

  useEffect(() => {
    const savedSortingOption = localStorage.getItem('sortingOption');
    if (savedSortingOption) {
      setSortingOption(savedSortingOption);
    }
  }, [sortingOption]);

  const getin = JSON.parse(localStorage.getItem("readList"));
  
  const sortBooks = (books) => {
    switch (sortingOption) {
      case 'rating':
        return books.sort((a, b) => b.rating - a.rating);
      case 'number of pages':
        return books.sort((a, b) => a.totalPages - b.totalPages);
      case 'published year':
        return books.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      default:
        return books;
    }
  };

  console.log(sortingOption)

  // Sort books whenever sorting option changes
//   const sortedBooks = sortBooks(getin);


const sortedBooks =    sortBooks(getin);

    console.log(getin)

  return (
    <div className="my-5 space-y-3">
        {sortedBooks ? sortedBooks.map((item)  => (
        <div className="p-4 border border-gray-400 rounded-lg flex flex-col md:flex-row gap-5" key={item.bookId}>
        <div className="p-5 bg-gray-200 rounded-lg basis-2/12">
            <img src={`${item.image}`} alt="" className="mx-auto"/>
        </div>
        <div className="w-full">
            <h1 className="text-2xl font-bold">{item.bookName}</h1>
            <p className="font-semibold">By : {item.author}</p>
            <div className="flex flex-wrap gap-5 items-center my-2">
                <h1 className="font-bold">Tag</h1>
                <div className="px-4 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">
                    {item.tags[0]}
                </div>
                <div className="px-4 py-1 bg-[#22be0a1f] text-green font-semibold rounded-md">
                {item.tags[1]}
                </div>
                <div className="flex gap-1 items-center">
                    <IoLocationSharp fontSize={20}/>
                    <p>Year of Publishing: {item.yearOfPublishing}</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex gap-1 items-center">
                    <HiUserGroup fontSize={20}/>
                    <p>Publisher: {item.publisher}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <MdOutlineContactPage fontSize={20}/>
                    <p>Page {item.totalPages}</p>
                </div>
            </div>
            <hr className="border w-full border-gray-300 my-4"/>
            <div className="flex gap-5">
                <Button text={`Category: ${item.category}`} bgColor={"bg-[#328eff25]"} textColor={"text-[#328EFF]"}/>
                <Button text={`Rating: ${item.rating}`} bgColor={"bg-[#ffad3328]"} textColor={"text-[#FFAC33]"}/>
                <Link to={`/details/${item.bookId}`}><Button text={"View Details"} bgColor={"bg-green"} textColor={"text-white"}/></Link>
            </div>
        </div>
      </div>
      )) : <h1>No Book Added</h1>} 
      
      


    </div>
  )
}

export default ReadBooks
