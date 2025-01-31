import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: {
        filter: 'filter',
        searchPattern: 'search',
    },

    filter: null,
    searchPattern: null,
});
