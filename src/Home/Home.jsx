import Banner from '../Banner/Banner';
import ExtraSection from '../Components/ExtraSection/ExtraSection';
import ExtraToy from '../Components/ExtraSection/ExtraToy';
import GallerySection from '../Components/GallerySection/GallerySection';
import Category from '../SubCategory/Category';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Category></Category>
            <ExtraSection></ExtraSection>
            <ExtraToy></ExtraToy>
        </>
    );
};

export default Home;