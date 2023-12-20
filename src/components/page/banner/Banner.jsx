import imageA from  '../../../assets/Lenovo/new-laptop-balancing-with-water.jpg'
import imageB from  '../../../assets/apple/closeup-shot-open-laptop-dark-surface-work-from-home-concept.jpg'
import imageC from  '../../../assets/acer/desola-lanre-ologun-USp4Gzr-Hdw-unsplash.jpg'
import imageD from  '../../../assets/assus/still-life-books-versus-technology.jpg'
import imageE from  '../../../assets/dell/greg-rosenke-vdxSOOZucTc-unsplash.jpg'
import imageF from  '../../../assets/hp/desola-lanre-ologun-7d4LREDSPyQ-unsplash.jpg'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className='mx-auto'>
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