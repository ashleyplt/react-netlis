import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import { Navbar } from "../components/ui/navBar"; 
import { Sidebar } from "../components/ui/sideBar";
import { Principal } from "../components/principalpage/Principal";
import { resultados } from "../components/resultados/resultados";

export const AppRouter = () => {
    return (
        <div class="content">
        <Navbar/>
        <Sidebar/>
        <div class=" content-wrapper">
        <div class="container mt-5 mb-5">
            
            <BrowserRouter>
                <Routes>
                   <Route path="/" element = {<Principal/>} />
                   <Route path="/resultados" element = {<resultados/>} />
                </Routes>      
            </BrowserRouter>
    
            </div> 
        </div> 
        
        </div>
        
    );
} 