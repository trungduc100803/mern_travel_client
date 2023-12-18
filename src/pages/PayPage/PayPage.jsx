import { useCallback, useEffect, useState } from 'react'
import './PayPage.css'
// import { setCustomaer } from '../../redux/customerSlice'
import { customerType } from '../../assest/customers'
import { clearAdult, clearBaby, clearKid, clearSmallKid, popAdult, popBaby, popKid, popSmallKid, setCustomaerAdult, setCustomaerBaby, setCustomaerKid, setCustomaerSmallKid } from '../../redux/customerSlice'
import * as request from '../../service/apiConfig'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PlusOutlined, MinusOutlined, CalendarOutlined } from '@ant-design/icons'


const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const years = [1935,
    1936,
    1937,
    1938,
    1939,
    1940,
    1941,
    1942,
    1943,
    1944,
    1945,
    1946,
    1947,
    1948,
    1949,
    1950,
    1951,
    1952,
    1953,
    1954,
    1955,
    1956,
    1957,
    1958,
    1959,
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022, 2023,]

const bill = []

const CardCustomer = ({ type, age }) => {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)
    const { adults, customerKid, customerSmallKid, customerBaby } = useSelector(state => state.customer)



    const handleMinus = () => {
        quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1)

        if (type === customerType.type.adult) {
            if (adults.length > 0) {
                dispatch(popAdult())
            } else {
                return
            }
        } else if (type === customerType.type.kid) {
            if (customerKid.length > 0) {
                dispatch(popKid())
            } else {
                return
            }
        } else if (type === customerType.type.smallKid) {
            if (customerSmallKid.length > 0) {
                dispatch(popSmallKid())
            } else {
                return
            }
        } else {
            if (customerBaby.length > 0) {
                dispatch(popBaby())
            } else {
                return
            }
        }
    }



    const handlePlus = () => {
        setQuantity(quantity + 1)

        if (type === customerType.type.adult) {
            dispatch(setCustomaerAdult({
                type: 'Người lớn',
                age: '> 12 tuổi'
            }))
        } else if (type === customerType.type.kid) {
            dispatch(setCustomaerKid({
                type: 'Trẻ em',
                age: 'Từ 5 - 12 tuổi'
            }))
        } else if (type === customerType.type.smallKid) {
            dispatch(setCustomaerSmallKid({
                type: 'Trẻ nhỏ',
                age: 'Từ 2 - 4 tuổi'
            }))
        } else {
            dispatch(setCustomaerBaby({
                type: 'Em bé',
                age: 'Từ 0 - 2 tuổi'
            }))
        }
    }
    // console.log(customerKid)


    return <div className="cardCustomer">
        <div className="cardCustomer-left">
            <h2>{type}</h2>
            <p>{age}</p>
        </div>
        <div className="cardCustomer-right">
            <div className="cardCustomer-increase">
                <MinusOutlined onClick={handleMinus} />
            </div>
            <span>{quantity}</span>
            <div className="cardCustomer-crease">
                <PlusOutlined onClick={handlePlus} />
            </div>
        </div>
    </div>
}

