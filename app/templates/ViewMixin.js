(function () {
    'use strict';

    BaseKit.Widget.<%= widgetNameSpace %>ViewMixin = {
        getSettings: function () {
            return this.formattedSettings();
        },

        formattedSettings: function () {
            // Example
            return {
                title: App.t('widgets.<%= widgetType %>.title', '<%= widgetName %>'),
                components: [ {
                    id: '<%= widgetType %>-text',
                    type: 'text',
                    placeholder: 'Text',
                    label: '',
                    value: this.model.get('text'),
                }]
            };
        },

        listenForSettingsChanges: function (settingView) {
            this.listenTo(settingView, '<%= widgetType %>-text', this.changeExampleText);
        },

        changeExampleText: function (value) {
            this.model.set('text', value);
        }
    };

    Cocktail.mixin(BaseKit.Widget.<%= widgetNameSpace %>View, BaseKit.Widget.<%= widgetNameSpace %>ViewMixin);

}());
