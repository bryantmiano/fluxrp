export default function templates() {
    return {
        getAll: function () {
            var promise = new Promise(function(resolve, reject){
                resolve([{
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
                }])
            });

            return promise;
        }
    }
}
