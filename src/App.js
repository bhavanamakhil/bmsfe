import './App.css';
import NavBar from "./components/NavBar";
import AllMovies from "./components/AllMovies";
import {useState} from "react";
import React from "react";

import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";


function App() {
    const [mode, setModeState] = useState("light");
    const toggleDarkMode = () => {
        if (mode === "light") {
            console.log("Call reaching here");
            document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(10 26 50)";
            setModeState("dark");
        } else {
            document.getElementsByTagName("body")[0].style.backgroundColor = "white";
            setModeState("light");
        }
    }
    return (
        <>
            <BrowserRouter>
                <NavBar handleDarkMode={toggleDarkMode} mode={mode}/>
                <Routes>
                    <Route exact={true} path="/" element={<AllMovies key={1} mode={mode} category="movie/top_rated"/>}/>
                    <Route path="movie/now_playing"
                           element={<AllMovies key={2} mode={mode} category="movie/now_playing"/>}/>
                    <Route path="movie/upComing" element={<AllMovies key={3} mode={mode} category="movie/upcoming"/>}/>
                    <Route path="movie/popular" element={<AllMovies key={4} mode={mode} category="movie/popular"/>}/>
                    <Route path="tv/on_the_air" element={<AllMovies key={5} mode={mode} category="tv/on_the_air"/>}/>
                    <Route path="tv/airing_today"
                           element={<AllMovies key={6} mode={mode} category="tv/airing_today"/>}/>
                    <Route path="tv/popular" element={<AllMovies key={7} mode={mode} category="tv/popular"/>}/>
                    <Route path="/similar" element={<AllMovies key={7} mode={mode} category="tv/popular"/>}/>

                </Routes>

            </BrowserRouter>

        </>
    );
}

export default App;
