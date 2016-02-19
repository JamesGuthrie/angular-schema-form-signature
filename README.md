Signature addon
===============

This addon renders a [signature pad](https://github.com/szimek/signature_pad)
in a form field, allowing someone to electronically enter their written
signature. The resulting signature image is stored as a data URI in the model
field.


Installation
------------

The easiest way is to install is with bower, this will also include dependencies:
```bash
bower install angular-schema-form-signature
```

Usage
-----
You will need to specify the `signature` dependency in your app definition, this
is for the [angular signature](https://github.com/legalthings/angular-signature)
module.

```js
angular.module('yourModule', ['schemaForm', 'signaure']);
```

The signature add-on adds a new form type, `signature`.

|   Form Type    |       Becomes       |
|:---------------|:-------------------:|
|   signature    |  a signature widget |

### Resulting Value

On submission, your model will contain a data URI representation of the signature
which was input by the user.

### Validation

The field will be valid as long as something has been entered. This prevents
someone from not entering a signature.

Form Type Options
-----------------
The `signature` form does not yet support any external options, but it will soon.
If you would like an option to be present, open an issue or pull request for it.

### Examples

Here's an example:

```javascript
{
  key: 'signature',
  type: 'signature'
}
```

Development
-----------
Install dev dependencies:
```bash
npm install
```

Install project dependencies:
```bash
bower install
```

Run gulp to generate output:
```bash
gulp
```
