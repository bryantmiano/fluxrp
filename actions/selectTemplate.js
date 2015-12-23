import loadTemplate from './loadTemplate';

export default function selectTemplate(actionContext, payload, done) {
    actionContext.executeAction(loadTemplate, {id: payload.template.id}).then(function (payload) {
        done();
    });


}
