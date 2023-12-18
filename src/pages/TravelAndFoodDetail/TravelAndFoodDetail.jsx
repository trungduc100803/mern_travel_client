import './TravelAndFoodDetail.css'
import ImageReview from '../../components/ImageReview/ImageReview';
import SaveLike from '../../components/SaveLike/SaveLike';
import Description from '../../components/Description/Description';
import * as request from '../../service/apiConfig'
import ListCard from '../../components/ListCard/ListCard';
import { fetchAFood } from '../../redux/foodSlice';
import { fetchATravel } from '../../redux/travelSlice';
import configRoutes from '../../routers/index'

import { Button } from 'antd';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


function TravelAndFoodDetail() {
    const { id, slug, name } = useParams()
    const dispatch = useDispatch()

    const [ListImg, setListImg] = useState([])
    const [activeImg, setActiveImg] = useState(0)
    const [mainImg, setMainImg] = useState(null)
    const [data, setData] = useState({})
    const [listData, setListData] = useState([])

    useEffect(() => {
        const getAData = async () => {
            const docs = await request.get(`${slug}/${id}`)
            const dataRecommend = await request.get(`${slug}`)
            setData(docs)
            setListData(dataRecommend)
            setListImg(docs.URLimg)
        }
        getAData()

        // slug === 'food' ? dispatch(fetchAFood(`${slug}/${id}`)) : dispatch(fetchATravel(`${slug}/${id}`))
    }, [name, slug])

    const handleSelectImg = (i, img) => {
        setActiveImg(i)
        setMainImg(img)
    }


    // const { food } = useSelector(state => state.food) 
    // const { travel } = useSelector(state => state.travel) 
    // slug === 'food' ? ListImg.push(food.URLimg) : ListImg.push(travel.URLimg)
    // console.log(ListImg)

    return (
        <div className="TravelDetail">
            <div className="travel_head">
                <div className="travel_left">
                    <div className="travel_ListImg">
                        {
                            ListImg.map((img, i) => (
                                <div
                                    onMouseOver={() => handleSelectImg(i, img)}
                                    key={i}
                                    className={activeImg === i ?
                                        "travel_imgItem active" :
                                        "travel_imgItem"
                                    }
                                >
                                    <div
                                        className='travel_img'
                                        style={{ backgroundImage: `url(${img})` }}
                                    >
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="travel_mainImg">
                        <ImageReview URLimg={mainImg === null ? ListImg[0] : mainImg} />
                    </div>
                </div>
                <div className="travel_info">
                    <h1 className="name_travel">{data.name}</h1>
                    <p><span>Địa điểm cụ thể:</span>{data.address}</p>
                    <div className='travel_info__activity'>
                        <p><span>Hoạt động:</span>
                            {data.activity}
                        </p>
                    </div>
                    <div className="travel_btns">
                        <div className="travel_like">
                            <SaveLike type={slug} />
                        </div>
                        <Link to={`/detailInfo/${name}/${id}`}>
                            <div className="btn_pay">
                                <Button
                                    className='btn-detailt'
                                    type='default'
                                >Xem chi tiết</Button>
                            </div>
                        </Link>
                        <Link to={`/payment/${name}/${id}`}>

                            <div className="btn_pay">
                                <Button
                                    className='btn'
                                    type='primary'
                                >Đặt vé</Button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="travel_mid">
                <Description des={data.description} />
            </div>

            <div className="travel_bott">
                <div className="travel_bott-title">ĐỊA ĐIỂM TƯƠNG TỰ</div>

                <ListCard ListCard={listData} />
            </div>
        </div>
    )
}

export default TravelAndFoodDetail;