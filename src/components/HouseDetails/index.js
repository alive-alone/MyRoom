import { useState, useEffect } from "react"
import { getCodeJson } from "../../api/request"
import { ImageViewer, Grid, Swiper, Popup } from 'antd-mobile'
import style from "./index.module.scss"
import Parser from "../../components/Parser/index"
import infoIcon from "../../assets/icon/info.svg"
import telephoneIcon from "../../assets/icon/telephone.svg"
import peo01Ing from "../../assets/images/peo01.jpg"
import peo02Ing from "../../assets/images/peo02.jpg"
import peo03Ing from "../../assets/images/peo03.jpg"
import starts from "../../assets/icon/starts.svg"
import show from "../../assets/icon/show.svg"

function ShowParser() {
  const [codeJson, setCodeJson] = useState([]);
  const [divScale, setDivScale] = useState(1);
  useEffect(() => {
    const res = getCodeJson();
    res.then((response) => {
      if (response.status === 200) {
        if (response.data.jsonList.length !== 0) {
          let len = response.data.jsonList.length
          let data = JSON.parse(response.data.jsonList[len - 1].json_value);
          setDivScale(data.canvasProportion);
          setCodeJson([...data.data]);
        }
      }
    })
  }, [])
  return (
    <div>
      <Parser modules={codeJson} divScale={divScale}></Parser>
    </div>
  );
}

function ShowImg(props) {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [showImg, setshowImg] = useState(props.images[0])
  return (
    <div>
      <div className={style.image}>
        <Swiper loop >
          {
            props.images.map((item, index) => (
              <Swiper.Item key={index}>
                <div className={style.image}>
                  <img className={style.swiperImg} alt="" src={item}
                    onClick={() => {
                      setshowImg(item);
                      setVisible(true);
                    }}></img>
                  {
                    index === 0 ? <img onClick={() => setVisible2(true)} className={style.show} src={show} alt=""></img> : <></>
                  }
                </div>
              </Swiper.Item>
            ))
          }
        </Swiper>
      </div>
      <ImageViewer
        image={showImg}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
      <Popup
        visible={visible2}
        onMaskClick={() => {
          setVisible2(false)
        }}
      >
        <ShowParser></ShowParser>
      </Popup>
    </div>
  )
}

function HouseInfo(props) {
  const details = props.details;
  return (
    <div className={style.house_info}>
      <div className={style.tips}>
        {
          details.tips.map((item) => (
            <span key={item}>{item}</span>
          ))
        }
      </div>
      <p className={style.title}>{details.title}</p>
      <div className={style.base_info}>
        <div className={style.item}>
          <span className={style.detail}>{details.price}</span>
          <span className={style.type}>??????</span>
        </div>
        <div className={style.line}></div>
        <div className={style.item}>
          <span className={style.detail}>{details.house_type}</span>
          <span className={style.type}>??????</span>
        </div>
        <div className={style.line}></div>
        <div className={style.item}>
          <span className={style.detail}>{details.area}</span>
          <span className={style.type}>????????????</span>
        </div>
      </div>
      <div className={style.details}>
        <Grid columns={2} gap={8}>
          <Grid.Item >
            <div className={style.item}>
              <label>??????</label>
              <span>{details.house_type}</span>
            </div>
          </Grid.Item>
          <Grid.Item >
            <div className={style.item}>
              <label>??????</label>
              <span>{details.area}</span>
            </div>
          </Grid.Item>
          <Grid.Item >
            <div className={style.item}>
              <label>??????</label>
              <span>{details.listing}</span>
            </div>
          </Grid.Item>
          <Grid.Item >
            <div className={style.item}>
              <label>??????</label>
              <span>{details.orient}</span>
            </div>
          </Grid.Item>
          <Grid.Item >
            <div className={style.item}>
              <label>??????</label>
              <span>{details.reno_type}</span>
            </div>
          </Grid.Item>
          <Grid.Item >
            <div className={style.item}>
              <label>??????</label>
              <span>{details.is_elevator ? "???" : "???"}</span>
            </div>
          </Grid.Item>
          <Grid.Item >
            <div className={style.item}>
              <label>??????</label>
              <span>{details.ownership}</span>
            </div>
          </Grid.Item>
          <Grid.Item >
            <div className={style.item}>
              <label>??????</label>
              <span>{details.years}</span>
            </div>
          </Grid.Item>
        </Grid>
      </div>
      <div className={style.consult}>
        <div className={style.item}>
          <div className={style.name}>
            <label>??????</label>
            <span>{details.community}</span>
          </div>
          <div className={style.serve}>
            <span></span>
            <label>{" > "}</label>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.name}>
            <label>??????</label>
            <span>??????????????????</span>
          </div>
          <div className={style.serve}>
            <span>???????????????</span>
            <label>{" > "}</label>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.name}>
            <label>??????</label>
            <span>{details.storey}</span>
          </div>
          <div className={style.serve}>
            <span>????????????</span>
            <label>{" > "}</label>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.name}>
            <label>????????????</label>
            <span>???????????? ????????????</span>
          </div>
          <div className={style.serve}>
            <span>???????????????</span>
            <label>{" > "}</label>
          </div>
        </div>
      </div>
      <div className={style.dynamic}>
        <span>???????????????????????????????????????</span>
        <span className={style.btn}>????????????</span>
      </div>
    </div>
  )
}
function RecomBroker(props) {
  const imgArr = [peo01Ing, peo02Ing, peo03Ing];
  const brokers = props.brokers;
  return (
    <div className={style.recom_broker}>
      <p className={style.title}>???????????????</p>
      <div className={style.brokers}>
        {
          brokers.map((item, index) => (
            <div key={item.id} className={style.broker}>
              <div className={style.avatar}>
                <img src={imgArr[index]} alt="??????"></img>
              </div>
              <div className={style.info}>
                <div className={style.base}>
                  <span className={style.name}>{item.name}</span>
                  <span className={style.depart}>{item.depart}</span>
                </div>
                <div className={style.advantage}>
                  <div>
                    <span className={style.points}>{item.points}</span>
                    <span>?????????</span>
                  </div>
                  <div className={style.line}></div>
                  <div>
                    <span className={style.familiarity}>{item.familiarity}</span>
                    <span>???????????????</span>
                  </div>
                </div>
                <div className={style.tips}>
                  {
                    item.tips.map((item) => (
                      <span key={item}>{item}</span>
                    ))
                  }
                </div>
              </div>
              <div className={style.contact}>
                <div className={style.type}>
                  <div className={style.circle}>
                    <img src={infoIcon} alt="??????"></img>
                  </div>
                  <div className={style.circle}>
                    <img src={telephoneIcon} alt="??????"></img>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

function OnlineContact(props) {
  const broker = props.broker;
  return (
    <div className={style.contact_broker}>
      <div className={style.broker}>
        <img src={peo02Ing} alt="??????"></img>
        <span>{broker.name}</span>
      </div>
      <div className={style.stars}>
        <img src={starts} alt="??????"></img>
        <span>??????</span>
      </div>
      <div className={style.cont_type}>
        <div className={style.online}>?????????</div>
        <div className={style.phone}>?????????</div>
      </div>
    </div>
  )
}

export { HouseInfo, ShowImg, RecomBroker, OnlineContact }