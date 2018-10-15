import Vue from 'vue';

const EventBus = new Vue();
EventBus.Events = {
    Name: 'Name',
    Type: 'Type',
    Store: 'Store',
    Quantity: 'Quantity',
    PurchaseDate: 'Purchase Date',
    ExpirationDate: 'Expiration Date'
}

export default EventBus;