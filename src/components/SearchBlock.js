import {Carousel,Button,Input} from 'antd';


export default function SearchBlock(){
    return(
        <div className="search" style={{backgroundImage:"url(/image/searchbackground.png)"}}>
            <div className="search-content text-color-main">
                <div>量身訂做</div>
                <div>找到最適合你的課程。</div>
                <Input className="search-content-input" size="large" prefix={<img style={{width:'4.2vmin',height:'4.2vmin'}} src="/image/searchbtn.png"/>} placeholder="找課程?"></Input>
            </div>
            
        </div>
    )
}
