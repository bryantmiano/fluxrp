import BaseStore from 'fluxible/addons/BaseStore';

class ReportBuilderStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.template = null;
        this.design = null;
        this.chart = null;
        this.table = null;
        this.selectedElement = null;
        this.changedSettings = [];
    }

    handleSelectDesign(payload) {
        this.selectedElement = this.selectedDesign = payload.design;
        this.emitChange();
    }

    handleSelectTemplate(payload) {
        this.selectedElement = this.designs = payload.template;
        this.emitChange();
    }

    handleSelectTable(payload) {
        this.selectedElement = this.table = payload.table;
        this.emitChange();
    }

    handleSelectChart(payload) {
        this.chart = payload.chart;
        this.emitChange();
    }

    getSelectedElement() {
        return this.selectedElement;
    }
}

ReportBuilderStore.storeName = 'ReportBuilderStore';
ReportBuilderStore.handlers = {
    'SELECT_DESIGN': 'handleSelectDesign',
    'SELECT_TEMPLATE': 'handleSelectTemplate',
    'SELECT_TABLE': 'handleSelectTable',
    'SELECT_CHART': 'handleSelectChart'
};

export default ReportBuilderStore;
