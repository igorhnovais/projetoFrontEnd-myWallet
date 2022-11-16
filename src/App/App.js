import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "../Components/GlobalStyle";

import AuthProvider from "../Components/Auth"
import HomePage from "../Home/HomePage"
import HomePageCadastro from "../Home/HomePageCadastro";
import MenuPage from "../Menu/MenuPage";
import NewEntryPage from "../Movement/NewEntryPage";
import NewExitPage from "../Movement/NewExitPage";

export default function App(){

   return (
        <BrowserRouter>
            <GlobalStyle/>

            <AuthProvider>
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/cadastro"} element={<HomePageCadastro/>} />
                    <Route path={"/menu"} element={<MenuPage/>} />
                    <Route path={"/nova-entrada"} element={<NewEntryPage/>} />
                    <Route path={"/nova-saida"} element={<NewExitPage/>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}