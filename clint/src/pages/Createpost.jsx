import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Form from '../components/Form';
import GeneratedImageCard from '../components/Generatedimage';

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8%;
  flex: 1;
  max-width: 1200px;
  height: fit-content;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const Createpost = () => {
  const [generateImageLoading ,setgenerateImageLoading ]= useState(false);
  const [createPostLoading ,setcreatePostLoading ]= useState(false);

  const [post,setPost] = useState({
    author:"",
    prompt:"",
    photo:"",
  })
  return (
    <Container>
      <Wrapper>
        <Form 
        post={post}
        setPost={setPost} 
        setcreatePostLoading={setcreatePostLoading} 
        setgenerateImageLoading={setgenerateImageLoading} 
        createPostLoading={createPostLoading} 
        generateImageLoading={generateImageLoading}
        />
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading}/>
      </Wrapper>
    </Container>
  )
}
export default Createpost