//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { getTypes } = require('./src/controlers/getTypes.js');
const { conn } = require('./src/db.js');
const PORT = 3001

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PGPORT || PORT, async () => {
    await getTypes()
    console.log(`%s listening at ${process.env.PGPORT || PORT} && ${process.env.DATABASE_URL}`); // eslint-disable-line no-console
  });
});
