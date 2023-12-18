import { useParams, Link, useNavigate } from 'react-router-dom'
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

function FoodDashBoard() {

    const { action } = useParams()


    return <div className="FoodDashBoard">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to={'/dashBoard/all-food'} className="nav-item">
                            <span className="nav-link active" aria-current="page">Tất cả</span>
                        </Link>
                        <Link to={'/dashBoard/create-food'} className="nav-item">
                            <span className="nav-link" >Thêm</span>
                        </Link>
                        <Link to={'/dashBoard/edit-food'} className="nav-item">
                            <span className="nav-link" >Chỉnh sửa</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="FoodDashBoard_main">
            {
                action === "all-food" ?
                    <AllFood /> :
                    action === "create-food" ?
                        <CreateFood /> :
                        <EditFood />
            }
        </div>
    </div>
}


const AllFood = () => {

    const navigate = useNavigate()
    const { foods } = useSelector(state => state.food)

    const handleEdit = () => {
        navigate('/dashBoard/edit-food')
    }


    return <>
        <div className="all_travel">
            <div className="travel_list row  m-0">
                {
                    foods.length > 0 ?
                        foods.map((food, i) => {
                            const arrImg = food.URLimg
                            return <div key={i} className="card col-4">
                                <img src={arrImg[i]} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{food.name}</h5>
                                    <p className="card-text">{food.description}</p>
                                    <button className='btn btn-success' onClick={handleEdit} >edit</button>
                                </div>
                            </div>
                        })
                        :
                        <></>
                }
            </div>
        </div>``
    </>
}


const CreateFood = () => {
    return <>
        <form className="create_food">
            <div class="row g-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Tên món ăn" aria-label="First name" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Địa chỉ quán" aria-label="Last name" />
                </div>
            </div>
            <div class="row g-3">
                <div class="col-12">
                    <textarea type="text" class="form-control" id="inputDesc" placeholder="Mô tả món ăn" />
                </div>
            </div>
            <button type="button" class="btn btn-info">Thêm ảnh mô tả món ăn</button>
            <div className="add_img">
                <h6 className='text_no_img'>Chưa có ảnh nào</h6>
                <div className="add_img_item">
                    <img src="" alt="" />
                </div>
            </div>
            <div class="row g-3">
                <div class="col-12">
                    <input type="text" class="form-control" id="inputDesc" placeholder="Giá" />
                </div>
            </div>

            <label for="inputEmail4" class="form-label">Giờ phục vụ</label>
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
        </form>
    </>
}

const EditFood = () => {
    return <>
        edit food
    </>
}

export default FoodDashBoard;