import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./globalStyles";
import React from "react";

function Main() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <GlobalStyle />
            <Routes>
                <Route path = "/" element={<App/>} >
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main;