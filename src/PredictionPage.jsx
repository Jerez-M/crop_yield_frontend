import React, { useState } from 'react';
import { Alert, Card, DatePicker, Divider, Empty, Form, InputNumber, Layout, Select, Spin, message, theme, Tabs } from 'antd';
import "./App.css";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart3, Beaker, Brain, CloudRain, Droplets, Leaf, Microscope, Satellite, Sprout, Target, Thermometer } from 'lucide-react';
import predictYieldService from './services/predict-yield.service';
import RemoteSensingMap from './gis/components/RemoteSensingMap';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));
const PredictionPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG, colorPrimary },
    } = theme.useToken();
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [predictionResult, setPredictionResult] = useState(null);
    const [activeTab, setActiveTab] = useState('1');
    const [formData, setFormData] = useState({
        year: null,
        temperature: 25,
        rainfall: 890,
        pesticide: 2000,
        country: '134',
        item: '13',
    });

    const handleFormChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };

    const handleFormSubmit = async () => {

        try {
            setLoading(true);
            setDisabled(true);

            const { year, temperature, rainfall, pesticide, country, item } = formData;
            const data = {
                year: year,
                temperature: temperature,
                rainfall: rainfall,
                pesticide: pesticide,
                country: country,
                item: item,
            }

            const predictionResponse = await predictYieldService.predict(data);

            if (predictionResponse?.status === 201) {
                setPredictionResult(predictionResponse?.data);
                message.success("Yield prediction completed successfully");
            } else {
                console.log("Error occurred during prediction");
            }
        } catch (error) {
            message.error("Failed to perform prediction");
            console.error(error)
        }
        finally {
            setLoading(false);
            setDisabled(false);
        }
    };

    // Define the tab items using the new format
    const tabItems = [
        {
            key: '1',
            label: (
                <span className="tab-label">
                    <Beaker size={18} className="me-2" />
                    Manual Input
                </span>
            ),
            children: (
                <>
                    <div className="mb-5">
                        <Alert
                            message={`Enter the details below to generate an AI-powered yield prediction`}
                            type="info"
                            className="modern-alert mb-4 py-3"
                            showIcon
                            closable
                        />

                        <fieldset className="modern-fieldset">
                            <legend className="modern-legend">
                                <Beaker size={20} className="me-2" />
                                <h4 className="mb-0">Prediction Parameters</h4>
                            </legend>
                            <Form layout="vertical" form={form} onFinish={handleFormSubmit} className="modern-form">
                                <Divider className="modern-divider" />
                                <div className='row'>
                                    <div className='col col-lg-6'>
                                        {/* Form items for the left column */}
                                        <Form.Item
                                            label={
                                                <div className="d-flex align-items-center">
                                                    <BarChart3 size={18} className="me-2" />
                                                    <span>Year to predict</span>
                                                </div>
                                            }
                                            name="year"
                                            rules={[{ required: true, message: "Year is required!" }]}
                                        >
                                            <DatePicker
                                                picker="year"
                                                className="modern-input w-100"
                                                size="large"
                                                onChange={(date, dateString) => {
                                                    handleFormChange("year", dateString);
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label={
                                                <div className="d-flex align-items-center">
                                                    <Thermometer size={18} className="me-2" />
                                                    <span>Temperature</span>
                                                </div>
                                            }
                                            name="temperature"
                                            rules={[{ required: true, message: "Temperature is required!" }]}
                                            help="Average temperature per year"
                                        >
                                            <InputNumber
                                                className="modern-input w-100"
                                                size="large"
                                                addonBefore="+"
                                                addonAfter="°C"
                                                min={1}
                                                max={100}
                                                placeholder='e.g., 25'
                                                onChange={(value) => handleFormChange('temperature', value)} />
                                        </Form.Item>
                                        
                                        <Form.Item
                                            className="w-100"
                                            label={
                                                <div className="d-flex align-items-center">
                                                    <CloudRain size={18} className="me-2" />
                                                    <span>Rainfall</span>
                                                </div>
                                            }
                                            name="rainfall"
                                            rules={[{ required: true, message: "Rainfall is required!" }]}
                                            help="Average rainfall per year"
                                        >
                                            <InputNumber
                                                className="modern-input w-100"
                                                size="large"
                                                addonBefore="+"
                                                addonAfter="MM"
                                                min={1}
                                                max={10000}
                                                placeholder='e.g., 780'
                                                onChange={(value) => handleFormChange('rainfall', value)} />
                                        </Form.Item>
                                    </div>
                                    <div className='col col-lg-6'>
                                        {/* Form items for the right column */}
                                        <Form.Item
                                            label={
                                                <div className="d-flex align-items-center">
                                                    <Droplets size={18} className="me-2" />
                                                    <span>Country</span>
                                                </div>
                                            }
                                            name="country"
                                            rules={[{ required: true, message: "Country is required!" }]}
                                        >
                                            <Select
                                                className="modern-select w-100"
                                                size="large"
                                                placeholder="Select country"
                                                showSearch
                                                onChange={(value) => handleFormChange("country", value)}
                                                options={[
                                                    // ... existing code ...
                                                ]}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label={
                                                <div className="d-flex align-items-center">
                                                    <Microscope size={18} className="me-2" />
                                                    <span>Pesticide</span>
                                                </div>
                                            }
                                            name="pesticide"
                                            rules={[{ required: true, message: "Pesticide is required!" }]}
                                            help="Average pesticide per year"
                                        >
                                            <InputNumber
                                                className="modern-input w-100"
                                                size="large"
                                                addonBefore="+"
                                                addonAfter="Tonnes"
                                                min={1} max={10000}
                                                placeholder='e.g., 2000'
                                                onChange={(value) => handleFormChange('pesticide', value)} />
                                        </Form.Item>

                                        <Form.Item
                                            label={
                                                <div className="d-flex align-items-center">
                                                    <Sprout size={18} className="me-2" />
                                                    <span>Crop type</span>
                                                </div>
                                            }
                                            name="item"
                                            rules={[{ required: true, message: "Crop type is required!" }]}
                                        >
                                            <Select
                                                className="modern-select w-100"
                                                size="large"
                                                placeholder="Select crop type"
                                                onChange={(value) => handleFormChange("item", value)}
                                                showSearch
                                                options={[
                                                    // ... existing code ...
                                                ]}
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                
                                {/* Remote Sensing Section */}
                                <Divider className="modern-divider">
                                    <div className="d-flex align-items-center">
                                        <Satellite size={18} className="me-2" />
                                        <span>Remote Sensing Data</span>
                                    </div>
                                </Divider>
                                
                                <div className="remote-sensing-container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Card className="location-selection-card">
                                                <h5 className="mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <Target size={18} className="me-2" />
                                                        <span>Location Selection</span>
                                                    </div>
                                                </h5>
                                                <p className="text-muted mb-4">Select a location on the map or enter coordinates to analyze vegetation health.</p>
                                                
                                                <Form.Item
                                                    label="Latitude"
                                                    name="latitude"
                                                >
                                                    <InputNumber 
                                                        className="modern-input w-100"
                                                        placeholder="e.g., -17.824858"
                                                        min={-90}
                                                        max={90}
                                                        precision={6}
                                                    />
                                                </Form.Item>
                                                
                                                <Form.Item
                                                    label="Longitude"
                                                    name="longitude"
                                                >
                                                    <InputNumber 
                                                        className="modern-input w-100"
                                                        placeholder="e.g., 31.053028"
                                                        min={-180}
                                                        max={180}
                                                        precision={6}
                                                    />
                                                </Form.Item>
                                                
                                                <div className="ndvi-info">
                                                    <h6>NDVI Analysis</h6>
                                                    <p className="text-muted small">
                                                        Normalized Difference Vegetation Index (NDVI) measures vegetation health and density.
                                                    </p>
                                                    
                                                    <div className="ndvi-scale">
                                                        <div className="ndvi-gradient"></div>
                                                        <div className="ndvi-labels">
                                                            <span>Low</span>
                                                            <span>Moderate</span>
                                                            <span>High</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                        
                                        <div className="col-md-8">
                                            <div className="remote-sensing-map-container">
                                                <RemoteSensingMap />
                                            </div>
                                            
                                            <div className="row mt-3">
                                                <div className="col-md-12">
                                                    <Card className="ndvi-analysis-card">
                                                        <div className="ndvi-stats">
                                                            <div className="stat-item">
                                                                <span className="stat-label">Current NDVI</span>
                                                                <span className="stat-value positive">0.72</span>
                                                            </div>
                                                            <div className="stat-item">
                                                                <span className="stat-label">Historical Average</span>
                                                                <span className="stat-value">0.65</span>
                                                            </div>
                                                            <div className="stat-item">
                                                                <span className="stat-label">Vegetation Health</span>
                                                                <span className="stat-value positive">Good</span>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <Divider className="modern-divider">
                                    <button
                                        type="submit"
                                        className="prediction-button"
                                        disabled={disabled}
                                    >
                                        {loading ? (
                                            <Spin size="small" className="me-2" />
                                        ) : (
                                            <Brain size={20} className="me-2" />
                                        )}
                                        <span>Generate AI Prediction</span>
                                    </button>
                                </Divider>
                                <button
                                    type="submit"
                                    className="prediction-button"
                                    disabled={disabled}
                                >
                                    {loading ? (
                                        <Spin size="small" className="me-2" />
                                    ) : (
                                        <Brain size={20} className="me-2" />
                                    )}
                                    <span>Generate AI Prediction</span>
                                </button>
                            </Form>
                        </fieldset>
                    </div>

                    {/* Show prediction results only if available */}
                    <div className='mt-5'>
                        {loading === true && (
                            <div className="loading-container">
                                <Spin size="large" />
                                <p className="mt-3">AI is analyzing your data...</p>
                            </div>
                        )}
                        
                        {predictionResult && !loading && (
                            <div className="prediction-result-container">
                                <h3 className="mb-4">
                                    <div className="d-flex align-items-center">
                                        <Leaf size={24} className="me-2" />
                                        <span>Prediction Results</span>
                                    </div>
                                </h3>
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <Card className="prediction-card">
                                            <h4 className="prediction-value">
                                                {predictionResult.yield_prediction} 
                                                <span className="prediction-unit">tonnes/hectare</span>
                                            </h4>
                                            <p className="prediction-label">Predicted Yield</p>
                                            
                                            <div className="prediction-comparison">
                                                <div className="comparison-item">
                                                    <span className="comparison-label">vs. Last Year</span>
                                                    <span className="comparison-value positive">+12.5%</span>
                                                </div>
                                                <div className="comparison-item">
                                                    <span className="comparison-label">vs. 5-Year Average</span>
                                                    <span className="comparison-value positive">+8.3%</span>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <Card className="factors-card">
                                            <h5 className="mb-3">Key Influencing Factors</h5>
                                            <ul className="factors-list">
                                                <li>
                                                    <div className="factor-item">
                                                        <div className="factor-name">Temperature</div>
                                                        <div className="factor-impact positive">Positive Impact</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="factor-item">
                                                        <div className="factor-name">Rainfall</div>
                                                        <div className="factor-impact positive">Positive Impact</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="factor-item">
                                                        <div className="factor-name">Pesticide Usage</div>
                                                        <div className="factor-impact neutral">Neutral Impact</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="factor-item">
                                                        <div className="factor-name">Soil Health</div>
                                                        <div className="factor-impact negative">Negative Impact</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card>
                                    </div>
                                </div>
                                
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <Card className="recommendations-card">
                                            <h5 className="mb-3">AI Recommendations</h5>
                                            <div className="recommendations-list">
                                                <div className="recommendation-item">
                                                    <div className="recommendation-icon">💧</div>
                                                    <div className="recommendation-content">
                                                        <h6>Optimize Irrigation</h6>
                                                        <p>Consider implementing drip irrigation to improve water efficiency by up to 30%.</p>
                                                    </div>
                                                </div>
                                                <div className="recommendation-item">
                                                    <div className="recommendation-icon">🌱</div>
                                                    <div className="recommendation-content">
                                                        <h6>Crop Rotation</h6>
                                                        <p>Implement a 3-year crop rotation cycle to improve soil health and reduce pest pressure.</p>
                                                    </div>
                                                </div>
                                                <div className="recommendation-item">
                                                    <div className="recommendation-icon">🧪</div>
                                                    <div className="recommendation-content">
                                                        <h6>Soil Testing</h6>
                                                        <p>Conduct comprehensive soil testing to optimize fertilizer application based on specific nutrient needs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )
        },
        {
            key: '2',
            label: (
                <span className="tab-label">
                    <Satellite size={18} className="me-2" />
                    NDVI Analysis
                </span>
            ),
            children: (
                <div className="ndvi-tab-content">
                    <Alert
                        message="NDVI (Normalized Difference Vegetation Index) Analysis"
                        description="Use satellite imagery to analyze vegetation health and predict crop yields based on historical NDVI data."
                        type="info"
                        className="modern-alert mb-4"
                        showIcon
                    />
                    
                    <div className="row">
                        <div className="col-md-12">
                            <Card className="ndvi-map-card">
                                <RemoteSensingMap fullSize={true} />
                            </Card>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <Layout className="layout">
            <Header className="modern-navbar">
                <div className="container">
                    <div className="navbar-content">
                        <div className="lamp-header">
                            <span className="lamp-light"></span>
                            <span className="lamp-text">CROP YIELD PREDICTION</span>
                        </div>
                        <button 
                            className="moving-border-button" 
                            onClick={() => navigate(-1)}
                        >
                            <span className="lamp-light"></span>
                            <span>Back</span>
                            <ArrowLeft size={20} className="ms-2" />
                        </button>
                    </div>
                </div>
            </Header>
            <Content className="site-layout">
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Tabs
                        defaultActiveKey="1"
                        activeKey={activeTab}
                        onChange={(key) => setActiveTab(key)}
                        items={tabItems}
                        className="modern-tabs"
                    />
                </div>
            </Content>
            <Footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-0">© 2023 Crop Yield Prediction System</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <p className="mb-0">Powered by AI & Remote Sensing</p>
                        </div>
                    </div>
                </div>
            </Footer>
        </Layout>
    );
};

export default PredictionPage;