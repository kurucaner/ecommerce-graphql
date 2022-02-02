const { ApolloServer, gql } = require("apollo-server");

// String, Int, Float, Boolean

const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello world!";
    },
    numberOfAnimals: () => {
      return 100;
    },
    price: () => {
      return 12.99;
    },
    isCool: () => {
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("🚀 Server ready at" + url);
});
