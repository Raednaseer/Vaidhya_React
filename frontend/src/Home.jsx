import React from 'react'
import HomeMain from './images/home-main.jpg'; 
import Card from './Card';
import HerbalMain from "./images/herbal-supplement-main.jpg"
import EssentialMain from "./images/essentialoil-main.jpg"
import SkincareMain from "./images/skincare-main.jpg"
import TeaMain from "./images/tea-main.jpg"
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl mt-10">Welcome to Vaidhya</h1>
        <p className="p-4 text-xl">Your trusted source for premium Ayurvedic products.</p>
      </div>
      <div className="flex justify-center">
        <img src={HomeMain} alt="HomeMain.jpg" className="rounded-lg"/>
      </div>
      <div className="text-center mt-10">
      <h1 className="text-3xl mt-10">Explore our catergories</h1>
      </div>
      <div className="flex gap-4 mt-10 justify-center">
        <Card title="Herbal Supplement" image={HerbalMain} desc="Boost your health with our natural supplements." BText={"Shop Now"}/>
        <Card title="Essential Oil" image={EssentialMain} desc="Discover the power of aromatherapy." BText={"Shop Now"}/>
        <Card title="Skin Care Products" image={SkincareMain} desc="Nourish your skin with our herbal formulations." BText={"Shop Now"}/>
        <Card title="Teas and Infusions" image={TeaMain} desc="Relax and rejuvenate with our herbal teas."BText={"Shop Now"} />
      </div>
    </>
  )
}

export default Home
