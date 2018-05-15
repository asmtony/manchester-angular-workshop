const express = require('express');
const path = require('path');
const app = express();

const publicFolder = path.join(__dirname, '');  // __dirname  directory name of the current module

const options = {
    etag: true,
    maxAge: '1d',
    lastModified: true,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use('/', express.static(publicFolder, options));

app.listen(8080, () => {
    console.log('http://localhost:8080/index.html');
});

