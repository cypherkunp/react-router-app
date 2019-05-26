import React from 'react';
import queryString from 'query-string';

const Posts = props => {
  const { search } = props.location;
  const query = queryString.parse(search);

  return (
    <div>
      <h1>Posts</h1>
      Year: {query.year}, Month: {query.month}:
    </div>
  );
};

export default Posts;
