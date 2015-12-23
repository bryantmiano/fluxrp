import BaseStore from 'fluxible/addons/BaseStore';

class TemplateStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.selectedTemplate = null;
    }

    handleTemplateSelected(payload) {
        this.selectedTemplate = payload.template;
        this.emitChange();
    }

    getSelectedTemplate() {
        return this.selectedTemplate;
    }


}

TemplateStore.storeName = 'TemplateStore';
TemplateStore.handlers = {
    'TEMPLATE_SELECTED': 'handleTemplateSelected'
};

export default TemplateStore;
