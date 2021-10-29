import Image from 'next/image'
import BannerBackground from '../public/banner-airbnb.jpg'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image 
      src={BannerBackground}
      layout="fill"
      objectFit="cover"
      objectPosition="bottom"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-semibold">Vous ne savez pas où partir ? Parfait !</p>

        <button className="my-3 text-purple-500 bg-white px-10 py-4 shadow-md hover:shadow-xl active:scale-90 transition duration-150 rounded-full font-bold">Je suis flexible</button>
      </div>
    </div>
  )
}

export default Banner
