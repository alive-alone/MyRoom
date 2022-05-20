import react, { useEffect } from "react"
import {
  useNavigate,
} from 'react-router-dom';
import { NavBar } from "antd-mobile"
import style from "./index.module.scss"

function DefaultHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(-1)
  })
}

function NavHeader(props) {
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