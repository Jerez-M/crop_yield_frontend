import React, { useState } from 'react';
import { Alert, Card, DatePicker, Divider, Empty, Form, InputNumber, Layout, Select, Spin, message, theme, Tabs } from 'antd';
import "./App.css";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart3, Beaker, Brain, CloudRain, Droplets, Leaf, Microscope, Satellite, Sprout, Target, Thermometer } from 'lucide-react';
import predictYieldService from './services/predict-yield.service';
import RemoteSensingMap from './gis/components/RemoteSensingMap';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

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
        country: '134', // Default to Zimbabwe
        item: '13', // Default to Maize
    });

    // Country options
    const countryOptions = [
        { value: '134', label: 'Zimbabwe' },
        { value: '1', label: 'United States' },
        { value: '2', label: 'China' },
        { value: '3', label: 'India' },
        { value: '4', label: 'Brazil' },
        { value: '5', label: 'South Africa' },
    ];

    // Crop type options
    const cropOptions = [
        { value: '13', label: 'Maize' },
        { value: '15', label: 'Wheat' },
        { value: '14', label: 'Rice' },
        { value: '16', label: 'Soybeans' },
        { value: '17', label: 'Potatoes' },
        { value: '18', label: 'Cassava' },
    ];

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
                message.error("Prediction failed. Please try again.");
            }
        } catch (error) {
            message.error("Failed to perform prediction");
            console.error(error)
        } finally {
            setLoading(false);
            setDisabled(false);
        }
    };

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
                                                optionFilterProp="label"
                                                onChange={(value) => handleFormChange("country", value)}
                                                options={countryOptions}
                                                defaultValue="134"
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
                                                optionFilterProp="label"
                                                options={cropOptions}
                                                defaultValue="13"
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
                                
                                {/* Prediction Results Section */}
                                <Form layout="vertical"> 
                                    <fieldset> 
                                        <legend className="text-bold"> 
                                            <h4>Prediction Results</h4> 
                                        </legend> 
                                        
                                        {loading ? ( 
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}> 
                                                <Spin size="large" /> 
                                            </div> 
                                        ) : ( 
                                            predictionResult === null && ( 
                                                <Card> 
                                                    <div className="d-flex justify-content-center align-items-center"> 
                                                        <div className="text-center mt-1"> 
                                                            <Empty description={true} /> 
                                                            <p className="lead mt-4 mb-0"> 
                                                                No predicted results 
                                                            </p> 
                                                            <p className="fw-light mt-1 mb-0"> 
                                                                Please fill in all details above to perform prediction 
                                                            </p> 
                                                        </div> 
                                                    </div> 
                                                </Card> 
                                            )
                                        )} 
                                        
                                        {predictionResult && ( 
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "350px" }}> 
                                                <Card className='w-75 py-2'> 
                                                    <Form.Item label="Predicted yield"> 
                                                        <Input className='w-100 pt-2' size="large" value={predictionResult?.crop_yield} /> 
                                                    </Form.Item> 
                                                </Card> 
                                            </div> 
                                        )} 
                                    </fieldset> 
                                </Form>
                                
                                {/* Remove the duplicate button that was here */}
                                
                            </Form>
                        </fieldset>
                    </div>
                </>
            ),
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
                            <p className="mb-0">© {new Date().getFullYear()} Crop Yield Prediction System</p>
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