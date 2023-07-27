const url = require('url');

function resolveAbsoluteURL(baseURL, relativePath) {
  const absoluteURL = url.resolve(baseURL, relativePath);
  console.log('Absolute URL:', absoluteURL);
}

// Example usage:
const baseURL = 'https://mail.google.com/mail/u/0/?ogbl#inbox';
const relativePath = '/page/subpage';

resolveAbsoluteURL(baseURL, relativePath);
