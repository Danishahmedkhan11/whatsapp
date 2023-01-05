import "./App.scss";
import Message from "./component/Message";
import SideBar from "./component/SideBar";
function App() {
  return (
    <div className="app">
      <div className="app-body">
        <SideBar />

        <Message />
      </div>
    </div>
  );
}

export default App;
