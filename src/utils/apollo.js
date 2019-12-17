import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

const makeApolloClient = token => {
  const link = new HttpLink({
    uri: `https://yazara.herokuapp.com/v1/graphql`,
    headers: {
      'x-hasura-admin-secret': token
    }
  })

  const cache = new InMemoryCache()
  return new ApolloClient({
    link,
    cache
  })
}

export default makeApolloClient
