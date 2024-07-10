import React from 'react';
import './Drones.css'; // Assuming your custom CSS file is named Drones.css

const Drones = () => {
    return (
        <div className="drone-container">
            <div className="imageContainer">
                <img src="./drones/dro1.jpg" alt="Drone" className="image" />
                <h1 className="title">Drones</h1>
            </div>
            <div className="content">
                <div className="drone-section  section1">
                    <div className="contentWithImage">
                        <h2 className="sectionTitle">Drones Sales and Rental Services</h2>
                        <p className="description">
                            "Embark on an exhilarating journey into the skies with our premier drone sales and rental services, where every flight is an adventure waiting to unfold."
                        </p>
                        <p className="text">
                            Discover the ultimate destination for drone enthusiasts and professionals alike – our comprehensive drone sales and rental services. Delve into our diverse inventory featuring enterprise-grade drones meticulously selected for their quality, performance, and affordability. Whether you're seeking to own a drone outright or require one for a specific project, we cater to your needs with unparalleled flexibility and competitive pricing.
                        </p>
                    </div>
                    <div className="imageRight">
                        <img src="./drones/service1.jpg" alt="Service 1" className="image" />
                    </div>
                </div>
                
                <div className="drone-section section2">
                    <div className="contentWithImage">
                        <h2 className="sectionTitle">Aerial Drone Surveying and Mapping</h2>
                        <p className="description">
                            "Elevate your business with our advanced aerial drone surveying and mapping services, where innovation meets precision for unparalleled results."
                        </p>
                        <p className="text">
                            Unlock the power of precision and efficiency with our revolutionary aerial drone surveying and mapping services, meticulously designed to propel your business to unprecedented heights of success. Harnessing the cutting-edge capabilities of drone technology, we redefine the landscape of traditional surveying methods, ensuring unparalleled accuracy and detail in every map we create. Say farewell to the constraints of outdated techniques and embrace a future where time and resources are optimized to their fullest potential, tailored precisely to meet your evolving needs with unmatched precision and cost-effectiveness.
                        </p>
                    </div>
                    <div className="imageRight">
                        <img src="./drones/service2.jpg" alt="Service 2" className="image" />
                    </div>
                </div>
                
                <div className="drone-section section3">
                    <div className="contentWithImage">
                        <h2 className="sectionTitle">Aerial Drone Inspection and Analysis</h2>
                        <p className="description">
                            "Experience the cutting-edge of asset inspection with our aerial drone services, where safety, efficiency, and precision converge to redefine industry standards."
                        </p>
                        <p className="text">
                            Experience the future of asset inspection with our aerial drone inspection and analysis services. Our drones are equipped with high-resolution cameras and sensors to provide you with detailed visual and data insights into your assets. From infrastructure and buildings to pipelines and power lines, our drone inspections offer improved efficiency, greater safety, and reduced risks.
                        </p>
                    </div>
                    <div className="imageRight">
                        <img src="./drones/service3.jpg" alt="Service 3" className="image" />
                    </div>
                </div>
                
                <div className="drone-section section4">
                    <div className="contentWithImage">
                        <h2 className="sectionTitle">Drone Videography and Photography</h2>
                        <p className="description">
                            "Elevate your visuals with our drone videography and photography services. From real estate to events, our skilled team delivers captivating shots that set you apart."
                        </p>
                        <p className="text">
                            Elevate your business's visual presentation with our professional drone videography and photography services, tailored to capture stunning aerial visuals that leave a lasting impression. Whether you're showcasing real estate properties, promoting events, or creating captivating marketing content, our expertly piloted drones and skilled photographers ensure each shot is nothing short of breathtaking.
                        </p>
                    </div>
                    <div className="imageRight">
                        <img src="./drones/service4.jpg" alt="Service 4" className="image" />
                    </div>
                </div>
                
                <div className="drone-section section5">
    <h2 className="sectionTitle">Why Choose Elite for Digital Development LLC for Your Drone Needs?</h2>
    <div className="card-container">
        <div className="row">
            <div className="drone-card">
                <div className="cardContent">
                    <strong>Quality Assurance:</strong> We believe in offering only the highest quality drones that are built to last. Each drone in our inventory undergoes rigorous testing to ensure optimal performance and reliability.
                </div>
            </div>
            <div className="drone-card">
                <div className="cardContent">
                    <strong>Competitive Pricing:</strong> We understand the importance of staying within budget without compromising on quality. That's why we strive to offer the best prices on our enterprise drones, making them accessible to businesses of all sizes.
                </div>
            </div>
            <div className="drone-card">
                <div className="cardContent">
                    <strong>Custom Solutions:</strong> No two businesses are alike, which is why we offer customized drone solutions tailored to your specific needs. Whether you require additional features, accessories, or software integrations, we're here to accommodate your unique requirements.
                </div>
            </div>
        </div>
        <div className="row">
            <div className="drone-card">
                <div className="cardContent">
                    <strong>Expert Guidance:</strong> With years of experience in the drone industry, our team of experts is here to provide you with knowledgeable guidance every step of the way. From selecting the right drone model to offering technical support, we're committed to helping you make informed decisions.
                </div>
            </div>
            <div className="drone-card">
                <div className="cardContent">
                    <strong>Flexible Rental Options:</strong> Not ready to commit to purchasing a drone outright? No problem. We offer flexible rental options that allow you to access the latest drone technology without the upfront investment. Whether you need a drone for a one-time project or an ongoing venture, we've got you covered.
                </div>
            </div>
            <div className="drone-card">
                <div className="cardContent">
                    <strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We take pride in delivering exceptional customer service and support to ensure your experience with us is nothing short of excellent.
                </div>
            </div>
        </div>
    </div>
</div>


            </div>
        </div>
    );
};

export default Drones;
