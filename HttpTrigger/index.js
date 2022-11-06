
module.exports = async function (context, req) {
    
    const body = req.body;
    context.uuid = req.query.uuid;
    context.game = req.query.game
    context.user = req.query.user

    if ('POST' != req.method) {
        context.res = {status: 405, body: `Method '${req.method}' not allowed!` };
    } else if(context.uuid && context.game && context.user && body) {
        context.bindings.outBlob = req.body;
        context.res = { status: 201 };
    } else {
        context.res = {status: 400, body: 'Bad Request!' };
    }
    
}