import { Input } from "antd-mobile"
import style from "./index.module.scss"
import search_img from "../../assets/icon/search.svg"
function InputBox(props) {
  let City;
  if (props.left) {
    City = (
      <div className={style.city}>
        <span className={style.city_name}>广州</span>
        <span className={style.triangle}></span>
        <div className={style.line}></div>
      </div>
    )
  }
  return (
    <div className={style.body}>
      {City}
      <div className={style.search}>
        <img className={style.img} src={search_img} alt=""></img>
        <Input placeholder={props.placeholder} className={style.Input} readOnly={props.readOnly || false} clearable={true}></Input>
      </div>
    </div>

  )
}
export default InputBox;