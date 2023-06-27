import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
function Navbar() {
    const data = useSelector(state => state?.cart?.data?.length)
  return (
    <div className="w-screen sticky top-0 overflow-hidden z-10">
    <div
    className="shadow w-screen bg-purple-600 text-center relative"
    >
        <div><h1 className="text-white text-[2rem] py-[15px]">Products</h1></div>
        <li className="list-none"><NavLink to={"/cart"}>
        <button
        className="border-[1px] text-purple-600 bg-white border-white py-[5px] px-[8px] absolute right-[40px] xss:right-[10px] top-[18px] z-[1]"
        ><i className="fa-solid fa-cart-plus"></i></button>
        </NavLink></li>
        <div className="absolute z-[2] h-[25px] w-[25px] bg-red-600 top-[8px] right-[25px] xss:right-[3px] border-black rounded-[50%]">
            <p className="text-white">{data}</p>
        </div>
    </div>
    </div>
  )
}

export default Navbar