import Team from "../page/Team/Team";
import Banner from "../page/banner/Banner";
import Barnds from "../page/brands/Barnds";
import Review from "./review/review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Barnds></Barnds>
            <Team></Team>
            <Review></Review>
        </div>
    );
};

export default Home;