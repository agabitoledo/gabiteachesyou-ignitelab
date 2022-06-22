import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nmg0c90fow01xo09y1bgha/master',
    cache: new InMemoryCache(),
});