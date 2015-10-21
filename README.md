# meaning-error-middleware
Express middleware to translate <a href="https://github.com/krolow/meaning-error/">meaning-errors</a> to HTTP protocol.

## Usage
```javascript
import express from 'express';
import errorMeaning from 'meaning-error-middleware';

const app = express();

app.use(errorMeaning)
```

## License

Licensed under <a href="http://krolow.mit-license.org/">The MIT License</a>
Redistributions of files must retain the above copyright notice.

## Author

Vinícius Krolow - krolow[at]gmail.com
