
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'

const MeetTeam = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div className="mt-10 mb-10">
            <div className="text-center space-y-2 mb-5">
                <h1 className="text-2xl font-bold text-orange-500">Team</h1>
                <h1 className="text-5xl">Meet Our Team</h1>
                <p className="pb-5">
                the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. 
                </p>
            </div>
            <div>

        <Slider {...settings}>
          <div className="px-5">
            <img src={img1} alt="" />
          </div>
          <div className="px-5">
            <img src={img2} alt="" />
          </div>
          <div className="px-5">
            <img src={img3} alt="" />
          </div>
          <div className="px-5">
            <img src={img4}  alt="" />
          </div>
          
        </Slider>
      </div>
        </div>
    );
};

export default MeetTeam;