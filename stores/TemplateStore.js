import BaseStore from 'fluxible/addons/BaseStore';

class TemplateStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.selectedTemplate = null;
        this.templates = [{
            id: 1,
            name: 'Template 1',
            description: 'My template description',
            designs: [{
                id: 1,
                name: 'First design'
            }, {
                id: 2,
                name: 'Second design'
            }]
        }, {
            id: 2,
            name: 'My other template',
            description: 'yo description yo',
            designs: [{
                id: 3,
                name: 'My one and only design'
            }]
        }];
        this.isShowingAll = false;
    }

    handleSelectTemplate(payload) {
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
