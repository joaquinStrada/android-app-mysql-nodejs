import { config } from 'dotenv'
config();

import app from './app'
import * as appConfig from './lib/config'
import { createConnection } from './lib/database'

const { port } = appConfig.default.express;

const main = async () => {
    await createConnection();
    app.listen(port, () => console.log('Server on port', port));
}

main();