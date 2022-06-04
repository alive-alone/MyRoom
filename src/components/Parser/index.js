import { useRef, useEffect, useState } from "react"
import styles from "./index.module.scss"

function resolver(module, divWidth) {
  // const [scale, setScale] = useState(divWidth / 500);
  let scale = divWidth / 500;
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
  const [divWidth, setDivWidth] = useState(0);
  const modules = props.modules;
  const divRef = useRef();
  useEffect(() => {
    if (divRef.current) {
      setDivWidth(divRef.current.clientWidth);
    }
  }, []);
  return (
    <div className={styles.parser} ref={divRef}>
      {
        modules.map((item) => resolver(item, divWidth))
      }
    </div>
  )
}
export default Parser