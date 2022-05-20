import React from 'react';
import {Slide} from 'react-slideshow-image';

const SlideShow = ({images,height,width}) => {


    return (
        <>
            <center>
                <div className="slide-container" style={{width:"100%",marginTop:"10px"}}>
                        <Slide 
                            indicators={true}
                            >
                            {
                                images.map((slideImage, index)=> (
                                    <div className="each-slide" key={index}>
                                        <div>
                                            <img height={height} width={width} className="lazy" src={slideImage} alt="sample" />
                                        </div>
                                    </div>
                                ))
                            } 
                        </Slide>
                </div>
            </center>
        </>
    )

}

export default SlideShow;