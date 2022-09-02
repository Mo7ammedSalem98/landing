import Image from 'next/Image'
import coach from '../public/vision.svg'

const Slider = () => {
    return (
        <div className="flex relative justify-center items-center custom-img h-screen">
            <div className='z-40'>
                <h1 className='font-semibold mb-20 text-7xl'>Our vision</h1>
                <p className='text-3xl leading-10 mb-40'>We aim to develop a community that is <br/>
                passionate about knowledge growth in terms <br/> of helping students reach their highest <br/>
                academic potential</p>
            </div>
            <div className="absolute top-48 right-12 z-10">
                <Image src={coach} width={700} height={400} />
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