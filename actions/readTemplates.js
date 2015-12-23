import templateProxy from '../proxies/templates';

export default function readTemplates(actionContext, payload, done) {
    console.log(templateProxy());

    return templateProxy().getAll(payload).then(function(templates){
        actionContext.dispatch('TEMPLATES_READ', templates);
        done();
    });

}
