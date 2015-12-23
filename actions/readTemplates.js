import templateProxy from '../proxies/TemplateProxy';

export default function readTemplates(actionContext, payload, done) {
    return templateProxy.getAll(payload).then(function(templates){
        actionContext.dispatch('TEMPLATES_READ', templates);
        done();
    });

}
