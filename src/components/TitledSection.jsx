import './TitledSection.css';

const TitledSection = ({ title, children, id }) => {
    return (
        <section className="root" id={id}>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="content">
                <div className="container h-100">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default TitledSection;