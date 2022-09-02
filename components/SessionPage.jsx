import PageMain from '../components/PageMain';
const SessionPage = ({header, handleNav, activeNav}   ) => {
    return(          
            <div className="cursor-pointer ">
            <ul className="flex rounded-full p-2 bg-white flex-wrap">
            {header.map((h, key = 0) => {
            return (
                <li
                className={
                    ' mx-8 px-2' +
                    (activeNav == h && ' border-4 border-amber-400 rounded-full bg-amber-400')
                }
                key={key++}
                onClick={() => handleNav(h)}
                >
                {h}
                </li>
                );
                })}
            </ul>
            </div>
            // <div className='flex flex-col flex-wrap justify-around h-screen custom-img'>
            //     <PageMain course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
            //     <PageMain course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
            //     <PageMain course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
            //     <PageMain course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
            //     <PageMain course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
            //     <PageMain course={'Data structures and algorithms'} name={'Mohammed'} chapter={'1,3,6'} time={'7:30 pm'} date={'8/30/2022'}/>
            // </div>
    )
}

export default SessionPage;

{           }