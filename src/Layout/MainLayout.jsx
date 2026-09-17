import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <>
            <div>
                <nav className="border-b border-white/10 bg-ink/50 backdrop-blur-3xl sticky top-0 z-40">
                    <Navbar />
                </nav>

                <main>
                    <Outlet />
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>

    )
}

export default MainLayout;