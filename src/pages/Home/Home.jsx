import './Home.css'
import Slider from '../../components/Slider/Slider';
import ListCard from '../../components/ListCard/ListCard';
import * as request from '../../service/apiConfig'
import { fetchFoods } from '../../redux/foodSlice';
import { fetchSlider } from '../../redux/sliderSlice';
import travelAction from '../../redux/actions/travelAction';
import foodAction from '../../redux/actions/foodAction';
import blogAction from '../../redux/actions/blogAction';
import Card from '../../components/Card/Card';

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

function Home() {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSlider('slider'))
        dispatch(travelAction.fetchAllTravel('travel'))
        dispatch(foodAction.fetchAllFood('food'))
        dispatch(blogAction.fetchAllBlog('blog'))
    }, [])


    const { sliders } = useSelector(state => state.slider)
    const { travels } = useSelector(state => state.travel)
    const { foods } = useSelector(state => state.food)
    // const { blogs } = useSelector(state => state.blog)

    console.log(document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1'))


    return (
        <div className="Home">
            <div className="home_silder">
                <Slider sliders={sliders} />

            </div>

            <h2 className="heading_home">Địa điểm gần bạn</h2>
            <ListCard ListCard={travels} />

            <h2 className="heading_home">Món ăn </h2>
            <ListCard ListCard={foods} />
            {/* 
            <h2 className="heading_home">Bài viết nổi bật</h2>
            <ListCard ListCard={blogs} /> */}
        </div>
    )
}

export default Home;