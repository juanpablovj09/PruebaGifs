import React from 'react'
import '../styles/app.css'
import { Route, Switch } from 'wouter'
import { Home } from '../pages/Home'
import { SearchResult } from '../pages/SearchResult'
import { Detail } from '../pages/Detail'
import Layout from '../containers/Layout'
import { GifsContextProvider } from '../context/AppContext'
import Error from '../pages/Error'
import LoginRegister from '../pages/LoginRegister'
import Favs from '../pages/Favs'
import {AuthProvider} from '../context/AuthContext'
import { FavsProvider } from '../context/FavContext'

const App = () => {
    return (
      <AuthProvider>
        <FavsProvider>
          <GifsContextProvider>
            <Layout>
              <Switch>
                <Route path='/' component={Home}/>
                <Route path='/search/:topic/:rating?/:language?' component={SearchResult} />
                <Route path='/detail/:id' component={Detail}/>
                <Route path='/login' component={LoginRegister} />
                <Route path='/favs' component={Favs} />
                <Route path='/:rest*' component={Error} />
              </Switch>
            </Layout>
          </GifsContextProvider>
        </FavsProvider>
      </AuthProvider>
    )
}

export default App
