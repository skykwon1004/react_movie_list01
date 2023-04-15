import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from './Search'

const HEADER = styled.header`
line-height: 100px;
text-align: center;
font-size: 21px;
font-weight: 500;
border-bottom: 1px solid #ddd;
`
const Header = () => {
  return (
    <HEADER>
      <h1>
        <Link to='/'>Movie List</Link>
      </h1>
      <Search />
    </HEADER>
  )
}

export default Header