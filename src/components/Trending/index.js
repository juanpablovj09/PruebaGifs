import React, {Suspense} from 'react'
import useNearScreen from '../../hooks/useNearScreen'
// import Trending from './Trending';
import Loading from '../Loading'

const Trending = React.lazy(
  () => import('./Trending')
)

const index = ({close}) => {
  const {show, elementRef} = useNearScreen();
  return (
    <div ref={elementRef}>
      <Suspense fallback={null}>
        {show ? <Trending close={close}/> : <Loading />}
      </Suspense>
    </div>
  )
}

export default index

