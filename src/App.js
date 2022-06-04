import { Suspense } from "react"
import './App.css';
import Home from './containers/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  Navigate
} from 'react-router-dom';
import ChatPanel from "./containers/News/ChatPanel";
import NoticePanel from "./containers/News/NoticePanel";
import UserRegister from "./components/UserRegisterPanel";
import UserLoginPanel from "./components/UserLoginPanel";
// https://www.lovesofttech.com/react/reactReduxDirectoryStructure
// https://juejin.cn/post/6880011662926364679
// https://juejin.cn/post/7031509723190919175

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
          </Routes>
        </div>  
      </Suspense>
    </Router >
  );
}

export default App;