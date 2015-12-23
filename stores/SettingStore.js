import BaseStore from 'fluxible/addons/BaseStore';

class SettingStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.settings = [];
    }

    handleSelectDesign(payload) {
        this.settings = payload.settings;
        this.emitChange();
    }

    handleSelectTemplate(payload) {
        this.settings = payload.settings;
        this.emitChange();
    }

    handleSelectTable(payload) {
        this.settings = payload.settings;
        this.emitChange();
    }

    handleSelectChart(payload) {
        this.settings = payload.settings;
        this.emitChange();
    }

    getSettings() {
        return this.getSettings;
    }
}

SettingStore.storeName = 'ReportBuilderStore';
SettingStore.handlers = {
    'SELECT_DESIGN': 'handleSelectDesign',
    'SELECT_TEMPLATE': 'handleSelectTemplate',
    'SELECT_TABLE': 'handleSelectTable',
    'SELECT_CHART': 'handleSelectChart'
};

export default SettingStore;
