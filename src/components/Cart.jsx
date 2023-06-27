import { useSelector } from 'react-redux'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { removeFromCart } from '../store/slice/cartSlice'
import { useDispatch } from 'react-redux'

function Cart() {
    const dispatch = useDispatch()
    const product = useSelector(s=> s?.cart?.data)

  return (
    <div className='w-screen h-[calc(100vh-73px)'>
      <div className='w-[80%] mx-auto text-gray-600'>
        <div className='list-none flex flex-row w-[100%] mt-[30px] mb-[6px] font-bold'>
          <li className='flex-[4] xs:flex-1 xss:flex-[1]' >product</li>
          <li className='flex-[1] xss:flex-[0] xss:hidden'>price</li>
          <li className='flex-[2.5] xss:flex-[1]'><p className='xss:text-center'>quantity</p></li>
          <li className='flex-[2] xss:flex-[0] xss:hidden'>total</li>
          <li className='flex-[2] xss:flex-[1]'><p className='xss:text-center'>remove</p></li>
        </div>
        <hr className='border-t-[1px] border-black pb-[15px]'/>
        <div>
        {
          product?.map((e,i)=>{
            let price = (e.quantity * e.price)
            return (
            <div key={i} className='flex flex-row w-[100%] py-[20px] gap-[5px]'>
              <div className='flex-[4] flex flex-row xss:flex-[2] xs:flex-col xs:flex-[2]'>
                <img src={e.image} alt="" className='w-[35px] h-[35px] xs:w-[40px] xs:h-[40px]'/>
                <p className='pl-[20px] w-[80%] xs:hidden'>{e.title}</p>
                </div>
              <div className='flex-[1] xss:flex-[0] xss:hidden'><p>{e.price}</p></div>
              <div className='flex-[2] pl-[20px] xss:flex-[2] xs:flex-[1]'><p>{e.quantity}</p></div>
              <div className='flex-[2] xss:flex-[0] xss:hidden'><p>{price}</p></div>
              <div className='flex-[2] xss:flex-[1]'>
                <button onClick={()=>{
                  dispatch(removeFromCart(e))
                }}>
                <i className="fa-solid fa-trash ml-[30px] xss:ml-[0]"></i>
                </button>
                </div>
            </div>
          )})
        }
        </div>
        </div>
        <div className="w-[80%] mx-auto">
        <li className="list-none"><NavLink to={"/"}>
          <button className='border-[1px] border-purple-600 text-purple-600 bg-white py-[5px] px-[8px] mt-[20px]'>
          <i className="fa-solid fa-arrow-left"></i> Back to shop</button>
        </NavLink></li>
        </div>
    </div>
  )
}

export default Cart