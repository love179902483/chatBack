import combineRouters from 'koa-combine-routers';

import { router as chat } from './chat.route';


const AllRouters = combineRouters([
    chat
])

export { AllRouters }