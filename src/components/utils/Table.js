import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logoEYC.svg";
import { ReactComponent as XSvg } from "../../assets/icons/x.svg";
import Check from "../../assets/images/check.png";
import Button from "./Button/Button";

const TableWrapper = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  padding: 5rem 0rem;
  @media (max-width: 760px) {
    max-width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  font-family: "Poppins-Medium";
  font-size: 1.6rem;
  position: relative;
`;

const TableRow = styled.tr`
  background-color: ${(props) => (!props.isOdd ? "#f7f7f8" : "#fff")};
`;

const HighlightColumn = styled.div`
  background-color: #fe5f5530;
  border: 2px solid #fe5f55;
  border-radius: 20px;
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 860%;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  font-family: "Poppins-Medium";
  font-size: 1.6rem;
  position: relative;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const MyTable = () => {
  const navigate = useNavigate();

  const data = [
    {
      firstCell: "Authentic Interactions",
      secondCell: <Img src={Check} />,
      thirdCell: <XSvg />,
      fourthCell: <XSvg />,
      fifthCell: <XSvg />,
    },
    {
      firstCell: "Guaranteed Results",
      secondCell: <Img src={Check} />,
      thirdCell: <XSvg />,
      fourthCell: <XSvg />,
      fifthCell: <XSvg />,
    },
    {
      firstCell: "Instant Impact",
      secondCell: <Img src={Check} />,
      thirdCell: <XSvg />,
      fourthCell: <XSvg />,
      fifthCell: <XSvg />,
    },
    {
      firstCell: "Simple & Easy",
      secondCell: <Img src={Check} />,
      thirdCell: <XSvg />,
      fourthCell: <XSvg />,
      fifthCell: <XSvg />,
    },
    {
      firstCell: "In-Person",
      secondCell: <Img src={Check} />,
      thirdCell: <XSvg />,
      fourthCell: <XSvg />,
      fifthCell: <Img src={Check} />,
    },
    {
      firstCell: "Online",
      secondCell: <Img src={Check} />,
      thirdCell: <Img src={Check} />,
      fourthCell: <Img src={Check} />,
      fifthCell: <XSvg />,
    },
    {
      firstCell: "Powerful & Scalable",
      secondCell: <Img src={Check} />,
      thirdCell: <Img src={Check} />,
      fourthCell: <Img src={Check} />,
      fifthCell: <Img src={Check} />,
    },
    {
      firstCell: "",
      secondCell: (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            containerStyle={{
              width: "80%",
              alignSelf: "center",
            }}
            title={"Get Started"}
            onClick={() => navigate("/request-form")}
          />
        </div>
      ),
      thirdCell: "",
      fourthCell: " ",
      fifthCell: "",
    },
  ];

  const rows = data.map((item, index) => (
    <TableRow key={index} isOdd={index % 2 !== 0}>
      <TableCell style={{ textAlign: "left" }}>{item.firstCell}</TableCell>
      <TableCell highlight>{item.secondCell}</TableCell>
      <TableCell>{item.thirdCell}</TableCell>
      <TableCell>{item.fourthCell}</TableCell>
      <TableCell>{item.fifthCell}</TableCell>
    </TableRow>
  ));

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <TableHeader></TableHeader>
            <TableHeader>
              <HighlightColumn />
              <Logo />
            </TableHeader>
            <TableHeader>Add Words</TableHeader>
            <TableHeader>Digital Ads</TableHeader>
            <TableHeader>Traditional Ads</TableHeader>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </TableWrapper>
  );
};

export default MyTable;
