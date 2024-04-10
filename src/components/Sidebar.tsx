import { faFilm, faHouseChimney, faTv } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <div className="relative w-[20%] flex ">
        <span className="fixed rounded-lg bg-[#0D1218] shadow-good justify-center w-[20%] flex h-[90%]">
          <div className="flex flex-col my-auto gap-10 font-good font-bold">
            <Link href="/" className="flex flex-row gap-4">
              <FontAwesomeIcon icon={faHouseChimney} className="w-5 h-5" /> Home
            </Link>
            <Link href="/" className="flex flex-row gap-4">
              <FontAwesomeIcon icon={faFilm} className="w-5 h-5" /> Movies
            </Link>
            <Link href="/" className="flex flex-row gap-4">
              <FontAwesomeIcon icon={faTv} className="w-5 h-5" /> TV Shows
            </Link>
            <Link href="/" className="flex flex-row gap-4">
              <FontAwesomeIcon icon={faCalendar} className="w-5 h-5" /> Calendar
            </Link>
            <Link href="/" className="flex flex-row gap-4">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5" /> Account
            </Link>
          </div>
        </span>
      </div>
    </>
  )
}

export default Sidebar
