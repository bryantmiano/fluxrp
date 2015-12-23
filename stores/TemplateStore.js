import BaseStore from 'fluxible/addons/BaseStore';

class TemplateStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.selectedTemplate = null;
        this.templates = [];
    }

    handleSelectTemplate(payload) {
        console.log(payload);
        this.selectedTemplate = payload.template;
        this.emitChange();
    }

    handleTemplateRead(payload){
        this.selectedTemplate = payload.template;
        this.emitChange();
    }

    handleToggleDropdown() {
        this.isShowingAll = !this.isShowingAll;
        this.emitChange();
    }

    handleTemplatesRead(payload){
        console.log(payload);
        this.templates = payload.templates;
        this.emitChange();
    }

    getTemplates() {
        return this.templates;
    }

    getSelectedTemplate() {
        return this.selectedTemplate;
    }

    getIsShowingAll() {
        return this.isShowingAll;
    }
}

TemplateStore.storeName = 'TemplateStore';
TemplateStore.handlers = {
    'SELECT_TEMPLATE': 'handleSelectTemplate',
    'TEMPLATES_READ': 'handleTemplatesRead',
    'TEMPLATE_READ': 'handleTemplateRead',
    'TOGGLE_DROPDOWN': 'handleToggleDropdown'
};

export default TemplateStore;
