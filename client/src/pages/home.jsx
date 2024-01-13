import AestheticSlider from "../components/aestheticSlider";
import ProductSlider from "../components/productSlider";
import './../styles/home.css'

const Home = () => {
    return (
        <>
            <AestheticSlider />
            <div className="body underline">
                <h2 className="section-title hanson">BEST SELLERS W/24</h2>
                <div className="grow"></div>
                <ProductSlider />
            </div>
            <AestheticSlider />
            <div className="body underline">
                <h2 className="section-title hanson">BEST SELLERS W/24</h2>
                <div className="grow"></div>
                <ProductSlider />
            </div>
            <AestheticSlider />
            <div className="body underline">
                <h2 className="section-title hanson">BEST SELLERS W/24</h2>
                <div className="grow"></div>
                <ProductSlider />
            </div>
        </>
    );
}

export default Home;