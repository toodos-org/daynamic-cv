import { gql } from "@apollo/client";

export const GET_USER_CV_BY_ID = gql`
  query UserCvData {
    cv {
      edges {
        node {
          about
          addresUrl
          bio
          address
          id
          image
          name
          website
          experienceSet {
            edges {
              node {
                company
                companyWebsite
                description
                endDate
                startDate
                position
                jobType
                id
                title
              }
            }
          }
          educationSet {
            edges {
              node {
                degree
                description
                endDate
                id
                school
                startDate
              }
            }
          }
          skillSet {
            edges {
              node {
                id
                level
                name
              }
            }
          }
          socialSet {
            edges {
              node {
                email
                github
                id
                linkedin
                phone
                twitter
              }
            }
          }
          projectSet {
            edges {
              node {
                description
                id
                liveUrl
                name
              }
            }
          }
          user {
            email
            firstName
            lastName
          }
        }
      }
    }
  }
`;
