import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import MapList from "./pages/MapList/MapList";
import CreateMap from "./pages/createMap/CreateMap";
import DrawMindMap from "./pages/DrawMindMap/DrawMindMap";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateMap />} />
                    <Route path="/draw" element={<DrawMindMap />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/maplist" element={<MapList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
