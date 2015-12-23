import BaseStore from 'fluxible/addons/BaseStore';

class TableStore extends BaseStore {
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

TableStore.storeName = 'TableStore';
TableStore.handlers = {
    'SELECT_DESIGN': 'handleSelectDesign',
    'SELECT_TEMPLATE': 'handleSelectTemplate'
};

export default TableStore;
