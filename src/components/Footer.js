export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-info-left">
                <div className="footer-info-left-item">了解我們</div>
                <div className="footer-info-left-item">常見問題</div>
                <div className="footer-info-left-item">聯絡資訊</div>
                <div className="footer-info-left-item">隱私政策</div>
            </div>
            <div className="footer-info-right">
                <div className="footer-info-right-item">更多訊息</div>
                <img
                className="footer-social-btn fbicon"
                src="/image/footer/fbicon.png"
                />
                <img
                className="footer-social-btn yticon"
                src="/image/footer/yticon.png"
                />
            </div>
        </div>
    )
}