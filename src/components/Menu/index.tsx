import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { withTranslation } from 'react-i18next';
import { MenuContainer, MenuSection, MenuItem, SelectedMenuItem, H4, HIDE, MenuLogo,
   GridDiv, LogoDiv, ToolBar, ProcessOption, DecisionOption, ShapesTitle } from './styles';
import { MenuProps } from './types';
import { Row, Col } from "antd";
import ChatDashboard from '../ChatDashboard';
import ExploreDashboard from '../ExploreDashboard';

import { IoSettingsSharp } from "react-icons/io5";
import { FaWpforms, FaHome } from 'react-icons/fa';
import { RiFlowChart } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";





const Menu = ({ t }: MenuProps) => {
  const [isHomeVisible, setHomeVisible] = useState(false);
  const [isChatVisible, setChatVisible] = useState(true);
  const [isExploreVisible, setExploreVisible] = useState(false);
  const [isManageVisible, setManageVisible] = useState(false);
  const [isTemplateVisible, setTemplateVisible] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  const handleHomeClick = () => {
    setHomeVisible(true);
    setChatVisible(false);
    setExploreVisible(false);
    setManageVisible(false);
    setTemplateVisible(false);
  };

  const handleChatClick = () => {
    setHomeVisible(false);
    setChatVisible(true);
    setExploreVisible(false);
    setManageVisible(false);
    setTemplateVisible(false);
  };

  const handleExploreClick = () => {
    setHomeVisible(false);
    setChatVisible(false);
    setExploreVisible(true);
    setManageVisible(false);
    setTemplateVisible(false);
  };

  const handleManageClick = () => {
    setHomeVisible(false);
    setChatVisible(false);
    setExploreVisible(false);
    setManageVisible(true);
    setTemplateVisible(false);
  };

  const handleTemplateClick = () => {
    setHomeVisible(false);
    setChatVisible(false);
    setExploreVisible(false);
    setManageVisible(false);
    setTemplateVisible(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll position threshold as needed
      if (scrollPosition > 200) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MenuContainer>
      <Row>
        <Col span={2}>
          <MenuSection className={scrollDown ? 'scroll-down' : ''}>
            <Link to="/">
              <LogoDiv>
                <img src="/globe_dark.gif" alt="Globe" width="50%" />
              </LogoDiv>
            </Link>
            <ul>
              {isHomeVisible? (
                  <SelectedMenuItem onClick={handleHomeClick}>
                    <div>
                      <MenuLogo><FaHome style={{color: "#fdd2cf"}}/></MenuLogo>
                    </div>
                    <div>
                      <HIDE style={{color: "#fdd2cf"}}>{t("Dashboard")}</HIDE>
                    </div>
                  </SelectedMenuItem>
                ):(
                  <MenuItem onClick={handleHomeClick}>
                    <div>
                      <MenuLogo><FaHome /></MenuLogo>
                    </div>
                    <div>
                      <HIDE>{t("Dashboard")}</HIDE>
                    </div>
                  </MenuItem>
              )}
              {isChatVisible? (
              <SelectedMenuItem onClick={handleChatClick}>
                <div>
                  <MenuLogo><CiChat1 style={{color: "#fdd2cf"}}/></MenuLogo>
                </div>
                <div>
                  <HIDE style={{color: "#fdd2cf"}}>{t("Prompt")}</HIDE>
                </div>
              </SelectedMenuItem>
              ):(
              <MenuItem onClick={handleChatClick}>
                <div>
                  <MenuLogo><CiChat1 /></MenuLogo>
                </div>
                <div>
                  <HIDE>{t("Chat")}</HIDE>
                </div>
              </MenuItem>
              )}
              {isExploreVisible? (
              <SelectedMenuItem onClick={handleExploreClick}>
                <div>
                  <MenuLogo><MdOutlineExplore style={{color: "#fdd2cf"}}/></MenuLogo>
                </div>
                <div>
                  <HIDE style={{color: "#fdd2cf"}}>{t("Explore")}</HIDE>
                </div>
              </SelectedMenuItem>
              ):(
              <MenuItem onClick={handleExploreClick}>
                <div>
                  <MenuLogo><MdOutlineExplore /></MenuLogo>
                </div>
                <div>
                  <HIDE>{t("Explore")}</HIDE>
                </div>
              </MenuItem>
              )}
              {isManageVisible? (
              <SelectedMenuItem onClick={handleManageClick}>
                <div>
                  <MenuLogo><BsPersonWorkspace style={{color: "#fdd2cf"}}/></MenuLogo>
                </div>
                <div>
                  <HIDE style={{color: "#fdd2cf"}}>{t("Manage")}</HIDE>
                </div>
              </SelectedMenuItem>
              ):(
              <MenuItem onClick={handleManageClick}>
                <div>
                  <MenuLogo><BsPersonWorkspace /></MenuLogo>
                </div>
                <div>
                  <HIDE>{t("Manage")}</HIDE>
                </div>
              </MenuItem>
              )}
              {isTemplateVisible? (
              <SelectedMenuItem onClick={handleTemplateClick}>
                <div>
                  <MenuLogo><RiFlowChart style={{color: "#fdd2cf"}}/></MenuLogo>
                </div>
                <div>
                  <HIDE style={{color: "#fdd2cf"}}>{t("Templating")}</HIDE>
                </div>
              </SelectedMenuItem>
              ):(
              <MenuItem onClick={handleTemplateClick}>
                <div>
                  <MenuLogo><RiFlowChart /></MenuLogo>
                </div>
                <div>
                  <HIDE>{t("Templating")}</HIDE>
                </div>
              </MenuItem>
              )}
              <MenuItem onClick={handleManageClick}>
                <div>
                  <MenuLogo><IoSettingsSharp /></MenuLogo>
                </div>
                <div>
                  <HIDE>{t("Settings")}</HIDE>
                </div>
              </MenuItem>
              <MenuItem onClick={handleManageClick}>
                <div>
                  <MenuLogo><CiLogout/></MenuLogo>
                </div>
                <div>
                  <HIDE>{t("Logout")}</HIDE>
                </div>
              </MenuItem>
            </ul>
          </MenuSection>
        </Col>
        {isChatVisible && (
          <Col span={22}>
            <ChatDashboard/>
          </Col>
        )}
        {isExploreVisible && (
          <Col span={22}>
            <ExploreDashboard/>
          </Col>
        )}
      </Row>
    </MenuContainer>
  );
};

export default withTranslation()(Menu);
