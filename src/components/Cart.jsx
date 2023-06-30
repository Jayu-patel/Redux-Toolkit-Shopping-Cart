import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { removeFromCart, add, decrese } from '../store/slice/cartSlice'

function Cart() {
    const dispatch = useDispatch()
    const product = useSelector(s=> s?.cart?.data)
    const [mt, setMt] = useState("hidden")
    const [mt2, setMt2] = useState("hidden")
    const [mt3, setMt3] = useState("visible")
    let len = product.length
    // let arr = [1, 3, 4]
    // arr.f

    useEffect(()=>{
        if(product.length < 3) setMt("hidden")
        else if(product.length > 2) setMt("visible")},[len])

    useEffect(()=>{
        if(product.length < 1){
          setMt2("hidden")
          setMt3("visible")
        } 
        else if(product.length > 0){
          setMt2("visible")
          setMt3("hidden")
        }},[len])

        let total = 0
        product.forEach(e=>{
          let p = e.quantity * e.price
          total+=p
        })
        let t = Number(total).toFixed(2)
    
  return (
    <div className="w-screen h-[calc(100vh-73px) bg-gray-50 overflow-hidden">
      <div className={"w-[50%] mx-auto pb-[10px] xs:w-[90%] sm:w-[80%] md:w-[70%] "+mt}>
        <li className="list-none">
          <NavLink to={"/"}>
            <button className="border-[1px] border-purple-600 text-purple-600 bg-white py-[5px] px-[8px] mt-[20px]">
              <i className="fa-solid fa-arrow-left"></i> Back to shop
            </button>
          </NavLink>
        </li>
      </div>
      <div className="pt-[20px]">
        {product?.map((e, i) => {
          let price = Number(e.quantity * e.price).toFixed(2)
          return (
            <div
              className="
        flex flex-row
        bg-gray-50 shadow-2xl rounded-xl
        w-[50%] h-[300px] xs:w-[90%] sm:w-[80%] md:w-[70%]xss:h-[230px]
        mx-auto
        mb-[30px]
        "
              key={e.id}
            >
             {/* <NavLink to={"/product/"+e?.id} preventScrollReset> */}
              <div
                className="
            flex-[3] xs:flex-[4]
            grid place-items-center
            xs:place-content-start
            overflow-hidden relative
            "
              >
                <li className="list-none w-[65%] ss:w-[50%] xss:w-[80%] xs:mt-[30px]"><NavLink to={"/product/"+e?.id} preventScrollReset>
                <img
                  src={e.image}
                  alt="Error"
                  className="w-[100%]"
                  />
                  </NavLink></li>

              </div>
              {/* </NavLink> */}
              <div
                className="
            flex-[7] flex flex-col xs:flex-[6] bg-gray-50
            "
              >
                <div className="h-[50%] flex flex-row xs:flex-col">
                  <div className="flex-[5] xs:flex-[8] 2xl:overflow-hidden">
                    <p className="font-bold text-[1.2rem] xss:text-[0.9rem] ml-[20px] mt-[40px] xss:mt-[20px]">
                      {e.title}
                    </p>
                  </div>
                  <div className="flex-[3] xs:flex-[0]"></div>
                  <div className="flex-[2] xs:flex-[2]">
                    <p className="my-auto mt-[40px] mr-[30px] xs:ml-[20px] xs:mt-[10px] xss:text-[1.3rem] text-[1.6rem] font-extrabold text-purple-600">
                      {price}$
                    </p>
                  </div>
                </div>
                <div className="h-[50%] flex flex-row">
                  <div className="flex-[5] ss:flex-[6] grid place-items-center xss:flex-[9.5]">
                    <div>
                      <button
                        className="
                        border-[1px] border-black
                        py-[14px] px-[24px] xss:py-[5px] xss:px-[9px] 
                        text-red-600 bg-white text-[1.1rem]"
                        onClick={() => {
                          dispatch(decrese(e));
                        }}
                      >
                        <i className="fa-solid fa-minus" />
                      </button>

                      <button
                        className="
                        border-[1px] border-black py-[14px] px-[24px] xss:py-[5px] xss:px-[9px] bg-white font-bold text-[1.1rem]"
                      >
                        {e.quantity}
                      </button>

                      <button
                        className="
                        border-[1px] border-black py-[14px] px-[24px] xss:py-[5px] xss:px-[9px] text-green-500 bg-white text-[1.1rem]"
                        onClick={() => {
                          dispatch(add(e));
                        }}
                      >
                        <i className="fa-solid fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-[3] ss:flex-[2] xss:flex-[0]"></div>

                  <div className="flex-[2] ss:flex-[3] xss:flex-[0.5] ss:mr-[20px] xs:mr-[30px] m-auto">
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(e));
                      }}
                    >
                      <i className="fa-solid fa-trash text-red-600 text-[1.2rem]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={'w-[50%] mx-auto py-[25px] xs:w-[90%] sm:w-[80%] md:w-[70%] grid place-items-end '+mt2}>
          <div>
          <h1 className='text-[2rem] font-semibold text-purple-500 pr-[20px]'>Total : {t}$</h1>
          </div>
        </div>
      </div>
      <div className={"w-[50%] mx-auto pb-[30px] xs:w-[90%] sm:w-[80%] md:w-[70%] "+mt2}>
        <li className="list-none">
          <NavLink to={"/"}>
            <button className="border-[1px] border-purple-600 text-purple-600 bg-white py-[5px] px-[8px] mt-[20px]">
              <i className="fa-solid fa-arrow-left"></i> Back to shop
            </button>
          </NavLink>
        </li>
      </div>
      <div className={'w-screen h-[calc(100vh-78px)] '+mt3}>
        <div className='mx-auto text-center'>
            <h2 className='font-extrabold text-[2.5rem] mx-auto pt-[30px] text-gray-800 font-mono'>Cart is Empty</h2>
            <NavLink to={"/"}>
            <button className="border-[1px] border-purple-600 text-purple-600 bg-white py-[5px] px-[8px] mt-[20px] font-mono">
              <i className="fa-solid fa-arrow-left"></i> Back to shop
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Cart