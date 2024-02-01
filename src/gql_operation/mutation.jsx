import { gql } from "@apollo/client";

export const SIGN_UP_REQUEST = gql`
  mutation CreateRequest($input: CreateRequestInput) {
    createRequest(input: $input) {
      ok
      requestUserEmail {
        createdAt
        email
        id
      }
    }
  }
`;

export const SIGN_IN_USER = gql`
  mutation UserSignIn($password: String, $username: String) {
    tokenAuth(password: $password, username: $username) {
      token
    }
  }
`;
