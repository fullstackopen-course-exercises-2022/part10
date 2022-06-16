import { gql } from '@apollo/client'

export const GET_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          name
          createdAt
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          url
          ownerAvatarUrl
          language
          description
        }
      }
    }
  }  
`

export const ME = gql`
  query {
    me {
      username
      id
    }
  }
`