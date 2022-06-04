// https://www.redux.org.cn/docs/basics/Store.html
import { Grid } from "antd-mobile"
// 导入组件
import NavHeader from "../../components/NavHeader/index"
import InputBox from "../../components/InputBox/index"
import HouseList from "../../components/HouseList/index"
// 导入样式
import style from "./index.module.scss"
import location from "../../assets/icon/location.svg"
// 导入导航菜单图片
import home from '../../assets/icon/home.svg'
import home_active from '../../assets/icon/home_active.svg'

// navs 数据
const navs = [
  {
    title: '二手房',
    img: home,
    img_active: home_active,
    path: '/house/second'
  },
  {
    title: '新房',
    img: home,
    img_active: home_active,
    path: 'house/first'
  },
  {
    title: '找经纪人',
    img: home,
    img_active: home_active,
    path: '/agent'
  },
  {
    title: 'VR看房',
    img: home,
    img_active: home_active,
    path: '/view'
  },
  {
    title: '地图找房',
    img: home,
    img_active: home_active,
    path: '/5'
  },
  {
    title: '新上房源',
    img: home,
    img_active: home_active,
    path: '/6'
  },
  {
    title: '帮我找房',
    img: home,
    img_active: home_active,
    path: '/7'
  },
  {
    title: '购物百科',
    img: home,
    img_active: home_active,
    path: '/8'
  }
]

// houseList数据
const houseList = [
  {
    id: 0,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 1,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 2,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 3,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 4,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 5,
    title: "5室2厅 前海时代CEO公馆厅前海时代CEO公馆厅前海时代CEO公馆厅前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 6,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 7,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 8,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 9,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 10,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 11,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 12,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 13,
    title: "5室2厅 前海时代CEO公馆厅前海时代CEO公馆厅前海时代CEO公馆厅前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 14,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
  {
    id: 15,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）"
  },
]

function FuncNav() {
  return (
    <div className={style.func_nav}>
      <Grid columns={4} gap={8}>
        {
          navs.map((item) => (
            <Grid.Item key={item.path}>
              <div className={style.func_nav_item} >
                <img src={item.img_active} alt=""></img>
                <span className={style.title}>{item.title}</span>
              </div>
            </Grid.Item>
          ))
        }
      </Grid>
    </div>
  )
}

function Right() {
  return (
    <div className={style.location}>
      <img src={location} alt=""></img>
    </div>
  )
}

function Index() {
  return (
    <div className={style.Index}>
      <div className={style.navHeader}>
        <NavHeader back={null} right={<Right></Right>} children={<InputBox placeholder="南光捷佳大厦" readOnly={true} left={true}></InputBox>}>
        </NavHeader>
      </div>
      <div className={style.list}>
        <div className={style.funcNav}>
          <FuncNav></FuncNav>
        </div>
        <div>
          <HouseList houseList={houseList}></HouseList>
        </div>
      </div>

    </div>
  );
}

export default Index;