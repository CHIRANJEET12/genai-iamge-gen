import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Searchbar from '../components/Searchbar';
import ImageCrad from '../components/ImageCrad';

const Container = styled.div`
    padding: 30px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;

const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
    @media (max-width: 768px) {
    font-size:22px;
  }
`;
const Span = styled.span`
  font-size: 34px;
  font-weight: bold;
  color:#0075FF;
      @media (max-width: 768px) {
    font-size:22px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


const Home = () => {
  const item = {
    photo:"/public/image.png",
    Author:"Chiranjeet Dwivedy",
    prompt:"pink glob",
  }
  return (
    <Container>
        <HeadLine>
        Explore popular posts in the Community!
        <Span>⦾ Generated with AI ⦾</Span>
        </HeadLine>
        <Searchbar/>
        <Wrapper>
            <CardWrapper>

            <ImageCrad item={item}/>
            <ImageCrad item={item}/>
            <ImageCrad item={item}/>
            <ImageCrad item={item}/>
            <ImageCrad item={item}/>
            <ImageCrad item={item}/>


            </CardWrapper>
        </Wrapper>
    </Container>
  )
}
export default Home