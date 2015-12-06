'use strict';

allPassApp.filter('duration', function () {
    return function (duration, args) {
        switch (duration) {
            case 1:
                return 'Half Hour';
            case 2:
                return '1 hour'
        }
    }
})