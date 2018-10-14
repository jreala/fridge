const _ = {
    once: require('lodash/once'),
    concat: require('lodash/concat'),
    isNil: require('lodash/isNil'),
    values: require('lodash/values'),
    omit: require('lodash/omit'),
    set: require('lodash/set')
};

class Dataset {
    static get() {
        return _.once(() =>
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
            )
        )();
    }

    static getQuantityByDate() {
        return _.once(() => {
            const result = {};

            this.get().forEach(item => {
                if (_.isNil(result[item.name])) {
                    result[`${item.name}-${item.purchaseDate.substring(0, 10)}`] = _.omit(
                        _.set(item, 'purchaseDate', item.purchaseDate.substring(0, 10)),
                        ['expirationDate']
                    );
                }

                result[`${item.name}-${item.purchaseDate.substring(0, 10)}`].quantity += item.quantity;
            });

            return _.values(result);
        })();
    }

    static getSample() {
        return [
            {
                "name": "Arugula",
                "type": "Produce",
                "store": "Trader Joe's",
                "purchaseDate": "2018-06-17T16:40:53.165Z",
                "expirationDate": "2019-11-01T11:31:50.733Z",
                "quantity": 2
            },
            {
                "name": "Rutabaga",
                "type": "Produce",
                "store": "7-11",
                "purchaseDate": "2018-04-07T08:07:29.968Z",
                "expirationDate": "2017-01-30T11:58:56.308Z",
                "quantity": 6
            },
            {
                "name": "Milk",
                "type": "Dairy",
                "store": "Trader Joe's",
                "purchaseDate": "2016-05-14T20:52:33.081Z",
                "expirationDate": "2017-04-08T05:37:06.245Z",
                "quantity": 1
            },
            {
                "name": "Milk",
                "type": "Dairy",
                "store": "Grocery Outlet",
                "purchaseDate": "2018-04-13T09:19:25.126Z",
                "expirationDate": "2019-10-23T07:34:55.746Z",
                "quantity": 3
            },
            {
                "name": "Cheese",
                "type": "Dairy",
                "store": "Metropolitan Market",
                "purchaseDate": "2018-06-19T22:27:12.712Z",
                "expirationDate": "2018-08-02T10:33:51.634Z",
                "quantity": 1
            },
            {
                "name": "Yoghurt",
                "type": "Dairy",
                "store": "Albertsons",
                "purchaseDate": "2017-05-23T16:16:48.700Z",
                "expirationDate": "2018-05-04T20:48:02.873Z",
                "quantity": 2
            },
            {
                "name": "Peppers",
                "type": "Produce",
                "store": "Grocery Outlet",
                "purchaseDate": "2018-08-09T08:56:01.486Z",
                "expirationDate": "2017-01-30T10:42:28.314Z",
                "quantity": 6
            },
            {
                "name": "Asparagus",
                "type": "Produce",
                "store": "QFC",
                "purchaseDate": "2018-05-21T16:18:03.559Z",
                "expirationDate": "2017-03-27T11:01:09.554Z",
                "quantity": 7
            },
            {
                "name": "Yoghurt",
                "type": "Dairy",
                "store": "QFC",
                "purchaseDate": "2017-07-24T21:47:11.426Z",
                "expirationDate": "2018-02-23T19:50:29.768Z",
                "quantity": 8
            },
            {
                "name": "Yoghurt",
                "type": "Dairy",
                "store": "Trader Joe's",
                "purchaseDate": "2018-03-27T19:59:21.437Z",
                "expirationDate": "2017-08-27T17:42:55.819Z",
                "quantity": 1
            },
            {
                "name": "Green onions",
                "type": "Produce",
                "store": "Albertsons",
                "purchaseDate": "2015-07-13T23:45:01.317Z",
                "expirationDate": "2019-09-19T19:55:26.839Z",
                "quantity": 2
            },
            {
                "name": "Watercress",
                "type": "Produce",
                "store": "QFC",
                "purchaseDate": "2017-05-23T08:05:09.396Z",
                "expirationDate": "2017-02-01T19:35:35.880Z",
                "quantity": 5
            },
            {
                "name": "Cheese",
                "type": "Dairy",
                "store": "Safeway",
                "purchaseDate": "2017-05-21T13:39:30.279Z",
                "expirationDate": "2018-04-16T21:53:45.230Z",
                "quantity": 10
            },
            {
                "name": "Watercress",
                "type": "Produce",
                "store": "Metropolitan Market",
                "purchaseDate": "2015-09-05T10:33:14.855Z",
                "expirationDate": "2018-07-12T13:52:23.779Z",
                "quantity": 6
            },
            {
                "name": "Milk",
                "type": "Dairy",
                "store": "Safeway",
                "purchaseDate": "2017-02-25T13:44:20.584Z",
                "expirationDate": "2018-04-12T02:38:10.067Z",
                "quantity": 2
            },
            {
                "name": "Onions",
                "type": "Produce",
                "store": "Albertsons",
                "purchaseDate": "2018-05-12T09:33:41.464Z",
                "expirationDate": "2018-05-24T14:34:54.279Z",
                "quantity": 6
            },
            {
                "name": "Chicken",
                "type": "Meat",
                "store": "Trader Joe's",
                "purchaseDate": "2016-02-23T20:12:03.712Z",
                "expirationDate": "2017-10-13T08:06:52.275Z",
                "quantity": 2
            },
            {
                "name": "Rutabaga",
                "type": "Produce",
                "store": "Albertsons",
                "purchaseDate": "2017-08-12T19:20:03.202Z",
                "expirationDate": "2018-12-26T12:00:26.951Z",
                "quantity": 3
            },
            {
                "name": "Tomatoes",
                "type": "Produce",
                "store": "7-11",
                "purchaseDate": "2016-01-23T23:52:00.723Z",
                "expirationDate": "2019-11-05T08:21:24.546Z",
                "quantity": 3
            },
            {
                "name": "Watermelon",
                "type": "Produce",
                "store": "Trader Joe's",
                "purchaseDate": "2016-07-18T02:41:20.226Z",
                "expirationDate": "2018-01-15T00:12:49.322Z",
                "quantity": 7
            },
            {
                "name": "Spinach",
                "type": "Produce",
                "store": "QFC",
                "purchaseDate": "2018-07-02T11:09:18.405Z",
                "expirationDate": "2018-11-09T18:00:32.068Z",
                "quantity": 5
            },
            {
                "name": "Arugula",
                "type": "Produce",
                "store": "Albertsons",
                "purchaseDate": "2017-09-07T11:08:14.617Z",
                "expirationDate": "2017-05-07T18:33:46.059Z",
                "quantity": 3
            },
            {
                "name": "Asparagus",
                "type": "Produce",
                "store": "7-11",
                "purchaseDate": "2017-01-10T05:47:32.048Z",
                "expirationDate": "2018-10-07T06:26:57.494Z",
                "quantity": 7
            },
            {
                "name": "Radish",
                "type": "Produce",
                "store": "Trader Joe's",
                "purchaseDate": "2018-06-27T07:45:03.053Z",
                "expirationDate": "2019-08-21T22:03:42.942Z",
                "quantity": 2
            },
            {
                "name": "Cabbage",
                "type": "Produce",
                "store": "Albertsons",
                "purchaseDate": "2018-01-31T23:46:08.373Z",
                "expirationDate": "2018-07-22T06:30:52.245Z",
                "quantity": 5
            },
            {
                "name": "Beef",
                "type": "Meat",
                "store": "Trader Joe's",
                "purchaseDate": "2017-08-29T04:00:54.721Z",
                "expirationDate": "2017-09-12T05:11:28.748Z",
                "quantity": 3
            },
            {
                "name": "Fish",
                "type": "Meat",
                "store": "7-11",
                "purchaseDate": "2016-11-18T15:07:43.913Z",
                "expirationDate": "2017-01-06T15:47:45.318Z",
                "quantity": 8
            },
            {
                "name": "Cucumbers",
                "type": "Produce",
                "store": "Trader Joe's",
                "purchaseDate": "2016-11-18T02:30:19.764Z",
                "expirationDate": "2019-05-15T06:44:33.574Z",
                "quantity": 7
            },
            {
                "name": "Green onions",
                "type": "Produce",
                "store": "Metropolitan Market",
                "purchaseDate": "2017-01-17T20:06:22.377Z",
                "expirationDate": "2019-07-04T23:26:24.474Z",
                "quantity": 6
            },
            {
                "name": "Cabbage",
                "type": "Produce",
                "store": "Trader Joe's",
                "purchaseDate": "2018-06-07T07:49:16.376Z",
                "expirationDate": "2018-03-17T05:52:15.275Z",
                "quantity": 3
            },
            {
                "name": "Green onions",
                "type": "Produce",
                "store": "7-11",
                "purchaseDate": "2016-04-13T16:39:03.451Z",
                "expirationDate": "2017-10-28T12:17:30.339Z",
                "quantity": 6
            },
            {
                "name": "Asparagus",
                "type": "Produce",
                "store": "Trader Joe's",
                "purchaseDate": "2015-09-28T15:07:22.052Z",
                "expirationDate": "2018-11-06T12:05:45.652Z",
                "quantity": 4
            }
        ]
    }
}

export default Dataset;