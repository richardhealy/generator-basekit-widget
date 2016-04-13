(function () {
    'use strict';

    BaseKit.Widget.<%= widgetNameSpace %>View = BaseKit.Widget.CoreView.extend({
        template: 'widget_<%= widgetType %>',

        initialize: function (options) {
            BaseKit.Widget.CoreView.prototype.initialize.call(this, options);
        }
    });
}());
