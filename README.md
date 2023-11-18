# snilsUtils
# Introduction
 snilsUtils is a JavaScript library to check if String matches format of SNILS number (example "123-123-123 12"). If String matches this format then function returns string with value of formatted SNILS number.
 If String doesn't match fomrat of SNILS number but contains exactly 11 digits then function returns parsed string of SNILS number in format ("123-123-123 12").
 If String doesn't match either of conditions function returns false.
 This library should be used to validate SNILS number on your form and to parse value if it matches either of 2 formats:
    1-st format: 123-123-123 12
    2-nd format: 12312312312
# Installation
 `npm install snilsutils.`
 Then import it in your js file and use.
# Usage
```js
 const snilsUtils = require('snilsUtils');
 console.log(snilsUtils("123-123-123 12")); //123-123-123 12
 console.log(snilsUtils("12312312312")); //123-123-123 12
 console.log(snilsUtils("123")); //false
```
