import winston from 'winston'

    const logConfig = {
        level: 'info',
        format: winston.format.json(),
        //format: winston.format.simple(),
        transports: [
            new winston.transports.Console({ 
                level: 'info' 
            }),
            new winston.transports.File({
                            filename: './logs/warnings.log',
                            level: 'warn',
            }),
            new winston.transports.File({
                            filename: './logs/errors.log',
                            level: 'error',
            }),
        ],
    }

    
export const logger = winston.createLogger(logConfig);



// Siempre se muestra del nivel indicado hacia abajo . x e.g  SI se coloca level info (2 )
// se muestra nivel 0 , 1 y 2.
// { 
//     error: 0, 
//     warn: 1, 
//     info: 2, 
//     http: 3,
//     verbose: 4, 
//     debug: 5, 
//     silly: 6 
// // }


// loggers.mjson.info('Information message');
// loggers.mjson.error('Error message');
// loggers.mjson.debug('Some message');

// loggers.simple.error('Error message');
// loggers.simple.info('Information message');
// loggers.simple.warn('Warning message');
// loggers.simple.debug('Some message');