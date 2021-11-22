import React from 'react'
import Error from '../containers/Error'
import { css, jsx } from '@emotion/react'

const ErrorPageStyle = css`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorPage = () => {
  return (
    <div css={ErrorPageStyle}>
      <Error />
    </div>
  )
}

export default ErrorPage
