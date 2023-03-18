import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header className='max-w-[1640px] mx-auto justify-around items-center p-4 flex bg-rose-300'>
            <div className="container w-3/4">
                <Link to = '/' className=''>
                    <h1 className='text-4xl px-2 font-bold'>WORKIFY</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar