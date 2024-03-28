import { useEffect, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(1)

  const [sortingOption, setSortingOption] = useState('');

  useEffect(() => {
    const savedSortingOption = localStorage.getItem('sortingOption');
    if (savedSortingOption) {
      setSortingOption(savedSortingOption);
    }
  }, [sortingOption]);

  const handleChange = (e) => {
    window.location.reload();
    const selectedOption = e.target.value;
    setSortingOption(selectedOption);
    localStorage.setItem('sortingOption', selectedOption);
  };


  return (
    <div className="container px-2 md:px-6">
     <div className="py-6 bg-gray-200">
      <h1 className="text-2xl text-center font-semibold rounded-lg">Books</h1>
     </div>
     <div>
        <div className="w-full flex justify-center mt-5">
          <div className="bg-green inline-block px-4 py-2 rounded-lg">
            <select value={sortingOption} onChange={handleChange} name="" id="" className="bg-transparent cursor-pointer outline-none text-white font-semibold">
              <option value="" className="text-black">Sort</option>
              <option value="rating" className="text-black">Rating</option>
              <option value="number of pages" className="text-black">Number of Pages</option>
              <option value="published year" className="text-black">Published  year</option>
            </select>
          </div>
        </div>
     </div>


     <div>
        <div className=" flex relative mt-5 md:mt-2">
            <NavLink to={"/listedbooks"} onClick={() => setTabIndex(1)} className={tabIndex === 1 ? "text-xl font-semibold py-2 px-4 border-2 rounded-tl-lg rounded-tr-lg border-r-gray-400 border-t-gray-400 border-l-gray-400 border-b-white z-50" : "text-xl font-semibold py-2 px-4"}>Read Books</NavLink>
            <NavLink to={"/listedbooks/wishlist"} onClick={() => setTabIndex(2)} className={tabIndex === 2 ? "text-xl font-semibold py-2 px-4 border-2 rounded-tl-lg rounded-tr-lg border-r-gray-400 border-t-gray-400 border-l-gray-400 border-b-white z-50" : "text-xl font-semibold py-2 px-4"}>Wishlist Books</NavLink>
            
            <hr className="border-[1px] w-full border-gray-400 absolute bottom-0"/>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
     </div>

    </div>
  )
}

export default ListedBooks
