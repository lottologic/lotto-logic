import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ScrollContainer from "../components/ScrollContainer"

const Success = () => {
    return (
        <ScrollContainer>
            <div className="d-flex flex-column w-100" style={{ height: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }} className="d-flex align-items-center justify-content-center">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center pp-cont"
                    >
                        <h1 className="text-center mb-3">Thank You For Submitting</h1>
                        <p textsize="large" className="text-center mb-3" style={{ color: 'var(--grey4)' }}>
                            We’ve successfully received your submission.<br />We will get back to you shortly.
                        </p>
                        <button className="back-button" onClick={() => window.location.href = '/'}>Go Back To Home</button>
                    </div>
                </main>
                <Footer />
            </div>
        </ScrollContainer>
    );
};

export default Success;