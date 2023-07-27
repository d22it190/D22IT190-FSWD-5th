const url = require('url');
const querystring = require('querystring');

function extractQueryParams(inputURL) {
  const parsedURL = url.parse(inputURL);
  const queryParams = querystring.parse(parsedURL.query);
  console.log('Extracted Key-Value Pairs:');
  console.log(queryParams);
}

// Example usage:
const inputURL = 'https://www.example.com/page?name=anushka&age=19&gender=female';

extractQueryParams(inputURL);
