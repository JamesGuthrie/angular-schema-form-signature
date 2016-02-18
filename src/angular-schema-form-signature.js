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
