import react, { useEffect } from "react"
import {
  useNavigate,
} from 'react-router-dom';
import { NavBar } from "antd-mobile"
import style from "./index.module.scss"



function NavHeader(props) {
  const navigate = useNavigate();
  function DefaultHandler() {
    navigate(-1);
  }
  return (
    <NavBar
      className={style.navbar}
      children={props.children}
      back={props.back}
      backArrow={props.backArrow}
      onBack={props.onBack || DefaultHandler}
      left={props.left}
      right={props.right}
    >
    </NavBar>
  )
}

function a() {
  // left = { props.left }
  // right = { props.right }
}
export default NavHeader