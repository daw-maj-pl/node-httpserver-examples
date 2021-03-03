const http = require('http');
const port = 3001;
// const { readFileSync } = require('fs');
// const somePage = readFileSync('./somepage.html');

const handler = (request, response) => {
  console.log('New user!');
  response.end('Hello node.js!');
};
const server = http.createServer(handler);

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     // console.log('New user!');
//     res.write('Hello nodejs');
//     res.end();
//     // res.end('Hello node.js');
//   }

//   if (req.url === '/courses') {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Welcome to our home page');
//   } else if (req.url === '/about') {
//     res.end('Here is our about page');
//   } else
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can not find the page you are looking for</p>
//     <a href='/'>back home page</a>
//   `);
// });

// server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     // res.writeHead(200, { 'content-type': 'text/plain' });
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write('<h1>Home Page</h1>');
//     res.end();
//     // res.end('Hello node.js');
//     // res.end('<h1>Home Page</h1>');
//   } else if (req.url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write('<h1>About Page</h1>');
//     // res.write(somePage);
//     res.end();
//   } else {
//     res.writeHead(404, { 'content-type': 'text/html' });
//     res.write('<h1>Page not found</h1>');
//     res.end();
//   }
// });

// server.listen(3000)
// const port = 3000;
server.listen(port, err => {
  if (err) {
    return console.log('Something went wrong!');
    // return console.log(`Brr, coś poszło nie tak: ${err}`);
  }
  console.log('Server is runnig...');
  // console.log('Serwer działa na porcie', port);
});
