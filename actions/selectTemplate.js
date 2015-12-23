export default function selectTemplate(actionContext, payload, done) {
    actionContext.dispatch("SELECT_TEMPLATE", {
        template: payload.template
    });


    done();
}
