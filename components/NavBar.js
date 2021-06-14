import Image from 'next/image'
import Link from 'next/link'
function NavBar() {
    return (
        <div className="flex ml-32 mr-32">
          <Image
            src="/images/logo.png"
            width={86}
            height={86}
          />  
          <ul className="flex w-1/3 justify-between m-auto">
              <li>
                  <Link href="/">
                      <a className="font-semibold">Courses</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a className="font-semibold">Tools</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a className="font-semibold">For Students</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a className="font-semibold">Help</a>
                  </Link>
              </li>
              
          </ul>
          <input className="px-10 py-4 m-auto bg-white  border rounded-2xl h-14  hover:bg-blue-600 cursor-pointer hover:text-white" type="button" value="Login"/>
            
        </div>
    )
}

export default NavBar
