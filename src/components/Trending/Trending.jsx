import React, { useState, useEffect } from 'react'
import { getTrends } from '../../services/getTrends'
import TrendingList from './TrendingList'

const Trending = ({close}) => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrends().then(trend => {
      setTrends(trend.data)
    }
    )
  }, [])

  return <TrendingList trends={trends} close={close}/>
}

export default Trending