function PayPage() {
    const { adults, customerKid, customerSmallKid, customerBaby } = useSelector(state => state.customer)
    const { name, id } = useParams()
    const [dataTravel, setDataTravel] = useState({})
    const [listImg, setListImg] = useState([])
    const [schedule, setSchedule] = useState({})
    const dispatch = useDispatch()

    let numberCustomer = 0
    // console.log(customerBaby, customerSmallKid, customerKid, adults)

    useEffect(() => {
        dispatch(clearAdult())
        dispatch(clearKid())
        dispatch(clearSmallKid())
        dispatch(clearBaby())
        const getData = async () => {
            const res = await request.get(`travel/${id}`)
            setDataTravel(res)
            setListImg(res.URLimg)
            setSchedule(res.schedule)
        }
        getData()
    }, [id, name])
    console.log(dataTravel)
    numberCustomer = adults.length + customerKid.length + customerSmallKid.length + customerBaby.length

    const priceAdult = adults.length * dataTravel.price
    const priceKid = (customerKid.length * dataTravel.price) * 0.8
    const priceSmallKid = (customerSmallKid.length * dataTravel.price) * 0.7
    const priceBaby = (customerBaby.length * dataTravel.price) * 0.5
    const allPrice = priceAdult + priceKid + priceSmallKid + priceBaby

    return <div className="PayPage">
        <div className="PayPage-title">Tổng quan về chuyến đi</div>
        <div className="PayPage_head">
            <div className="PayPage_head--img" style={{ backgroundImage: `url(${listImg[0]})` }}></div>
            <div className="PayPage_head--info">
                <div className="PayPage_head--name">{dataTravel.name}</div>
                <div className="PayPage_head--content">
                    <p>Mã Tour <span>NDSGN1031-115-290723VU-D</span></p>
                    <p>Khởi hành <span>{schedule.startDate}</span></p>
                    <p>Thời gian <span>{schedule.time}</span></p>
                    <p>Nơi khởi hành <span>{schedule.startAddress}</span></p>
                    <p>Số chỗ còn nhận <span>{schedule.leftAttend}</span></p>
                </div>
            </div>
        </div>


        <div className="PayPage_body">
            <div className="PayPage_left">
                <div className="PayPage-title">Thông tin liên lạc</div>
                <form className="PayPage_infoContact">
                    <div className="PayPage_infoContact--item">
                        <label htmlFor="">Họ và Tên</label>
                        <input type="text" />
                    </div>
                    <div className="PayPage_infoContact--item">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="PayPage_infoContact--item">
                        <label htmlFor="">Số điện thoại</label>
                        <input type="text" />
                    </div>
                    <div className="PayPage_infoContact--item">
                        <label htmlFor="">Địa chỉ</label>
                        <input type="text" />
                    </div>
                </form>
                <div className="PayPage-title">Hành khách</div>
                <div className="PayPage_customer">
                    <div className="PayPage_customer--item">
                        <CardCustomer type={customerType.type.adult} age={customerType.age.adult} />
                    </div>
                    <div className="PayPage_customer--item">
                        <CardCustomer type={customerType.type.kid} age={customerType.age.kid} />
                    </div>
                    <div className="PayPage_customer--item">
                        <CardCustomer type={customerType.type.smallKid} age={customerType.age.smallKid} />
                    </div>
                    <div className="PayPage_customer--item">
                        <CardCustomer type={customerType.type.baby} age={customerType.age.baby} />
                    </div>
                </div>
                <div className="PayPage-title">Thông tin hành khách</div>
                <div className="PayPage_infoCustomer">
                    <h2>Người lớn</h2>
                    {
                        adults.map((item, i) => {
                            return <InfoCustomer key={i} personType={item.type} />
                        })
                    }

                    <h2>Trẻ em</h2>
                    {
                        customerKid.map((item, i) => {
                            return <InfoCustomer key={i} personType={item.type} />
                        })
                    }

                    <h2>Trẻ nhỏ</h2>
                    {
                        customerSmallKid.map((item, i) => {
                            return <InfoCustomer key={i} personType={item.type} />
                        })
                    }
                    <h2>Em bé</h2>
                    {
                        customerBaby.map((item, i) => {
                            return <InfoCustomer key={i} personType={item.type} />
                        })
                    }


                </div>
            </div>
            <div className="PayPage_right">
                <div className="PayPage-title">Tóm tắt chuyến đi</div>
                <div className="PayPage_right--head">
                    <div className="PayPage_right--img" style={{ backgroundImage: `url(${listImg[1]})` }}></div>
                    <div className="PayPage_right--name">{dataTravel.name}</div>
                </div>
                <div className="PayPage_right--body">
                    <div className="PayPage_right--time">
                        <div className="PayPage_right--timeIcon">
                            <CalendarOutlined className='icon' />

                        </div>
                        <div className="PayPage_right--timeTitle">
                            <p>Bắt đầu chuyến đi</p>
                            <span>{schedule.startDate}</span>
                        </div>
                    </div>
                    <div className="PayPage_right--time">
                        <div className="PayPage_right--timeIcon">
                            <CalendarOutlined className='icon' />
                        </div>
                        <div className="PayPage_right--timeTitle">
                            <p>Kết thúc chuyến đi</p>
                            <span>CN, 6 Tháng 8, 2023</span>
                        </div>
                    </div>
                </div>
                <div className="PayPage_right--bott">
                    <div className="PayPage_right--bottItem">
                        <p>Hành khách</p>
                        <span>{numberCustomer}</span>
                    </div>
                    <div className="PayPage_right--bottItem">
                        <p>Người lớn</p>
                        <span>{`${priceAdult}đ`}</span>
                    </div>
                    <div className="PayPage_right--bottItem">
                        <p>Trẻ em</p>
                        <span>{`${priceKid}đ`}</span>
                    </div>
                    <div className="PayPage_right--bottItem">
                        <p>Trẻ nhỏ</p>
                        <span>{`${priceSmallKid}đ`}</span>
                    </div>
                    <div className="PayPage_right--bottItem">
                        <p>Em bé</p>
                        <span>{`${priceBaby}đ`}</span>
                    </div>
                    <div className="PayPage_right--bottItem">
                        <p>TỔNG CỘNG</p>
                        <span>{`${allPrice}đ`}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
}




