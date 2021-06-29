import express from 'express';

import morgan from './utils/morganMiddleware';
import logger from './utils/logger';

const app = express();
app.use(morgan);

const PORT = 3000;
app.listen(PORT, () => logger.info(`Server running on port:${PORT}...`));