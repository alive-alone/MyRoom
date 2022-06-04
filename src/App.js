<<<<<<< HEAD
import React, { Suspense } from "react"
import './App.css';
import Home from './containers/Home';
import HouseDetails from "./containers/HouseDetails";
import NotFount from "./containers/NotFount";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
=======
import './App.css';
>>>>>>> origin/main
// https://www.lovesofttech.com/react/reactReduxDirectoryStructure
// https://juejin.cn/post/6880011662926364679
// https://juejin.cn/post/7031509723190919175
import Home from './containers/Home';

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
<<<<<<< HEAD
    <Router >
      <Suspense fallback={<div className="route-loading">loading...</div>}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home/*" element={<Home></Home>} />
            <Route path="/details/:id" element={<HouseDetails></HouseDetails>}></Route>
            <Route path="/*" element={<NotFount></NotFount>} />
          </Routes>
        </div>
      </Suspense>
    </Router >
=======
    <div className="App">
      <Home></Home>
    </div>
>>>>>>> origin/main
  );
}

export default App;
