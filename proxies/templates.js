module.exports = {
    getAll() {
        var promise = new Promise(function (resolve, reject) {
            resolve({
                templates: [{
                    id: 1,
                    name: 'Template 1',
                    description: 'My template description'
                }, {
                    id: 2,
                    name: 'My other template',
                    description: 'yo description yo'
                }]
            });
        });

        return promise;
    },
    get(id){
        var promise = new Promise(function (resolve, reject) {
            resolve({
                template: {
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
                }
            });
        });

        return promise;
    }
};
