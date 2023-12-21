import imageA from  '../../../assets/pc  build/front-view-man-troubleshooting-computer.jpg'
import imageB from  '../../../assets/acer/laptop-near-shopping-trolley-tag-gift-box.jpg'
import imageC from  '../../../assets/phone/new-smartphone-balancing-with-wavy-item.jpg'
import imageD from  '../../../assets/phone/modern-stationary-collection-arrangement.jpg'
import imageE from  '../../../assets/pc  build/top-view-tag-cyber-monday-with-keyboard-mouse.jpg'
import imageF from  '../../../assets/sunglasses/sunglasses-with-artificial-green-leaves-yellow-background.jpg'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div data-aos="zoom-in" className='mx-auto '>
            <AutoplaySlider play={true}cancelOnInteraction={false} interval={6000}
  >
    <div data-src={imageA} />
    <div data-src={imageB} />
    <div data-src={imageC} />
    <div data-src={imageD} />
    <div data-src={imageE} />
    <div data-src={imageF} />
     
   
  </AutoplaySlider>
        </div>
    );
};

export default Banner;