import BaseStore from 'fluxible/addons/BaseStore';

class TemplateStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.selectedTemplate = null;
        this.templates = [{
            id: 1,
            name: 'Template 1',
            description: 'My template description'
        }, {
            id: 2,
            name: 'My other template',
            description: 'yo description yo'
        }];
        this.isShowingAll = false;
    }

    handleSelectTemplate(payload) {
        console.log(payload);
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
    'SELECT_TEMPLATE': 'handleSelectTemplate',
    'TOGGLE_DROPDOWN': 'handleToggleDropdown'
};

export default TemplateStore;
