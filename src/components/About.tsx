import aiImg from '../assets/about.jpg'

const About = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={aiImg} alt="/" className='w-[500px] mx-auto my-4'/>
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-[#00df9a] font-bold'>Empowering Businesses with AI</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Guiding You to the Right AI Solutions for Your Business</h1>
                    <p>
                        We help businesses navigate the complex world of AI with confidence. Our team provides expert guidance to identify and implement the right AI tools for your unique needs. With our support, AI becomes a practical solution that drives real results and growth.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 md:mx-0 py-3 text-[#00df9a]">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default About