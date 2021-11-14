import React from 'react'
import '../styles/app.css'
import { Route, Switch } from 'wouter'
import { Home } from '../pages/Home'
import { SearchResult } from '../pages/SearchResult'
import { Detail } from '../pages/Detail'
import Layout from '../containers/Layout'
import { GifsContextProvider } from '../context/AppContext'
import Error from '../pages/Error'

const App = () => {
    return (
        <GifsContextProvider>
          <Layout>
            <Switch>
              <Route path='/' component={Home}/>
              <Route path='/search/:topic' component={SearchResult} />
              <Route path='/detail/:id' component={Detail}/>
              <Route path='/:rest*' component={Error} />
            </Switch>
          </Layout>
        </GifsContextProvider>
    )
}

export default App
