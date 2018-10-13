const _ = { concat: require('lodash/concat') };

class Dataset {
    static get() {
        return _.concat(
            require('../data/data-0.json'),
            require('../data/data-1.json'),
            require('../data/data-2.json'),
            require('../data/data-3.json'),
            require('../data/data-4.json'),
            require('../data/data-5.json'),
            require('../data/data-6.json'),
            require('../data/data-7.json'),
            require('../data/data-8.json'),
            require('../data/data-9.json'),
        );
    }
}

export default Dataset;