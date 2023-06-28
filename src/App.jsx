import { useEffect} from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { fetchData } from "./store/slice/data"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import MainCart from "./components/MainCart"
import Product from "./components/Product"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchData())
  },[])

  return (
    <>
    <ToastContainer />
    <Navbar />
    <Routes>
      <Route path="/" element={<MainCart />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </>
  )
}

export default App