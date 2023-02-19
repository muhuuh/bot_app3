import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import ChatBox from "./components/ChatBox/ChatBox";

//https://www.youtube.com/watch?v=qwM23_kF4v4

function App() {
  return (
    <div className="flex h-screen text-gray-100">
      <SideBar></SideBar>
      <ChatBox></ChatBox>
    </div>
  );
}

export default App;
