import React from 'react'
import MainLayout from '../layouts/MainLayout';
import Room from './Room';
import HomeContent from './HomeContent';
const Home = () => {
  return (
    <MainLayout>
       {/* <h1 className="mt-3">Home</h1> */}
        <hr />
        <img src="/image/pro.jpg" width="1300" height="250" alt=""  />
        <HomeContent/>
    </MainLayout>
  )
}

export default Home;