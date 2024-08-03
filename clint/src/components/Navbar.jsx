import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import Button from "./Button";

const Container = styled.div`
  flex: 1;
  background: #1E1F2A;
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  justify-content: space-around;
  gap: 200px;
  align-items: center;
  box-shadow: 0 0 10px #854CE6;
      padding: 5px 5px;
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <Container>
      GenAI
      {
        path[1] === "post" ? (
          <>
          <Button
            text="Explore post"
            leftIcon={
              <ExploreRounded
                style={{
                  fontSize: "18px"
                }}
              />
            }
            onClick={() => navigate("/")}
            type="secondary"
          /></>
        ) : (
          <Button
            text="Create new post"
            leftIcon={
              <AddRounded
                style={{
                  fontSize: "18px"
                }}
              />
            }
            onClick={() => navigate("/post")}
          />
        )
      }
    </Container>
  );
};

export default Navbar;
