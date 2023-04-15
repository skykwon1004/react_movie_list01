import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const SEARCHRESULT = styled.section`
`

const INNER = styled.div`
    max-width: 1600px;
    width: 100%;
    padding: 100px 15px;
    margin: 0 auto;

    h3 {
        font-size: 25px;
        font-weight: 500;
        margin: 0 0 50px 0;
        text-align: center;
        background: #f9f9f9;
        padding: 20px 0;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(5,1fr);
        
        strong {
            font-size: 17px;
            font-weight: 400;
            display: block;
            margin: 0 0 10px 0;
        }

        img {
            margin: 0 0 100px 0;
        }
    }
`


const SearchResult = () => {
    const [searchMovie, setSearchMovie] = useState([]);

    //https://velog.io/@n-u-002/React.js-React-Router-Dom%EC%9D%98-%EC%9C%A0%EC%9A%A9%ED%95%9C-%EA%B8%B0%EB%8A%A5 
    //useSearchParams 설명 참고 (주소창에 있는 string을 가져올 수 있다)
    const [query, setQuery] = useSearchParams();

    //주소창에 있는 단어를 가져와서 query_term에 넣자
    //?query_term=love 인데 ?query_term= 생략하고 뒤에 단어만 가져오는듯
    const searchWord = query.get('query_term');
    //console.log(searchWord);

    const [total, setTotal] = useState(0);

    const searchMovieList = async () => {
        const r = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${searchWord}`);
        //console.log('작동이 안된다 -> useEffect를 사용해서 데이터 가져오게 만드니깐 실행된다.');
        setSearchMovie(r.data.data.movies);
        //console.log(r.data.data);

        setTotal(r.data.data.movie_count);
        console.log(r.data.data.movie_count)
    }


    //query가 바뀔 때 마다 다시 데이터 가져와서 실행해
    useEffect(() => {
        searchMovieList();
    }, [query])



    return (
        <SEARCHRESULT>
            <INNER>
                <h3>{total}개의 영화가 있습니다.</h3>
                <ul>
                    {
                        searchMovie.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <strong>{it.title}</strong>
                                    <img src={it.medium_cover_image} />
                                </li>
                            )
                        })
                    }
                </ul>
            </INNER>
        </SEARCHRESULT>
    )
}

export default SearchResult