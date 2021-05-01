import {Carousel,Button} from 'antd'
import products from '../json/products.json';

export default function WeeklyBlock(){
    return(
        <div className="weekly">
            <Carousel autoplay className="weekly-carousel">
                {products.map(productdata =>(
                    <div>
                        <div className="contentStyle">
                            
                            <img 
                                className="carousel-content-img"
                                style={{width:"100%",height:'100%'}}
                                src={productdata.image}
                            />
                            
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
