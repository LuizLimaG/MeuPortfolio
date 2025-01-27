import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./mainpage"

export default function AppRoutes(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                </Routes>
            </Router>
        </>
    )
}