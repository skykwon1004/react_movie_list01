import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SEAECH = styled.div`
    button{
        padding: 5px 10px;
        background: #f9f9f9;
        margin: 0 0 0 10px;
    }
`
const Search = () => {
    //검색창 만들기

    //라우터 path에 /search 내가 검색할 영화 단어 주소로 만들자
    const navigate = useNavigate();

    const [input, setInput] = useState('');

    const searchHandler = e => {
        setInput(e.target.value);
        //console.log(input)
    }

    //submitMovie 이벤트막기
    const submitMovie = e => {
        e.preventDefault();
        navigate(`/search?query_term=${input}`)
    }

    return (
        <SEAECH>
            <form onSubmit={submitMovie}>
                <input type="text" onChange={searchHandler}></input>
                <button>search</button>
            </form>
        </SEAECH>
    )
}

export default Search