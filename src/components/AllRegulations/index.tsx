import { lazy, useState, useEffect } from "react";
import { withTranslation } from "react-i18next";

import {CustomDiv, RegDiv, Title, Country, Summary, PaginationDiv,
  SearchBarDiv
  } from "./styles";

import { get_regulations, get_regulations_country, get_countries } from '../../api';

import { Row, Col } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";



interface Props {
  t: any;
}

const AllRegulations = ({ t }: Props) => {

  const [regulations, setRegulations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100); // Keep track of total pages

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [filteredRegulations, setFilteredRegulations] = useState<any[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  

  const fetchRegulations = async () => {
    try {
      const response = await get_regulations(currentPage, 9);
      console.log(response.data);
      setRegulations(response.data);
    } catch (error) {
    }
  };

  const fetchRegulationsCountry = async () => {
    try {
      const response = await get_regulations_country(selectedCountry, currentPage, 9);
      setRegulations(response.data);
    } catch (error) {
      console.error("Error fetching regulations:", error);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await get_countries();
        console.log(response.data);
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    // Fetch regulations when currentPage or selectedCountry change
    if (selectedCountry === "All") {
      fetchRegulations(); // Fetch all regulations based on the updated page number
    } else {
      fetchRegulationsCountry(); // Fetch filtered regulations based on the selected country
    }
  }, [currentPage, selectedCountry]); // Trigger fetch when either currentPage or selectedCountry changes
  
  
  useEffect(() => {
    const applyFilters = async () => {
      if (selectedCountry !== "All") {
        await fetchRegulationsCountry(); // Fetch filtered data for the selected country
      }
  
      const filtered = regulations.filter((reg: any) => {
        const matchesSearch = reg.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCountry = selectedCountry === "All" || reg.country === selectedCountry;
        return matchesSearch && matchesCountry;
      });
  
      setFilteredRegulations(filtered);
    };
  
    applyFilters();
  }, [searchQuery, selectedCountry, regulations, currentPage]);
  

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Update the current page
      console.log(`Page changed to: ${page}`);
    } else {
      console.log('Page out of bounds');
    }
  };

  const setSelectCountry = (country: string) => {
    setSelectedCountry(country);
    setCurrentPage(1);
    fetchRegulationsCountry();
  }

return (
    <>
      <SearchBarDiv>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "5px", marginRight: "10px", width: "300px" }}
        />
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{ padding: "5px", marginRight: "10px" }}
        >
          <option value="All">All Countries</option>
          {countries.map((country) => (
            <option key={country} value={country} onClick={() => setSelectCountry(country)}>
              {country}
            </option>
          ))}
        </select>
      </SearchBarDiv>

      <CustomDiv>
        {filteredRegulations.map((regulation: any) => (
          <RegDiv key={regulation.id}>
            <Row>
              <Col span={16}>
                <Country>{regulation.country}</Country>
              </Col>
              <Col span={8}>
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
    </>
  );
};

export default withTranslation()(AllRegulations);
