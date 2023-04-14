import React from 'react'
import styled from 'styled-components'

const HEADER = styled.header `
line-height: 100px;
text-align: center;
font-size: 21px;
font-weight: 500;
border-bottom: 1px solid #ddd;
`
const Header = () => {
  return (
    <HEADER>Movie List</HEADER>
  )
}

export default Header