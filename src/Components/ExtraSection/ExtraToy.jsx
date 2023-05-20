import React from 'react';
import Marquee from 'react-fast-marquee';

const ExtraToy = () => {
    return (
        <>
            <h1 className='text-4xl font-semibold font-serif text-center mt-32'>Our Special Toys For kids </h1>
            <h1 className='text-4xl font-bold text-center text'>AVENGERS</h1>
            <Marquee  speed={30}>
                <div className='grid md:grid-cols-4 grid-cols-2 mx-12 gap-6 mb-20 mt-8  '>
                    {/* 1 */}
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-red-600">IRON MAN</h2>
                        </div>
                        <figure><img className='w-full- h-80' src='https://i5.walmartimages.com/asr/523077c6-e3b2-4b7b-89d2-61a0ec7153b3_1.79452804fde4a20b7c5e72dc2abe4225.jpeg' alt="Shoes" /></figure>
                    </div>
                    {/* 2 */}
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-blue-900">THOR</h2>
                        </div>
                        <figure><img className='w-full- h-80' src='https://www.superherotoystore.com/cdn/shop/products/AAAI40AABK4-1_1600x.jpg?v=1656483049' alt="Shoes" /></figure>
                    </div>
                    {/* 3 */}
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-green-600">HULK</h2>
                        </div>
                        <figure><img className='w-full- h-80' src='https://i5.walmartimages.ca/images/Enlarge/774/101/6000205774101.jpg' alt="Shoes" /></figure>
                    </div>
                    {/* 4 */}
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-blue-950">DOCTOR STRANGE</h2>
                        </div>
                        <figure><img className='w-full- h-80' src='https://bbts1.azureedge.net/images/p/full/2021/01/b7f7b8a0-f184-4e94-96ed-14e592986a78.jpg' alt="Shoes" /></figure>
                    </div>
                </div>
            </Marquee>

        </>
    );
};

export default ExtraToy;