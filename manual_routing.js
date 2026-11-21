import http from 'http';
const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.url === '/students') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>student created successfully</h1>');
        res.end();
    } else if(req.method === 'GET' && req.url === '/students') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>student list</h1>');
        res.end();
    }else if(req.method === 'GET' && req.url === '/students/1') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>student details</h1>');
        res.end();
    }
    else if(req.method === 'PUT' && req.url === '/students/1') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>student updated successfully</h1>');
        res.end();
    }else if(req.method === 'DELETE' && req.url === '/students/1') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>student deleted successfully</h1>');
        res.end();
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});
server.listen(6000, () => {
    console.log('Server is running at http://localhost:6000');
});

