import { lazy, useState, useEffect } from "react";
import { withTranslation } from "react-i18next";

import {FixedCol, CustomImg, ScrollableCol, TitleConstruction,
   SecondScrollableCol, SubtitleConstruction, H6, CustomRow,
    CustomCol,CustomDiv, IntroDiv, CircleDiv, ArrowDownDiv, 
    SignupDiv, LogoDiv, RegDiv, Title, Country, Summary, Brand,
    HompageOptionsDiv, PaginationDiv} from "./styles";

import { get_regulations } from '../../api';

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
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";





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

  const [showCreate, setShowCreate] = useState(false);
  const [showEcosystem, setShowEcosystem] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const [showArrow, setShowArrow] = useState(true);

  const [regulations, setRegulations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100); // Keep track of total pages

  
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


  const fetchRegulations = async () => {
    try {
      const response = await get_regulations(currentPage, 5);
      console.log(response.data);
      setRegulations(response.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchRegulations();
  }, []);
  
  const handleMiddleClick = () => {
    setIsMiddleClicked(!isMiddleClicked);
  };

  const handlePageChange = async (page: number) => {
    console.log(page);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Update the state
      console.log(`Fetching regulations for page: ${page}`);
      try {
        await fetchRegulations(); // Wait for the fetch to complete
        console.log('Fetch completed.');
      } catch (error) {
        console.error('Error fetching regulations:', error);
      }
    } else {
      console.log('Page out of bounds');
    }
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

  const handleExploreClick = () => {
    navigate("/regulations");
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
      <FixedCol span={10}>
        <div>
          <Row>
            <LogoDiv>
              <Brand>Lawgarithm</Brand>
            </LogoDiv>
          </Row>
          <Row>
            <IntroDiv>
              <ReactTyped strings={["Global Regulations, At Your Fingertips."]} typeSpeed={40} style={{ color: "#861388", fontSize: "1.4em" }}/>
            </IntroDiv>
          </Row>
          <HompageOptionsDiv>
            <Row>
              <Button name="submit" onClick={handleSignupClick}>{t("Join")}</Button>
              <Button name="submit" onClick={handleExploreClick}>{t("Explore")}</Button>
            </Row>
          </HompageOptionsDiv>
        </div>
      </FixedCol>

      <ScrollableCol span={14}>
        <CustomDiv>
          {regulations.map((regulation: any) => (
            <RegDiv key={regulation.id}>
              <Row>
                <Col span={20}>
                  <Country>{regulation.country}</Country>
                </Col>
                <Col span={4}>
                  <Summary>{regulation.timestamp}</Summary>
                </Col>
              </Row>
              <Row>
                <Title href={regulation.link}>{regulation.title}</Title>
              </Row>
            </RegDiv>
          ))}
        </CustomDiv>

        {/* Pagination controls */}
        <PaginationDiv style={{ textAlign: "center", marginTop: "20px" }}>
          <Row>
            <Col span={12}>            
              <FaArrowLeft size={24} style={{ color: "#861388", cursor: "pointer" }} onClick={() => handlePageChange(currentPage - 1)} />
            </Col>
            <Col span={12}>
              <FaArrowRight size={24} style={{ color: "#861388", cursor: "pointer" }} onClick={() => handlePageChange(currentPage + 1)} />
            </Col>
          </Row>
          <Row>
            <span style={{ margin: "auto" }}>
              Page {currentPage} of {totalPages}
            </span>
          </Row>
        </PaginationDiv>
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
