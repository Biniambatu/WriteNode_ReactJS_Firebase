import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CreatePost from "../pages/CreatePost"
import PageNotFound from "../pages/PageNotFound"
import ProtectedRoute from "./ProtectedRoute"



const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/create" element={ < ProtectedRoute><CreatePost/></ProtectedRoute>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </main>
  )
}

export default AllRoutes