import gql from 'graphql-tag'

export const FETCH_LOG = gql`
  query logs($startDate: date!, $endDate: date!) {
    logs(where: { created_at: { _gte: $startDate, _lte: $endDate } }) {
      id
      text
      created_at
    }
  }
`

export const INSERT_LOG = gql`
  mutation insert($text: String!, $user_id: Int!) {
    insert_logs(objects: { text: $text, user_id: $user_id }) {
      returning {
        created_at
        id
        text
        user_id
      }
    }
  }
`
