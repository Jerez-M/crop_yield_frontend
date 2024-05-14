import React, { useState } from 'react';
import { Alert, Breadcrumb, Button, Card, DatePicker, Divider, Empty, Form, Input, InputNumber, Layout, Menu, Select, Spin, message, theme } from 'antd';
import "./App.css";
import { FaBackward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { TiArrowLeftOutline } from 'react-icons/ti';
import { IoGitPullRequestOutline } from 'react-icons/io5';
import predictYieldService from './services/predict-yield.service';


const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));
const PredictionPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [predictionResult, setPredictionResult] = useState(null);
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

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    // display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >

                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <h3 className='text-white'>Maize Yield Prediction</h3>
                    <Button
                        icon={<TiArrowLeftOutline />}
                        className='border-0 text-light'
                        style={{ background: '#39b54a' }}
                        onClick={() => navigate('/')}
                    >
                        Back home
                    </Button>
                </div>
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Maize yield prediction</Breadcrumb.Item>
                    <Breadcrumb.Item>Predict</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <div className="mb-5">
                        <Alert
                            message={`Please enter the details below to perform yield prediction.`}
                            type="info"
                            className="mb-2 py-2"
                            showIcon
                            closable
                        />

                        <fieldset>
                            <legend className="text-bold">
                                <h4>Prediction Data</h4>
                            </legend>
                            <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
                                <Divider type="horizontal" />
                                <div className='row'>
                                    <div className='col col-lg-6'>
                                        <Form.Item
                                            label="Year to predict"
                                            name="year"
                                            rules={[{ required: true, message: "Year is required!" }]}
                                        >
                                            <DatePicker
                                                picker="year"
                                                className="w-100"
                                                size="large"
                                                onChange={(date, dateString) => {
                                                    handleFormChange("year", dateString);
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label="Temperature"
                                            name="temperature"
                                            rules={[{ required: true, message: "temperature is required!" }]}
                                            help="Temperature should be the average temperature per year"
                                        >
                                            <InputNumber
                                                className="w-100 mt-1"
                                                size="large"
                                                addonBefore="+"
                                                addonAfter="Degrees"
                                                min={1}
                                                max={100}
                                                placeholder='eg. 25'
                                                onChange={(value) => handleFormChange('temperature', value)} />
                                        </Form.Item>
                                        <Form.Item
                                            className="w-100 mt-2"
                                            label="Rainfall"
                                            name="rainfall"
                                            rules={[{ required: true, message: "rainfall is required!" }]}
                                            help="Rainfall should be the average rainfall per year"
                                        >
                                            <InputNumber
                                                className="w-100"
                                                size="large"
                                                addonBefore="+"
                                                addonAfter="MM"
                                                min={1}
                                                max={10000}
                                                placeholder='eg. 780'
                                                onChange={(value) => handleFormChange('rainfall', value)} />
                                        </Form.Item>
                                    </div>
                                    <div className='col col-lg-6'>
                                        <Form.Item
                                            label="Country"
                                            name="country"
                                            rules={[{ required: true, message: "Country is required!" }]}
                                        >
                                            <Select
                                                className="w-100"
                                                size="large"
                                                placeholder="Select country"
                                                showSearch
                                                onChange={(value) => handleFormChange("country", value)}
                                                options={[
                                                    { label: "Zimbabwe", value: "134" },
                                                    { label: "South Africa", value: "130" },
                                                    { label: "Zambia", value: "125" },
                                                    { label: "Kenya", value: "120" },
                                                    { label: "Nigeria", value: "115" },
                                                    { label: "Ethiopia", value: "110" },
                                                    { label: "Tanzania", value: "105" },
                                                    { label: "Uganda", value: "100" },
                                                    { label: "Ghana", value: "95" },
                                                    { label: "Egypt", value: "90" },
                                                    { label: "Morocco", value: "85" },
                                                    { label: "Algeria", value: "80" },
                                                    { label: "Sudan", value: "75" },
                                                    { label: "Angola", value: "70" },
                                                    { label: "Mozambique", value: "65" },
                                                    { label: "Cameroon", value: "60" },
                                                    { label: "Ivory Coast", value: "55" },
                                                    { label: "Madagascar", value: "50" },
                                                    { label: "Niger", value: "45" },
                                                    { label: "Burkina Faso", value: "40" },
                                                    { label: "Mali", value: "35" },
                                                    { label: "Malawi", value: "30" },
                                                    { label: "Zimbabwe", value: "25" },
                                                    { label: "Chad", value: "20" },
                                                    { label: "Guinea", value: "15" },
                                                    { label: "Rwanda", value: "10" },
                                                    { label: "Benin", value: "5" },
                                                    { label: "Tunisia", value: "4" },
                                                    { label: "Burundi", value: "3" },
                                                    { label: "South Sudan", value: "2" },
                                                    { label: "Sierra Leone", value: "1" },
                                                    { label: "United States", value: "200" },
                                                    { label: "Canada", value: "201" },
                                                    { label: "Mexico", value: "202" },
                                                    { label: "Brazil", value: "203" },
                                                    { label: "Argentina", value: "204" },
                                                    { label: "Colombia", value: "205" },
                                                    { label: "Peru", value: "206" },
                                                    { label: "Venezuela", value: "207" },
                                                    { label: "Chile", value: "208" },
                                                    { label: "China", value: "300" },
                                                    { label: "India", value: "301" },
                                                    { label: "Indonesia", value: "302" },
                                                    { label: "Pakistan", value: "303" },
                                                    { label: "Bangladesh", value: "304" },
                                                    { label: "Japan", value: "305" },
                                                    { label: "Philippines", value: "306" },
                                                    { label: "Vietnam", value: "307" },
                                                    { label: "Turkey", value: "308" },
                                                    { label: "United Kingdom", value: "400" },
                                                    { label: "Germany", value: "401" },
                                                    { label: "France", value: "402" },
                                                    { label: "Italy", value: "403" },
                                                    { label: "Spain", value: "404" },
                                                    { label: "Netherlands", value: "405" },
                                                    { label: "Switzerland", value: "406" },
                                                    { label: "Sweden", value: "407" },
                                                    { label: "Poland", value: "408" },
                                                ]}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label="Pesticide"
                                            name="pesticide"
                                            rules={[{ required: true, message: "pesticide is required!" }]}
                                            help="Pesticide should be the average pesticide per year"
                                        >
                                            <InputNumber
                                                className="w-100 mt-2"
                                                size="large"
                                                addonBefore="+"
                                                addonAfter="Tonnes"
                                                min={1} max={10000}
                                                placeholder='eg. 2000'
                                                onChange={(value) => handleFormChange('pesticide', value)} />
                                        </Form.Item>

                                        <Form.Item
                                            label="Crop type"
                                            name="item"
                                            rules={[{ required: true, message: "Crop type is required!" }]}
                                        >
                                            <Select
                                                className="w-100"
                                                size="large"
                                                placeholder="Select crop type"
                                                onChange={(value) => handleFormChange("item", value)}
                                                showSearch
                                                options={[
                                                    { label: "Maize", value: "13" },
                                                    { label: "Barley", value: "12" },
                                                    { label: "Wheat", value: "11" },
                                                    { label: "Rice", value: "10" },
                                                    { label: "Soybeans", value: "9" },
                                                    { label: "Cotton", value: "8" },
                                                    { label: "Potatoes", value: "7" },
                                                    { label: "Tomatoes", value: "6" },
                                                    { label: "Sugar cane", value: "5" },
                                                    { label: "Coffee", value: "4" },
                                                    { label: "Bananas", value: "3" },
                                                ]}
                                            />
                                        </Form.Item>

                                    </div>

                                </div>
                                <Divider type="horizontal" />
                                <Button
                                    type="primary"
                                    size="large"
                                    className="mt-3"
                                    loading={loading}
                                    disabled={disabled}
                                    icon={<IoGitPullRequestOutline />}
                                    block
                                    htmlType="submit"
                                >
                                    Predict
                                </Button>
                            </Form>
                        </fieldset>

                    </div>

                    <div className='mt-1'>
                        {loading === true && (
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
                                <Spin size="large" />
                            </div>
                        )}

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
                                    ))}

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
                    </div>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Maize prediction ©{new Date().getFullYear()} Created by Jeremiah Muchazondida
            </Footer>
        </Layout >
    );
};
export default PredictionPage;