export default function toggleTemplateDropdown(actionContext, payload, done) {
    actionContext.dispatch("SELECT_TEMPLATE", {
        template: payload.template
    });
    done();
}
