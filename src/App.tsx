import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCardPage from "./pages/UserCardPage";
import CounterPage from "./pages/CounterPage";
import UserFetchFromCountPage from "./pages/UserFetchFromCountPage";

type Links = {
    name: string;
    url: string;
};
function App() {
    const links: Links[] = [
        {
            name: "User Card",
            url: "/user-card",
        },
        {
            name: "Simple Counter",
            url: "/counter",
        },
        {
            name: "User Fetch Counter",
            url: "/user-fetch-counter",
        },
    ];

    return (
        <div className="App">
            <nav>
                <ul className="flex gap-2">
                    {links.map((link) => (
                        <li className="border border-indigo-500 p-2 rounded-lg">
                            <a href={link.url}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path="/user-card" element={<UserCardPage />} />
                    <Route path="/counter" element={<CounterPage />} />
                    <Route
                        path="/user-fetch-counter"
                        element={<UserFetchFromCountPage />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
