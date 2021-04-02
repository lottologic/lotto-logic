import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ScrollContainer from "../components/ScrollContainer"

const PressPackage = () => {
    return (
        <ScrollContainer>
            <div className="d-flex flex-column w-100" style={{ height: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }} className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className="text-center mb-3">Press Package</h1>
                        <h4 className="text-center mb-3">Press Packages Coming Soon</h4>
                        <p>In the meantime please email&nbsp;</p>
                        <p>
                            <span style={{ color: 'var(--primary600)' }}>lottologichello@gmail.com</span>
                            &nbsp;for media enquiries
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </ScrollContainer>
    );
};

export default PressPackage;