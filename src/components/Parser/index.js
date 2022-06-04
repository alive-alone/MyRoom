import { useRef, useEffect, useState } from "react"
import styles from "./index.module.scss"

function resolver(module, scale) {
  // const [scale, setScale] = useState(divWidth / 500);
  let Type = module.type === "text" ? "span" : module.type;
  if (Type === "img") {
    return (
      <Type style={module} src={module.content} key={module.id} id={module.id} alt=""></Type>
    )
  } else if (Type === "video" || Type === "audio") {
    return (
      <Type style={module} poster="true" controls src={module.content} key={module.id} id={module.id}></Type>
    )
  } else {
    return (
      <Type style={{ ...module, "fontSize": `${module.fontSize * scale}rem` }} key={module.id} id={module.id}>{module.content}</Type>
    )
  }
}
function Parser(props) {
  // const [divWidth, setDivWidth] = useState(0);
  const [scale, setScale] = useState(1);
  const modules = props.modules;
  const divRef = useRef();
  useEffect(() => {
    if (divRef.current) {
      setScale(divRef.current.clientWidth / 500);
      // setDivWidth(divRef.current.clientWidth);
    }
  }, []);
  return (
    <div className={styles.parser} style={{ height: `${props.divScale * 100}vw` }} ref={divRef}>
      {
        modules.map((item) => resolver(item, scale))
      }
    </div>
  )
}
export default Parser