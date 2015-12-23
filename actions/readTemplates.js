import templateProxy from '../proxies/templates';

export default function readTemplates(actionContext, payload, done) {
    return templateProxy.getAll(payload).then(function(payload){
        console.log(payload);
        actionContext.dispatch('TEMPLATES_READ', payload);
        done();
    });
}
