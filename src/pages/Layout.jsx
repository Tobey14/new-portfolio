import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const Layout = () => {
    return (
        <section>
            <main className='container'>
                <Navbar />
                
                <Outlet />

                <Footer />
                
            </main>
        </section>
    )
}

export default Layout;