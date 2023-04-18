import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/ListUser.js";
import AddUser from "./components/AddUser.js";
import EditUser from "./components/EditUser.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
