import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header bg-white">
            <div className="header-btn-left">
                <Link to="/">
                    <Button className="header-btn header-btn-home text-color-main">
                        <img
                        className="header-logo"
                        src="/image/logo.png"
                        />
                        <div className="header-logo-text">上課趣</div>
                    </Button>
                </Link>
                
                <Button className="header-btn header-btn-burger text-color-main">                
                    <img
                    className="header-btn-icon"
                    src="/image/header/burger.png"
                    />
                    <div className="header-btn-name">類別</div>
                </Button>
                <Button className="header-btn header-btn-create text-color-main">
                    <img
                    className="header-btn-icon"
                    src="/image/header/create.png"
                    />
                    <div className="header-btn-name">開班授課</div>
                </Button>
                <Button className="header-btn header-btn-start text-color-main">
                    <img
                    className="header-btn-icon"
                    src="/image/header/start.png"
                    />
                    <div className="header-btn-name">開始上課</div>
                </Button>
            </div>
            <div className="header-btn-right">
                <Button className="header-btn header-btn-cart">
                    <Link to={'cart'}>
                        <img
                        className="header-btn-icon-cart"
                        src="/image/header/cart.png"
                        />
                    </Link>
                </Button>
                <Button className="header-btn-login header-btn-login text-white">
                    <img
                    className="header-phone-burger-btn"
                    src="/image/header/burger.png"
                    />
                    <div className="header-btn-name">登入</div>
                </Button>    
            </div>
        </div>
    )
}