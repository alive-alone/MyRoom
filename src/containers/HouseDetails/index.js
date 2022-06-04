import { useState, useRef } from "react"
import image from "../../assets/images/01.jpg"
import style from "./index.module.scss"
import NavHeader from "../../components/NavHeader"

import { HouseInfo, ShowImg, RecomBroker, OnlineContact } from "../../components/HouseDetails"

// function handleScroll(){

//   document.body.scrollTop = document.documentElement.scrollTop = 0;

// }

function HouseDetails() {
  const details = {
    id: 0,
    title: "5室2厅 前海时代CEO公馆",
    price: "1964.11万",
    house_type: "5室2厅",
    area: "183.39平",
    is_elevator: true,
    reno_type: "简装修",
    listing: "2020-01-15",
    years: "2017年",
    loca: "前海时代CEO公馆（南山-前海）",
    tips: ["南北通透", "楼龄新", "临近地铁", "临近学校"],
    orient: "南北",
    ownership: "商品房",
    community: "卓越皇后道",
    storey: "低楼层/共两层"
  }
  const brokers = [
    {
      id: 0,
      name: "李树果",
      depart: "乐有家",
      points: "4.6",
      familiarity: "1.5",
      tips: ["服务标杆", "闪电回复", "熟悉房源"]
    },
    {
      id: 1,
      name: "李亚南",
      depart: "乐有家",
      points: "4.6",
      familiarity: "1.5",
      tips: ["城市之星", "服务标杆", "接听迅速"]
    },
    {
      id: 2,
      name: "王小美",
      depart: "乐有家",
      points: "4.6",
      familiarity: "1.5",
      tips: ["服务标杆", "接听迅速", "熟悉房源"]
    }
  ]
  const divRef = useRef();
  const [topLength, setTopLength] = useState(0);
  const listScroll = () => {
    setTopLength(divRef.current.getBoundingClientRect().top);
    console.log(topLength);
  }
  // useEffect(() => {
  //   console.log(document
  //     .getElementById('list'))
  //   document
  //     .getElementById('list')
  //     .addEventListener('scroll', console.log(11111));
  //   if (divRef.current) {
  //     topLength = divRef.current.getBoundingClientRect().top;
  //     console.log(topLength);
  //   }
  // }, []);

  return (
    <div className={style.list} id="list" onScrollCapture={() => listScroll()}>
      <div className={style.house_details} >
        {/* <div className={style.image}>
        <img src={image} alt=""></img>
        {topLength >= -250 ? style.navHeader : ""}
      </div> */}
        <div className={`${style.navHeader} ${topLength >= -200 ? style.navHeader_1 : ""}`}>
          {
            topLength >= -200 ? <NavHeader back={""} right={null} children={""}></NavHeader>
              : <NavHeader back={""} right={null} children={<div></div>}></NavHeader>
          }
        </div >
        <div ref={divRef} className="show_img">
          <ShowImg image={image} ></ShowImg>
        </div>
        <HouseInfo details={details}></HouseInfo>
        <RecomBroker brokers={brokers}></RecomBroker>
        {/* <div>
        <HouseInfo details={details}></HouseInfo>
      </div>
      <div>
        <RecomBroker brokers={brokers}></RecomBroker>
      </div> */}
        <div className={style.online_contact}>
          <OnlineContact broker={brokers[2]}></OnlineContact>
        </div>
      </div >
    </div>
  )
}

export default HouseDetails