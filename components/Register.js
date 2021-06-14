import Image from 'next/image'
function Register() {
    return (
        <div className="flex">
         <div className="w-1/2">
             <h1 className='ml-48 mb-9 font-serif mt-6 text-3xl tracking-widest'>Register</h1>
             <input className="border ml-48 rounded-m w-80 rounded h-10 mb-9 p-2" type="text" placeholder="Name"/>
             <br/>
             <input className="border mb-9 ml-48 w-80 h-10 p-2" type="email" placeholder="Email"/>
             <br/>
             <input className="border mb-9 ml-48 w-80 h-10 p-2" type="password" placeholder="Password"/>
             <br/>
             <button type="submit" className="border mb-9 ml-48 w-80 h-10 p-2 bg-blue-700 text-white font-bold">Register</button>
             <div className="ml-48 w-80 flex">
                 <hr className="w-1/3"/>
                 <p className="w-2/3 text-center -mt-3 h-14">OR</p>
                 <hr className="w-1/3"/>
             </div>
             <button className="w-80 flex mb-9 h-10 p-2 ml-48 border"><img className="w-4 ml-4 mt-1 mr-6" src="/images/google.png"/>Register with Google</button>
             <button className="w-80 bg-blue-500 text-white  flex h-10 p-2 ml-48 border"><img className="w-4  ml-4 mt-1 mr-6" src="/images/twitter (1).png"/>Register with twitter</button>
         </div>
         <div className="w-2/4">
             <div className="mt-44">
             <div className="ml-28">
             <Image
                src="/images/Shape-2.png"
                width={200}
                height={200}
             />
             <Image
                src="/images/Shape.png"
                width={200}
                height={200}
             />
             </div>
             <div className="ml-52 -mt-24">
             <Image
                src="/images/woman.png"
                width={200}
                height={200}
                className="mr-72"
             />
             </div>
         </div>
         </div>
        </div>
    )
}

export default Register
