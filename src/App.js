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
// https://www.lovesofttech.com/react/reactReduxDirectoryStructure
// https://juejin.cn/post/6880011662926364679
// https://juejin.cn/post/7031509723190919175

function App() {
  return (
    <Router >
      <Suspense fallback={<div className="route-loading">loading...</div>}>
        <div className="App">
          <Routes>
            <Route path="/home/*" element={<Home></Home>} />
            <Route path="/" element={<Navigate to="/home/*"></Navigate>}></Route>
          </Routes>
        </div>  
      </Suspense>
    </Router >
  );
}

export default App;