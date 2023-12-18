import './MeLayout.css'
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation'
import { myBlogNavi } from '../../constants/Navigation'

function MeLayout({ children }) {
    return (  
        <div className="MeLayout">
            <header>
                <Header/>
            </header>
            <div className="children">
                <div className="MeLayout_title">Bài viết của tôi</div>
                <div className="MeLayout_navi">
                    <Navigation naviList={myBlogNavi}/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MeLayout;