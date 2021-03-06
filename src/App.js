import React, { Suspense } from "react"
import './App.css';
import Home from './containers/Home';
import HouseDetails from "./containers/HouseDetails";
import NotFount from "./containers/NotFount";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import ChatPanel from "./containers/News/ChatPanel";
import NoticePanel from "./containers/News/NoticePanel";
import UserRegister from "./components/UserRegisterPanel";
import UserLoginPanel from "./components/UserLoginPanel";

React.Component.prototype.dateFormat = function (dt) {
  const date = new Date(dt)
  const y = date.getFullYear()
  const m = (date.getMonth + 1).toString().padStart(2, '0')
  const d = date.getDate().toString().padStart(2, '0')

  const hh = date.getHours().toString().padStart(2, '0')
  const mm = date.getMinutes().toString().padStart(2, '0')
  const ss = date.getSeconds().toString().padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function App() {
  return (
    <Router >
      <Suspense fallback={<div className="route-loading">loading...</div>}>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<Navigate to="/home"></Navigate>}></Route> */}
            <Route path="/" element={<UserLoginPanel></UserLoginPanel>} />
            <Route path="/register" element={<UserRegister></UserRegister>} />
            <Route path="/home/*" element={<Home></Home>} />
            <Route path="/message/:id" element={<ChatPanel />} />
            <Route path="/notice/:id" element={<NoticePanel />} />
            <Route path="/details/:id" element={<HouseDetails></HouseDetails>}></Route>
            <Route path="/*" element={<NotFount></NotFount>} />
          </Routes>
        </div>
      </Suspense>
    </Router >
  );
}

export default App;