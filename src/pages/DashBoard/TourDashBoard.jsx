import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const minutes = [0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,]
const hours = [0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24]

function TourDashBoard() {

    const { action } = useParams()


    return <div className="TourDashBoard">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to={'/dashBoard/all-travel'} className="nav-item">
                            <span className="nav-link active" aria-current="page">Tất cả</span>
                        </Link>
                        <Link to={'/dashBoard/create-travel'} className="nav-item">
                            <span className="nav-link">Thêm</span>
                        </Link>
                        <Link to={'/dashBoard/edit-travel'} className="nav-item">
                            <span className="nav-link" >Chỉnh sửa</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="TourDashBoard_main">
            {
                action === "all-travel" ?
                    <AllTravel /> :
                    action === "create-travel" ?
                        <CreateTravel /> :
                        <EditTravel />
            }
        </div>
    </div>


}

const AllTravel = () => {

    const navigate = useNavigate()
    const handleEdit = () => {
        navigate('/dashBoard/edit-travel')
    }
    const { travels } = useSelector(state => state.travel)


    return <>
        <div className="all_travel">
            <div className="travel_list row  m-0">
                {
                    travels.length > 0 ?
                        travels.map((travel, i) => {
                            const arrImg = travel.URLimg
                            return <div key={i} className="card col-4">
                                <img src={arrImg[i]} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{travel.name}</h5>
                                    <p className="card-text">{travel.description}</p>
                                    <button className='btn btn-success' onClick={handleEdit} >edit</button>
                                </div>
                            </div>
                        })
                        :
                        <></>
                }

            </div>
        </div>
    </>
}


