import React from 'react';
import img1 from '../../../public/img/fun-3d-illustration-cartoon-baby.jpg'
import img2 from '../../../public/img/fun-3d-illustration-cartoon-santa-claus-with-mask.jpg'
import img3 from '../../../public/img/fun-gaulois-3d-illustration.jpg'
import img4 from '../../../public/img/robot-3d-illustration.jpg'
import img5 from '../../../public/img/robot-holding-key.jpg'
import img6 from '../../../public/img/superheroe-trying-fly.jpg'
const GallerySection = () => {
    return (
        <div>
            <h3 className='text-5xl font-semibold font-serif text-center mb-12 mt-40'>Our Best Quality Toy!!</h3>
            <div  className='grid grid-cols-2 md:grid-cols-3 md:mx-36 gap-3'
            >
                {/* 1 */}
                <div data-aos-duration="1000" data-aos="fade-right" className="card w-full h-72 bg-base-100 shadow-xl hover:border-4 border-blue-950" >

                    <figure><img className='w-80 h-72 hover:h-80' src={img1} alt="Shoes" /></figure>
                </div>
                {/* 2 */}
                <div data-aos-duration="1000" data-aos="fade-down" className="card h-72  w-full bg-base-100 shadow-xl hover:border-4 border-blue-950">

                    <figure><img  className='w-80 h-72 hover:h-80' src={img2} alt="Shoes" /></figure>
                </div>
                {/* 3 */}
                <div data-aos-duration="1000" data-aos="fade-left"className="card h-72  w-full bg-base-100 shadow-xl hover:border-4 border-blue-950">

                    <figure><img className='w-80 h-72 hover:h-80'  src={img3} alt="Shoes" /></figure>
                </div>
                {/* 4 */}
                <div data-aos-duration="1000" data-aos="fade-right" className="card h-72  w-full bg-base-100 shadow-xl hover:border-4 border-blue-950">

                    <figure><img className='w-80 h-72 hover:h-80'  src={img4} alt="Shoes" /></figure>
                </div>
                {/* 5 */}
                <div data-aos-duration="1000" data-aos="fade-up" className="card h-72  w-full bg-base-100 shadow-xl hover:border-4 border-blue-950">

                    <figure><img className='w-80 h-72 hover:h-80'  src={img5} alt="Shoes" /></figure>
                </div>
                {/* 6 */}
                <div data-aos-duration="1000" data-aos="fade-left"  className="card h-72  w-full bg-base-100 shadow-xl hover:border-4 border-blue-950">

                    <figure><img className='w-80 h-72 hover:h-80'   src={img6} alt="Shoes" /></figure>
                </div>
            </div>
        </div>
        
    );
};

export default GallerySection;