import { useState, useEffect, lazy } from "react"
import store from '../../store';
import TabBar from "../../components/TabBar/TabBar";
import { CHANGE_TAB } from "../../store/actionTypes/tabTypes"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
  useRoutes
} from 'react-router-dom';
import style from "./Home.module.scss"
// CSS Modules
// https://blog.csdn.net/weixin_58487208/article/details/121385538

// const News = lazy(() => import('../News/index'))
// const Recommend = lazy(() => import('../Recommend/index'))
// const Mine = lazy(() => import('../Mine/index'))
// const Index = lazy(() => import('../Index/index'))
import News from "../News/index"
import Recommend from "../Recommend/index"
import Mine from "../Mine/index"
import Index from "../Index/index"

function setRouteActive(path) {
  store.dispatch(CHANGE_TAB(path));
}

function Home() {
  const [seleTab, setSeleTab] = useState("/home");
  const navigate = useNavigate();
  useEffect(() => {
    store.subscribe(() => {
      let value = store.getState().tabReducer.selectedTab;
      setSeleTab(value);
      if (value !== "/home") {
        navigate(`/home${value}`);
      } else {
        navigate(value);
      }
    }
    );
  })

  return (
    <div className={style.Home}>
      <Outlet />
      <Routes>
        <Route path="/" element={<Index></Index>} />
        <Route path="/news" element={<News></News>} />
        <Route path="/mine" element={<Mine></Mine>} />
        <Route path="/recommend" element={<Recommend></Recommend>} />
      </Routes>
      <div className={style.TabBar}>
        <TabBar selectedTab={seleTab} setRouteActive={setRouteActive}></TabBar>
      </div>
    </div>
  );
}

export default Home;