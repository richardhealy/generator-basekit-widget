(function () {
    'use strict';

    BaseKit.Widget.<%= widgetNameSpace %>Model = BaseKit.Widget.CoreModel.extend({
        defaults: {
            'widgetType': 'widget.<%= widgetType %>'
        },

        initialize: function () {
            return this;
        }
    });
}());
