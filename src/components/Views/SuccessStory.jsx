import React from 'react';
import { DefaultView } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
// make sure to delete all directory path before @


import PropTypes from 'prop-types';
import { Helmet } from '@plone/volto/helpers';
import { Container, Image } from 'semantic-ui-react';

const SuccessStoryView = props => {
  const { content } = props;
  return (
    <>
      <img
        className="lead image"
        alt="sucess story"
        src="https://assets3.thrillist.com/v1/image/2820706/1584x1056/crop;jpeg_quality=60;progressive.jpg"
      />
      <DefaultView {...props} />
      <Container className="view-wrapper">
        <Helmet title={content.title} />
        {content.title && (
          <h1 className="documentFirstHeading">
            {content.title}
            {content.subtitle && ` - ${content.subtitle}`}
          </h1>
        )}
        {content.description && (
          <p className="documentDescription">{content.description}</p>
        )}
        {content.image && (
          <Image
            className="documentImage"
            alt={content.title}
            title={content.title}
            src={
              content.image['content-type'] === 'image/svg+xml'
                ? flattenToAppURL(content.image.download)
                : flattenToAppURL(content.image.scales.mini.download)
            }
            floated="right"
          />
        )}
        {content.text && (
          <div dangerouslySetInnerHTML={{ __html: content.text.data }} />
        )}
      </Container>
    </>
  );
};

SuccessStoryView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default SuccessStoryView;
