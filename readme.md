# alias-fields


<a href="https://raw.githubusercontent.com/Jaid/alias-fields/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/alias-fields?style=flat-square" alt="License"/></a>  
<a href="https://actions-badge.atrox.dev/Jaid/alias-fields/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Falias-fields%2Fbadge" alt="Build status"/></a> <a href="https://github.com/Jaid/alias-fields/commits"><img src="https://img.shields.io/github/commits-since/Jaid/alias-fields/v1.0.0?style=flat-square&logo=github" alt="Commits since v1.0.0"/></a> <a href="https://github.com/Jaid/alias-fields/commits"><img src="https://img.shields.io/github/last-commit/Jaid/alias-fields?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/alias-fields/issues"><img src="https://img.shields.io/github/issues/Jaid/alias-fields?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/alias-fields"><img src="https://img.shields.io/npm/v/alias-fields?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/alias-fields/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/alias-fields?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/alias-fields"><img src="https://img.shields.io/npm/dm/alias-fields?style=flat-square&logo=npm" alt="Downloads"/></a>

**Normalizes an object's keys based on given alias map.**















## Installation
<a href="https://npmjs.com/package/alias-fields"><img src="https://img.shields.io/badge/npm-alias--fields-C23039?style=flat-square&logo=npm" alt="alias-fields on npm"/></a>
```bash
npm install --save alias-fields@^1.0.0
```
<a href="https://yarnpkg.com/package/alias-fields"><img src="https://img.shields.io/badge/Yarn-alias--fields-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="alias-fields on Yarn"/></a>
```bash
yarn add alias-fields@^1.0.0
```
<a href="https://jsdelivr.com/package/npm/alias-fields/"><img src="https://img.shields.io/badge/jsDelivr-alias--fields-orange?style=flat-square&logo=html5&logoColor=white" alt="alias-fields on jsDelivr"/></a> <a href="https://unpkg.com/browse/alias-fields/"><img src="https://img.shields.io/badge/UNPKG-alias--fields-orange?style=flat-square&logo=html5&logoColor=white" alt="alias-fields on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/alias-fields@1.0.0/index.js"/>
```


## Try it out



Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type", "text/javascript");
scriptElement.setAttribute("src", "https://cdn.jsdelivr.net/npm/alias-fields@1.0.0/index.js");
document.querySelector("head").appendChild(scriptElement);
```

alias-fields is now stored in the global variable `aliasFields`. The following console expression should return something other than `"undefined"`.

```javascript
typeof aliasFields.default
```






## Development



Setting up:
```bash
git clone git@github.com:Jaid/alias-fields.git
cd alias-fields
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
