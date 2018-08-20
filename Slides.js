import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../../assets/images/book1.jpeg'; 
import slide2 from '../../../assets/images/book2.jpg'; 
import slide3 from '../../../assets/images/book3.jpg'; 
import slide4 from '../../../assets/images/book4.jpg'; 
import slide5 from '../../../assets/images/book5.jpg'; 
import slide6 from '../../../assets/images/book6.png'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class Slides extends Component {
	render(){
		return (
			<Carousel showArrows={true} autoPlay dynamicHeight showStatus={false} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src={slide1} alt="slide1" />
                </div>
                <div>
                    <img src={slide2} alt="slide2" />
                </div>
                <div>
                    <img src={slide3} alt="slide3" />
                </div>
				<div>
                    <img src={slide4} alt="slide4" />
                </div>
                <div>
                    <img src={slide5} alt="slide5" />
                </div>
                <div>
                    <img src={slide6} alt="slide6" />
                </div>
       		</Carousel>
		);
	};
}


export default Slides; 