import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme';
import Home from './pages/Home';
import Createpost from './pages/Createpost';
import Navbar from './components/Navbar';




const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/post" exact element={<Createpost />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;