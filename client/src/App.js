import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import ChatBox from "./components/ChatBox/ChatBox";

function App() {
  return (
    <div className="flex h-screen text-gray-100">
      <SideBar></SideBar>
      <ChatBox></ChatBox>
    </div>
  );
}

export default App;
