import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
import TextInput from './Textinput';
import  Button  from './Button';


const Form = ({
  post,
  setPost, 
  setcreatePostLoading, 
  setgenerateImageLoading, 
  createPostLoading, 
  generateImageLoading,
}) => {
const generateimagefun=()=>{
  setgenerateImageLoading(true);
}
const createpostfucn=()=>{
  setcreatePostLoading(true);
}
  return (
    <FormContainer>
      <Top>
        <Title>Generate Image with Prompt</Title>
        <Desc>Write a prompt describing your image.</Desc>
      </Top>
      <Body>
      <TextInput
          label="Author"
          placeholder="Enter your name"
          name="name"
          value={post.author}
          handelChange={(e)=>setPost({...post,author:e.target.value})}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image"
          name="prompt"
          textArea
          rows="8"
          value={post.promt}
          handelChange={(e)=>setPost({...post,promt:e.target.value})}
          
        />
       
      </Body>
      <Action>
        <Button
          text="Generate Image"
          leftIcon={<AutoAwesome />}
          flex
          isLoading={generateImageLoading}
          isDisabled={post.promt===""}
          onClick={()=>generateimagefun()}
        />
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={post.name===""||post.promt===""||post.photo===""}
          onClick={()=>createpostfucn()}
        />
      </Action>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center; /* Corrected typo */
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Action = styled.div`
  display: flex;
  gap: 8px;
`;

export default Form;
