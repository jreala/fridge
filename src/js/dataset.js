const _ = {
    once: require('lodash/once'),
    concat: require('lodash/concat'),
    isNil: require('lodash/isNil'),
    values: require('lodash/values'),
    omit: require('lodash/omit'),
    set: require('lodash/set'),
    filter: require('lodash/filter'),
    map: require('lodash/map')
},
    moment = require('moment');

class Dataset {

    static get() {
        return _.once(() =>_.map(
            _.concat(
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
            ), item => {
                item.purchaseDate = moment(item.purchaseDate).format("YYYY-MM-DD");
                item.expirationDate = moment(item.expirationDate).format("YYYY-MM-DD");
                return item;
            })
        )();
    }

    static getQuantityByDate() {
        return _.once(() => {
            const result = {};

            this.get().forEach(item => {
                if (_.isNil(result[`${item.name}-${item.purchaseDate}`])) {
                    result[`${item.name}-${item.purchaseDate}`] = _.omit(item, ['expirationDate']);
                }

                result[`${item.name}-${item.purchaseDate}`].quantity += item.quantity;
            });

            return _.values(result);
        })();
    }

    static getPurchasedAfterExpiration() {
        return _.once(() => _.filter(this.get(), item => moment(item.expirationDate).isBefore(item.purchaseDate)))();
    }

}

export default Dataset;