const InfoCustomer = ({ personType }) => {
    const [gender, setGender] = useState({
        adult: '',
        kid: '',
        smallKid: '',
        baby: ''
    })
    const [name, setName] = useState({
        adult: '',
        kid: '',
        smallKid: '',
        baby: ''
    })
    const [dayValue, setDayValue] = useState({
        adult: 0,
        kid: 0,
        smallKid: 0,
        baby: 0
    })
    const [monthValue, setMonthValue] = useState({
        adult: 0,
        kid: 0,
        smallKid: 0,
        baby: 0
    })
    const [yearValue, setYearValue] = useState({
        adult: 0,
        kid: 0,
        smallKid: 0,
        baby: 0
    })

    if (personType === "Người lớn") {
        return <div className="infoCustomer" style={{ marginBottom: '20px' }}>
            <form className="infoCustomer-form">
                <div className="infoCustomer-item infoCustomer-name">
                    <input type="email" name="" id="" placeholder='Họ tên' onChange={e => setName({
                        adult: e.target.value
                    })} />
                </div>
                <div className="infoCustomer-item">
                    {/* <label htmlFor="">Giới tính</label> */}
                    <select name="genders" id="genders" onChange={(e) => setGender({
                        adult: e.target.value
                    })}>
                        <option value="gender">Giới tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                </div>
                <div className="infoCustomer-item infoCustomer-birth ">
                    {/* <label htmlFor="">Ngày sinh</label> */}
                    <div className="infoCustomer-item--birth">
                        <select name="days" id="days" onChange={(e) => setDayValue({
                            adult: e.target.value
                        })}>
                            {days.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <select name="month" id="month" onChange={(e) => setMonthValue({
                            adult: e.target.value
                        })}>
                            {months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        <select name="years" id="years" onChange={(e) => setYearValue({
                            adult: e.target.value
                        })}>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    } else if (personType === "Trẻ em") {
        return <div className="infoCustomer" style={{ marginBottom: '20px' }}>
            <form className="infoCustomer-form">
                <div className="infoCustomer-item infoCustomer-name">
                    <input type="email" name="" id="" placeholder='Họ tên' onChange={e => setName({
                        kid: e.target.value
                    })} />
                </div>
                <div className="infoCustomer-item">
                    {/* <label htmlFor="">Giới tính</label> */}
                    <select name="genders" id="genders" onChange={(e) => setGender({
                        kid: e.target.value
                    })}>
                        <option value="gender">Giới tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                </div>
                <div className="infoCustomer-item infoCustomer-birth ">
                    {/* <label htmlFor="">Ngày sinh</label> */}
                    <div className="infoCustomer-item--birth">
                        <select name="days" id="days" onChange={(e) => setDayValue({
                            kid: e.target.value
                        })}>
                            {days.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <select name="month" id="month" onChange={(e) => setMonthValue({
                            kid: e.target.value
                        })}>
                            {months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        <select name="years" id="years" onChange={(e) => setYearValue({
                            kid: e.target.value
                        })}>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    } else if (personType === "Trẻ nhỏ") {
        return <div className="infoCustomer" style={{ marginBottom: '20px' }}>
            <form className="infoCustomer-form">
                <div className="infoCustomer-item infoCustomer-name">
                    <input type="email" name="" id="" placeholder='Họ tên' onChange={e => setName({
                        smallKid: e.target.value
                    })} />
                </div>
                <div className="infoCustomer-item">
                    {/* <label htmlFor="">Giới tính</label> */}
                    <select name="genders" id="genders" onChange={(e) => setGender({
                        smallKid: e.target.value
                    })}>
                        <option value="gender">Giới tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                </div>
                <div className="infoCustomer-item infoCustomer-birth ">
                    {/* <label htmlFor="">Ngày sinh</label> */}
                    <div className="infoCustomer-item--birth">
                        <select name="days" id="days" onChange={(e) => setDayValue({
                            smallKid: e.target.value
                        })}>
                            {days.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <select name="month" id="month" onChange={(e) => setMonthValue({
                            smallKid: e.target.value
                        })}>
                            {months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        <select name="years" id="years" onChange={(e) => setYearValue({
                            smallKid: e.target.value
                        })}>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    } else {

        return <div className="infoCustomer" style={{ marginBottom: '20px' }}>
            <form className="infoCustomer-form">
                <div className="infoCustomer-item infoCustomer-name">
                    <input type="email" name="" id="" placeholder='Họ tên' onChange={e => setName({
                        baby: e.target.value
                    })} />
                </div>
                <div className="infoCustomer-item">
                    {/* <label htmlFor="">Giới tính</label> */}
                    <select name="genders" id="genders" onChange={(e) => setGender({
                        baby: e.target.value
                    })}>
                        <option value="gender">Giới tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                </div>
                <div className="infoCustomer-item infoCustomer-birth ">
                    {/* <label htmlFor="">Ngày sinh</label> */}
                    <div className="infoCustomer-item--birth">
                        <select name="days" id="days" onChange={(e) => setDayValue({
                            baby: e.target.value
                        })}>
                            {days.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <select name="month" id="month" onChange={(e) => setMonthValue({
                            baby: e.target.value
                        })}>
                            {months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        <select name="years" id="years" onChange={(e) => setYearValue({
                            baby: e.target.value
                        })}>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    }



}


export default PayPage;