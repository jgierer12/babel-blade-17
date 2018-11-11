# Example repo for [sw-yx/babel-blade#17](https://github.com/sw-yx/babel-blade/issues/17)

## `framework.js`

This represents an imaginative third-party framework. We don't have control over this framework's code.

The framework exports an `Image` component, which renders an image with some props.

To ease the usage of this component with the framework's graphql API, it also exports a `query` function. This function is a wrapper for the user's query that adds a fragment for all the data the image needs.

A real example for this would be [Gatsby](https://gatsbyjs.org/)'s [`transformer-sharp`](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/) plugin. Similarly to our imaginative framework, it adds a fragment to all queries. This can be used to query for the [`image`](https://www.gatsbyjs.org/packages/gatsby-image/) plugin's props.

## `index.js`

This represents our own code, which we want to use `babel-blade` on. It imports the framework's `query` function, so it can use the `FrameworkImage` fragment in its query.

However, with `babel-blade`, there is currently no easy way to use this fragment.
