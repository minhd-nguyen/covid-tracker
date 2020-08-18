import e from"react";var t=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},n=function(e){return"object"==typeof e&&e.constructor===Object},r=Object.freeze([]);function o(e){return"function"==typeof e}Object.freeze({});var i=/([A-Z])/g,l=/^ms-/,a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},s=function(e){return null==e||!1===e||""===e},c=function(e,t){var r=Object.keys(e).filter(function(t){return!s(e[t])}).map(function(t){return n(e[t])?c(e[t],t):t.replace(i,"-$1").toLowerCase().replace(l,"-ms-")+": "+(null==(r=e[t])||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in a?String(r).trim():r+"px")+";";var r}).join(" ");return t?t+" {\n  "+r+"\n}":r};function u(e,t){if(Array.isArray(e)){for(var r=[],i=0,l=e.length,a=void 0;i<l;i+=1)null!=(a=u(e[i],t))&&(Array.isArray(a)?r.push.apply(r,a):r.push(a));return r}return s(e)?null:o(e)?"function"!=typeof(d=e)||d.prototype&&d.prototype.isReactComponent||!t?e:u(e(t),t):n(e)?c(e):e.toString();var d}function d(e){for(var i=[],l=arguments.length-1;l-- >0;)i[l]=arguments[l+1];return o(e)||n(e)?u(t(r,[e].concat(i))):u(t(e,i))}var p=/^\s*\/\/.*$/gm,m=function(e,t){this.rules=e,this.elementId=t,this.compiledStyles="",this.ReactStyleComponent=this.ReactStyleComponent.bind(this),this.injectStyleInBrowser=this.injectStyleInBrowser.bind(this)};m.prototype.createStyles=function(e){var t=u(this.rules,e).join("").replace(p,"");this.compiledStyles=t},m.prototype.ReactStyleComponent=function(t){return this.createStyles(t),e.createElement("style",{id:this.elementId,dangerouslySetInnerHTML:{__html:this.compiledStyles}})},m.prototype.injectStyleInBrowser=function(){if("undefined"!=typeof document)if(document.getElementById(this.elementId))document.getElementById(this.elementId).innerHTML=this.compiledStyles;else{var e=document.createElement("style");e.id=this.elementId,e.innerHTML=this.compiledStyles;var t=document.head,n=t.firstChild;n?t.insertBefore(e,n):t.appendChild(e)}},m.prototype.renderStyles=function(e){this.createStyles(e),this.injectStyleInBrowser()};var f=function(e,t){return e.theme?e.theme:t};function y(t){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var o=d.apply(void 0,[t].concat(n)),i="GlobalStyle"+function(e){var t,n=0;if(0===e.length)return n;for(t=0;t<e.length;t+=1)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n}(JSON.stringify(o)),l=new m(o,i),a=function(t){var n=l,r=i;"production"!==process.env.NODE_ENV&&e.Children.count(t.children)&&console.warn("The global style component "+r+" was given child JSX. createGlobalStyle doesn't render children.");var o=Object.assign({},t);return o.theme=f(t,{typography:{fontFamily:"Arial"}}),n.renderStyles(o),e.createElement(e.Fragment,null,null)};return a.globalStyle=l,a.elementId=i,a}export{y as createGlobalStyle,d as css};
//# sourceMappingURL=index.mjs.map
