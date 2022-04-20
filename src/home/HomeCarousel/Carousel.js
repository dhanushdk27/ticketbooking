import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '25rem',
    width: "93rem",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    marginTop: "0.70rem",
    marginLeft: "1rem"
};

function Slide(props) {


    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}><img style={{
                        height: "25rem",
                        width: "-webkit-fill-available"
                    }} src='https://i.pinimg.com/originals/d6/2c/19/d62c19427f127d11604b246a456b887f.png' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={{
                        height: "25rem",
                        width: "-webkit-fill-available"
                    }} src='https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-sunburn-arena-ft-alan-walker-0-2022-3-4-t-6-55-46.jpg' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={{
                        height: "25rem",
                        width: "-webkit-fill-available"
                    }} src='https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/scream-2022-et00321654-16-03-2022-11-05-38.jpg' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={{
                        height: "25rem",
                        width: "-webkit-fill-available"
                    }} src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-kashmir-files-et00110845-24-02-2022-03-28-20.jpg' /></h3>
                </div>
            </Carousel>
        </div>
    );
}

export default Slide;