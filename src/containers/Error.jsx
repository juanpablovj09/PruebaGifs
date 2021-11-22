/** @jsx jsx */
import React from 'react'
import SearchGif from "@components/SearchGif/SearchGif";
import { Helmet } from "react-helmet";
import { css, jsx } from '@emotion/react'

const notFound = ["UoeaPqYrimha6rdTFV", "jkZtSdwKOx05BOlapR", "rqoATGnsKBWqaM53Rl", "8L0Pky6C83SzkzU55a"]

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`

const imgStyle = css`
  width: 400px;
  height: 300px;
  object-fit: cover;
`

const PageNotFoundStyle = css({
  marginTop: '30px',
  color: '#f00',
  fontSize: '2.6rem',
  fontWeight: '700',
})

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <section css={sectionStyle}>
        <header>
          <SearchGif />
        </header>
        <div className='Page'>
          <img css={imgStyle} src={`https://media.giphy.com/media/${notFound[Math.floor(Math.random()* notFound.length)]}/giphy.gif`} alt='Page not found' />
          <p css={PageNotFoundStyle}>PAGE NOT FOUND</p>
        </div>
      </section>
    </>
  )
}

export default Error
