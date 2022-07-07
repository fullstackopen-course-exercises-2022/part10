import { gql } from '@apollo/client'

export const GET_REPOS = gql`
  query Repositories($searchKeyword: String) {
    repositories(searchKeyword: $searchKeyword) {
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

export const GET_REPO = gql`
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      id
      name
      fullName
      reviewCount
      url
      openIssuesCount
      forksCount
      watchersCount
      stargazersCount
      ratingAverage
      description
      language
      ownerAvatarUrl
      reviews(first: $first, after: $after) {
        edges {
          node {
            user {
              id
              username
            }
            repository {
              name
            }
            text
            rating
            createdAt
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`

export const ME = gql`
  query CurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      createdAt
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            userId
            user {
              username
            }
            repositoryId
            rating
            createdAt
            text
          }
          cursor
        }
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`