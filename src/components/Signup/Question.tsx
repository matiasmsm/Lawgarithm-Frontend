import React, { useState, useEffect } from 'react';
import { QuestionDiv, Input, SelectInput, H6, FormDiv, Checkbox, Label, CheckboxDiv, SubmitDiv } from './styles';
import { ReactTyped } from "react-typed";
import { get_business_types, get_industries, get_countries } from '../../api';
import { Col, Row } from 'antd';

interface QuestionProps {
  question: string;
  type: 'Welcome' | 'basicinformation' | 'goal' | 'end';
  options?: string[];
  onChange: (field: string, value: string) => void;
  value: any;
}

const Question: React.FC<QuestionProps> = ({ question, type, options, onChange, value }) => {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [industries, setIndustries] = useState<any[]>([]);
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [countries, setCountries] = useState<any[]>([]);

  async function handleGetIndustries() {
    try {
      const response = await get_industries();
      const responseData = response.data;
      setIndustries(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleGetBusinesses() {
    try {
      if (selectedIndustry) {
        const response = await get_business_types(selectedIndustry);
        setBusinesses(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleGetCountries() {
    try {
      const response = await get_countries();
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetIndustries();
    handleGetCountries();
  }, []);

  useEffect(() => {
    if (selectedIndustry) {
      handleGetBusinesses();
    }
  }, [selectedIndustry]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const industryId = e.target.value;
    setSelectedIndustry(industryId);
    onChange('industry', industryId);
  };

  const handleBusinessChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const businessId = e.target.value;
    setSelectedBusiness(businessId);
    onChange('business', businessId);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);
    onChange('country', countryId);
  };

  const handleCheckboxChange = (option: string, isChecked: boolean) => {
    // Handle checkbox change
  };

  let inputElement = null;
  switch (type) {
    case 'Welcome':
      inputElement = (
        <ReactTyped strings={[question]} typeSpeed={30} style={{ color: "#000000", fontSize: "2em" }} />
      );
      break;
    case 'basicinformation':
      inputElement = (
        <div>
          <ReactTyped strings={[question]} typeSpeed={30} style={{ color: "#000000", fontSize: "1.8em" }} />
          <FormDiv>
            <H6>Full name</H6>
            <Input type="text" name="name" value={value.name} onChange={handleInputChange} />
            <H6>Country</H6>
            <SelectInput value={value.country || ''} onChange={handleCountryChange}>
              <option value="">Select a Country</option>
              {countries.map(country => (
                <option key={country.cca2} value={country.name.common}>{country.name.common}</option>
              ))}
            </SelectInput>
            <H6>Email</H6>
            <Input type="text" name="email" value={value.email} onChange={handleInputChange} />
            <H6>Password</H6>
            <Input type="password" name="password" value={value.password} onChange={handleInputChange} />
          </FormDiv>
        </div>
      );
      break;
    case 'goal':
      inputElement = (
        <div>
          <ReactTyped strings={[question]} typeSpeed={30} style={{ color: "#000000", fontSize: "1.8em" }} />
          <CheckboxDiv>
            <Row style={{ marginBottom: "3vh" }}>
              <Col span={2}>
                <Checkbox
                  type="checkbox"
                  id="See"
                  onChange={(e) => handleCheckboxChange("See", e.target.checked)}
                />
              </Col>
              <Col span={22}>
                <Label htmlFor={"See"}>I just want to see</Label>
              </Col>
            </Row>
            <Row style={{ marginBottom: "3vh" }}>
              <Col span={2}>
                <Checkbox
                  type="checkbox"
                  id="Build"
                  onChange={(e) => handleCheckboxChange("Build", e.target.checked)}
                />
              </Col>
              <Col span={22}>
                <Label htmlFor={"Build"}>Build and manage a business</Label>
              </Col>
            </Row>
            <Row style={{ marginBottom: "3vh" }}>
              <Col span={2}>
                <Checkbox
                  type="checkbox"
                  id="Add"
                  onChange={(e) => handleCheckboxChange("Add", e.target.checked)}
                />
              </Col>
              <Col span={22}>
                <Label htmlFor={"Add"}>I want to add my business to DeepCo</Label>
              </Col>
            </Row>
            <Row style={{ marginBottom: "3vh" }}>
              <Col span={2}>
                <Checkbox
                  type="checkbox"
                  id="Work"
                  onChange={(e) => handleCheckboxChange("Work", e.target.checked)}
                />
              </Col>
              <Col span={22}>
                <Label htmlFor={"Work"}>I'm looking for work</Label>
              </Col>
            </Row>
          </CheckboxDiv>
        </div>
      );
      break;
    case 'end':
      inputElement = (
        <SubmitDiv>
          <ReactTyped strings={[question]} typeSpeed={30} style={{ color: "#000000", fontSize: "1.8em" }} />
        </SubmitDiv>
      );
      break;
    default:
      inputElement = <Input type="text" value={value.default} onChange={(e) => onChange('default', e.target.value)} />;
      break;
  }

  return (
    <QuestionDiv>
      {inputElement}
    </QuestionDiv>
  );
};

export default Question;
