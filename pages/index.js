import Head from 'next/head'
import NavBar from '../components/NavBar'
import Register from '../components/Register'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Register</title>
      </Head>
      <NavBar/>
      <Register/>

    </div>
  )
}
