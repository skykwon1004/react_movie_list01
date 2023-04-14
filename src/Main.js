import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled from 'styled-components'

const MAIN = styled.section`
`
const INNER = styled.div`
    max-width: 1600px;
    width: 100%;
    padding: 100px 15px;
    margin: 0 auto;

    ul {
        display: grid;
        grid-template-columns: repeat(5,1fr);
        
        h2 {
            font-size: 17px;
            font-weight: 400;
            margin: 0 0 10px 0;
        }

        img {
            margin: 0 0 100px 0;
        }
    }
`
const Main = () => {
    //데이터 가져오기

    //필요한 movie list만들기위해 그릇에 담을 준비...
    const [movie, setMovie] = useState([]);

    //영화 데이터를 일단 부르자 부르는데 시간걸리니깐 비동기처리 async await 사용
    //axios 깔아주자 터미널에 npm i axios -> import 해주는거 잊지말자
    const movieData = async () => {
        const r = await axios.get('https://yts.mx/api/v2/list_movies.json');
        //setMovie(r);
        //r(json에 있는 데이터를 r에 담기 -> r을 setMovie로 지정 -> r에 뭐가들었는지 콘솔에 찍어보기 -> 들어있는 항목 보고 내가 필요한 자료로 가기 -> 최종적으로 필요한건 각각의 영화(id 가지고있는))
        // 첫번째 data는 axios 쓸 때 then 안써주는 대신에 .data를 적어줘야 해서 적는거 2번째 data는 r에 있는 정보라서 쓴거
        //console.log(r.data.data.movies)
        setMovie(r.data.data.movies)
    }

    //console에 찍어보니 movie list 잘들어갔음
    console.log(movie)

    //movieData 가져올때 한번만 실행하게
    useEffect(() => {
        movieData()
    }, [])


    return (
        <MAIN>
            <INNER>
                <ul>
                    {
                        movie.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <h2>{it.title}</h2>
                                    <img src={it.medium_cover_image}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </INNER>
        </MAIN>
    )
}

export default Main

// https://yts.mx/api/v2/list_movies.json