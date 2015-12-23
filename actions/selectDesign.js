export default function selectDesign(actionContext, payload, done) {
    actionContext.dispatch("SELECT_DESIGN", {
        template: payload.design
    });
    done();
}
