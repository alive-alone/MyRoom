import { getHouseList } from "../../api/request"
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
import { useState, useEffect } from "react"

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
    building_type: null,
    built_year: "2012",
    city_code: "杭州",
    city_name: "杭州",
    crawl_id: 6667542583578722000,
    created_at: "2019-02-11T13:33:19.000Z",
    data_source_id: 19,
    decoration_type: 1,
    dict_house_id: 6656697678107247000,
    downpayment: null,
    elevator: null,
    facing_type: 9,
    first_upload_at: "2018-08-24T00:00:00.000Z",
    floor: 5,
    floor_level: 3,
    floor_plan_bath: 1,
    floor_plan_hall: 2,
    floor_plan_kitchen: null,
    floor_plan_room: 2,
    heating_type: null,
    house_card: "222",
    house_duration: null,
    house_status: 0,
    house_type: 2,
    id: 65140,
    ladder_ration: null,
    last_publish_time: "2021-07-23T14:59:21.000Z",
    last_version: 2000000000,
    layout_type: 0,
    listing_name: "aa",
    mortgage: null,
    neighborhood_name: "西溪里二期",
    neighborhood_source_code: "19_杭州_1006",
    offline_code: "2262630",
    online_area_id: 1868,
    online_city_id: 1853,
    online_district_id: 1854,
    online_house_status: null,
    online_neighborhood_id: 6581009578446553000,
    ownership: null,
    pricing: 410000000,
    property_certificate_period: null,
    property_management_type: 1,
    property_only: null,
    property_right: null,
    right_property: "",
    room_structure: null,
    source_code: "12_武汉_5C5517A3CE9D402AB34402522A8D8C861",
    squaremeter: 12870,
    start_version: 1549863199,
    task_id: 0,
    total_floor: 15,
    updated_at: "2021-11-10T18:19:21.000Z",
    usage_area: 0,
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
  const [houseList2, setHouseList] = useState([]);
  const [pages, setPages] = useState({ page: 1, pageSize: 10 });
  const [hasMore, setHasMore] = useState(true);
  async function loadMore() {
    setPages({ page: pages.page + 1, pageSize: 10 });
    const result = await getHouseList(pages);
    if (result.status === 200) {
      if (result.data.agentHouse.length !== 0) {
        setHouseList([...houseList2, ...result.data.agentHouse]);
      } else {
        setHasMore(false);
      }
    }
    /*
    result.then((response) => {
      if (response.status === 200) {
        console.log(response.data.agentHouse.length);
        if (response.data.agentHouse.length !== 0) {
          console.log(response.data.agentHouse);

          setHouseList([...houseList2, ...response.data.agentHouse]);
          console.log(houseList2);
        } else {
          setHasMore(false);
        }
      }
    })
     */

  }
  /*
    useEffect(() => {
    const res = getHouseList(pages);
    res.then((response) => {
      if (response.status === 200) {
        if (response.data.agentHouse.length !== 0) {
          console.log(response.data.agentHouse);
          setHouseList([...houseList2, ...response.data.agentHouse]);
        }
      }
    })
  }, [])
   */
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
          <HouseList loadMore={loadMore} hasMore={hasMore} houseList={houseList2}></HouseList>
        </div>
      </div>
    </div>
  );
}

export default Index;