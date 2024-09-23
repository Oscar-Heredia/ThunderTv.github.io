/*message */
const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = ['523122410465'];
    const message = 'Buenas tetas';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));
