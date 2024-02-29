import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { relayStylePagination } from "@apollo/client/utilities";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("cv-maker")
    ? `JWT ${localStorage.getItem("cv-maker")}`
    : "";

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    // Graphql Error hapenning
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, extensions, locations, path }) => {
        if (
          message === "Signature has expired" ||
          message === "You are not authorized user."
        ) {
          localStorage.removeItem("cv-maker");
          localStorage.removeItem("refresh");
          window.location.href = "/admin/login";
        }
      });
    }

    // If network error happening
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);

export const BASE_URL = "https://dynamiccv.pythonanywhere.com/";

const link = from([
  errorLink,
  new createUploadLink({ uri: `${BASE_URL}graphql/` }),
]);

const options = {
  typePolicies: {
    Query: {
      fields: {
        fleetAllVehicles: relayStylePagination(),
        fleetAllVehicleTypes: relayStylePagination(),
        fleetAllVehicleMakes: relayStylePagination(),
        fleetAllVehicleModels: relayStylePagination(),
        fleetAllTrafficFines: relayStylePagination(),
      },
    },
  },
};

export const client = new ApolloClient({
  cache: new InMemoryCache(options),
  link: authLink.concat(link),
});
