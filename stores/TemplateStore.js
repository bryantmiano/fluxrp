import BaseStore from 'fluxible/addons/BaseStore';

class TemplateStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.selectedTemplate = null;
        this.templates = [];
        this.isShowingAll = false;
    }

    handleTemplateSelected(payload) {
        this.selectedTemplate = payload.template;
        this.emitChange();
    }

    handleToggleDropdown() {
        this.isShowingAll = !this.isShowingAll;
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
    'TEMPLATE_SELECTED': 'handleTemplateSelected',
    'TOGGLE_DROPDOWN': 'handleToggleDropdown'
};

export default TemplateStore;
