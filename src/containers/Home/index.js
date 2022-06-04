<<<<<<< HEAD
import { useState, useEffect, lazy } from "react"
import store from '../../store';
import useStorage from "../../utils/storage"
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
  useStorage.set("selectedTab", path);
  store.dispatch(CHANGE_TAB(path));
}
=======
import TabBar from "../../components/TabBar/TabBar";
>>>>>>> origin/main

var selectedTab = "/home";
function Home() {
<<<<<<< HEAD
  const Tab = useStorage.get("selectedTab");
  const [seleTab, setSeleTab] = useState(Tab === null ? "/home" : Tab);
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

=======
>>>>>>> origin/main
  return (
    <div className='content'>
      <TabBar selectedTab={selectedTab}></TabBar>
    </div>
  );
}

export default Home;