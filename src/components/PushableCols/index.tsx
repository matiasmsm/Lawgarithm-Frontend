import { lazy, useState, useEffect } from "react";
import { withTranslation } from "react-i18next";

import {FixedCol, CustomImg, ScrollableCol, TitleConstruction,
   SecondScrollableCol, SubtitleConstruction, H6, CustomRow,
    CustomCol,CustomDiv, IntroDiv, CircleDiv, ArrowDownDiv, 
    SignupDiv, MapDiv, TryTitle, InstructionDiv, GenerateButtonDiv,
  LogoDiv, TryItDiv, IntroRow} from "./styles";

import { get_industries } from '../../api';

import { Row, Col } from "antd";
import { Button } from "../../common/Button";
import Login from "../Login";

import { GiWheat } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaArrowDown } from 'react-icons/fa';
import { MdAddBusiness } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";




import { ReactTyped } from "react-typed";

import { useInView } from 'react-intersection-observer';




// import Government from "../../pages/Government";
import { useNavigate } from 'react-router-dom';



interface Props {
  t: any;
}

const PushableCols = ({ t }: Props) => {
  const navigate = useNavigate();

  const [isMiddleClicked, setIsMiddleClicked] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  const [industries, setIndustries] = useState([]);

  const [showCreate, setShowCreate] = useState(false);
  const [showEcosystem, setShowEcosystem] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const [showArrow, setShowArrow] = useState(true);
  
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.9, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchIndustries = async () => {
    try {
      const response = await get_industries();
      setIndustries(response.data); // Assuming the forms list is located in the 'forms_list' key of the JSON response
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchIndustries();
  }, []);

  const handleMiddleClick = () => {
    setIsMiddleClicked(!isMiddleClicked);
  };

  const handleCustomImgClick = (clickedTitle: string) => {
    if (clickedTitle === "Create"){
      setShowCreate(true);
      setShowEcosystem(false);
      setShowAbout(false);
    } else if (clickedTitle === "Ecosystem"){
      setShowCreate(false);
      setShowEcosystem(true);
      setShowAbout(false);
    } else if (clickedTitle === "About"){
      setShowCreate(false);
      setShowEcosystem(false);
      setShowAbout(true);
    }
  };

  const handleLoginClick = () => {
    setIsLoginClicked(!isLoginClicked);
    setIsSignupClicked(false);
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };



  //onClick={() => handleCustomImgClick("Casa Los Pensamientos")}

  return (
    <div style={{ display: "flex" }}>
      {isLoginClicked ? (
        <Login />
      ) : (
        null
      )}
      <FixedCol span={isMiddleClicked ? 12 : 12} className={`left ${isMiddleClicked ? 'pushed' : ''}`}>
        <div style={{position: "fixed"}}>
          <LogoDiv>
            <ReactTyped strings={["Lawgarithm"]} typeSpeed={40} style={{ color: "#37f87b", fontSize: "1.6em" }}/>
          </LogoDiv>
          <IntroDiv>
            <ReactTyped strings={["Build your business like an expert."]} typeSpeed={40} style={{ color: "#37f87b", fontSize: "1.6em" }}/>
          </IntroDiv>
          <SignupDiv>
            <Button name="submit" onClick={handleSignupClick}>{t("Sign up")}</Button>
            <Button name="submit" onClick={handleLoginClick}>{t("Sign in")}</Button>
          </SignupDiv>
        </div>
      </FixedCol>

      <ScrollableCol span={12} className={`middle ${isMiddleClicked ? 'pushed' : ''}`}>
        <CustomDiv>
          <CustomRow justify="space-between" align="middle" onClick={handleMiddleClick}>
            <CustomCol lg={9} md={8} sm={8} xs={10} onClick={() => handleCustomImgClick("Create")} style={{ cursor: 'pointer' }}>
              <MdAddBusiness size={72} style={{ color: "#0d0200"}}/>
              <H6>{t("Create a business")}</H6>
            </CustomCol>
            <CustomCol lg={9} md={8} sm={11} xs={10} onClick={() => handleCustomImgClick("Ecosystem")} style={{ cursor: 'pointer' }}>
              <MdExplore size={72} style={{ color: "#0d0200"}}/>
              <H6>{t("Explore our ecosystem")}</H6>
            </CustomCol>
          </CustomRow>
          <CustomRow justify="space-between" align="middle" onClick={handleMiddleClick}>
            <CustomCol lg={9} md={8} sm={8} xs={10} onClick={() => handleCustomImgClick("About us")} style={{ cursor: 'pointer' }}>
              <FaHandshakeAngle size={72} style={{ color: "#0d0200"}}/>
              <H6>{t("About us")}</H6>
            </CustomCol>
            <CustomCol lg={9} md={8} sm={8} xs={10} onClick={() => handleCustomImgClick("Yield")} style={{ cursor: 'pointer' }}>
              <TiWeatherPartlySunny size={72} style={{ color: "#0d0200"}}/>
              <H6>{t("")}</H6>
            </CustomCol>
          </CustomRow>
        </CustomDiv>
      </ScrollableCol>

      <SecondScrollableCol span={isMiddleClicked ? 12 : 12} className={`right ${isMiddleClicked ? 'pushed' : ''} ${isMiddleClicked ? 'visible' : ''}`}>
        {showCreate && (
          <div>
            <CircleDiv>
              <GiWheat size={46} style={{ color: "#fdd2cf"}}/>
            </CircleDiv>
            <Row>
              <TitleConstruction><ReactTyped strings={["Create"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.2em" }}/></TitleConstruction>
            </Row>
              <ReactTyped strings={["We help build businesses end-to-end using basic templates"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <CustomImg src="Food services template.png" alt="Description of image" width="700vw" />
              <ReactTyped strings={["Every template is customizable and you can even create them from zero."]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <ReactTyped strings={["Each one provides the following:"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <ReactTyped strings={["   1. A personalized experience for the owner based on wants and needs"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <ReactTyped strings={["   2. Searching and connecting with clients and providers"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <ReactTyped strings={["   3. Setting a structure of variable and fixed costs"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <ReactTyped strings={["   4. Searching for employees"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <ReactTyped strings={["   5. Getting access to financial help"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <ReactTyped strings={["   6. Regulatory compliance"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <ReactTyped strings={["   7. Business registration and bank account opening"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
              <br></br>
              <br></br>
              <ReactTyped strings={["Provide the infrastructure for creating and managing businesses in a centralized manner"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.6em" }}/>
          </div>
        )}
        {showEcosystem && (
          <div>
            <CircleDiv>
              <GiWheat size={46} style={{ color: "#fdd2cf"}}/>
            </CircleDiv>
            <Row>
              <TitleConstruction><ReactTyped strings={["Ecosystem"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.2em" }}/></TitleConstruction>
            </Row>
            {industries.map((industry: any) => (
              <H6 key={industry.name}>{industry.name}</H6>
            ))}
          </div>
        )}
        {showAbout && (
          <div>
            <CircleDiv>
              <GiWheat size={46} style={{ color: "#fdd2cf"}}/>
            </CircleDiv>
            <Row>
              <TitleConstruction><ReactTyped strings={["Yield prediction"]} typeSpeed={40} style={{ color: "#000000", fontSize: "1.2em" }}/></TitleConstruction>
            </Row>
            <CustomRow justify="space-between">
              <TitleConstruction>Pest Control</TitleConstruction>
            </CustomRow>
            <CustomRow justify="space-between">
              <TitleConstruction>Pest Control</TitleConstruction>
            </CustomRow>
            <CustomRow justify="space-between">
              <TitleConstruction>Pest Control</TitleConstruction>
            </CustomRow>
            <CustomRow justify="space-between">
              <TitleConstruction>Pest Control</TitleConstruction>
            </CustomRow>
          </div>
        )}
      </SecondScrollableCol>
    </div>

  );
};

export default withTranslation()(PushableCols);
