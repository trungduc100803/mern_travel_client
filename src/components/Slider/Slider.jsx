import './Slider.css'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination"

function Slider({ sliders }) {

    const SlideItem = ({ slider }) => {
        return (
            <div className="slider_item">
                <img src={slider.silderURL} alt="" />
            </div>
        )
    }

    return (  
        <div className="Slider">
            <div className="list_slider">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay]}
                    className='sw-slide'
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {
                        sliders.map((slider, i) => (
                            <SwiperSlide className='sw_slide__item' key={i}>
                                <SlideItem slider={slider}  />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Slider;