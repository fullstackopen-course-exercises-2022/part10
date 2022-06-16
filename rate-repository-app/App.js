import React from 'react'
import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import { View } from 'react-native'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/context/AuthStorageContext'


const App = () => {
  const authStorage = new AuthStorage()
  const apolloClient = createApolloClient(authStorage)
  return (
    <View>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </View>
  )
}

export default App
