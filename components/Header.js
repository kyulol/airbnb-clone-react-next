import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'

function Header() {
  return (

  <header className="sticky top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 z-50">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
        src="https://links.papareact.com/qd3"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input type="text" placeholder="rechercher" className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2"/>
      </div>

      <div className="flex items-center justify-end space-x-4 text-gray-400">
        <p className="hidden md:inline-flex cursor-pointer">Devenez hôte</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>

        <div className="flex border-2 rounded-full p-2 space-x-2">
          <MenuIcon className="h-6 cursor-pointer"/>
          <UserCircleIcon className="h-6 cursor-pointer"/>
        </div>
      </div>

  </header>

  )
}

export default Header;
