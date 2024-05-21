// src/App.js
import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

import styled from "styled-components";



function App() {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    );
}

export default App;
