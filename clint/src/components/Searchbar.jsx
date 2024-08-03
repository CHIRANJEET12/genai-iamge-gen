import React from 'react'
import { SearchOutlined } from '@mui/icons-material';
import styled, { ThemeProvider } from 'styled-components';

const SearchbarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary + 90};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Searchbar = () => {
  return (
    <SearchbarContainer>
        <SearchOutlined/>
        <input type="text" placeholder='Search with prompt' style={{
            border:"none",
            outline:"none",
            width:"100%",
            color:"inherit",
            background:"transparent",
        }} />

    </SearchbarContainer>
  )
}

export default Searchbar