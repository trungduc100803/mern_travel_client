import './DefaultLayout.css'

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from '../../components/Sidebar/Sidebar';


function DefaultLayout({ children }) {
    return (  
        <div className="DefaultLayout">
            <header>
                <Header/>
            </header>
            <div className="sidebar_layout">
                <Sidebar/>
            </div>
            <div className="children">{ children }</div>
            <footer>
                {/* <Footer/> */}
            </footer>
        </div>
    )
}

export default DefaultLayout;