const CreateTravel = () => {

    const [validate, setValidate] = useState(false)
    const [URLImgTravel, setURLImgTravel] = useState([])
    const [dataTour, setDataTour] = useState({
        nameTour: '',
        city: '',
        desc: '',
        activity: '',
        startDate: '',
        startTime: {
            hour: '',
            minutes: ''
        },
        focusTime: {
            hour: '',
            minutes: ''
        },
        time: '',
        addressStart: '',
        numPerson: 0,
        addressDetail: '',
        vihecal: '',
        food: '',
        typeHotel: '',
        timeFit: '',
        objFit: '',
        descDetail: '',
        price: 0
    })
    const [messageAlert, setMessageAlert] = useState({
        urlImg: '',
        nameTour: '',
        city: '',
        desc: '',
        activity: '',
        startDate: '',
        startTime: {
            hour: '',
            minutes: ''
        },
        focusTime: {
            hour: '',
            minutes: ''
        },
        time: '',
        addressStart: '',
        numPerson: '',
        addressDetail: '',
        vihecal: '',
        food: '',
        typeHotel: '',
        timeFit: '',
        objFit: '',
        descDetail: '',
        price: ''
    })

    const handleSubmitCreateTour = () => {
        compareURLimg(URLImgTravel, "Yêu cầu nhập ít nhất 1 ảnh để mô tả tour", alertURLImg)
        checkValidate()
        if (validate) {
            console.log("success");
            console.log(dataTour);
            console.log(URLImgTravel);
            setMessageAlert({
                nameTour: '',
                city: '',
                desc: '',
                activity: '',
                startDate: '',
                startTime: {
                    hour: '',
                    minutes: ''
                },
                focusTime: {
                    hour: '',
                    minutes: ''
                },
                time: '',
                addressStart: '',
                numPerson: '',
                addressDetail: '',
                vihecal: '',
                food: '',
                typeHotel: '',
                timeFit: '',
                objFit: '',
                descDetail: '',
                price: ''
            })
        }
    }


    const checkValidate = () => {
        compareResultSubmit(dataTour.nameTour, '', "Yêu cầu nhập tên của tour", alertNameTour)
        compareResultSubmit(dataTour.city, '', "Yêu cầu nhập địa điểm bạn muốn đến", alertCity)
        compareResultSubmit(dataTour.desc, '', "Yêu cầu nhập mô tả sơ lược cho tour", alertDesc)
        compareResultSubmit(dataTour.activity, '', "Yêu cầu nhập các hoath động có trong tour", alertActi)
        compareResultSubmit(dataTour.startDate, '', "Yêu cầu nhập ngày khởi hành", alertStartDate)
        compareResultSubmit(dataTour.startTime.hour, '', "Yêu cầu nhập giờ khởi hành", alertStartTimeHour)
        compareResultSubmit(dataTour.startTime.minutes, '', "Yêu cầu nhập phút khởi hành", alertStartTimeMinutes)
        compareResultSubmit(dataTour.focusTime.hour, '', "Yêu cầu nhập giờ tập trung", alertFocusTimeHour)
        compareResultSubmit(dataTour.focusTime.minutes, '', "Yêu cầu nhập phút tập trung", alertFocusTimeMinutes)
        compareResultSubmit(dataTour.time, '', "Yêu cầu nhập thời gian tour", alertTime)
        compareResultSubmit(dataTour.addressStart, '', "Yêu cầu nhập địa điểm khởi hành", alertAddS)
        compareResultSubmit(dataTour.numPerson, 0, "Yêu cầu nhập số lượng hành khách tối đa cho tour", alertNump)
        compareResultSubmit(dataTour.addressDetail, '', "Yêu cầu nhập địa điểm tham quan cụ thể", alertAddDetail)
        compareResultSubmit(dataTour.vihecal, '', "Yêu cầu nhập phương tiện di chuyển", alertVihecle)
        compareResultSubmit(dataTour.food, '', "Yêu cầu nhập thực đơn cho tour", alertFood)
        compareResultSubmit(dataTour.typeHotel, '', "Yêu cầu nhập xếp hạng khách sạn", alertTypeHotel)
        compareResultSubmit(dataTour.timeFit, '', "Yêu cầu nhập khung thời gian đẹp nhất", alertTimeFit)
        compareResultSubmit(dataTour.objFit, '', "Yêu cầu nhập đối tượng phù hợp với tour", alertObjFit)
        compareResultSubmit(dataTour.descDetail, '', "Yêu cầu nhập mô tả chi tiết cho tour", alertDesDetail)
        compareResultSubmit(dataTour.price, 0, "Yêu cầu nhập giá cho tour", alertPrice)
    }

    const compareURLimg = (obj, message, callback) => {
        if (obj.length > 0) {
            callback('')
            setValidate(true)
        } else {
            setValidate(false)
            callback(message)
        }
    }

    const compareResultSubmit = (obj, require, message, callback) => {
        if (obj == require) {
            callback(message)
            setValidate(false)
        } else {
            callback('')
            setValidate(true)
        }
    }

    const handleChangeImageTravel = (e) => {
        const url = URL.createObjectURL(e.target.files[0])
        setURLImgTravel(prev => { return [...prev, url] })
        compareURLimg(URLImgTravel, "Yêu cầu nhập ít nhất 2 ảnh để mô tả tour", alertURLImg)
    }

    const alertURLImg = (m) => {
        setMessageAlert(other => { return { ...other, urlImg: m } })
    }
    const alertNameTour = (m) => {
        setMessageAlert(other => { return { ...other, nameTour: m } })
    }
    const alertCity = (m) => {
        setMessageAlert(other => { return { ...other, city: m } })
    }
    const alertDesc = (m) => {
        setMessageAlert(other => { return { ...other, desc: m } })
    }
    const alertActi = (m) => {
        setMessageAlert(other => { return { ...other, activity: m } })
    }
    const alertStartDate = (m) => {
        setMessageAlert(other => { return { ...other, startDate: m } })
    }
    const alertStartTimeHour = (m) => {
        setMessageAlert(other => { return { ...other, startTime: { hour: m, minutes: '' } } })
    }
    const alertStartTimeMinutes = (m) => {
        setMessageAlert(other => { return { ...other, startTime: { hour: '', minutes: m } } })
    }
    const alertFocusTimeHour = (m) => {
        setMessageAlert(other => { return { ...other, focusTime: { hour: m, minutes: '' } } })
    }
    const alertFocusTimeMinutes = (m) => {
        setMessageAlert(other => { return { ...other, focusTime: { hour: '', minutes: m } } })
    }
    const alertTime = (m) => {
        setMessageAlert(other => { return { ...other, time: m } })
    }
    const alertNump = (m) => {
        setMessageAlert(other => { return { ...other, numPerson: m } })
    }
    const alertAddS = (m) => {
        setMessageAlert(other => { return { ...other, addressStart: m } })
    }
    const alertAddDetail = (m) => {
        setMessageAlert(other => { return { ...other, addressDetail: m } })
    }
    const alertVihecle = (m) => {
        setMessageAlert(other => { return { ...other, vihecal: m } })
    }
    const alertFood = (m) => {
        setMessageAlert(other => { return { ...other, food: m } })
    }
    const alertTypeHotel = (m) => {
        setMessageAlert(other => { return { ...other, typeHotel: m } })
    }
    const alertTimeFit = (m) => {
        setMessageAlert(other => { return { ...other, timeFit: m } })
    }
    const alertObjFit = (m) => {
        setMessageAlert(other => { return { ...other, objFit: m } })
    }
    const alertDesDetail = (m) => {
        setMessageAlert(other => { return { ...other, descDetail: m } })
    }
    const alertPrice = (m) => {
        setMessageAlert(other => { return { ...other, price: m } })
    }


    return <>
        <form className="create_travel">
            <h4>Thông tin cơ bản chuyến đi</h4>
            <div class="row g-3">
                <div class="col">
                    <label htmlFor="" className='label-item'>Tên tour</label>
                    <input type="text"
                        value={dataTour.nameTour}
                        onChange={(e) => {
                            setDataTour(other => { return { ...other, nameTour: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập tên của tour", alertNameTour)
                        }}
                        class="form-control"
                        placeholder="Tên tour" aria-label="First name" />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.nameTour}</label>

                </div>
                <div class="col">
                    <label htmlFor="" className='label-item'>Thành phố trong tour</label>
                    <input type="text"
                        value={dataTour.city}
                        onChange={e => {
                            setDataTour(other => { return { ...other, city: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập địa điểm bạn muốn đến", alertCity)

                        }}
                        class="form-control"
                        placeholder="Thành phố tham quan"
                        aria-label="Last name" />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.city}</label>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-12">
                    <label htmlFor="" className='label-item'>Mô tả sơ lược tour</label>
                    <textarea type="text"
                        value={dataTour.desc}
                        onChange={e => {
                            setDataTour(other => { return { ...other, desc: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập mô tả sơ lược cho tour", alertDesc)
                        }}
                        class="form-control"
                        id="inputDesc"
                        placeholder="Mô tả chuyến đi" />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.desc}</label>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-12">
                    <label htmlFor="" className='label-item'>Hoạt động diễn ra trong tour</label>
                    <textarea type="text"
                        value={dataTour.activity}
                        onChange={e => {
                            setDataTour(other => { return { ...other, activity: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập các hoath động có trong tour", alertActi)
                        }}
                        class="form-control"
                        id="inputactivity"
                        placeholder="Các hoạt động khi tham gia tour" />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.activity}</label>
                </div>
            </div>
            <button type="button" class="btn btn-info">
                <label htmlFor="addImgTravel">Thêm ảnh mô tả tour</label>
            </button>
            <input
                type="file"
                name=""
                id="addImgTravel"
                hidden
                onChange={e => handleChangeImageTravel(e)}
            />
            <div className="add_img">
                {
                    URLImgTravel.length === 0 ? <h6 className='text_no_img'>Chưa có ảnh nào</h6> :
                        URLImgTravel.map((img, i) => (
                            <div className={'add_img_item'}>
                                <img key={i} src={img} alt="" />
                            </div>
                        ))
                }
            </div>
            <label htmlFor="" className='label-item_alert'>{messageAlert.urlImg}</label>


            <h4>Lịch trình chuyến đi</h4>
            <div class="row g-3">
                <div class="col-6">
                    <label for="inputEmail4" class="form-label">Ngày khởi hành</label>
                    <input
                        value={dataTour.startDate}
                        onChange={e => {
                            setDataTour(other => { return { ...other, startDate: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập ngày khởi hành", alertStartDate)
                        }}
                        type="date"
                        class="form-control"
                        aria-label="First name"
                    />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.startDate}</label>
                </div>
            </div>
            <label for="inputEmail4" class="form-label">Giờ bắt đầu di chuyển</label>
            <div class="row g-3">
                <div class="col-4">
                    <label htmlFor="" className='label-item'>Giờ</label>
                    <select
                        value={dataTour.startTime.hour}
                        onChange={e => {
                            setDataTour(other => {
                                return { ...other, startTime: { hour: e.target.value, minutes: dataTour.startTime.minutes } }
                            })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập giờ khởi hành", alertStartTimeHour)
                        }}
                        class="form-select"
                        aria-label="--Chọn giờ--">
                        {
                            hours.map(h => (
                                <option value={h} key={h}>{`${h}h`}</option>
                            ))
                        }
                    </select>
                    <label htmlFor="" className='label-item_alert'>{messageAlert.startTime.hour}</label>
                </div>
                <div class="col-4">
                    <label htmlFor="" className='label-item'>Phút</label>
                    <select
                        value={dataTour.startTime.minutes}
                        onChange={e => {
                            setDataTour(other => {
                                return { ...other, startTime: { hour: dataTour.startTime.hour, minutes: e.target.value } }
                            })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập phút khởi hành", alertStartTimeMinutes)
                        }}
                        class="form-select"
                        aria-label="--Chọn phút--">
                        {
                            minutes.map(m => (
                                <option value={m} key={m}>{m}</option>
                            ))
                        }
                    </select>
                    <label htmlFor="" className='label-item_alert'>{messageAlert.startTime.minutes}</label>
                </div>
            </div>
            <label for="inputEmail4" class="form-label">Giờ tập trung</label>
            <div class="row g-3">
                <div class="col-4">
                    <label htmlFor="" className='label-item'>Giờ</label>
                    <select
                        value={dataTour.focusTime.hour}
                        onChange={e => {
                            setDataTour(other => { return { ...other, focusTime: { hour: e.target.value, minutes: dataTour.focusTime.minutes } } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập giờ tập trung", alertFocusTimeHour)
                        }}
                        class="form-select"
                        aria-label="--Chọn giờ--">
                        {
                            hours.map(h => (
                                <option value={h} key={h}>{`${h}h`}</option>
                            ))
                        }
                    </select>
                    <label htmlFor="" className='label-item_alert'>{messageAlert.focusTime.hour}</label>
                </div>
                <div class="col-4">
                    <label htmlFor="" className='label-item'>Phút</label>
                    <select
                        value={dataTour.focusTime.minutes}
                        onChange={e => {
                            setDataTour(other => { return { ...other, focusTime: { hour: dataTour.focusTime.hour, minutes: e.target.value } } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập phút tập trung", alertFocusTimeMinutes)
                        }}
                        class="form-select"
                        aria-label="--Chọn phút--">
                        {
                            minutes.map(m => (
                                <option value={m} key={m}>{m}</option>
                            ))
                        }
                    </select>
                    <label htmlFor="" className='label-item_alert'>{messageAlert.focusTime.minutes}</label>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-6">
                    <label htmlFor="" className='label-item'>Thời gian tour</label>
                    <input
                        value={dataTour.time}
                        onChange={e => {
                            setDataTour(other => { return { ...other, time: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập thời gian tour", alertTime)
                        }}
                        type="text"
                        class="form-control"
                        id="inputDesc"
                        placeholder="Thời gian chuyến đi" />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.time}</label>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-6">
                    <label htmlFor="" className='label-item'>Địa điểm khởi hành</label>
                    <input
                        value={dataTour.addressStart}
                        onChange={e => {
                            setDataTour(other => { return { ...other, addressStart: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập địa điểm khởi hành", alertAddS)
                        }}
                        type="text"
                        class="form-control"
                        id="inputDesc"
                        placeholder="Địa chỉ khởi hành" />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.addressStart}</label>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-6">
                    <label htmlFor="" className='label-item'>Số lượng hành khách tối đa</label>
                    <input
                        type="number"
                        value={dataTour.numPerson}
                        onChange={e => {
                            setDataTour(other => { return { ...other, numPerson: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), 0, "Yêu cầu nhập số lượng hành khách tối đa cho tour", alertNump)
                        }}
                        class="form-control"
                        id="inputDesc"
                        placeholder="Số lượng người"
                    />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.numPerson}</label>
                </div>
            </div>

            <h4>Thông tin cụ thể chuyến đi</h4>
            <div class="row g-3">
                <div class="col-12">
                    <label htmlFor="" className='label-item'>Địa chỉ tham quan cụ thể</label>
                    <input
                        value={dataTour.addressDetail}
                        onChange={e => {
                            setDataTour(other => { return { ...other, addressDetail: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập địa điểm tham quan cụ thể", alertAddDetail)
                        }}
                        type="text"
                        class="form-control"
                        id="inputDesc"
                        placeholder="Địa điểm tham quan cu thể"
                    />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.addressDetail}</label>

                </div>
            </div>
            <div class="row g-3">
                <div class="col-12">
                    <label htmlFor="" className='label-item'>Phương tiện di chuyển</label>
                    <input
                        type="text"
                        value={dataTour.vihecal}
                        onChange={e => {
                            setDataTour(other => { return { ...other, vihecal: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập phương tiện di chuyển", alertVihecle)
                        }}
                        class="form-control"
                        id="inputDesc"
                        placeholder="Phương tiện di chuyển"
                    />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.vihecal}</label>

                </div>
            </div>
            <div class="row g-3">
                <div class="col-12">
                    <label htmlFor="" className='label-item'>Ẩm thực</label>
                    <input
                        value={dataTour.food}
                        onChange={e => {
                            setDataTour(other => { return { ...other, food: e.target.value } })
                            compareResultSubmit(e.target.value, '', "Yêu cầu nhập thực đơn cho tour", alertFood)
                        }}
                        type="text"
                        class="form-control"
                        id="inputDesc"
                        placeholder="Ẩm thực"
                    />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.food}</label>

                </div>
            </div>
            <label for="inputEmail4" class="form-label">Loại khách sạn</label>
            <div class="row g-3">
                <div class="col-6">
                    <select
                        value={dataTour.typeHotel}
                        onChange={e => {
                            setDataTour(other => { return { ...other, typeHotel: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập xếp hạng khách sạn", alertTypeHotel)
                        }}
                        class="form-select" aria-label="--Chọn loại khách sạn--"
                    >
                        <option value='2 sao'>2 sao</option>
                        <option value='3 sao'>3 sao</option>
                        <option value='4 sao'>4 sao</option>
                        <option value='5 sao'>5 sao</option>
                    </select>
                    <label htmlFor="" className='label-item_alert'>{messageAlert.typeHotel}</label>
                </div>
            </div>

            <label for="inputEmail4" class="form-label">Thời gian đẹp nhất trong năm</label>
            <div class="row g-3">
                <div class="col-6">
                    <select
                        value={dataTour.timeFit}
                        onChange={e => {
                            setDataTour(other => { return { ...other, timeFit: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập khung thời gian đẹp nhất", alertTimeFit)
                        }}
                        class="form-select"
                        aria-label="--Chọn--"
                    >
                        <option value='Mùa xuân'>Mùa xuân</option>
                        <option value='Mùa hạ'>Mùa hạ</option>
                        <option value='Mùa thu'>Mùa thu</option>
                        <option value='Mùa đông'>Mùa đông</option>
                    </select>
                    <label htmlFor="" className='label-item_alert'>{messageAlert.timeFit}</label>
                </div>
            </div>
            <label for="inputEmail4" class="form-label">Đối tượng phù hợp</label>
            <div class="row g-3">
                <div class="col-6">
                    <select
                        value={dataTour.objFit}
                        onChange={e => {
                            setDataTour(other => { return { ...other, objFit: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập đối tượng phù hợp với tour", alertObjFit)
                        }}
                        class="form-select"
                        aria-label="--Chọn--"
                    >
                        <option value='Cặp đôi'>Cặp đôi</option>
                        <option value='Gia đình'>Gia đình</option>
                        <option value='Bạn bè'>Bạn bè</option>
                    </select>
                    <label htmlFor="" className='label-item_alert'>{messageAlert.objFit}</label>
                </div>
            </div>

            <div class="row g-3">
                <div class="col-12">
                    <label htmlFor="" className='label-item'>Mô tả chi tiết cho tour</label>
                    <input
                        value={dataTour.descDetail}
                        onChange={e => {
                            setDataTour(other => { return { ...other, descDetail: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), '', "Yêu cầu nhập mô tả chi tiết cho tour", alertDesDetail)
                        }}
                        type="text"
                        class="form-control"
                        id="inputDesc"
                        placeholder="Mô tả cụ thể cho chuyến đi"
                    />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.addressDetail}</label>

                </div>
            </div>

            <div class="row g-3">
                <div class="col-12">
                    <label htmlFor="" className='label-item'>Giá</label>
                    <input
                        value={dataTour.price}
                        onChange={e => {
                            setDataTour(other => { return { ...other, price: e.target.value } })
                            compareResultSubmit(e.target.value.trim(), 0, "Yêu cầu nhập giá cho tour", alertPrice)
                        }}
                        type="number"
                        class="form-control"
                        id="inputDesc"
                        placeholder="Giá"
                    />
                    <label htmlFor="" className='label-item_alert'>{messageAlert.price}</label>

                </div>
            </div>


            <button type="button" onClick={handleSubmitCreateTour} class="btn btn-success add_tour">Thêm tour</button>

        </form>
    </>
}

const EditTravel = () => {



    return <>
        <form action='' className="edit_travel">
            <h4>Thông tin cơ bản chuyến đi</h4>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Tên tour:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Mô tả tour:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Thành phố:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Hoạt động:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>


            <h4>Lịch trình chuyến đi</h4>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Ngày giờ bắt đầu chuyến đi:</label>
                </div>
                <div class="col-9">
                    <div class="row g-3">
                        <div class="col-4">
                            <select class="form-select" aria-label="--Chọn giờ--">
                                {
                                    hours.map(h => (
                                        <option value={h} key={h}>{`${h}h`}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-select" aria-label="--Chọn phút--">
                                {
                                    minutes.map(m => (
                                        <option value={m} key={m}>{m}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Giờ khởi hành chuyến đi:</label>
                </div>
                <div class="col-9">
                    <div class="row g-3">
                        <div class="col-4">
                            <select class="form-select" aria-label="--Chọn giờ--">
                                {
                                    hours.map(h => (
                                        <option value={h} key={h}>{`${h}h`}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-select" aria-label="--Chọn phút--">
                                {
                                    minutes.map(m => (
                                        <option value={m} key={m}>{m}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Giờ tập trung:</label>
                </div>
                <div class="col-9">
                    <div class="row g-3">
                        <div class="col-4">
                            <select class="form-select" aria-label="--Chọn giờ--">
                                {
                                    hours.map(h => (
                                        <option value={h} key={h}>{`${h}h`}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-select" aria-label="--Chọn phút--">
                                {
                                    minutes.map(m => (
                                        <option value={m} key={m}>{m}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Thời gian chuyến đi:</label>
                </div>
                <div class="col-9">
                    <span>1 ngày</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Địa điểm khởi hành:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Số lượng hành khách còn lại:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>


            <h4>Thông tin cụ thể chuyến đi</h4>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Địa điểm cụ thể chuyến đi:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Phương tiện:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Ẩm thực:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Loại khách sạn:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Thời gian lý tưởng:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Đối tượng phù hợp:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Mô tả chi tiết chuyến đi:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-3">
                    <label htmlFor="">Giá:</label>
                </div>
                <div class="col-9">
                    <span>aaaaaaa</span>
                </div>
            </div>

            <button type="submit" class="btn btn-info">Thông tin hành khách của tour</button>

        </form>
    </>
}

export default TourDashBoard;