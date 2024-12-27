import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CreatePost from "../pages/CreatePost"
import PageNotFound from "../pages/PageNotFound"



const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/create" element={<CreatePost/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </main>
  )
}

export default AllRoutes