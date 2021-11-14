import React, {useContext} from 'react'
import GifDetail from '@components/GifDetail'
import useGlobalGifs from '../hooks/useGlobalGifs'
import Context from '../context/AppContext'
import useGifs from '../hooks/useGifs';
import '@styles/pages/Detail.scss';
import useSingleGifs from '../hooks/useSingleGifs'
import Loading from '@components/Loading'
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';

const Detail = ({params}) => {
  // const gifs = useGlobalGifs();
  // const {gifs} = useContext(Context)
  // const {gifs} = useGifs();
  const {id} = params
  const {gif, loading, error} = useSingleGifs({id});

  const handleClick = () => {
    history.back()
  }
  
  if(error) return <Redirect to='/404' />

  return (
    <div className="Detail">
      {
      loading ?
      <Loading />
        :
        <>
          <Helmet>
            <title>Gif Detail</title>
            <meta name='description' content='Gif detail' />
          </Helmet>
          <GifDetail {...gif} />
          <p onClick={handleClick}>Back</p>
        </>
      }
    </div>
  )
}

export { Detail }
