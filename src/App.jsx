import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import logo from '../src/assets/logo.png'
import addone from '../src/assets/addone.png'
import addtwo from '../src/assets/addtwo.png'
import addthree from '../src/assets/addthree.png'
import pro1 from '../src/assets/pro1.png'
import pro2 from '../src/assets/pro2.png'
import pro3 from '../src/assets/pro3.png'
import pro4 from '../src/assets/pro4.png'
import Menu from './components/Menu'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Heading from './components/Heading'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import Product from './components/Product'
import { FaHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from './components/PrevArrow'
import NextArrow from './components/NextArrow'


function App() {

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>
  };
  return (
    <>
    
    {/* Header Part Start */}
   <div className="w-full py-[30px]">
    <Container className={'max-w-headerContainer'}>
      <Flex>
    <div className="w-logoW">
      <Image imgSrc={logo}/>
    </div>
    <div className="w-menuW">
      <Flex>
        <Menu menuName={'Home'}/>
        <Menu menuName={'Shop'}/>
        <Menu menuName={'About'}/>
        <Menu menuName={'Contacts'}/>
        <Menu menuName={'Journal'}/>
      </Flex>
    </div>
      </Flex>
    </Container>
   </div>
   {/* Header Part End */}

   {/* Category Part Start */}
    <div className="w-full bg-categoryBg py-10 border border-menuColor">
    <Container className={"max-w-headerContainer"}>
    <Flex className={'items-center'}>
      <div className="w-1/5">
      <Flex className={"gap-x-2"}>
      <HiOutlineBars3BottomLeft className='mt-1'/>
      <Heading as="h3" text={"Shop by Category"} className={"text-sm font-dm text-menuHover"}/>
      </Flex>
      </div>
      <div className="w-3/5 relative pl-20">
      <input type="text" className='p-3 bg-white rounded-lg w-full'placeholder='Search Products'/>
      <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2'/>
      </div>
      <div className="w-1/5">
       <Flex className={'justify-end'}>
       <FaUser className='ml-2'/>
       <FaCaretDown className='mr-10'/>
       <FaShoppingCart />
       </Flex>
      </div>
    </Flex>
    </Container>
    </div>
   {/* Category Part End */}

   {/* Banner Part Start */}
      <div className="bg-banner bg-cover bg-center bg-no-repeat w-full py-[300px]"></div>
   {/* Banner Part End */}

   {/* Information Part Start */}
   <div className="w-full py-[30px]">
    <Container className={'max-w-headerContainer'}>
      <Flex className={"justify-between"}>
        <div className="w-[33.33%]">
          <Flex className={'gap-x-3'}>
          <PiNumberTwoBold />
          <Heading as="h3" text={'Two years warranty'} className={'font-dm text-sm'}/>
          </Flex>
        </div>
        <div className="w-[33.33%]">
          <Flex className={'gap-x-3'}>
          <FaTruck />
          <Heading as="h3" text={'Free shipping'} className={'font-dm text-sm'}/>
          </Flex>
        </div>
        <div className="w-[33.33%]">
          <Flex className={'gap-x-3'}>
          <FaUndoAlt />
          <Heading as="h3" text={'Return policy in 30 days'} className={'font-dm text-sm'}/>
          </Flex>
        </div>
      </Flex>
    </Container>
   </div>
   {/* Information Part End */}

   {/* Adds File Start */}
    <div className="bg-white pt-[140px] pb-[65px]">
      <Container className={'max-w-headerContainer'}>
        <Flex className={'gap-x-8'}>
        <div className="w-[49%]">
          <Image imgSrc={addone}/>
        </div>
        <div className="w-[49%]">
          <Image imgSrc={addtwo} className={'mb-9'}/>
          <Image imgSrc={addthree}/>
        </div>
        </Flex>
      </Container>
    </div>
   {/* Adds File End */}

   {/* New Arrivals Part Start */}
   <div className="bg-white pt-[35px] pb-[40px]">
    <Container className={'max-w-headerContainer'}>
    <Heading as={'h3'} text={'New Arrivals'} className={'font-dm font-bold text-[39px] pb-[50px]'}/>
    <Slider {...settings}>
    <div className=" w-[25%] relative group px-3">
     <Product />
     <Image imgSrc={pro1} className={''}/>
     <div className="bg-white pt-7 pb-6 invisible group-hover:visible absolute bottom-0 left-0 w-full">
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Add to Wish List'} className={'font-dm text-[16] text-textcolorProduct'}/>
        <FaHeart className='mt-1 mr-5'/>
      </Flex>
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Compare'} className={'font-dm text-[16] text-textcolorProduct'}/>
        <LuRefreshCw className='mt-1 mr-5'/>
      </Flex>
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Add to Cart'} className={'font-dm text-[16] text-menuHover'}/>
        <FaShoppingCart className='mt-1 mr-5'/>
      </Flex>
     </div>
     <Flex className={'justify-between fixed gap-x-8'}>
      <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-dm font-bold text-[20px] ml-2'}/>
      <Heading as={'p'} text={'$44.00'} className={'font-dm text-menuColor text-[16px] mt-1 mr-1'}/>
      </Flex>
    </div>
    
    <div className=" w-[25%] relative group px-3">
     <Product />
     <Image imgSrc={pro2} className={''}/>
     <div className="bg-white pt-7 pb-6 invisible group-hover:visible absolute bottom-0 left-0 w-full">
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Add to Wish List'} className={'font-dm text-[16] text-textcolorProduct'}/>
        <FaHeart className='mt-1 mr-5'/>
      </Flex>
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Compare'} className={'font-dm text-[16] text-textcolorProduct'}/>
        <LuRefreshCw className='mt-1 mr-5'/>
      </Flex>
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Add to Cart'} className={'font-dm text-[16] text-menuHover'}/>
        <FaShoppingCart className='mt-1 mr-5'/>
      </Flex>
     </div>
     <Flex className={'justify-between fixed gap-x-8'}>
      <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-dm font-bold text-[20px] ml-2'}/>
      <Heading as={'p'} text={'$44.00'} className={'font-dm text-menuColor text-[16px] mt-1 mr-1'}/>
      </Flex>
    </div>
    
    <div className=" w-[25%] relative group px-3">
     <Product />
     <Image imgSrc={pro3} className={''}/>
     <div className="bg-white pt-7 pb-6 invisible group-hover:visible absolute bottom-0 left-0 w-full">
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Add to Wish List'} className={'font-dm text-[16] text-textcolorProduct'}/>
        <FaHeart className='mt-1 mr-5'/>
      </Flex>
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Compare'} className={'font-dm text-[16] text-textcolorProduct'}/>
        <LuRefreshCw className='mt-1 mr-5'/>
      </Flex>
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Add to Cart'} className={'font-dm text-[16] text-menuHover'}/>
        <FaShoppingCart className='mt-1 mr-5'/>
      </Flex>
     </div>
     <Flex className={'justify-between fixed gap-x-8'}>
      <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-dm font-bold text-[20px] ml-2'}/>
      <Heading as={'p'} text={'$44.00'} className={'font-dm text-menuColor text-[16px] mt-1 mr-1'}/>
      </Flex>
    </div>
    
    <div className=" w-[25%] relative group px-3">
     <Product />
     <Image imgSrc={pro4} className={''}/>
     <div className="bg-white pt-7 pb-6 invisible group-hover:visible absolute bottom-0 left-0 w-full">
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Add to Wish List'} className={'font-dm text-[16] text-textcolorProduct'}/>
        <FaHeart className='mt-1 mr-5'/>
      </Flex>
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Compare'} className={'font-dm text-[16] text-textcolorProduct'}/>
        <LuRefreshCw className='mt-1 mr-5'/>
      </Flex>
      <Flex className={'justify-end gap-x-3'}>
        <Heading as={'p'} text={'Add to Cart'} className={'font-dm text-[16] text-menuHover'}/>
        <FaShoppingCart className='mt-1 mr-5'/>
      </Flex>
     </div>
     <Flex className={'justify-between gap-x-8'}>
      <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-dm font-bold text-[20px] ml-2'}/>
      <Heading as={'p'} text={'$44.00'} className={'font-dm text-menuColor text-[16px] mt-1 mr-1'}/>
      </Flex>
    </div>
    </Slider>
    <Flex className={'items-center gap-x-5'}>
   
    </Flex>
    
    
    </Container>
   </div>
   {/* New Arrivals Part End */}
    </>
  )
}

export default App
