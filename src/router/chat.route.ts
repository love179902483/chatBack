import Router from 'koa-router';
const router = new Router({prefix: '/chat'})



router.get('/test', async(ctx, next)=>{
    ctx.body = 'chat get success!!!'
})


export { router }