'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return match.toUpperCase();
  });
}

var StartBaseKitWidgetGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');
  
    this.on('end', function () {
      var that = this;
      if (!this.options['skip-install']) {
        this.installDependencies(function () {
            console.log('Everything is ready!');
        });
        
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    this.log(chalk.magenta('You\'re using the amazing BaseKit widget generator.'));

    var prompts = [


    {
      name: 'widgetName',
      message: 'What do you want to call your widget?',
      default: function( answers ) {
        return 'New Widget'
      }
    
    },
    {
    name: 'widgetNameSpace',
    message: 'Unique NameSpace for the project (alphanumeric)?',
    default: function( answers ) {
        return camelize(answers.widgetName);
      }
    }
  ];//end prompts
    
    this.prompt(prompts, function (props) {
      this.widgetName = props.widgetName;
      this.widgetNameSpace = props.widgetNameSpace;

      done();
    }.bind(this));
  },

  app: function () {
    var context = { 
        
        widgetName: this.widgetName,
        widgetNameSpace: this.widgetNameSpace,
        widgetType: this.widgetNameSpace.toLowerCase()

    };

    //make site folder
    this.mkdir(this.widgetNameSpace);


    //Copy the base theme over
    this.directory('NewWidget', this.widgetNameSpace);

    this.template('Model.js', this.widgetNameSpace+'/Model.js', context);
    this.template('View.js', this.widgetNameSpace+'/View.js', context);
    this.template('ViewMixin.js', this.widgetNameSpace+'/ViewMixin.js', context);
    this.template('metadata.json', this.widgetNameSpace+'/metadata.json', context);
    this.template('widget.twig', this.widgetNameSpace+'/widget.twig', context);

    this.copy('icon.png', this.widgetNameSpace+'/icon.png');
  },

  projectfiles: function () {

  }
});

module.exports = StartBaseKitWidgetGenerator;