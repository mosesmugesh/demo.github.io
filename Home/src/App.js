import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";                            
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/" element={   <div>
                  <marquee direction="right side cornner" scrollamount="5">“Technology is best when it brings people together.”</marquee>
            <main role="main" className="container mt-5">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3>Welcome to ilife technology</h3>
                       
                        <a href="http://localhost:3000/register" target="_blank"> Click her to register</a>
                    </div>
                    
                </div>
                
            </main>
            <img src="./images/Top.png" alt="center" class="center" height={500} width={1000 }/>
         
        </div>} />
            </Routes>
        </BrowserRouter> 
        
    </div>
  );
}

export default App;

// http://localhost:3000/register
// <a href="https://www.testyantra.com/" target="_blank"> CLICK THIS LINK TO COMPANY</a>