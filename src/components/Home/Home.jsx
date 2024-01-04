import Team from "../page/Team/Team";
import Banner from "../page/banner/Banner";
import Barnds from "../page/brands/Barnds";
import Reviews from "./review/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Barnds></Barnds>
            <Team></Team>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;