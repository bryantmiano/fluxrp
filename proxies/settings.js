module.exports = {
    getByTemplateId() {
        return new Promise(function (resolve, reject) {
            resolve([{
                id: 1,
                type: 'datapoints',
                value: 'BMV, EMV'
            }, {
                id: 2,
                type: 'supervisedFilter',
                value: 'supervised'
            }])
        });
    },

    getByDesignId(id){
        return new Promise(function (resolve, reject) {
            resolve([{
                id: 3,
                type: 'hidepage',
                value: 'true'
            }])
        })
    },

    getByTableId(id){
        return new Promise(function (resolve, reject) {
            resolve([{
                id: 4,
                type: 'grouping',
                value: 'account, class'
            }])
        })
    }
};
