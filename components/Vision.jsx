
const Slider = () => {
    return (
        <div className='flex flex-col flex-wrap items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
            <div className='p-5 z-[2] mt-[-10rem] text-slate-600'>
                <h1 className='text-5xl font-bold font-serif'>Our vision</h1>
                <p className='py-5 whitespace-pre-line font-normal font-mono '>We aim to develop a community that is <br/>
                passionate about knowledge growth in terms <br/> of helping students reach their highest <br/>
                academic potential</p>
                {/* <button className='px-8 py-2 border'>Book</button> */}
            </div>
            <div className='relative left-60'>
                <img src='../Сoach explains the material to the woman.png' width='300px' height='250px'/>
            </div>
        </div>
    )
}

export default Slider;
// <div className="flex flex-col flex-wrap h-screen items-center justify-center custom-img">
        //     <div className='mb-12'>
        //             <h1>Our Vision</h1>
        //     </div>
        //     <div className="">
        //             <p>We aim to develop a community that is 
        //             passionate about knowledge growth in terms 
        //             of helping students reach their highest
        //             academic potential</p>
        //     </div>
        //     <div className=''>
        //         <img src='../Сoach explains the material to the woman.png' height='200px' width="200px"/>
        //     </div>
        // </div>