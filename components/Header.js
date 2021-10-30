import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, BackspaceIcon} from '@heroicons/react/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';


function Header({placeholder}) {

   // init router
   const router = useRouter();
   const search = () => {
     router.push({
       pathname: "/search",
       query: {
         location: searchInput,
         startDate: startDate.toISOString(),
         endDate: endDate.toISOString(),
         numberGuest,

       }
     });
   }

  // init seach input
  const [searchInput, setSearchInput] = useState('');

  // Calendar init
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // init number of guests to 1
  const [numberGuest, setNumberGuest] = useState(1);

 

  // reset search input field
  const resetInputs =() => {
    setSearchInput("");
  }

  // calendar init the day it start to the last day selected
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate)
  }
  // calendar init the day it start to the last day selected
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }



  return (

    <header className="sticky top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 z-50">
        {/* Logo Airbnb */}
        <div
        onClick={() => router.push("/")} 
        className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          />
        </div>

        {/* 🔎 🔎 🔎 🔎 🔎 SearchBar 🔎 🔎 🔎 🔎 🔎*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input 
          type="text" 
          placeholder={placeholder || "rechercher"} 
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
          // ↧↧↧↧ search on change record with useState ↧↧↧↧
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput && (
            <BackspaceIcon className="h-6 text-gray-300" onClick={resetInputs}/>
          )}
          
          <SearchIcon onClick={search} className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2"/>
        </div>

        {/* Side Menu */}
        <div className="flex items-center justify-end space-x-4 text-gray-400">
          <p className="hidden md:inline-flex cursor-pointer">Devenez hôte</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>

          <div className="flex border-2 rounded-full p-2 space-x-2">
            <MenuIcon className="h-6 cursor-pointer"/>
            <UserCircleIcon className="h-6 cursor-pointer"/>
          </div>
        </div>

        {/* ↧↧↧↧↧ conditional rending search result ↧↧↧↧↧↧ */}
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker 
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">Nombre de voyageurs.</h2>
              <UserCircleIcon className="h-5"/>
              <input 
              type="number" 
              value={numberGuest}
              onChange={(e) => setNumberGuest(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"/>
            </div>
            <div className="flex">
              <button className="flex-grow" onClick={resetInputs}>Supprimer</button>
              <button onClick={search} className="flex-grow text-red-400 font-semibold">
                <span className="border-2 border-red-400 px-4 py-2 rounded-full">Rechercher</span>
              </button>
            </div>
          </div>
        )}

    </header>

  )
}

export default Header;
