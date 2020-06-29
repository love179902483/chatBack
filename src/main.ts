import bodyparser from 'koa-bodyparser';
const http = require('http');
import Koa from 'koa';
import cors from "@koa/cors";
import { AllRouters } from './router/index.route';

import { startWS } from './ws';

const app = new Koa();
app.use(cors());
app.use(AllRouters());


startWS();


app.listen(3000);
console.log('listen on port 3000')