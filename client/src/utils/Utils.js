// This is utilities file that houses mutliple used funcitons troughtout the project

export default {
    // * (UTILS.logit)Replaces the common console.log funciton with a system data and the message from developer must use
    logit: function (msg) {
        return console.log (new Date() + ': ' + msg);
    }
}