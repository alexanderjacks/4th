import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Twitter from 'components/twitter';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h3" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      {/* needs refactoring into Gallery, w/ json for data */}
      <Twitter name="SenJohnKennedy" screenName="SenJohnKennedy" />
      <Twitter name="Shelby" screenName="SenShelby" />
      <Twitter name="SenRonJohnson" screenName="SenRonJohnson" />
      <Twitter name="SteveDaines" screenName="SteveDaines" />
      <Twitter name="SenJohnHoeven" screenName="SenJohnHoeven" />
      <Twitter name="JerryMoran" screenName="JerryMoran" />
      <Twitter name="SenJohnThune" screenName="SenJohnThune" />
      <Twitter name="RepKayGranger" screenName="RepKayGranger" />

    </Box>
    <div style={{ height: '50vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
