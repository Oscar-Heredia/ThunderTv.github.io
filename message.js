/*message */
const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = ['5215639338472'];
    const message = 'Buenas tardes';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));
