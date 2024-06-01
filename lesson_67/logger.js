export default logger;

export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERROR = 'error';

function logger(log, type = "log") {
    console[type](log);
}


// function price(log) {
//     console.log(log);
// }