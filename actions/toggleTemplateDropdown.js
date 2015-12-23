export default function toggleTemplateDropdown(actionContext, payload, done){
    actionContext.dispatch("TOGGLE_DROPDOWN");
    done();
}
