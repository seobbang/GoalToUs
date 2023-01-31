import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'
import Login from "../pages/Login";
import Join from "../pages/Join";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>}/>
                <Route path={"/join"} element={<Join/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
