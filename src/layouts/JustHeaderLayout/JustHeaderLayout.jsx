import Header from "../../components/Header/Header";

function JustHeaderLayout({ children }) {
    return (  
        <div className="JustHeaderLayout">
            <header>
                <Header/>
            </header>
            <div className="children">{ children }</div>
        </div>
    )
}

export default JustHeaderLayout;