import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

const makeApolloClient = token => {
  const httpLink = new HttpLink({
    uri: `https://yazara.herokuapp.com/v1/graphql`,
    headers: {
      'x-hasura-admin-secret': token
    }
  })

  const wsLink = new WebSocketLink({
    uri: `ws://yazara.herokuapp.com/v1/graphql`,
    options: {
      reconnect: true
    }
  })

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link,
    cache
  })

  return client
}

export default makeApolloClient
