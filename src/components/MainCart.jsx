import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../store/slice/cartSlice";
import { useDispatch } from "react-redux";

const MainCart = () => {
  const state = useSelector((state) => state?.api?.data);
  const s = useSelector(s=>s)
  const dispatch = useDispatch()

  // const arr = [2, 4, 6, 7, 8, 10, 12, 11]
  // const n = arr.length
  // for(let i=0; i<n; i++){
  //   for(let j=0; j<arr.length; j++){
  //     if(arr[j]%2===1){
  //       arr.splice(j,1)
  //     }
  //   }
  // }
  // let arr2 = [2, 4, 6, 7, 8, 10, 12, 11]
  // arr2 = arr2.filter(e => e%2 === 0)
  // console.log(arr)
  // console.log(arr2)

  if(s.api.isError){
    return <div className="h-[calc(100vh-120px)] w-screen grid place-items-center">
      <h1 className="text-[5rem]">ERROR 404</h1>
    </div>
  }


  return(
  !(s.api.isLoading) ? <div className="bg-gray-100 py-[20px] z-0">
        {/* <div className="w-[80%] mx-auto flex flex-wrap gap-x-4 gap-y-7"> */}
        <div className="w-[80%] mx-auto grid grid-cols-auto-fill-250 gap-7">
        {
            state?.map(e=>{
                return (<div className="w-full text-center shadow-xl bg-white flex flex-col hover:scale-105 transition-transform
                ease-out duration-150
                " key={e.id}>
                <div className="w-[90%] mx-auto flex-1 grid place-items-center">
                    <li className="list-none"><NavLink to={"/product/"+e?.id} preventScrollReset>
                    <img 
                    src={e.image}
                    alt="Error"
                    className="w-[50%] mx-auto"
                    />
                    </NavLink></li>
                </div>
                <div className="w-[90%] mx-auto flex-1">
                    <h3 className="py-3">{e.title}</h3>
                    <h3 className="py-3">{e.price}</h3>
                    <button className="
                    border-[2px] border-purple-600 px-[5px] py-[3px] mb-[10px] rounded-md text-white bg-purple-600
                    hover:bg-white hover:text-purple-600 transition-colors ease-out duration-300
                    " onClick={
                      ()=> {
                        dispatch(addToCart(e))
                      }
                      }>Add to cart</button>
                </div>
            </div>
            )})
        }
        </div>
  </div> :
  <div className="h-[calc(100vh-90px)] w-screen grid place-items-center">
    <div className="loader"></div>
  </div>
)}
export default MainCart;
