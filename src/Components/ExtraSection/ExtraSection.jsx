import React from 'react';
import img from '../../../public/img/3020.jpg'
const ExtraSection = () => {
    return (

        <div className='md:mx-36 px-4 mt-40'>
            <h1 className='text-4xl font-semibold text-center mb-8'>Read About Toys</h1>
            <div className='grid md:grid-cols-2 '>
                <div>
                    <p>
                        Hero toys are a popular category of toys that have captivated the imaginations of children and collectors alike for decades. These toys are inspired by superheroes and characters from various comic books, movies, and animated series. They allow children to recreate epic battles, embark on thrilling adventures, and engage in imaginative play.

                        Hero toys often feature iconic characters like Superman, Batman, Spider-Man, Wonder Woman, Iron Man, and many others. They come in various forms, including action figures, playsets, vehicles, and role-playing accessories. These toys are meticulously designed to resemble their on-screen or comic book counterparts, with detailed costumes, accessories, and even articulation for dynamic posing and playability.

                        The popularity of hero toys goes beyond just children. Many adults are avid collectors and enthusiasts of these toys, appreciating their craftsmanship, nostalgia, and the opportunity to display their favorite characters. Collectible figures and limited-edition releases are highly sought after, often becoming valuable items in the world of toy collecting.

                        Hero toys not only provide entertainment and play value but also offer educational benefits. They encourage storytelling, imagination, and creativity, allowing children to develop cognitive and social skills. Role-playing with hero toys can foster empathy, problem-solving, and collaboration as kids navigate imaginary worlds and create their own narratives.

                        Over the years, hero toys have evolved with advancements in technology. Some toys now incorporate interactive features such as sound effects, lights, and motion sensors, enhancing the overall play experience. Additionally, the representation of diverse characters has become more prominent, reflecting the growing inclusivity in the superhero genre.

                        In summary, hero toys have become an integral part of popular culture, inspiring countless children and adults alike. These toys have a special way of bringing beloved superheroes to life, fostering imagination, and igniting a sense of heroism in the
                    </p>
                </div>
                <div>
                    <img className='h-full w-96' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;