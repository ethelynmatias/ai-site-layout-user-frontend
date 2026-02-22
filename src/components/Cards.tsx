import Single from '../assets/single.png';

const Cards = () =>{
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt='/' />
                    <h2 className="text-2xl font-bold text-center py-8">Starter Plan – “AI Foundation”</h2>
                    <p className="text-center text-4xl font-bold">$250</p>
                    <div className='text-left font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>AI readiness assessment</p>
                        <p className='py-2 border-b mx-8'>Tool recommendations</p>
                        <p className='py-2 border-b mx-8'>Email Support for a month</p>
                        <p className='py-2 border-b mx-8'>Implementation roadmap</p>
                    </div>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Subscribe</button>
                </div>

                <div className="w-full shadow-xl flex flex-col md:my-0 p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt='/' />
                    <h2 className="text-2xl font-bold text-center py-8">Professional Plan – “AI Implementer”</h2>
                    <p className="text-center text-4xl font-bold">$149/month</p>
                    <div className='text-left font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Priority email support</p>
                        <p className='py-2 border-b mx-8'>Full AI tool evaluation across 2 business areas</p>
                        <p className='py-2 border-b mx-8'>Step-by-step AI implementation guidance</p>
                        <p className='py-2 border-b mx-8'>Access to advanced AI workflows and automation templates</p>
                    </div>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Subscribe</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt='/' />
                    <h2 className="text-2xl font-bold text-center py-8">Enterprise Plan – “AI Accelerator”</h2>
                    <p className="text-center text-4xl font-bold">$499</p>
                    <div className='text-left font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Weekly 1-hour consultation calls</p>
                        <p className='py-2 border-b mx-8 mt-8'>Priority email support</p>
                        <p className='py-2 border-b mx-8'>Full audit of current processes and AI integration opportunities</p>
                        <p className='py-2 border-b mx-8'>Custom AI workflow design for multiple departments</p>
                        <p className='py-2 border-b mx-8'>Dedicated AI implementation roadmap</p>
                        <p className='py-2 border-b mx-8'>Training sessions for staff on AI tool usage</p>
                    </div>
                    <button className='text-[#00df9a] bg-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Cards