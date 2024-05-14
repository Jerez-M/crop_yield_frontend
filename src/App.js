import "./App.css";
import { FaChartLine, FaFlask, FaRobot, FaSeedling } from "react-icons/fa";
import maize_1 from "./public/images/maize-1.jpg";
import maize_2 from "./public/images/maize-2.jpg";
import maize_3 from "./public/images/maize-3.jpg";
import maize_5 from "./public/images/maize-5.jpg";
import { Carousel } from "antd";
import { CgRemote } from "react-icons/cg";
import { MdOpenInFull, MdOpenInNewOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="/" >Maize Yield Prediction</a>
          <button className="btn btn-outline-success px-3" type="submit" onClick={() => navigate('/predictions')}>
            Get started
          </button>
        </div>
      </nav>

      <section className="landing-section">
        <Carousel autoplay arrows infinite={false}>
          <div className="carousel-slide">
            <h1 className="carousel-content_1">
              Revolutionizing Maize Yield Prediction
            </h1>
            <p></p>
          </div>
          <div className="carousel-slide">
            <h1 className="carousel-content_1">
              Discover the power of machine learning in agriculture
            </h1>
            <p></p>
          </div>
          <div className="carousel-slide">
            <h1 className="carousel-content_1">Optimize Resource Allocation</h1>
          </div>
          <div className="carousel-slide">
            <h1 className="carousel-content_1">
              Make informed decisions for better crop management
            </h1>
          </div>
        </Carousel>
      </section>

      <div className="container mt-3">
        <h1 className="mb-4 text-center">
          Advantages of Maize Yield Prediction with Machine Learning
        </h1>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaFlask size={64} />
                </div>
                <h5 className="card-title">Improved Accuracy</h5>
                <p className="card-text">
                  Machine learning models can analyze historical data and
                  environmental factors to provide more accurate yield
                  predictions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaSeedling size={64} />
                </div>
                <h5 className="card-title">Optimized Resource Allocation</h5>
                <p className="card-text">
                  By predicting maize yield, farmers can optimize resource
                  allocation, such as fertilizer and water, resulting in better
                  crop management.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaRobot size={64} />
                </div>
                <h5 className="card-title">Automation and Efficiency</h5>
                <p className="card-text">
                  Automation of prediction models reduces manual effort and
                  enables farmers to make data-driven decisions more
                  efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaChartLine size={64} />
                </div>
                <h5 className="card-title">Long-term Planning</h5>
                <p className="card-text">
                  Machine learning models can provide insights into long-term
                  trends, helping farmers plan for future seasons and make
                  informed decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaChartLine size={64} />
                </div>
                <h5 className="card-title">Data-Driven Insights</h5>
                <p className="card-text">
                  Machine learning enables farmers to gain data-driven insights
                  into factors affecting maize yield, leading to informed
                  decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaSeedling size={64} />
                </div>
                <h5 className="card-title">Early Disease Detection</h5>
                <p className="card-text">
                  By analyzing various data points, machine learning models can
                  detect early signs of diseases in maize crops, allowing for
                  timely intervention.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaFlask size={64} />
                </div>
                <h5 className="card-title">Resource Optimization</h5>
                <p className="card-text">
                  Maize yield prediction helps optimize the use of resources
                  like land, water, and energy, leading to sustainable
                  agricultural practices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaRobot size={64} />
                </div>
                <h5 className="card-title">Precision Farming</h5>
                <p className="card-text">
                  Machine learning enables precision farming techniques, such as
                  targeted application of fertilizers and pesticides, resulting
                  in higher yields and reduced environmental impact.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <CgRemote size={64} />
                </div>
                <h5 className="card-title">Improved Decision Making</h5>
                <p className="card-text">
                  Maize yield prediction empowers farmers, decision makers,
                  researchers, and engineers with valuable insights and
                  data-driven information. This enables them to make informed
                  decisions regarding crop planning, resource allocation, and
                  agricultural practices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <MdOpenInFull size={64} />
                </div>
                <h5 className="card-title">Optimized Supply Chain</h5>
                <p className="card-text">
                  By accurately predicting maize yield, stakeholders in the
                  supply chain, such as distributors, processors, and retailers,
                  can optimize their operations. This includes planning
                  inventory, managing logistics, and ensuring a smooth flow of
                  maize products from farm to market.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <FaSeedling size={64} />
                </div>
                <h5 className="card-title">Enhanced Risk Management</h5>
                <p className="card-text">
                  Maize yield prediction helps farmers and stakeholders mitigate
                  risks associated with crop production. By anticipating
                  potential yield fluctuations, they can implement risk
                  management strategies, such as insurance coverage,
                  diversification of crops, or adjusting planting schedules, to
                  minimize losses.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-icon bg-success text-white d-flex align-items-center justify-content-center">
                  <MdOpenInNewOff size={64} />
                </div>
                <h5 className="card-title">Innovation and Researchg</h5>
                <p className="card-text">
                  Maize yield prediction fosters innovation and research in the
                  agricultural sector. Researchers can analyze historical and
                  real-time data to develop advanced models and techniques for
                  improving crop yield, pest management. This contributes to the
                  advancement of agricultural science and technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <h1 className="text-center mb-4 mt-4">
            About Maize Yield Prediction
          </h1>
          <div class="row border border-success border-3 rounded-2 shadow mb-3">
            <div class="col-lg-4">
              <img src={maize_3} alt="img 1" />
              {/* <img src={maize_2} alt="img 2"/> */}
            </div>
            <div class="col-lg-8">
              <p>
                Maize yield prediction is a{" "}
                <span class="emphasis">valuable application</span> of machine
                learning and artificial intelligence in the field of
                agriculture. By leveraging historical data, environmental
                factors, and advanced predictive algorithms, farmers and
                agricultural stakeholders can estimate the potential yield of
                maize crops with greater accuracy. This information plays a
                crucial role in crop planning, resource allocation, and
                decision-making processes.
              </p>

              <p>
                Machine learning models analyze vast amounts of data, including
                factors such as <span class="emphasis">weather patterns</span>,{" "}
                <span class="emphasis">soil conditions</span>,{" "}
                <span class="emphasis">pest infestations</span>, and{" "}
                <span class="emphasis">farming practices</span>. By identifying
                patterns and correlations within this data, the models can
                generate predictive insights into maize yield. These predictions
                enable farmers to optimize their farming practices, make
                informed decisions, and maximize their agricultural
                productivity.
              </p>

              <p>
                One of the significant advantages of maize yield prediction is
                its contribution to{" "}
                <span class="emphasis">sustainable agriculture</span>. By
                accurately estimating crop yields, farmers can optimize the use
                of resources like <span class="emphasis">land</span>,{" "}
                <span class="emphasis">water</span>, and{" "}
                <span class="emphasis">energy</span>. This optimization reduces
                waste and environmental impact while promoting sustainable
                farming practices. Additionally, by predicting yield
                fluctuations, farmers can adopt strategies to mitigate risks,
                such as adjusting planting schedules or implementing pest
                management techniques.
              </p>

              <p>
                Maize yield prediction also facilitates{" "}
                <span class="emphasis">long-term planning</span> in the
                agricultural sector. By analyzing historical trends and
                patterns, machine learning models can provide insights into
                future yield projections. This information empowers farmers and
                stakeholders to plan ahead, make strategic decisions, and adapt
                their farming practices to changing conditions. It allows for
                proactive measures to be taken, such as optimizing storage and
                distribution logistics, and aligning market demand with supply.
              </p>

              <p>
                Overall, maize yield prediction through machine learning and AI
                technologies{" "}
                <span class="emphasis">
                  revolutionizes the agriculture industry
                </span>
                . It empowers farmers with data-driven insights, enhances
                resource management, promotes sustainability, and fosters
                innovation in agricultural practices. By combining advanced
                technologies with traditional farming wisdom, maize yield
                prediction opens up new possibilities for increasing
                productivity, improving food security, and ensuring a
                sustainable future for the agricultural sector.
              </p>
            </div>
          </div>

          <h1 className="text-center mb-4 mt-5">
            Machine Learning in Agriculture
          </h1>
          <div class="row row border border-success border-3 rounded-2 shadow mb-3">
            <div class="col-lg-8">
              <p>
                Machine learning and artificial intelligence have made
                significant contributions to the field of agriculture,{" "}
                <span class="emphasis">
                  revolutionizing traditional farming practices
                </span>{" "}
                and enabling more efficient and sustainable food production.
              </p>

              <p>
                One area where machine learning has had a profound impact is{" "}
                <span class="emphasis">crop management</span>. Through the
                analysis of vast amounts of data, including satellite imagery,
                weather patterns, soil conditions, and historical crop
                performance, machine learning models can generate insights and
                recommendations for optimizing crop production. These models can
                provide valuable information on irrigation scheduling,
                fertilizer application, pest and disease detection, and optimal
                planting times. By leveraging these insights, farmers can make
                more informed decisions, reduce resource wastage, and increase
                crop yields.
              </p>

              <p>
                Another area where machine learning plays a crucial role is{" "}
                <span class="emphasis">precision agriculture</span>. By
                integrating sensors, drones, and Internet of Things (IoT)
                devices, farmers can collect real-time data on various
                parameters such as soil moisture, nutrient levels, and crop
                health. Machine learning algorithms can process this data and
                provide actionable insights to farmers, enabling them to apply
                interventions precisely where needed. This targeted approach to
                farming minimizes the use of pesticides, fertilizers, and water,
                resulting in cost savings, reduced environmental impact, and
                improved crop quality.
              </p>

              <p>
                Furthermore, machine learning contributes to the early detection
                and management of{" "}
                <span class="emphasis">pests and diseases</span>. By analyzing
                data from sensors, cameras, and other sources, machine learning
                models can identify patterns and anomalies associated with pests
                and diseases. This early detection allows farmers to take timely
                preventive measures, such as targeted pesticide application or
                crop rotation, reducing crop losses and minimizing the need for
                broad-spectrum chemical treatments. It also enables more
                sustainable pest management practices and reduces the
                environmental impact of agriculture.
              </p>

              <p>
                Machine learning is also applied in{" "}
                <span class="emphasis">yield prediction</span> for various
                crops, including maize. By analyzing historical data, weather
                patterns, soil conditions, and other factors, machine learning
                models can estimate crop yields with reasonable accuracy. This
                information assists farmers in making informed decisions
                regarding resource allocation, harvesting schedules, and market
                planning. It helps optimize productivity, minimize risks, and
                improve overall agricultural efficiency.
              </p>

              <p>
                In conclusion, machine learning and artificial intelligence
                offer immense potential in transforming the agricultural sector.
                Through applications such as maize yield prediction and crop
                management, these technologies empower farmers, promote
                sustainable practices, and contribute to global food security.
                The integration of advanced technologies with traditional
                farming knowledge paves the way for a more efficient, resilient,
                and sustainable agricultural future.
              </p>
            </div>
            <div class="col-lg-4">
              <img src={maize_2} className="img-thumbnail" alt="img 3" />
              <img src={maize_5} className="img-thumbnail" alt="img 4" />
              <img src={maize_1} className="img-thumbnail" alt="img 3" />
              {/* <img src={maize_4} className='img-thumbnail' alt="img 4"/> */}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white py-3">
        <div className="container text-center">
          <p>&copy; 2024 Maize Yield Prediction. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
