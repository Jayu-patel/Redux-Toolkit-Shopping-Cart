import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";
import { useDispatch } from "react-redux";
const Product=()=>{
    const param = useParams()
    let {id}  = param
    const dispatch = useDispatch()

    const product = useSelector(state => state?.api?.data)

    return( 
    <div className="bg-gray-50 w-screen">
        <div className="w-[90%] h-screen flex flex-row ml-0 mr-[10%] xss:w-screen xss:grid xss:place-items-center">
            <div className="w-[40%] xss:w-[70%]">
                <div className="w-[360px] h-[360px] ml-[calc(100%-400px)] xss:ml-0 xss:w-[100%] xss:h-[100%] mt-[80px] grid place-items-center
                rounded-2xl border-blacks border-[0.8px] shadow-2xl bg-white">

                    <img src={product[id-1]?.image} alt=" " className="w-[200px] xss:w-[80%] mx-auto"/>

                </div>
            </div>
            <div className="w-[60%] h-[calc(100%-73px)] mt-[80px] text-gray-600 xss:w-[80%]">
                <h1 className="text-[2rem] xss:text-[1.5rem] font-bold text-purple-600">{product[id-1]?.title}</h1>

                <h3 className="text-[1.17rem] pb-[10px]">Ratings: {product[id-1]?.rating?.rate} ({product[id-1]?.rating?.count})</h3>

                <h4 className="text-[1rem] font-bold pb-[10px]">details:</h4>

                <p className="pb-[22px]">{product[id-1]?.description}</p>

                <h3 className="text-[2rem] pb-[15px] text-purple-600">{product[id-1]?.price}$</h3>

                <h3 className="text-[1.17rem] pb-[15px] ">Quantity: 1</h3>
                
                <button className="border-[1px] border-purple-600 text-purple-600 bg-white px-[35px] py-[8px] rounded-sm mr-[20px]
                hover:bg-purple-600 hover:text-white transition-colors duration-300 shadow-lg xss:mb-[20px]"
                onClick={()=>{dispatch(addToCart(product[id-1]))}} >
                    Add to cart
                </button>
                
                <button className="border-[1px] border-purple-600 text-white bg-purple-600 px-[35px] py-[8px] rounded-sm
                hover:bg-white hover:text-purple-600 transition-colors duration-300 shadow-lg
                ">Buy now</button>
            </div>
            {/* <div className="w-[60%] h-screen bg-purple-500"></div> */}
        </div>
    </div>
    )
}
export default Product