import {
  useNavigate,
} from 'react-router-dom';
import { Grid, InfiniteScroll, List, DotLoading } from "antd-mobile"
import image from "../../assets/images/01.jpg"
import style from "./index.module.scss"

function compPrice(price) {
  return Math.floor(price / 10000);
}
function propertyType(type) {
  let res = "其他"
  switch (type) {
    case 1:
      res = "普通住宅";
      break;
    case 2:
      res = "普通住宅";
      break;
    case 3:
      res = "普通住宅";
      break;
    case 4:
      res = "普通住宅";
      break;
    case 5:
      res = "普通住宅";
      break;
    case 6:
      res = "普通住宅";
      break;
    case 7:
      res = "普通住宅";
      break;
    case 8:
      res = "普通住宅";
      break;
    case 9:
      res = "普通住宅";
      break;
    default:
      res = "其他";
      break;
  }
  return res;
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
  return (
    <div className={style.content}>
      <List header={props.header} className={style.list}>
        <Grid columns={2} gap={8} className={style.grid}>
          {
            props.houseList.map((item) => (
              <Grid.Item key={item.id} onClick={() => navigate(`/details/${item.id}`)}>
                <div className={style.body}>
                  <div className={style.image}>
                    <img src={image} alt=""></img>
                  </div>
                  <div className={style.details}>
                    <div className={style.title}>
                      <span className={style.title}>{item.listing_name}</span>
                    </div>
                    <div className={style.detail}>
                      <span>{`${item.floor_plan_room}室${item.floor_plan_hall}厅`}</span>
                      <span>{propertyType(item.property_management_type)}</span>
                      <span>{`${item.squaremeter / 100}m²`}</span>
                    </div>
                    <div className={style.bottom}>
                      <span className={style.price}>{compPrice(item.pricing)}</span>
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
      <InfiniteScroll threshold={100} loadMore={props.loadMore} hasMore={props.hasMore} className={style.scroll}>
        <InfiniteScrollContent hasMore={props.hasMore} />
      </InfiniteScroll>
    </div>
  )
}
export default HouseList;