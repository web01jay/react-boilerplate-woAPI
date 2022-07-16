import React from 'react'
import Loader from '../../../components/Loader'
import HomeViewModal from '../../../viewmodals/Visitor/Home'

const Home = () => {
  const { loading, navigateAbout } = HomeViewModal()
  return (
    <>
    {loading ? <Loader /> : (

      <div>
        Home
        <br />
        <br />
        <button className='btn btn-primary' onClick={()=>{navigateAbout()}}>About</button>
      </div>
    )}
    </>
  )
}

export default Home