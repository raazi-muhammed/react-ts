import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCardPage from "./pages/UserCardPage";

function App() {
    return (
        <div className="App">
            <nav>
                <button>
                    <a href="/user-card">User Card</a>
                </button>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path="/user-card" element={<UserCardPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
