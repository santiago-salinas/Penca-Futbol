import "../../dominio/balance"
var CronJob = require('cron').CronJob;
var cleanupCron = (balance) => {
    new CronJob('0 0 1 * * *', function() {
    balance.monthlyCleanup();
    
}, null, true, 'America/Montevideo');
};
export default cleanupCron;