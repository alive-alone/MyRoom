import { useState } from "react"
import {
  useNavigate,
} from 'react-router-dom';
import { Grid, InfiniteScroll, List, DotLoading } from "antd-mobile"
import image from "../../assets/images/01.jpg"
import style from "./index.module.scss"

const aa = {
  id: 3,
  title: "5室2厅 前海时代CEO公馆",
  price: "1964.11万",
  house_type: "5室2厅",
  area: "183.39",
  is_elevator: true,
  reno_type: "简装修",
  years: "2017年",
  loca: "前海时代CEO公馆（南山-前海）"
}

function loadMore() {

}
const InfiniteScrollContent = (value) => {
  return (
    <>
      {value.hasMore ? (
        <>
          <span>Loading</span>
          <DotLoading />
        </>
      ) : (
        <span>--- 我是有底线的 ---</span>
      )}
    </>
  )
}
function HouseList(props) {
  const navigate = useNavigate();
  const [hasMore, setHasMore] = useState(true);
  let len = props.houseList.length;
  return (
    <div className={style.content}>
      <List header={props.header} className={style.list}>
        <Grid columns={2} gap={len} className={style.grid}>
          {
            props.houseList.map((item) => (
              <Grid.Item key={item.id} onClick={() => navigate(`/details/${item.id}`)}>
                <div className={style.body}>
                  <div className={style.image}>
                    <img src={image} alt=""></img>
                  </div>
                  <div className={style.details}>
                    <div className={style.title}>
                      <span className={style.title}>{item.title}</span>
                    </div>
                    <div className={style.detail}>
                      <span>{item.house_type}</span>
                      <span>{item.area}</span>
                      <span>{item.reno_type}</span>
                    </div>
                    <div className={style.bottom}>
                      <span className={style.price}>{item.price}</span>
                      <span className={style.unit}>万</span>
                      <span className={style.tip}>参考价</span>
                    </div>
                  </div>

                </div>
              </Grid.Item>
            ))
          }
        </Grid>
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} className={style.scroll}>
        <InfiniteScrollContent hasMore={hasMore} />
      </InfiniteScroll>
    </div>
  )
}
export default HouseList;