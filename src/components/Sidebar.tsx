import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <span className="w-[20%] -mt-14 rounded-lg bg-[#0D1218] shadow-good flex justify-center">
        <div className="flex flex-col my-auto gap-10 font-good font-bold">
          <Link href="/">
            <FontAwesomeIcon icon={faHouseChimney} /> Home{' '}
          </Link>
          <Link href="/"> Movies </Link>
          <Link href="/"> TV Shows </Link>
          <Link href="/"> Calendar </Link>
          <Link href="/"> Account </Link>
        </div>
      </span>
    </>
  )
}

export default Sidebar
