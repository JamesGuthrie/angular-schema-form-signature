angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/signature/angular-schema-form-signature.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n    <div>\n        <signature-pad\n                ng-model=\"$$value$$\"\n                dataurl=\"$$value$$\"\n                accept=\"accept\"\n                clear=\"clear\"\n                height=\"form.height || 140\"\n                width=\"form.width || 368\"\n                class=\"form-control\"\n                style=\"height:auto\"\n                schema-validate=\"form\"></signature-pad>\n    </div>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n    <button class=\"btn\" ng-click=\"clear()\">Reset signature</button>\n</div>\n");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider) {

          //Add to the bootstrap directive
          schemaFormDecoratorsProvider.addMapping(
              'bootstrapDecorator',
              'signature',
              'directives/decorators/bootstrap/signature/angular-schema-form-signature.html'
          );
          schemaFormDecoratorsProvider.createDirective(
              'signature',
              'directives/decorators/bootstrap/signature/angular-schema-form-signature.html'
          );
        }
    ]);
