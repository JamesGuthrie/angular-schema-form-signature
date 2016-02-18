Signature addon
===============

Renders a [signature pad](https://github.com/szimek/signature_pad) in a form field.


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

|  Form Type     |   Becomes    |
|:---------------|:------------:|
|  signature   |  a signature widget |


Form Type Options
-------
The `signature` form does not yet support any external options, but probably should.
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
