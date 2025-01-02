import { lazy, useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Title, Date, Country, Entity, Summary} from "./styles";
import { get_regulation } from '../../api';
import { Row, Col } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

interface Props {
  t: any;
  id?: string;
}

interface Regulation {
  id: string; // Adjust to match the properties of your regulation data
  title: string;
  country: string;
  timestamp: string;
  link: string;
  summary: string;
}

const SingleRegulation = ({ t, id }: Props) => {
  const [regulation, setRegulation] = useState<Regulation | null>(null);


  const fetchRegulation = async (id: string) => {
    try {
      const response = await get_regulation(id);
      console.log(response.data);
      setRegulation(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRegulation(id);
    } 
  }, []);


  return (
    <>
      <Row>
        <Title href={regulation?.link} target="_blank" rel="noopener noreferrer">{regulation?.title}</Title>
      </Row>
      <Row>
        <Country>{regulation?.country}</Country>
      </Row>
      <Row>
        <Date>{regulation?.timestamp}</Date>
      </Row>
      <Row>
        <Summary>{regulation?.summary}</Summary>
      </Row>
    </>
  );
};

export default withTranslation()(SingleRegulation);
