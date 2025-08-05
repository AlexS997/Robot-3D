import 'boxicons/css/boxicons.min.css'

const Header = () => {
  
    const toggleMenu = () => {
        const menu = document.getElementById("mobileMenu")

        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden')
        } else {
            menu.classList.add('hidden')
        }
    }
  
    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" 
                className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
            >
                MCODE
            </h1>

            {/* Desktop Menu Button*/}
            <nav className="hidden md:flex items-center gap-12">
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"  
                    href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                    Company
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" 
                    href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                    Features
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000" 
                    href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                    Resources
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" 
                    href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                    DOCS
                </a>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black rounded-full border-none font-medium transition-all duration-500 hover:bg-white px-8 py-3 cursor-pointer z-50">
                SignIn
            </button>

            {/* Mobile Menu Button*/}
            <button className='md:hidden text-3xl p-2 z-50 cursor-pointer' onClick={toggleMenu}>
                <i class='bx bx-menu'></i>
            </button>

            {/* Mobile Menu Button - Open*/}
            <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black opacity-70 backdrop-blur-md'>
                <nav className='flex flex-col gap-6 items-center'>
                    <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                        Company
                    </a>
                    <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                        Features
                    </a>
                    <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                        Resources
                    </a>
                    <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                        DOCS
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header