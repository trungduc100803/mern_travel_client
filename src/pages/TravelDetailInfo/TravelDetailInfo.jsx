import './TravelDetailInfo.css'
import * as request from '../../service/apiConfig'

import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCartOutlined, HeartOutlined, FlagOutlined, GiftOutlined, CarOutlined, CoffeeOutlined, VideoCameraOutlined, BankOutlined, DashboardOutlined, UserOutlined } from '@ant-design/icons'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination"
import { useEffect, useState } from 'react';

const banners = [
    {
        url: 'https://media.travel.com.vn/tour/tfd_230308105539_996330.jpg'
    },
    {
        url: 'https://media.travel.com.vn/tour/tfd_230308105553_092144.jpg'
    },
    {
        url: 'https://media.travel.com.vn/tour/tfd_230308105617_359369.jpg'
    },
    {
        url: 'https://media.travel.com.vn/tour/tfd_230308105638_549743.jpg'
    }
]

function TravelDetailInfo() {

    const { name, id } = useParams()
    const [dataTravel, setDataTravel] = useState({})
    const [listImg, setListImg] = useState([])
    const [schedule, setSchedule] = useState({})

    useEffect(() => {
        const getData = async () => {
            const res = await request.get(`travel/${id}`)
            setDataTravel(res)
            setListImg(res.URLimg)
            setSchedule(res.schedule)
        }
        getData()
    }, [id, name])
    console.log(schedule)

    return <div className="TravelDetailInfo">
        <div className="TravelDetailInfo_head">
            <div className="TravelDetailInfo_headLeft">
                <div className="TravelDetailInfo_name">{dataTravel.name}</div>
                <div className="TravelDetailInfo_statusFeedback">
                    <HeartOutlined style={{ color: 'red', fontSize: '1.2rem', fontWeight: 600, marginTop: '12px', marginRight: '12px' }} />
                    <span>{`${dataTravel.like} quan tâm`}</span>
                </div>
            </div>
            <div className="TravelDetailInfo_headRight">
                <div className="TravelDetailInfo_price">{`6,990,000₫/người`}</div>
                <Link to={`/payment/${name}/${id}`}>
                    <div className="TravelDetailInfo_btnPay">
                        <Button
                            icon={<ShoppingCartOutlined />}
                        >
                            Đặt ngay
                        </Button>
                    </div>
                </Link>
            </div>
        </div>
        <div className="TravelDetailInfo_body">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay]}
                className='sw-slide'
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {
                    listImg.map((banner, i) => (
                        <SwiperSlide className='sw_slide__item' key={i}>
                            <div className="TravelDetailInfo_img">
                                <img src={banner} alt="" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className="TravelDetailInfo_bott">
            <div className="TravelDetailInfo_bottLeft">
                <div className="TravelDetailInfo_startTime">Khởi hành <span>{schedule.startDate}</span>- Giờ đi: <span>{schedule.startTime}</span></div>
                <div className="TravelDetailInfo_address">Tập trung <span>{schedule.forcusHours}</span></div>
                <div className="TravelDetailInfo_time">Thời gian <span>{schedule.time}</span></div>
                <div className="TravelDetailInfo_addressStart">Nơi khởi hành <span>{schedule.startAddress}</span></div>
                <div className="TravelDetailInfo_numberLeft">Số chỗ còn nhận <span>{schedule.leftAttend}</span></div>
            </div>
            <div className="TravelDetailInfo_bottRight">
                <div className="TravelDetailInfo_bottRight--item">
                    <FlagOutlined className='TravelDetailInfo_icon' />
                    <h4>Thời gian</h4>
                    <p>{schedule.time}</p>
                </div>
                <div className="TravelDetailInfo_bottRight--item">
                    <CarOutlined className='TravelDetailInfo_icon' />
                    <h4>Phương tiện di chuyển</h4>
                    <p>{schedule.vehicle}</p>
                </div>
                <div className="TravelDetailInfo_bottRight--item">
                    <VideoCameraOutlined className='TravelDetailInfo_icon' />
                    <h4>Điểm tham quan</h4>
                    <p>{dataTravel.addressTourism}</p>
                </div>
                <div className="TravelDetailInfo_bottRight--item">
                    <CoffeeOutlined className='TravelDetailInfo_icon' />
                    <h4>Ẩm thực</h4>
                    <p>{schedule.foods}</p>
                </div>
                <div className="TravelDetailInfo_bottRight--item">
                    <BankOutlined className='TravelDetailInfo_icon' />
                    <h4>Khách sạn</h4>
                    <p>{`Khách sạn ${dataTravel.typeHotel}`}</p>
                </div>
                <div className="TravelDetailInfo_bottRight--item">
                    <DashboardOutlined className='TravelDetailInfo_icon' />
                    <h4>Thời gian lý tưởng</h4>
                    <p>{dataTravel.goodTime}</p>
                </div>
                <div className="TravelDetailInfo_bottRight--item">
                    <UserOutlined className='TravelDetailInfo_icon' />
                    <h4>Đối tượng thích hợp</h4>
                    <p>{dataTravel.applicateObject}</p>
                </div>
                <div className="TravelDetailInfo_bottRight--item">
                    <GiftOutlined className='TravelDetailInfo_icon' />
                    <h4>Ưu đãi</h4>
                    <p>{dataTravel.endow}</p>
                </div>
            </div>
        </div>
        <div className="TravelDetailInfo_content">
            <h1>Điểm nhấn</h1>
            <p>- Đặt chân đến Quảng Ninh – tỉnh đầu tiên có 4 thành phố: Hạ Long, Móng Cái, Uông Bí và Cẩm Phả tạo nên thành phố du lịch không chỉ nổi tiếng về biển như Vịnh Hạ Long với hàng nghìn đảo đá nhấp nhô trên sóng nước lung linh huyền ảo, những hang động tuyệt đẹp, những bãi tắm hoang sơ, làn nước mát lạnh trong veo đặc trưng của vùng đảo Cô Tô, Soi Sim, ... Không những thế, Quảng Ninh còn hấp dẫn du khách về không khí mát mẻ của vùng núi thiêng Yên Tử nơi hội tụ tâm linh, văn hóa và không gian nghỉ dưỡng đỉnh cao. Nếu bạn yêu sự hoang sơ của thiên nhiên, không gian thoáng mát thì hãy thử một lần ghé thăm cao nguyên Bình Liêu, được ví von như “Sapa vùng đất than”, với các cột mốc biên giới và dãy “cờ cỏ lau” hay con đường “Sống lưng khủng long” chạy dọc đường tuần biên luôn là điểm dừng yêu thích của du khách trong và ngoài tỉnh.
            </p>
        </div>

        <div className="TravelDetailInfo_fixed">
            <div className="TravelDetailInfo_fixed--left">
                <div className="TravelDetailInfo_fixed--title">{dataTravel.name}</div>
                <div className="TravelDetailInfo_fixed--time">{`${schedule.startDate} | ${schedule.time} | ${dataTravel.vehicle}`}</div>
            </div>
            <div className="TravelDetailInfo_fixed--right">
                <Link to={`/payment/${name}/${id}`}>
                    <Button
                        icon={<ShoppingCartOutlined />}
                    >
                        Đặt ngay
                    </Button>
                </Link>
            </div>
        </div>
    </div>
}

export default TravelDetailInfo;