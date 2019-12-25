import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

const makeApolloClient = (url, token) => {
  const link = new HttpLink({
    url,
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const cache = new InMemoryCache()
  return new ApolloClient({
    link,
    cache
  })
}

export default makeApolloClient
