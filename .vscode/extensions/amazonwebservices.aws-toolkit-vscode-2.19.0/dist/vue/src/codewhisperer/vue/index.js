(()=>{var X={2703:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>L});var o=n(9601),s=n.n(o),d=n(2609),h=n.n(d),v=h()(s());v.push([e.id,`
.generateSuggestionDiv {
    width: 100%;
    margin-right: 5%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.generateSuggestionHeaderDiv {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 15px;
}
.generateSuggestionHeader {
    font-family: Verdana;
    font-size: 24px;
    font-weight: 860;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}
.generateSuggestionDescription {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 510;
    line-height: 21px;
    padding-top: 20px;
    letter-spacing: 0em;
    text-align: left;
}
.generateSuggestionLearnMore {
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    color: #0097fb;
}
.generateSuggestionTabRow {
    display: flex;
    flex-direction: row;
    height: 26px;
    gap: 10px;
    padding-left: 10px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: space-between;
}
.generateSuggestionTabRowLabel {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 350;
    line-height: 17px;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.generateSuggestionTabMachine {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
}
.generateSuggestionTabMachineColorGroup1 {
    background-color: var(--vscode-editorWidget-background);
}
.generateSuggestionTabMachineText {
    padding-left: 5px;
    padding-right: 10px;
    padding-top: 4px;
    font-family: Verdana;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 350;
}
.tableDivSub {
    margin-top: 10px;
    border-collapse: collapse;
    width: 100%;
    border-radius: 8px;
    border: 1.12px solid #424750;
}
.col2 {
    border: 1px solid #555353;
    border-radius: 3px;
    width: fit-content;
    padding: 2px 10px;
    margin-right: 5px;
    color: #ffffff;
    background: linear-gradient(0deg, #3d3d3d, #3d3d3d), linear-gradient(0deg, #555353, #555353);
    font-family: Verdana;
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    justify-content: center;
    justify-items: center;
    align-items: center;
}
.tryExample {
    justify-content: end;
    height: fit-content;
    width: fit-content;
    padding: 6.7 12.3;
}
`,""]);const L=v},5964:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>L});var o=n(9601),s=n.n(o),d=n(2609),h=n.n(d),v=h()(s());v.push([e.id,`
.headerDiv {
    display: flex;
    flex-direction: column;
}
.banner {
    padding-left: 30px;
    padding-right: 30px;
    background-color: #0a4265;
    border-radius: 10px;
    display: flex;
    height: 48px;
    align-items: center;
    /* border: 1px solid #f5f5f5; */
}
.bannerDiv {
    display: flex;
    flex-direction: row;
    flex: 0.95;
    align-items: center;
    justify-content: left;
    gap: 20px;
}
.infoIcon {
    margin-top: 3px;
    justify-content: left;
}
.bannerDescription {
    color: #f5f5f5;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
    justify-content: left;
}
.closeBanner {
    cursor: pointer;
    color: #ffffff;
    align-items: center;
    flex: 0.05;
    text-align: right;
    padding-top: 5px;
}
.logoIcon {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 30px;
    padding-left: 60px;
    height: auto;
}
.titleDiv {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.titleHeader {
    font-family: Verdana;
    font-size: 24px;
    font-weight: 860;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
}
.titleSubHeader {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    padding-top: 10px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}
.body {
    display: flex;
    flex-wrap: wrap-reverse;
    height: auto;
    justify-content: left;
    gap: 5%;
    justify-items: left;
    padding-left: 60px;
}
.bodySubDiv {
    display: flex;
    flex-direction: column;
    width: 860;
    height: auto;
    justify-items: start;
    align-items: start;
}
`,""]);const L=v},2609:e=>{"use strict";e.exports=function(i){var n=[];return n.toString=function(){return this.map(function(s){var d="",h=typeof s[5]<"u";return s[4]&&(d+="@supports (".concat(s[4],") {")),s[2]&&(d+="@media ".concat(s[2]," {")),h&&(d+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),d+=i(s),h&&(d+="}"),s[2]&&(d+="}"),s[4]&&(d+="}"),d}).join("")},n.i=function(s,d,h,v,L){typeof s=="string"&&(s=[[null,s,void 0]]);var M={};if(h)for(var V=0;V<this.length;V++){var D=this[V][0];D!=null&&(M[D]=!0)}for(var E=0;E<s.length;E++){var u=[].concat(s[E]);h&&M[u[0]]||(typeof L<"u"&&(typeof u[5]>"u"||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=L),d&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=d),v&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=v):u[4]="".concat(v)),n.push(u))}},n}},9601:e=>{"use strict";e.exports=function(i){return i[1]}},4407:(e,i)=>{"use strict";var n;n={value:!0},i.Z=(o,s)=>{const d=o.__vccOpts||o;for(const[h,v]of s)d[h]=v;return d}},8043:(e,i,n)=>{var o=n(2703);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var s=n(4940).Z,d=s("64ae2168",o,!1,{})},4700:(e,i,n)=>{var o=n(5964);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var s=n(4940).Z,d=s("157e0721",o,!1,{})},4940:(e,i,n)=>{"use strict";n.d(i,{Z:()=>F});function o(t,c){for(var l=[],r={},a=0;a<c.length;a++){var x=c[a],p=x[0],B=x[1],S=x[2],P=x[3],b={id:t+":"+a,css:B,media:S,sourceMap:P};r[p]?r[p].parts.push(b):l.push(r[p]={id:p,parts:[b]})}return l}var s=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},h=s&&(document.head||document.getElementsByTagName("head")[0]),v=null,L=0,M=!1,V=function(){},D=null,E="data-vue-ssr-id",u=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function F(t,c,l,r){M=l,D=r||{};var a=o(t,c);return U(a),function(p){for(var B=[],S=0;S<a.length;S++){var P=a[S],b=d[P.id];b.refs--,B.push(b)}p?(a=o(t,p),U(a)):a=[];for(var S=0;S<B.length;S++){var b=B[S];if(b.refs===0){for(var k=0;k<b.parts.length;k++)b.parts[k]();delete d[b.id]}}}}function U(t){for(var c=0;c<t.length;c++){var l=t[c],r=d[l.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](l.parts[a]);for(;a<l.parts.length;a++)r.parts.push(G(l.parts[a]));r.parts.length>l.parts.length&&(r.parts.length=l.parts.length)}else{for(var x=[],a=0;a<l.parts.length;a++)x.push(G(l.parts[a]));d[l.id]={id:l.id,refs:1,parts:x}}}}function w(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function G(t){var c,l,r=document.querySelector("style["+E+'~="'+t.id+'"]');if(r){if(M)return V;r.parentNode.removeChild(r)}if(u){var a=L++;r=v||(v=w()),c=H.bind(null,r,a,!1),l=H.bind(null,r,a,!0)}else r=w(),c=I.bind(null,r),l=function(){r.parentNode.removeChild(r)};return c(t),function(p){if(p){if(p.css===t.css&&p.media===t.media&&p.sourceMap===t.sourceMap)return;c(t=p)}else l()}}var j=function(){var t=[];return function(c,l){return t[c]=l,t.filter(Boolean).join(`
`)}}();function H(t,c,l,r){var a=l?"":r.css;if(t.styleSheet)t.styleSheet.cssText=j(c,a);else{var x=document.createTextNode(a),p=t.childNodes;p[c]&&t.removeChild(p[c]),p.length?t.insertBefore(x,p[c]):t.appendChild(x)}}function I(t,c){var l=c.css,r=c.media,a=c.sourceMap;if(r&&t.setAttribute("media",r),D.ssrId&&t.setAttribute(E,c.id),a&&(l+=`
/*# sourceURL=`+a.sources[0]+" */",l+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=l;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(l))}}}},Z={};function C(e){var i=Z[e];if(i!==void 0)return i.exports;var n=Z[e]={id:e,exports:{}};return X[e](n,n.exports,C),n.exports}C.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return C.d(i,{a:i}),i},C.d=(e,i)=>{for(var n in i)C.o(i,n)&&!C.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},C.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),C.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var W={};(()=>{"use strict";C.r(W);const e=Vue,i=(0,e.createStaticVNode)('<div class="headerDiv"><!-- Logo + Title --><div class="logoIcon"><!-- Icon --><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.7667 29.1198L29.5872 29.751L25.5655 41.344L23.7449 40.7127L27.7667 29.1198ZM22.1624 32.1488L19.2018 35.1346L22.1037 38.1145L20.7216 39.4599L17.1606 35.8015C16.7943 35.4246 16.7972 34.8233 17.1673 34.4503L20.7939 30.7919L22.1624 32.1488ZM36.4828 34.4503C36.8529 34.8233 36.8558 35.4246 36.4896 35.8015L32.9266 39.4599L31.5455 38.1145L34.4474 35.1346L31.4877 32.1488L32.8562 30.7919L36.4828 34.4503ZM43.3987 38.3718L40.0757 40.0323C39.75 40.1962 39.5437 40.5296 39.5437 40.8949V46.6369L31.72 51.4518L27.9787 49.3152V44.3326H26.0512V49.3152L22.3099 51.4518L14.4862 46.6369V40.8939C14.4862 40.5287 14.2799 40.1952 13.9532 40.0323L10.6312 38.3708L10.6302 34.618L10.6312 30.4064L14.1064 27.758C14.3455 27.5758 14.4862 27.2925 14.4862 26.9918V21.6372L21.6507 17.4584L26.0512 19.915V26.0213H27.9787V19.915L32.3782 17.4584L39.5437 21.6372V26.9918C39.5437 27.2925 39.6835 27.5758 39.9225 27.758L43.3987 30.4054L43.3997 34.618L43.3987 38.3718ZM44.9465 29.1622L41.4712 26.5138V21.084C41.4712 20.7419 41.2891 20.4248 40.9932 20.2513L32.8745 15.5164C32.5796 15.3439 32.2153 15.341 31.9195 15.5068L27.0149 18.2458L22.1104 15.5068C21.8126 15.342 21.4493 15.3439 21.1553 15.5164L13.0367 20.2513C12.7398 20.4248 12.5587 20.7419 12.5587 21.084V26.5147L9.0824 29.1622C8.84339 29.3443 8.70365 29.6286 8.70365 29.9293L8.70268 34.618L8.70365 38.9664C8.70365 39.3317 8.90989 39.6651 9.23564 39.829L12.5587 41.4895V47.1757C12.5587 47.5101 12.7312 47.8204 13.0164 47.9958L21.7866 53.3938C22.0863 53.5769 22.4622 53.5837 22.7696 53.4092L27.0149 50.9844L31.2593 53.4092C31.4077 53.494 31.5725 53.5364 31.7373 53.5364C31.9127 53.5364 32.0872 53.4882 32.2433 53.3938L41.0125 47.9958C41.2977 47.8204 41.4712 47.5101 41.4712 47.1757V41.4905L44.7933 39.829C45.12 39.6661 45.3262 39.3327 45.3262 38.9674L45.3272 34.618L45.3262 29.9284C45.3262 29.6277 45.1855 29.3443 44.9465 29.1622ZM17.3774 5.30064C17.3774 6.09862 16.7298 6.74627 15.9318 6.74627C15.1328 6.74627 14.4862 6.09862 14.4862 5.30064C14.4862 4.50169 15.1328 3.85501 15.9318 3.85501C16.7298 3.85501 17.3774 4.50169 17.3774 5.30064ZM12.5587 5.30064C12.5587 6.09862 11.911 6.74627 11.113 6.74627C10.3141 6.74627 9.6674 6.09862 9.6674 5.30064C9.6674 4.50169 10.3141 3.85501 11.113 3.85501C11.911 3.85501 12.5587 4.50169 12.5587 5.30064ZM7.7399 5.30064C7.7399 6.09862 7.09225 6.74627 6.29427 6.74627C5.49532 6.74627 4.84864 6.09862 4.84864 5.30064C4.84864 4.50169 5.49532 3.85501 6.29427 3.85501C7.09225 3.85501 7.7399 4.50169 7.7399 5.30064ZM1.95738 8.67377L1.9622 2.01713C1.9622 1.97473 2.01232 1.9275 2.08363 1.9275H51.9511C52.0224 1.9275 52.0725 1.97473 52.0725 2.01713V8.67377H1.95738ZM51.9511 0H2.07881C0.951225 0 0.0318052 0.904 0.0298777 2.01521L7.60558e-07 37.4938C-0.00096223 38.6002 0.912675 39.5061 2.04316 39.5138L5.81239 39.5119V37.5863L2.07689 37.5873C2.00653 37.5873 1.95738 37.5401 1.95738 37.4977L1.97955 10.6013H52.0725V37.4871C52.0725 37.5401 52.0166 37.5854 51.9511 37.5854L48.2175 37.5863V39.5138L51.9511 39.5129C53.0806 39.5129 54 38.6041 54 37.4871V2.01713C54 0.904963 53.0806 0 51.9511 0Z" fill="url(#paint0_linear_227_4962)"></path><defs><linearGradient id="paint0_linear_227_4962" x1="53.5957" y1="-883.34" x2="19.5336" y2="-883.327" gradientUnits="userSpaceOnUse"><stop stop-color="#6EB1FF"></stop><stop offset="1" stop-color="#DA8AF7"></stop></linearGradient></defs></svg><!-- Text --><div class="titleDiv"><div class="titleHeader">Amazon CodeWhisperer</div><div class="titleSubHeader">Your AI-powered productivity tool for the IDE</div></div></div></div>',1),n={class:"body"},o={class:"bodySubDiv"};function s(_,g,f,m,y,O){const T=(0,e.resolveComponent)("GenerateSuggestionTab");return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createCommentVNode)(" Header "),i,(0,e.createCommentVNode)(" Body "),(0,e.createElementVNode)("div",n,[(0,e.createCommentVNode)(" Functionality "),(0,e.createElementVNode)("div",o,[(0,e.createVNode)(T)])])])}const d={class:"generateSuggestionDiv"},h=(0,e.createElementVNode)("div",{class:"generateSuggestionHeaderDiv"},[(0,e.createElementVNode)("div",{class:"generateSuggestionHeader"},"Generate code suggestions with examples")],-1),v={class:"generateSuggestionTabRowLabel"},L={class:"generateSuggestionTabMachine"},M={key:0,class:"col2"},V={key:1,class:"col2"},D=(0,e.createElementVNode)("div",{class:"generateSuggestionTabMachineText"},"+",-1),E=(0,e.createElementVNode)("div",{class:"col2"},"C",-1),u=["onClick"],F={class:"generateSuggestionDescription"};function U(_,g,f,m,y,O){return(0,e.openBlock)(),(0,e.createElementBlock)("div",d,[h,(0,e.createCommentVNode)(" Tab "),(0,e.createElementVNode)("div",null,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(_.tabs[_.activeTab].tableData,(T,N)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"tableDivSub",key:N},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)([T.column1,T.column2,T.column3],(A,$)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:$},[(0,e.createElementVNode)("div",{class:(0,e.normalizeClass)(["generateSuggestionTabRow",$%2===1?"generateSuggestionTabMachineColorGroup1":""])},[(0,e.createElementVNode)("div",v,[$===0?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:0},[(0,e.createTextVNode)(" Generate code suggestions as you type ")],64)):$===1?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:1},[(0,e.createTextVNode)(" Generate code suggestions manually using "),(0,e.createElementVNode)("div",L,[_.osState==="Mac"?((0,e.openBlock)(),(0,e.createElementBlock)("div",M,"Option")):((0,e.openBlock)(),(0,e.createElementBlock)("div",V,"Alt")),D,E])],64)):((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:2},[(0,e.createTextVNode)(" Generate unit test cases ")],64))]),(0,e.createElementVNode)("button",{class:"tryExample",onClick:J=>_.onClick(A,_.tabs[_.activeTab].label)},"Try example",8,u)],2)]))),128))]))),128))]),(0,e.createElementVNode)("div",F,[(0,e.createTextVNode)(" CodeWhisperer supports 15 programming languages, including TypeScript, JavaScript, Python, Java, and C#. "),(0,e.createElementVNode)("a",{class:"generateSuggestionLearnMore",href:"https://docs.aws.amazon.com/codewhisperer/latest/userguide/language-ide-support.html",onClick:g[0]||(g[0]=T=>_.emitUiClick("codewhisperer_GenerateSuggestions_LearnMore"))},"Learn more")])])}class w{static registerGlobalCommands(){const g=new Event("remount");window.addEventListener("message",f=>{const{command:m}=f.data;m==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(y=>this.removeListener(y)),window.dispatchEvent(g))})}static addListener(g){this.messageListeners.add(g),window.addEventListener("message",g)}static removeListener(g){this.messageListeners.delete(g),window.removeEventListener("message",g)}static sendRequest(g,f,m){const y=JSON.parse(JSON.stringify(m)),O=new Promise((T,N)=>{const A=J=>{const R=J.data;if(g===R.id)if(this.removeListener(A),window.clearTimeout($),R.error===!0){const Y=JSON.parse(R.data);N(new Error(Y.message))}else R.event?(typeof m[0]!="function"&&N(new Error(`Expected frontend event handler to be a function: ${f}`)),T(this.registerEventHandler(f,m[0]))):T(R.data)},$=setTimeout(()=>{this.removeListener(A),N(new Error(`Timed out while waiting for response: id: ${g}, command: ${f}`))},3e5);this.addListener(A)});return vscode.postMessage({id:g,command:f,data:y}),O}static registerEventHandler(g,f){const m=y=>{const O=y.data;if(O.command===g){if(!O.event)throw new Error(`Expected backend handler to be an event emitter: ${g}`);f(O.data)}};return this.addListener(m),{dispose:()=>this.removeListener(m)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(g,f)=>{if(typeof f!="string"){console.warn(`Tried to index webview client with non-string property: ${String(f)}`);return}if(f==="init"){const y=vscode.getState()??{};if(y.__once)return()=>Promise.resolve();vscode.setState(Object.assign(y,{__once:!0}))}const m=(this.counter++).toString();return(...y)=>this.sendRequest(m,f,y)}})}}w.counter=0,w.initialized=!1,w.messageListeners=new Set;const G=w.create(),I=(0,e.defineComponent)({name:"TelemetryClient",methods:{emitUiClick(_){G.emitUiClick(_)}}}),t=w.create(),c=(0,e.defineComponent)({name:"GenerateSuggestionTab",components:{},extends:I,data(){return{activeTab:parseInt(sessionStorage.getItem("activeTab")||"0"),osState:"",tabs:[{label:"Python",tableData:[{column1:["CodeWhisperer_generate_suggestion.py",`# TODO: place your cursor at the end of line 5 and press Enter to generate a suggestion.
# Tip: press tab to accept the suggestion.

fake_users = [
    { "name": "User 1", "id": "user1", "city": "San Francisco", "state": "CA" },`],column2:["CodeWhisperer_manual_invoke.py",`# TODO: Press either Option + C on MacOS or Alt + C on Windows on a new line.

# Function to upload a file to an S3 bucket.
`],column3:["Generate_unit_tests.py",`# TODO: Ask CodeWhisperer to write unit tests.

def sum(a, b):
    """
    Function to sum two numbers.

    Args:
    - a: First number.
    - b: Second number.

    Returns:
    - Sum of the two numbers.
    """
    return a + b

# Write a test case for the above function.
`]}]}]}},mounted(){this.showOS()},methods:{onClick(_,g){let f="autoTrigger";const m=_[0];m.startsWith("CodeWhisperer_generate_suggestion")?f="autoTrigger":m.startsWith("CodeWhisperer_manual_invoke")?f="manualTrigger":f="unitTest";const y="python";t.emitTryExampleClick(y,f),t.openFile([_[0],_[1]])},async showOS(){this.osState=await t.getOSType()},activeTabFunction(_){this.activeTab=_,sessionStorage.setItem("activeTab",_.toString())}}});var l=C(8043),r=C(4407);const x=(0,r.Z)(c,[["render",U]]),p=(0,e.defineComponent)({name:"Getting_Started",components:{GenerateSuggestionTab:x},data(){return{bannerVisible:!0,active:parseInt(sessionStorage.getItem("active")||"0")}},mounted(){sessionStorage.setItem("active","1")},methods:{closeStatusBar(){this.bannerVisible=!1}}});var B=C(4700);const P=(0,r.Z)(p,[["render",s]]);const b=()=>(0,e.createApp)(P),k=b();k.mount("#vue-app"),window.addEventListener("remount",()=>{k.unmount(),b().mount("#vue-app")})})();var z=this;for(var K in W)z[K]=W[K];W.__esModule&&Object.defineProperty(z,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * This module is run within the webview, and will mount the Vue app.
 */
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
