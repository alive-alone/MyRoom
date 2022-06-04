import "./TabBar.scss";

// 导入导航菜单图片
import home from "../../assets/icon/home.svg";
import home_active from "../../assets/icon/home_active.svg";

// TabBar 数据
const tabItems = [
  {
    title: "首页",
    img: home,
    img_active: home_active,
    path: "/home",
  },
  {
    title: "推荐",
    img: home,
    img_active: home_active,
    path: "/recommend",
  },
  {
    title: "消息",
    img: home,
    img_active: home_active,
    path: "/news",
  },
  {
    title: "我的",
    img: home,
    img_active: home_active,
    path: "/mine",
  },
];

function TabBar(props) {
  return (
    <div className="content">
      <div className="body">
        {tabItems.map((item) => (
          <div
            className="item"
            key={item.path}
            onClick={() => props.setRouteActive(item.path)}
          >
            <img
              src={props.selectedTab === item.path ? item.img_active : item.img}
              alt=""
            ></img>
            <p className={props.selectedTab === item.path ? "p_active" : ""}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabBar;
