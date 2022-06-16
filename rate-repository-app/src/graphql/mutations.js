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