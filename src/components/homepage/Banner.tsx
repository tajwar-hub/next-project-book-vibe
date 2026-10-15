import Image from 'next/image';
import img from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 my-4'>
            <div>
                <h2>Books to freshen up your Book Shelf </h2>
                <button> View The Task </button>
            </div>

            <div>
                <Image src={img} alt=''></Image>
            </div>
        </div>


    );
};

export default Banner;