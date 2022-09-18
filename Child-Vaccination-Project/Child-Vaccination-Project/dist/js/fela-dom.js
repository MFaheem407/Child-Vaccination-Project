var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||((ar=ar||Array.prototype.slice.call(from,0,i))[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))};!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("FelaDOM",[],t):"object"==typeof exports?exports.FelaDOM=t():e.FelaDOM=t()}(window,function(){return e=[function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){for(var n in e)r=t(r,e[n],n,e);return r}},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){for(var n=0,o=e.length;n<o;++n)r=t(r,e[n],n,o,e);return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var r in e)t(e[r],r,e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var r=0,n=e.length;r<n;++r)t(e[r],r,n,e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(n,function(e){return e[1].toUpperCase()}).replace(o,"ms")};var n=/-([a-z])/g,o=/^Ms/g;e.exports=t.default},function(e,t,r){"use strict";r.r(t);var T=r(3),o=r.n(T);function u(e,t){return e+"{"+t+"}"}var T=r(0),i=r.n(T);function c(e,argument_1){var e=0<arguments.length&&void 0!==e?e:[],t=1<arguments.length&&void 0!==argument_1?argument_1:"";return 0===e.length||0===t.length?0:e.indexOf(e.find(function(e){return null!==t.match(e)}))+1}function l(e,t){return"@supports "+e+"{"+t+"}"}var T=r(2),p=r.n(T);function y(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=(b(T={},"RULE",function(e,s){var r=s.selector,i=s.declaration,o=s.support,s=s.media,i=u(r,i);o?s?(e.supportMediaRules[s]||(e.supportMediaRules[s]={}),e.supportMediaRules[s][o]||(e.supportMediaRules[s][o]=""),e.supportMediaRules[s][o]+=i):(e.supportRules[o]||(e.supportRules[o]=""),e.supportRules[o]+=i):s?(e.mediaRules[s]||(e.mediaRules[s]=""),e.mediaRules[s]+=i):e.rules+=i}),b(T,"FONT",function(e,r){r=r.fontFace;e.fontFaces+=r}),b(T,"KEYFRAME",function(e,r){r=r.keyframe;e.keyframes+=r}),b(T,"STATIC",function(e,n){var r=n.css,n=n.selector;e.statics+=n?u(n,r):r}),T);function R(r,argument_1){var t=1<arguments.length&&void 0!==argument_1?argument_1:[],r=function(e,t){var r=i()(e,function(r,n,o){var u=function(e,t){for(var r=-1,n=0;n<e.length;n++)if(t(e[n])){r=n;break}return r}(r,function(r){return t(e[r],r)>t(n,o)});return-1!==u?function(e,t,r){return[].concat(y(e.slice(0,r)),[t],y(e.slice(r,e.length)))}(r,o,u):[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r),[o])},[]);return p()(r,function(t,r){return t[r]=e[r],t},{})}(r,function(e){return c(t,e.pseudo)});return i()(r,function(e,t){var r=h[t.type];return r&&r(e,t),e},{mediaRules:{},supportRules:{},supportMediaRules:{},fontFaces:"",statics:"",keyframes:"",rules:""})}var g={fontFaces:"FONT",statics:"STATIC",keyframes:"KEYFRAME",rules:"RULE"};function v(e){return i()(e,function(e,t,r){return 0<t.length&&(e+=l(r,t)),e},"")}var x=/^[a-z0-9_-]*$/gi;function A(e){return 0===e.selectorPrefix.length||null!==e.selectorPrefix.match(x)?e.uniqueRuleIdentifier:-1}function M(e){var t=R(e.cache,e.ruleOrder),r=A(e),n=i()(g,function(n,o,u){return 0<t[u].length&&n.push({css:t[u],rehydration:r,attributes:e.styleNodeAttributes,type:o}),n},[]),u=v(t.supportRules);u&&n.push({css:u,type:"RULE",rehydration:r,attributes:e.styleNodeAttributes,support:!0});u=Object.keys(__assign(__assign({},t.supportMediaRules),t.mediaRules)).sort(e.sortMediaQuery);return p()(u,function(n,o){var u_2;return t.mediaRules[o]&&0<t.mediaRules[o].length&&n.push({css:t.mediaRules[o],type:"RULE",rehydration:r,attributes:e.styleNodeAttributes,media:o}),t.supportMediaRules[o]&&0<(u_2=v(t.supportMediaRules[o])).length&&n.push({css:u_2,type:"RULE",rehydration:r,attributes:e.styleNodeAttributes,support:!0,media:o}),n},n)}function E(e,t){e.updateSubscription||(e.scoreIndex={},e.nodes={},e.updateSubscription=function(e,t){return void 0===t&&(t=document),function(r){if("CLEAR"===r.type)return o()(e.nodes,function(e){return e.parentNode.removeChild(e)}),e.nodes={},void(e.scoreIndex={});var n=function(e,t,o_1){void 0===o_1&&(o_1=document);var n=function(_c){var e=_c.type,t=_c.media,t=void 0===t?"":t,_c=_c.support;return e+t+(void 0===_c?"":_c)}(e);return t.nodes[n]||(o_1=function(u,n){var e=u.type,o=u.media,u=u.support;void 0===n&&(n=document);o=o?'[media="'+o+'"]':":not([media])",u=u?'[data-fela-support="true"]':':not([data-fela-support="true"])';return n.querySelector('[data-fela-type="'+e+'"]'+u+o)}(e,o_1)||function(e,t,c,n){void 0===t&&(t=document);var e_1,o=t.head||{},u=e.type,s=e.media,i=e.support,a=t.createElement("style");for(e_1 in a.setAttribute("data-fela-type",u),a.type="text/css",i&&a.setAttribute("data-fela-support","true"),s&&(a.media=s),n)a.setAttribute(e_1,n[e_1]);if(window.FelaConfig)for(var e_2 in window.FelaConfig.styleNodeAttributes)a.setAttribute(e_2,window.FelaConfig.styleNodeAttributes[e_2]);c=function(e,_a,o){var t=_a.type,r=_a.media,n=_a.support;switch(t){case"FONT":case"STATIC":case"KEYFRAME":return e[0];case"RULE":var t_2=e.map(function(e){return e.media}).filter(function(e){return 0!==e.length});if(r){var u_1=__spreadArray(__spreadArray([],t_2,!0),[r],!1).sort(o),s_1=u_1.indexOf(r)+1,i_1=u_1[s_1];if(i_1)return i_1===r&&n?e.find(function(e){return e.media===u_1[u_1.indexOf(r)+2]}):e.find(function(e){return e.media===i_1})}else{var r_1=t_2.sort(o)[0];if(!n){t_2=e.find(function(e){return void 0!==e.getAttribute("data-fela-support")&&""===e.media&&"RULE"===e.getAttribute("data-fela-type")});if(t_2)return t_2}if(r_1)return e.find(function(e){return e.media===r_1})}}}(__spreadArray([],o.querySelectorAll("[data-fela-type]"),!0),e,c);return c?o.insertBefore(a,c):o.appendChild(a),a}(e,o_1,t.sortMediaQuery,t.styleNodeAttributes),t.nodes[n]=o_1),t.nodes[n]}(r,e,t);switch(r.type){case"KEYFRAME":-1===n.textContent.indexOf(r.keyframe)&&(n.textContent+=r.keyframe);break;case"FONT":-1===n.textContent.indexOf(r.fontFace)&&(n.textContent+=r.fontFace);break;case"STATIC":var t_4=r.selector?u(r.selector,r.css):r.css;-1===n.textContent.indexOf(t_4)&&(n.textContent+=t_4);break;case"RULE":!function(_a,s,i){var e=_a.selector,t=_a.declaration,r=_a.support,n=_a.media,o=_a.pseudo,a=n+r;if(s.devMode)!function(t){var u=M(s),n=t.getAttribute("media")||void 0,o=!!t.getAttribute("data-fela-support")||void 0,u=u.find(function(e){return"RULE"===e.type&&e.media===n&&e.support===o});u&&(t.textContent=u.css)}(i);else try{var n_1=c(s.ruleOrder,o),d_1=i.sheet.cssRules,f_1=d_1.length;if(0===n_1)f_1=void 0===s.scoreIndex[a]?0:s.scoreIndex[a]+1;else for(var e_3=s.scoreIndex[a]||0,t_3=d_1.length;e_3<t_3;++e_3)if(d_1[e_3].score>n_1){f_1=e_3;break}var e_4,p_1=u(e,t);0<r.length?(e_4=l(r,p_1),i.sheet.insertRule(e_4,f_1)):i.sheet.insertRule(p_1,f_1),0===n_1&&(s.scoreIndex[a]=f_1),d_1[f_1].score=n_1}catch(e){}}(r,e,n)}}}(e,t),e.subscribe(e.updateSubscription),o()(e.cache,e._emitChange))}var T=r(4),_=r.n(T);var T=r(5),j=r.n(T);function S(e,t,r,n,o,u,s,i){return void 0===o&&(o=""),void 0===u&&(u=""),void 0===s&&(s=""),void 0===i&&(i=""),{type:e,className:t,selector:function(e,argument_1,argument_2){return(2<arguments.length&&void 0!==argument_2?argument_2:"")+"."+e+(1<arguments.length&&void 0!==argument_1?argument_1:"")}(t,o,i),declaration:r+":"+n,pseudo:o,media:u,support:s}}function w(e,t,r,n,o){void 0===t&&(t=""),void 0===r&&(r=""),void 0===n&&(n={}),void 0===o&&(o="");for(var s=new RegExp(o.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")+"[.]([0-9a-z_-]+)([^{]+)?{([^:]+):([^}]+)}","gi");c_1=s.exec(e);){c_1[0];var s_2=c_1[1],i_2=c_1[2],a_1=c_1[3],c_1=c_1[4];n[function(e,t,argument_2,argument_3,argument_4){return(4<arguments.length&&void 0!==argument_4?argument_4:"")+(3<arguments.length&&void 0!==argument_3?argument_3:"")+(2<arguments.length&&void 0!==argument_2?argument_2:"")+j()(e)+t}(a_1,c_1,i_2,t,r)]=S("RULE",s_2,a_1,c_1,i_2,t,r,o)}return n}var L=/@supports[^{]+\{([\s\S]+?})\s*}/gi,I=/@(-webkit-|-moz-)?keyframes ([a-z_][a-z0-9-_]*)(\{.*?(?=}})}})/gi,P=/[.][a-z0-9_-]*/gi;function U(e,t){void 0===t&&(t=document),E(e,t),_()(t.querySelectorAll("[data-fela-type]"),function(t){var r_2,o_2,u_3,r_3,s_3=t.getAttribute("data-fela-rehydration")||-1,i_3=e.uniqueRuleIdentifier||parseInt(s_3,10);-1!==i_3&&(r_2=t.getAttribute("data-fela-type")||"",o_2=t.getAttribute("media")||"",u_3=t.getAttribute("data-fela-support")||"",s_3=t.textContent,e.uniqueRuleIdentifier=i_3,i_3=r_2+o_2+u_3,e.nodes[i_3]=t,"RULE"===r_2?(u_3?function(e,t,r,n){var o;for(void 0===t&&(t=""),void 0===r&&(r={}),void 0===n&&(n="");o=L.exec(e);){var e_6=o[0];w(o[1],t,e_6.split("{")[0].slice(9).trim(),r,n)}}(s_3,o_2,e.cache,e.specificityPrefix):w(s_3,o_2,"",e.cache,e.specificityPrefix),t.sheet&&t.sheet.cssRules&&(r_3=o_2+u_3,_()(t.sheet.cssRules,function(t,n){var u=(t.conditionText?t.cssRules[0]:t).selectorText,u=c(e.ruleOrder,u.split(P)[1]);0===u&&(e.scoreIndex[r_3]=n),t.score=u}))):"KEYFRAME"===r_2&&function(e,t){for(void 0===t&&(t={});u_5=I.exec(e);){var e_7=u_5[0],o_3=(u_5[1],u_5[2]),u_5=u_5[3];t[u_5]?t[u_5].keyframe+=e_7:t[u_5]={type:"KEYFRAME",keyframe:e_7,name:o_3}}}(s_3,e.cache))})}function $(e,t,r,n,o,u){return void 0===r&&(r=""),void 0===n&&(n=-1),void 0===o&&(o=!1),void 0===u&&(u={}),'<style type="text/css" data-fela-rehydration="'+n+'" data-fela-type="'+t+'"'+(o?' data-fela-support="true"':"")+(0<r.length?' media="'+r+'"':"")+i()(u,function(e,t,r){return e+" "+r+'="'+t+'"'},"")+">"+e+"</style>"}function z(e){var t=R(e.cache,e.ruleOrder),r=A(e),n=i()(g,function(n,o,u){return 0<t[u].length&&(n+=$(t[u],o,"",r,!1,e.styleNodeAttributes)),n},""),u=v(t.supportRules);u&&(n+=$(u,"RULE","",r,!0,e.styleNodeAttributes));u=Object.keys(__assign(__assign({},t.supportMediaRules),t.mediaRules)).sort(e.sortMediaQuery);return p()(u,function(n,o){var u_6;return t.mediaRules[o]&&0<t.mediaRules[o].length&&(n+=$(t.mediaRules[o],"RULE",o,r,!1,e.styleNodeAttributes)),t.supportMediaRules[o]&&0<(u_6=v(t.supportMediaRules[o])).length&&(n+=$(u_6,"RULE",o,r,!0,e.styleNodeAttributes)),n},n)}r.d(t,"render",function(){return E}),r.d(t,"rehydrate",function(){return U}),r.d(t,"renderToMarkup",function(){return z}),r.d(t,"renderToSheetList",function(){return M})}],t={},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6);function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e,t});
// SIG // Begin signature block
// SIG // MIIrZAYJKoZIhvcNAQcCoIIrVTCCK1ECAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // iV3fVeOe0m4Z0m4dsxQDjjBWsS5EXTrLaB4K94SRlaKg
// SIG // ghF5MIIIiTCCB3GgAwIBAgITNgAAAanWkDBmQ9sfggAC
// SIG // AAABqTANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjIwNjEwMTgy
// SIG // NzA0WhcNMjMwNjEwMTgyNzA0WjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuLvS3Hq6XM6N
// SIG // 5ZVPdqZQQbTo4WFo9Ar6TqyLpZIqQpNoW9ZG58deayDX
// SIG // VV7wKgn0IAjewM3VfPGtiX8jjOz4VtelbCYnbV9zrqqU
// SIG // rtTlqTbFB1L+UWQO2DLhxB8QybLxi38KaiY1DC6DL5xK
// SIG // uAnIGWnVNS168FihSxIPneGKfG3nJH1CgSA/rJ7w7tnY
// SIG // 8hHlpPpMia6oKVAZSvos9/fDpBmX+cru3sXfEv19s+4O
// SIG // JKLoPlJiNR0PhsqW5hChTn+tjVOBu8Td7tcb+jf9QQs1
// SIG // 2HPBtx3nMNhNlYZQrqXJMUy65RH2zAYAd9N9tdo6VRU/
// SIG // 8vRYzYOrWHSulDVtMn2cjwIDAQABo4IFlTCCBZEwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUj5gJWFiDzm06yLnX
// SIG // Wf2V9PM6+1cwDgYDVR0PAQH/BAQDAgeAMFAGA1UdEQRJ
// SIG // MEekRTBDMSkwJwYDVQQLEyBNaWNyb3NvZnQgT3BlcmF0
// SIG // aW9ucyBQdWVydG8gUmljbzEWMBQGA1UEBRMNMjM2MTY3
// SIG // KzQ3MDg2MTCCAeYGA1UdHwSCAd0wggHZMIIB1aCCAdGg
// SIG // ggHNhj9odHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // aW5mcmEvQ1JML0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5j
// SIG // cmyGMWh0dHA6Ly9jcmwxLmFtZS5nYmwvY3JsL0FNRSUy
// SIG // MENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9jcmwy
// SIG // LmFtZS5nYmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAwMSgy
// SIG // KS5jcmyGMWh0dHA6Ly9jcmwzLmFtZS5nYmwvY3JsL0FN
// SIG // RSUyMENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9j
// SIG // cmw0LmFtZS5nYmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAw
// SIG // MSgyKS5jcmyGgb1sZGFwOi8vL0NOPUFNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKSxDTj1CWTJQS0lDU0NBMDEsQ049Q0RQ
// SIG // LENOPVB1YmxpYyUyMEtleSUyMFNlcnZpY2VzLENOPVNl
// SIG // cnZpY2VzLENOPUNvbmZpZ3VyYXRpb24sREM9QU1FLERD
// SIG // PUdCTD9jZXJ0aWZpY2F0ZVJldm9jYXRpb25MaXN0P2Jh
// SIG // c2U/b2JqZWN0Q2xhc3M9Y1JMRGlzdHJpYnV0aW9uUG9p
// SIG // bnQwHwYDVR0jBBgwFoAUllGE4Gtve/7YBqvD8oXmKa5q
// SIG // +dQwHwYDVR0lBBgwFgYKKwYBBAGCN1sBAQYIKwYBBQUH
// SIG // AwMwDQYJKoZIhvcNAQELBQADggEBAHD1OJbFZ/tIa5Zp
// SIG // DzeU+mqWHOdF2htAZKicRfNYhaajjyYRvCTUKn/5SZGU
// SIG // KKdVmsxiFtCOp2lJ2+C3b7IJukkqC9SmpIkQLhBuz7uK
// SIG // 4NsXB6Xn3Iv32YuKeH4sqdRqJMCezhsale/Sh6fecsVW
// SIG // pJnsvfXxdXBCyoVbAZCZCQN3dOXUz4DtEfV2fxhRzTfS
// SIG // UhKsr1VSY9HC/myediSqvqd3zfgK9j6IR0DcL3WkKiV0
// SIG // B/dnYwntnntrhFxGYQuPPXBA7xX10SB/8CVA8V1NovOk
// SIG // tGO5cgvmVMe5pA2m9M7sOBgFkjXgPD7i4PoL5X0mK+6b
// SIG // nchiEZj1C5l1X6LzJH4wggjoMIIG0KADAgECAhMfAAAA
// SIG // UeqP9pxzDKg7AAAAAABRMA0GCSqGSIb3DQEBCwUAMDwx
// SIG // EzARBgoJkiaJk/IsZAEZFgNHQkwxEzARBgoJkiaJk/Is
// SIG // ZAEZFgNBTUUxEDAOBgNVBAMTB2FtZXJvb3QwHhcNMjEw
// SIG // NTIxMTg0NDE0WhcNMjYwNTIxMTg1NDE0WjBBMRMwEQYK
// SIG // CZImiZPyLGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYD
// SIG // QU1FMRUwEwYDVQQDEwxBTUUgQ1MgQ0EgMDEwggEiMA0G
// SIG // CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDJmlIJfQGe
// SIG // jVbXKpcyFPoFSUllalrinfEV6JMc7i+bZDoL9rNHnHDG
// SIG // fJgeuRIYO1LY/1f4oMTrhXbSaYRCS5vGc8145WcTZG90
// SIG // 8bGDCWr4GFLc411WxA+Pv2rteAcz0eHMH36qTQ8L0o3X
// SIG // Ob2n+x7KJFLokXV1s6pF/WlSXsUBXGaCIIWBXyEchv+s
// SIG // M9eKDsUOLdLTITHYJQNWkiryMSEbxqdQUTVZjEz6eLRL
// SIG // kofDAo8pXirIYOgM770CYOiZrcKHK7lYOVblx22pdNaw
// SIG // Y8Te6a2dfoCaWV1QUuazg5VHiC4p/6fksgEILptOKhx9
// SIG // c+iapiNhMrHsAYx9pUtppeaFAgMBAAGjggTcMIIE2DAS
// SIG // BgkrBgEEAYI3FQEEBQIDAgACMCMGCSsGAQQBgjcVAgQW
// SIG // BBQSaCRCIUfL1Gu+Mc8gpMALI38/RzAdBgNVHQ4EFgQU
// SIG // llGE4Gtve/7YBqvD8oXmKa5q+dQwggEEBgNVHSUEgfww
// SIG // gfkGBysGAQUCAwUGCCsGAQUFBwMBBggrBgEFBQcDAgYK
// SIG // KwYBBAGCNxQCAQYJKwYBBAGCNxUGBgorBgEEAYI3CgMM
// SIG // BgkrBgEEAYI3FQYGCCsGAQUFBwMJBggrBgEFBQgCAgYK
// SIG // KwYBBAGCN0ABAQYLKwYBBAGCNwoDBAEGCisGAQQBgjcK
// SIG // AwQGCSsGAQQBgjcVBQYKKwYBBAGCNxQCAgYKKwYBBAGC
// SIG // NxQCAwYIKwYBBQUHAwMGCisGAQQBgjdbAQEGCisGAQQB
// SIG // gjdbAgEGCisGAQQBgjdbAwEGCisGAQQBgjdbBQEGCisG
// SIG // AQQBgjdbBAEGCisGAQQBgjdbBAIwGQYJKwYBBAGCNxQC
// SIG // BAweCgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMBIGA1Ud
// SIG // EwEB/wQIMAYBAf8CAQAwHwYDVR0jBBgwFoAUKV5RXmSu
// SIG // NLnrrJwNp4x1AdEJCygwggFoBgNVHR8EggFfMIIBWzCC
// SIG // AVegggFToIIBT4YxaHR0cDovL2NybC5taWNyb3NvZnQu
// SIG // Y29tL3BraWluZnJhL2NybC9hbWVyb290LmNybIYjaHR0
// SIG // cDovL2NybDIuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyG
// SIG // I2h0dHA6Ly9jcmwzLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
// SIG // Y3JshiNodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9hbWVy
// SIG // b290LmNybIaBqmxkYXA6Ly8vQ049YW1lcm9vdCxDTj1B
// SIG // TUVSb290LENOPUNEUCxDTj1QdWJsaWMlMjBLZXklMjBT
// SIG // ZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0
// SIG // aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlmaWNhdGVSZXZv
// SIG // Y2F0aW9uTGlzdD9iYXNlP29iamVjdENsYXNzPWNSTERp
// SIG // c3RyaWJ1dGlvblBvaW50MIIBqwYIKwYBBQUHAQEEggGd
// SIG // MIIBmTBHBggrBgEFBQcwAoY7aHR0cDovL2NybC5taWNy
// SIG // b3NvZnQuY29tL3BraWluZnJhL2NlcnRzL0FNRVJvb3Rf
// SIG // YW1lcm9vdC5jcnQwNwYIKwYBBQUHMAKGK2h0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5j
// SIG // cnQwNwYIKwYBBQUHMAKGK2h0dHA6Ly9jcmwzLmFtZS5n
// SIG // YmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5jcnQwNwYIKwYB
// SIG // BQUHMAKGK2h0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0FN
// SIG // RVJvb3RfYW1lcm9vdC5jcnQwgaIGCCsGAQUFBzAChoGV
// SIG // bGRhcDovLy9DTj1hbWVyb290LENOPUFJQSxDTj1QdWJs
// SIG // aWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxD
// SIG // Tj1Db25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y0FD
// SIG // ZXJ0aWZpY2F0ZT9iYXNlP29iamVjdENsYXNzPWNlcnRp
// SIG // ZmljYXRpb25BdXRob3JpdHkwDQYJKoZIhvcNAQELBQAD
// SIG // ggIBAFAQI7dPD+jfXtGt3vJp2pyzA/HUu8hjKaRpM3op
// SIG // ya5G3ocprRd7vdTHb8BDfRN+AD0YEmeDB5HKQoG6xHPI
// SIG // 5TXuIi5sm/LeADbV3C2q0HQOygS/VT+m1W7a/752hMIn
// SIG // +L4ZuyxVeSBpfwf7oQ4YSZPh6+ngZvBHgfBaVz4O9/wc
// SIG // fw91QDZnTgK9zAh9yRKKls2bziPEnxeOZMVNaxyV0v15
// SIG // 2PY2xjqIafIkUjK6vY9LtVFjJXenVUAmn3WCPWNFC1YT
// SIG // IIHw/mD2cTfPy7QA1pT+GPARAKt0bKtq9aCd/Ym0b5tP
// SIG // bpgCiRtzyb7fbNS1dE740re0COE67YV2wbeo2sXixzvL
// SIG // ftH8L7s9xv9wV+G22qyKt6lmKLjFK1yMw4Ni5fMabcgm
// SIG // zRvSjAcbqgp3tk4a8emaaH0rz8MuuIP+yrxtREPXSqL/
// SIG // C5bzMzsikuDW9xH10graZzSmPjilzpRfRdu20/9UQmC7
// SIG // eVPZ4j1WNa1oqPHfzET3ChIzJ6Q9G3NPCB+7KwX0OQmK
// SIG // yv7IDimj8U/GlsHD1z+EF/fYMf8YXG15LamaOAohsw/y
// SIG // wO6SYSreVW+5Y0mzJutnBC9Cm9ozj1+/4kqksrlhZgR/
// SIG // CSxhFH3BTweH8gP2FEISRtShDZbuYymynY1un+RyfiK9
// SIG // +iVTLdD1h/SxyxDpZMtimb4CgJQlMYIZQzCCGT8CAQEw
// SIG // WDBBMRMwEQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZIm
// SIG // iZPyLGQBGRYDQU1FMRUwEwYDVQQDEwxBTUUgQ1MgQ0Eg
// SIG // MDECEzYAAAGp1pAwZkPbH4IAAgAAAakwDQYJYIZIAWUD
// SIG // BAIBBQCgga4wGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcC
// SIG // AQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARUw
// SIG // LwYJKoZIhvcNAQkEMSIEIHAsDMDf6IkBph9tE9wKaLcz
// SIG // zxcEZidZU0jTqrIxju6OMEIGCisGAQQBgjcCAQwxNDAy
// SIG // oBSAEgBNAGkAYwByAG8AcwBvAGYAdKEagBhodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEBBQAE
// SIG // ggEAYI6taZ8O+um2izchfyAdtb/mUeTPResxRgHHbqp3
// SIG // CADZ/T3WRCui59EG5gXRJohyl7QFqscMwVH2E0ayukV1
// SIG // YpyNUU33SuNt3FVGyUqH4uEYzWPwmyF5PM4cxdm49eEA
// SIG // IXzqEimN19GXsiZzTgDIlrmLzexqfJ7GQPfVRAYij6PA
// SIG // CwvVBmkBUDyZQlna7napnjFkaXEfVFPdkdvJhXbsWiWC
// SIG // HYxU4OJSCJ14tioksE6j7w0+fMsARU0PSjICksc04wG7
// SIG // E4NQf3oD2XbL2vBQk1DRstMoPbyjx4MJFkASBajVJUZ2
// SIG // 4Q4XQgKbs7zB7XvSLcAKy/HBR7kNqTzhCGftdqGCFwsw
// SIG // ghcHBgorBgEEAYI3AwMBMYIW9zCCFvMGCSqGSIb3DQEH
// SIG // AqCCFuQwghbgAgEDMQ8wDQYJYIZIAWUDBAIBBQAwggFU
// SIG // BgsqhkiG9w0BCRABBKCCAUMEggE/MIIBOwIBAQYKKwYB
// SIG // BAGEWQoDATAxMA0GCWCGSAFlAwQCAQUABCDBTapBLbXj
// SIG // NJ21HvCauTy4z7WpNvJp4W4Q1siH/nSc5gIGYxFP/ZU+
// SIG // GBIyMDIyMDkwODEyMTcyOC41OVowBIACAfSggdSkgdEw
// SIG // gc4xCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xKTAnBgNVBAsTIE1p
// SIG // Y3Jvc29mdCBPcGVyYXRpb25zIFB1ZXJ0byBSaWNvMSYw
// SIG // JAYDVQQLEx1UaGFsZXMgVFNTIEVTTjo3ODgwLUUzOTAt
// SIG // ODAxNDElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgU2VydmljZaCCEV8wggcQMIIE+KADAgECAhMzAAAB
// SIG // qFXwYanMMBhcAAEAAAGoMA0GCSqGSIb3DQEBCwUAMHwx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jv
// SIG // c29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMB4XDTIyMDMw
// SIG // MjE4NTEyM1oXDTIzMDUxMTE4NTEyM1owgc4xCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBP
// SIG // cGVyYXRpb25zIFB1ZXJ0byBSaWNvMSYwJAYDVQQLEx1U
// SIG // aGFsZXMgVFNTIEVTTjo3ODgwLUUzOTAtODAxNDElMCMG
// SIG // A1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vydmlj
// SIG // ZTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIB
// SIG // AKPabcrALiXX8pjyXpcMN89KTvcmlAiDw4pU+HejZhib
// SIG // Ueo/HUy+P9VxWhCX7ogeeKPJ677+LeVdPdG5hTvGDgSu
// SIG // o3w+AcmzcXZ2QCGUgUReLUKbmrr06bB0xhvtZwoelhxt
// SIG // PkjJFsbTGtSt+V7E4VCjPdYqQZ/iN0ArXXmgbEfVyCwS
// SIG // +h2uooBhM5UcbPogtr5VpgdzbUM4/rWupmFVjPB1asn3
// SIG // +wv7aBCK8j9QUJroY4y1pmZSf0SuGMWY7cm2cvrbdm7X
// SIG // ldljqRdHW+CQAB4EqiOqgumfR+aSpo5T75KG0+nsBkjl
// SIG // GSsU1Bi15p4rP88pZnSop73Gem9GWO2GRLwP15YEnKsc
// SIG // zxhGY+Z8NEa0QwMMiVlksdPU7J5qK9gxAQjOJzqISJzh
// SIG // IwQWtELqgJoHwkqTxem3grY7B7DOzQTnQpKWoL0HWR9K
// SIG // qIvaC7i9XlPv+ue89j9e7fmB4nh1hulzEJzX6RMU9THJ
// SIG // MlbO6OrP3NNEKJW8jipCny8H1fuvSuFfuB7t++KK9g2c
// SIG // 2NKu5EzSs1nKNqtl4KO3UzyXLWvTRDO4D5PVQOda0tqj
// SIG // S/AWoUrxKC5ZPlkLE+YPsS5G+E/VCgCaghPyBZsHNK7w
// SIG // HlSf/26uhLnKp6XRAIroiEYl/5yW0mShjvnARPr0GIlS
// SIG // m0KrqSwCjR5ckWT1sKaEb8w3AgMBAAGjggE2MIIBMjAd
// SIG // BgNVHQ4EFgQUNsfb4+L4UutlNh/MxjGkj0kLItUwHwYD
// SIG // VR0jBBgwFoAUn6cVXQBeYl2D9OXSZacbUzUZ6XIwXwYD
// SIG // VR0fBFgwVjBUoFKgUIZOaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tL3BraW9wcy9jcmwvTWljcm9zb2Z0JTIwVGlt
// SIG // ZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSkuY3JsMGwGCCsG
// SIG // AQUFBwEBBGAwXjBcBggrBgEFBQcwAoZQaHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL3BraW9wcy9jZXJ0cy9NaWNy
// SIG // b3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAxMCgx
// SIG // KS5jcnQwDAYDVR0TAQH/BAIwADATBgNVHSUEDDAKBggr
// SIG // BgEFBQcDCDANBgkqhkiG9w0BAQsFAAOCAgEAcTuCS2Rq
// SIG // qmf2mPr6OUydhmUx+m6vpEPszWioJXbnsRbny62nF9YX
// SIG // TKuSNWH1QFfyc/2N3YTEp4hE8YthYKgDM/HUhUREX3WT
// SIG // wGseYuuDeSxWRJWCorAHF1kwQzIKgrUc3G+uVwAmG/EI
// SIG // 1ELRExA4ftx0Ehrf59aJm7Ongn0lTSSiKUeuGA+My6oC
// SIG // i/V8ETxz+eblvQANaltJgGfppuWXYT4jisQKETvoJjBv
// SIG // 5x+BA0oEFu7gGaeMDkZjnO5vdf6HeKneILs9ZvwIWkgY
// SIG // Qi2ZeozbxglG5YwExoixekxrRTDZwMokIYxXmccscQ0x
// SIG // Xmh+I3vo7hV9ZMKTa9Paz5ne4cc8Odw1T+624mB0WaW9
// SIG // HAE1hojB6CbfundtV/jwxmdKh15plJXnN1yM7OL924Hq
// SIG // AiJisHanpOEJ4Um9b3hFUXE2uEJL9aYuIgksVYIq1P29
// SIG // rR4X7lz3uEJH6COkoE6+UcauN6JYFghN9I8JRBWAhHX4
// SIG // GQHlngsdftWLLiDZMynlgRCZzkYI24N9cx+D367Ywclq
// SIG // NY6CZuAgzwy12uRYFQasYHYK1hpzyTtuI/A2B8cG+HM6
// SIG // X1jf2d9uARwH6+hLkPtt3/5NBlLXpOl5iZyRlBi7iDXk
// SIG // WNa3juGfLAJ3ISDyNh7yu+H4yQYyRs/MVrCkWUJs9Eiv
// SIG // LKsNJ2B/IjNrStYwggdxMIIFWaADAgECAhMzAAAAFcXn
// SIG // a54Cm0mZAAAAAAAVMA0GCSqGSIb3DQEBCwUAMIGIMQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQDEylNaWNyb3Nv
// SIG // ZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAx
// SIG // MDAeFw0yMTA5MzAxODIyMjVaFw0zMDA5MzAxODMyMjVa
// SIG // MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMIICIjAN
// SIG // BgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5OGmTOe0
// SIG // ciELeaLL1yR5vQ7VgtP97pwHB9KpbE51yMo1V/YBf2xK
// SIG // 4OK9uT4XYDP/XE/HZveVU3Fa4n5KWv64NmeFRiMMtY0T
// SIG // z3cywBAY6GB9alKDRLemjkZrBxTzxXb1hlDcwUTIcVxR
// SIG // MTegCjhuje3XD9gmU3w5YQJ6xKr9cmmvHaus9ja+NSZk
// SIG // 2pg7uhp7M62AW36MEBydUv626GIl3GoPz130/o5Tz9bs
// SIG // hVZN7928jaTjkY+yOSxRnOlwaQ3KNi1wjjHINSi947SH
// SIG // JMPgyY9+tVSP3PoFVZhtaDuaRr3tpK56KTesy+uDRedG
// SIG // bsoy1cCGMFxPLOJiss254o2I5JasAUq7vnGpF1tnYN74
// SIG // kpEeHT39IM9zfUGaRnXNxF803RKJ1v2lIH1+/NmeRd+2
// SIG // ci/bfV+AutuqfjbsNkz2K26oElHovwUDo9Fzpk03dJQc
// SIG // NIIP8BDyt0cY7afomXw/TNuvXsLz1dhzPUNOwTM5TI4C
// SIG // vEJoLhDqhFFG4tG9ahhaYQFzymeiXtcodgLiMxhy16cg
// SIG // 8ML6EgrXY28MyTZki1ugpoMhXV8wdJGUlNi5UPkLiWHz
// SIG // NgY1GIRH29wb0f2y1BzFa/ZcUlFdEtsluq9QBXpsxREd
// SIG // cu+N+VLEhReTwDwV2xo3xwgVGD94q0W29R6HXtqPnhZy
// SIG // acaue7e3PmriLq0CAwEAAaOCAd0wggHZMBIGCSsGAQQB
// SIG // gjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYEFCqnUv5k
// SIG // xJq+gpE8RjUpzxD/LwTuMB0GA1UdDgQWBBSfpxVdAF5i
// SIG // XYP05dJlpxtTNRnpcjBcBgNVHSAEVTBTMFEGDCsGAQQB
// SIG // gjdMg30BATBBMD8GCCsGAQUFBwIBFjNodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpb3BzL0RvY3MvUmVwb3Np
// SIG // dG9yeS5odG0wEwYDVR0lBAwwCgYIKwYBBQUHAwgwGQYJ
// SIG // KwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0PBAQD
// SIG // AgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAU
// SIG // 1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8wTTBL
// SIG // oEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIwMTAt
// SIG // MDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggrBgEF
// SIG // BQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5j
// SIG // cnQwDQYJKoZIhvcNAQELBQADggIBAJ1VffwqreEsH2cB
// SIG // MSRb4Z5yS/ypb+pcFLY+TkdkeLEGk5c9MTO1OdfCcTY/
// SIG // 2mRsfNB1OW27DzHkwo/7bNGhlBgi7ulmZzpTTd2YurYe
// SIG // eNg2LpypglYAA7AFvonoaeC6Ce5732pvvinLbtg/SHUB
// SIG // 2RjebYIM9W0jVOR4U3UkV7ndn/OOPcbzaN9l9qRWqveV
// SIG // tihVJ9AkvUCgvxm2EhIRXT0n4ECWOKz3+SmJw7wXsFSF
// SIG // QrP8DJ6LGYnn8AtqgcKBGUIZUnWKNsIdw2FzLixre24/
// SIG // LAl4FOmRsqlb30mjdAy87JGA0j3mSj5mO0+7hvoyGtmW
// SIG // 9I/2kQH2zsZ0/fZMcm8Qq3UwxTSwethQ/gpY3UA8x1Rt
// SIG // nWN0SCyxTkctwRQEcb9k+SS+c23Kjgm9swFXSVRk2XPX
// SIG // fx5bRAGOWhmRaw2fpCjcZxkoJLo4S5pu+yFUa2pFEUep
// SIG // 8beuyOiJXk+d0tBMdrVXVAmxaQFEfnyhYWxz/gq77EFm
// SIG // PWn9y8FBSX5+k77L+DvktxW/tM4+pTFRhLy/AsGConsX
// SIG // HRWJjXD+57XQKBqJC4822rpM+Zv/Cuk0+CQ1ZyvgDbjm
// SIG // jJnW4SLq8CdCPSWU5nR0W2rRnj7tfqAxM328y+l7vzhw
// SIG // RNGQ8cirOoo6CGJ/2XBjU02N7oJtpQUQwXEGahC0HVUz
// SIG // WLOhcGbyoYIC0jCCAjsCAQEwgfyhgdSkgdEwgc4xCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29m
// SIG // dCBPcGVyYXRpb25zIFB1ZXJ0byBSaWNvMSYwJAYDVQQL
// SIG // Ex1UaGFsZXMgVFNTIEVTTjo3ODgwLUUzOTAtODAxNDEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZaIjCgEBMAcGBSsOAwIaAxUAbLr8xJ9BB4rL4Yg5
// SIG // 8X1LZ5iQdyyggYMwgYCkfjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMDANBgkqhkiG9w0BAQUFAAIFAObDt0Aw
// SIG // IhgPMjAyMjA5MDgwNDM1MTJaGA8yMDIyMDkwOTA0MzUx
// SIG // MlowdzA9BgorBgEEAYRZCgQBMS8wLTAKAgUA5sO3QAIB
// SIG // ADAKAgEAAgIeMQIB/zAHAgEAAgISBDAKAgUA5sUIwAIB
// SIG // ADA2BgorBgEEAYRZCgQCMSgwJjAMBgorBgEEAYRZCgMC
// SIG // oAowCAIBAAIDB6EgoQowCAIBAAIDAYagMA0GCSqGSIb3
// SIG // DQEBBQUAA4GBANAEdsNQDpZt5jsAnRT5bbxjSmZ2RB3X
// SIG // lZAx9tSzUhpC2SshjGM+OnsyqjbBKVTbMYo0gPnU/1//
// SIG // Xs/Mk+l2TKGeZ2RHIa9CsjjhDHnJqwVGvFIwdzkzcNgo
// SIG // jxO5YfEkMcyzfnx0TmBtJ9d4hM8KT4wy7vKv0F8MvRa8
// SIG // HISiTYw+MYIEDTCCBAkCAQEwgZMwfDELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBIDIwMTACEzMAAAGoVfBhqcwwGFwAAQAA
// SIG // AagwDQYJYIZIAWUDBAIBBQCgggFKMBoGCSqGSIb3DQEJ
// SIG // AzENBgsqhkiG9w0BCRABBDAvBgkqhkiG9w0BCQQxIgQg
// SIG // FIFJ1cL6lRX9FpmMp/nfLRQWv2eD4oQuFaBO6qwuB0sw
// SIG // gfoGCyqGSIb3DQEJEAIvMYHqMIHnMIHkMIG9BCB0/ssd
// SIG // AMsHwnNwhfFBXPlFnRvWhHqSX9YLUxBDl1xlpjCBmDCB
// SIG // gKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMz
// SIG // AAABqFXwYanMMBhcAAEAAAGoMCIEIOzgUMqlhawSge+z
// SIG // b2n00xagJF6IlGlwmxNQiSL5cGa+MA0GCSqGSIb3DQEB
// SIG // CwUABIICAHHhD4paJojVh8hlrGlVxG7CONvbs6lmSdcG
// SIG // JyWZuErX1UPJMPP/yDDdjiEDxVhJfWRHr/jxR27KvPPj
// SIG // IK5Ur1Dj7s5KmiK19kVXKQMV6F0eh4Ub5yHxSVMYzMU6
// SIG // juwXGwsfvRGM9ZTajdLoB1SX7YEBX2aHxJLAwgiUmoxt
// SIG // 1J+42YPPxbZU906pFo9+vdrg8ZoYfNpyXiUKEodrILlY
// SIG // 0hpU5QZju/dc9kNavuLRp2IXS2XV+U7WH3ibA/2VookQ
// SIG // i74wcZZpsry434Mkv3CnccCtQFUv2Bycwtt6PI7uAo6L
// SIG // 2+/2h3Sf3w+jzv5wq8k9gkzlAJcbJITsb+5734caXlF4
// SIG // AaEWJnQ779tkxBrJDRVqbk/IdYwwqoDwKMWhNCjrSomH
// SIG // pazrucix24/GsYe9e9cO/TZCCni3CAW+/phGDjCyj4JG
// SIG // HR+c2RiB3qmFKmfskL7RmQhOKI9HXBedGOJvwX6J4JkP
// SIG // B/HrCuwfWI1JqyMi2ckMxMlhM75aIoEJpbFIQi+WDEwH
// SIG // RR3E1/6SORL/0WEuxu28bTfCHv1VNsdsCeZK1jZfkqug
// SIG // 5pJh2GgUUp+TZlvpY7mjF96fMYIyivigWD85RLTdCPVC
// SIG // R9+zlTNtAytPsswhFiIS0kwmkfIoXGQlljTt+csAX8uH
// SIG // 4NtAb7WEbrA3HYIqH0qj5+IkLBE4Sagz
// SIG // End signature block
