import { createLogger, format, transports } from 'winston';

const { combine, timestamp, prettyPrint, colorize } = format;

const logger = createLogger({
  format: combine(timestamp(), prettyPrint(), colorize()),
  transports: [new transports.Console()],
  exitOnError: false,
});

logger.stream = {
  write: (message, encoding) => {
    logger.error(message, encoding);
  },
};

//module.exports = logger;
export default logger;
