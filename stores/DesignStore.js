import BaseStore from 'fluxible/addons/BaseStore';

class DesignStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.selectedDesign = null;
        this.designs = [];
    }

    handleSelectDesign(payload) {
        this.selectedDesign = payload.design;
        this.emitChange();
    }

    handleSelectTemplate(payload) {
        this.designs = payload.template != null ? payload.template.designs : [];
        this.emitChange();
    }

    getDesigns() {
        return this.designs;
    }

    getSelectedDesign() {
        return this.selectedDesign;
    }
}

DesignStore.storeName = 'DesignStore';
DesignStore.handlers = {
    'SELECT_DESIGN': 'handleSelectDesign',
    'SELECT_TEMPLATE': 'handleSelectTemplate'
};

export default DesignStore;
