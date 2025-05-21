import "./App.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import maize_1 from "./public/images/maize-1.jpg";
import maize_2 from "./public/images/maize-2.jpg";
import maize_3 from "./public/images/maize-3.jpg";
import maize_5 from "./public/images/maize-5.jpg";
import { useState } from "react";
import { 
  BarChart3, 
  Beaker,  // Replace Flask with Beaker
  Brain, 
  Sprout, 
  Satellite, 
  LineChart, 
  Microscope, 
  Droplets, 
  Target, 
  Users, 
  X 
} from 'lucide-react';

function App() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
    image: null
  });

  const openModal = (title, content, image) => {
    setModalContent({ title, content, image });
    setShowModal(true);
  };

  return (
    <>
      <nav className="modern-navbar">
        <div className="container">
          <div className="navbar-content">
            <a className="navbar-brand" href="/">
              <div className="lamp-header">
                <span className="lamp-light"></span>
                <span className="lamp-text">MAIZE YIELD PREDICTION</span>
              </div>
            </a>
            <button 
              className="moving-border-button" 
              onClick={() => navigate('/predictions')}
            >
              <span className="lamp-light"></span>
              <span>Get started</span>
            </button>
          </div>
        </div>
      </nav>

      <section className="landing-section">
        <Carousel 
          autoplay 
          arrows 
          infinite={true}
          effect="fade"
          className="modern-carousel"
        >
          <div className="carousel-slide slide-1">
            <div className="carousel-content">
              <h1 className="slide-title">Revolutionizing Maize Yield Prediction</h1>
              <div className="slide-line"></div>
              <p className="slide-description">Using advanced AI to transform agricultural planning</p>
            </div>
          </div>
          <div className="carousel-slide slide-2">
            <div className="carousel-content">
              <h1 className="slide-title">Discover the Power of Machine Learning</h1>
              <div className="slide-line"></div>
              <p className="slide-description">Harnessing data for smarter farming decisions</p>
            </div>
          </div>
          <div className="carousel-slide slide-3">
            <div className="carousel-content">
              <h1 className="slide-title">Optimize Resource Allocation</h1>
              <div className="slide-line"></div>
              <p className="slide-description">Maximize yields while minimizing resource usage</p>
            </div>
          </div>
          <div className="carousel-slide slide-4">
            <div className="carousel-content">
              <h1 className="slide-title">Make Informed Decisions</h1>
              <div className="slide-line"></div>
              <p className="slide-description">Data-driven insights for better crop management</p>
            </div>
          </div>
        </Carousel>
      </section>

      <div className="container mt-5">
        <h1 className="mb-4 text-center">
          Advantages of Maize Yield Prediction with Machine Learning
        </h1>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="modern-card h-100">
              <div className="modern-card-icon">
                <Beaker size={48} />  
              </div>
              <h5 className="modern-card-title">Improved Accuracy</h5>
              <p className="modern-card-text">
                Machine learning models can analyze historical data and
                environmental factors to provide more accurate yield
                predictions.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="modern-card h-100">
              <div className="modern-card-icon">
                <Sprout size={48} />
              </div>
              <h5 className="modern-card-title">Optimized Resource Allocation</h5>
              <p className="modern-card-text">
                By predicting maize yield, farmers can optimize resource
                allocation, such as fertilizer and water, resulting in better
                crop management.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="modern-card h-100">
              <div className="modern-card-icon">
                <Brain size={48} />
              </div>
              <h5 className="modern-card-title">Automation and Efficiency</h5>
              <p className="modern-card-text">
                Automation of prediction models reduces manual effort and
                enables farmers to make data-driven decisions more
                efficiently.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="modern-card h-100">
              <div className="modern-card-icon">
                <LineChart size={48} />
              </div>
              <h5 className="modern-card-title">Long-term Planning</h5>
              <p className="modern-card-text">
                Machine learning models can provide insights into long-term
                trends, helping farmers plan for future seasons and make
                informed decisions.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="modern-card h-100">
              <div className="modern-card-icon">
                <BarChart3 size={48} />
              </div>
              <h5 className="modern-card-title">Data-Driven Insights</h5>
              <p className="modern-card-text">
                Machine learning enables farmers to gain data-driven insights
                into factors affecting maize yield, leading to informed
                decision-making.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="modern-card h-100">
              <div className="modern-card-icon">
                <Microscope size={48} />
              </div>
              <h5 className="modern-card-title">Early Disease Detection</h5>
              <p className="modern-card-text">
                By analyzing various data points, machine learning models can
                detect early signs of diseases in maize crops, allowing for
                timely intervention.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="modern-card h-100">
              <div className="modern-card-icon">
                <Droplets size={48} />
              </div>
              <h5 className="modern-card-title">Resource Optimization</h5>
              <p className="modern-card-text">
                Maize yield prediction helps optimize the use of resources
                like land, water, and energy, leading to sustainable
                agricultural practices.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="modern-card h-100">
              <div className="modern-card-icon">
                <Target size={48} />
              </div>
              <h5 className="modern-card-title">Precision Farming</h5>
              <p className="modern-card-text">
                Machine learning enables precision farming techniques, such as
                targeted application of fertilizers and pesticides, resulting
                in higher yields and reduced environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two cards side by side with modal functionality */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="feature-card">
              <div className="feature-card-image">
                <img src={maize_3} alt="Maize yield prediction" />
              </div>
              <div className="feature-card-content">
                <h3>Maize Yield Prediction</h3>
                <p>
                  Leverage machine learning and AI to accurately predict maize yields based on environmental factors, historical data, and advanced algorithms.
                </p>
                <button 
                  className="learn-more-btn" 
                  onClick={() => openModal(
                    "Maize Yield Prediction", 
                    "Maize yield prediction is a valuable application of machine learning and artificial intelligence in the field of agriculture. By leveraging historical data, environmental factors, and advanced predictive algorithms, farmers and agricultural stakeholders can estimate the potential yield of maize crops with greater accuracy. This information plays a crucial role in crop planning, resource allocation, and decision-making processes. Machine learning models analyze vast amounts of data, including factors such as weather patterns, soil conditions, pest infestations, and farming practices. By identifying patterns and correlations within this data, the models can generate predictive insights into maize yield.",
                    maize_2
                  )}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="feature-card">
              <div className="feature-card-image">
                <img src={maize_1} alt="Machine Learning in Agriculture" />
              </div>
              <div className="feature-card-content">
                <h3>Machine Learning in Agriculture</h3>
                <p>
                  Discover how machine learning is revolutionizing traditional farming practices and enabling more efficient and sustainable food production.
                </p>
                <button 
                  className="learn-more-btn"
                  onClick={() => openModal(
                    "Machine Learning in Agriculture", 
                    "Machine learning and artificial intelligence have made significant contributions to the field of agriculture, revolutionizing traditional farming practices and enabling more efficient and sustainable food production. One area where machine learning has had a profound impact is crop management. Through the analysis of vast amounts of data, including satellite imagery, weather patterns, soil conditions, and historical crop performance, machine learning models can generate insights and recommendations for optimizing crop production. These models can provide valuable information on irrigation scheduling, fertilizer application, pest and disease detection, and optimal planting times.",
                    maize_5
                  )}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modern-modal">
            <div className="modal-header">
              <h2>{modalContent.title}</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                <X size={24} className="close-icon" />
              </button>
            </div>
            <div className="modal-body">
              {modalContent.image && (
                <div className="modal-image">
                  <img src={modalContent.image} alt={modalContent.title} />
                </div>
              )}
              <p className="modal-content-text">{modalContent.content}</p>
            </div>
            <div className="modal-footer">
              <button className="modal-action-btn" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rest of your content */}
      <div className="container">
        {/* ... existing code ... */}
      </div>

      {/* Modern Footer */}
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="footer-brand">
                  <div className="lamp-header">
                    <span className="lamp-light"></span>
                    <span className="lamp-text">MAIZE YIELD PREDICTION</span>
                  </div>
                  <p className="mt-3">
                    Leveraging machine learning and AI to transform agricultural planning and optimize maize production through data-driven insights.
                  </p>
                </div>
              </div>
              
              <div className="col-md-2 col-6 mb-4 mb-md-0">
                <h5 className="footer-heading">Features</h5>
                <ul className="footer-links">
                  <li><a href="#">Predictions</a></li>
                  <li><a href="#">Remote Sensing</a></li>
                  <li><a href="#">Data Analysis</a></li>
                  <li><a href="#">Crop Management</a></li>
                </ul>
              </div>
              
              <div className="col-md-2 col-6 mb-4 mb-md-0">
                <h5 className="footer-heading">Resources</h5>
                <ul className="footer-links">
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">API</a></li>
                  <li><a href="#">Research</a></li>
                  <li><a href="#">Case Studies</a></li>
                </ul>
              </div>
              
              <div className="col-md-4">
                <h5 className="footer-heading">Stay Updated</h5>
                <p>Subscribe to our newsletter for the latest updates on agricultural AI.</p>
                <div className="footer-newsletter">
                  <input type="email" placeholder="Your email address" className="footer-input" />
                  <button className="footer-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="mb-0 mb-md-0">
                  © {new Date().getFullYear()} Maize Yield Prediction. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="footer-social">
                  <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
