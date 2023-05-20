import Banner from '../Banner/Banner';
import ExtraSection from '../Components/ExtraSection/ExtraSection';
import GallerySection from '../Components/GallerySection/GallerySection';
import Category from '../SubCategory/Category';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Category></Category>
            <ExtraSection></ExtraSection>
        </>
    );
};

export default Home;