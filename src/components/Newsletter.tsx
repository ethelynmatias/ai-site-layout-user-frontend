const NewsLetter = () => {
    return (
        <div className="w-full py-16 text-white">
            <div className="mx-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm-text-3xl text-2xl font-bold py-2">Stay Ahead with AI Insights</h1>
                    <p>Join our newsletter to receive the latest AI news, practical guides, and business solutions to help you choose and implement the right AI technologies.</p>
                </div>
                <div className="my-4">
                    <div>
                        <input type="email" placeholder="Enter Email" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter