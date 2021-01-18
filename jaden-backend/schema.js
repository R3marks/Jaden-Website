const { gql } = require('apollo-server') 

module.exports = gql`
    type Query {
        tour(id: ID!): Tour
        tours: [Tour]
        searchTour(search: String!): [Tour]
    }

    type Tour {
        id: ID!,
        date: String!,
        city: String!,
        link: String!,
        arena: String!,
    }
`