import { gql } from '@apollo/client'

export const AUTHENTICATE_USER = gql`
  mutation authentication($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken  
    }
  } 
`

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
      username  
    }
  } 
`

export const CREATE_NEW_REVIEW = gql`
  mutation createReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
    createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text }) {
      id
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation deleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`