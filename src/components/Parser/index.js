import styles from "./index.module.scss"

// {
//   "id": "49GKABgGbNwzT8GzhNGeh",
//   "name": "",
//   "position": "absolute",
//   "type": "img",
//   "content": "https://v3.cn.vuejs.org/images/sponsors/html_burger.png",
//   "left": "12%",
//   "top": "11%",
//   "height": "9%",
//   "width": "36%",
//   "zIndex": 2
// },
// {
//   "id": "mAMbPQE6GR5y-bv1uV9rn",
//   "name": "",
//   "position": "absolute",
//   "type": "text",
//   "content": "我是文字噢",
//   "left": "21%",
//   "top": "75%",
//   "height": "4%",
//   "width": "12%",
//   "size": 16,
//   "zIndex": 2,
//   "color": "red"
// },

function resolver(module) {
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
      <Type style={{ ...module, "fontSize": `${module.fontSize}rem` }} key={module.id} id={module.id}>{module.content}</Type>
    )
  }
}
function Parser(props) {
  const modules = props.modules;
  return (
    <div className={styles.parser}>
      {
        modules.map((item) => resolver(item))
      }
    </div>
  )
}
export default Parser