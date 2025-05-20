const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/chat', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({
            error: 'Message is required'
        });
    }

    setTimeout(() => {
        res.jsonp({
            reply: `You said: ${message}`
        });
    }, 500);
});

// Start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
    console.log(`Chat endpoint: http://localhost:${PORT}/chat`);
});