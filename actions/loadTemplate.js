import templateProxy from '../proxies/templates';

export default function loadTemplate(actionContext, payload, done) {
    return templateProxy.get(payload.id).then(function(payload){
        console.log(payload);
        actionContext.dispatch('TEMPLATE_READ', payload);
        done();
    });
}
