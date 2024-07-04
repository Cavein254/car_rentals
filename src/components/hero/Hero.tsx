import Slider from "../slider/Slider"

const Hero = () => {
  return (
    <>
    <div className="bg-hero-main w-full bg-cover">
        <div className='w-full h-[375px]'>
        </div>
    </div>
    <div className='w-full flex justify-center'>
        <div className="bg-white w-[90%] -mt-10 rounded-t-2xl">
            <div className="pt-8 flex justify-center">
                <div className="">
                    <h1 className="text-5xl font-bold text-center">Find Your Dream Car Today</h1>
                    <p className="text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem perferendis corporis molestiae perspiciatis ipsam fugit neque eos ad? Voluptatum molestiae consequuntur nam dolorum tenetur porro blanditiis accusantium consectetur iusto.</p>
                </div>
            </div>
            <div>
                <Slider />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero