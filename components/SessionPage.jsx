const SessionPage = ({header, handleNav, activeNav}) => {
    return( /*flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img*/
            /* sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 */
                       
            <div className=" mb-4 cursor-pointer">
            <h1 className=''>Session</h1>
            <ul className="flex rounded-full bg-white p-2 flex-wrap">
            {header.map((h, key = 0) => {
            return (
                <li
                className={
                    'p-1 ' +
                    (activeNav == h && ' border-4 border-amber-400 rounded-full border-secondary bg-amber-400')
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

    )
}

export default SessionPage;