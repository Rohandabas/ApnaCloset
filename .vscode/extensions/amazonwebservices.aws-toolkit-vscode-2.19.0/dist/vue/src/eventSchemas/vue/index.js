(()=>{"use strict";var $={4407:(e,c)=>{var d;d={value:!0},c.Z=(m,f)=>{const p=m.__vccOpts||m;for(const[S,_]of f)p[S]=_;return p}}},E={};function h(e){var c=E[e];if(c!==void 0)return c.exports;var d=E[e]={exports:{}};return $[e](d,d.exports,h),d.exports}h.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};(()=>{h.r(u);const e=Vue,c={id:"app"},d={class:"container button-container",style:{"justify-content":"space-between"}},m=["disabled"],f={id:"search_input"},p=["placeholder"],S={id:"result_content"},_={disabled:"",value:""},T=["value"],N={id:"schemaContent_versionDropdown"},P=["value"];function M(s,t,o,i,a,r){return(0,e.openBlock)(),(0,e.createElementBlock)("div",c,[(0,e.createElementVNode)("div",d,[(0,e.createElementVNode)("h1",null,(0,e.toDisplayString)(s.initialData.Header),1),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("input",{type:"submit",disabled:s.downloadDisabled,onClick:t[0]||(t[0]=(...n)=>s.downloadClicked&&s.downloadClicked(...n)),value:"Download Code Bindings"},null,8,m)])]),(0,e.createElementVNode)("div",f,[(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"search","onUpdate:modelValue":t[1]||(t[1]=n=>s.searchText=n),placeholder:s.initialData.SearchInputPlaceholder},null,8,p),[[e.vModelText,s.searchText]])]),(0,e.createElementVNode)("div",S,[(0,e.withDirectives)((0,e.createElementVNode)("select",{id:"searchList","onUpdate:modelValue":t[2]||(t[2]=n=>s.selectedSchema=n),onChange:t[3]||(t[3]=(...n)=>s.userSelectedSchema&&s.userSelectedSchema(...n)),size:"100"},[(0,e.createElementVNode)("option",_,(0,e.toDisplayString)(s.searchProgressInfo),1),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(s.searchResults,n=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{key:n.RegistryName,value:n},(0,e.toDisplayString)(n.Title),9,T))),128))],544),[[e.vModelSelect,s.selectedSchema]]),(0,e.createElementVNode)("div",N,[(0,e.withDirectives)((0,e.createElementVNode)("select",{id:"versionList","onUpdate:modelValue":t[4]||(t[4]=n=>s.selectedVersion=n),onChange:t[5]||(t[5]=(...n)=>s.fetchSchemaContent&&s.fetchSchemaContent(...n))},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(s.schemaVersions,n=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{key:n,value:n},(0,e.toDisplayString)(s.initialData.VersionPrefix)+" "+(0,e.toDisplayString)(n),9,P))),128))],544),[[e.vModelSelect,s.selectedVersion]]),(0,e.withDirectives)((0,e.createElementVNode)("textarea",{readonly:"","onUpdate:modelValue":t[6]||(t[6]=n=>s.schemaContent=n)},null,512),[[e.vModelText,s.schemaContent]])])])])}class v{static registerGlobalCommands(){const t=new Event("remount");window.addEventListener("message",o=>{const{command:i}=o.data;i==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(a=>this.removeListener(a)),window.dispatchEvent(t))})}static addListener(t){this.messageListeners.add(t),window.addEventListener("message",t)}static removeListener(t){this.messageListeners.delete(t),window.removeEventListener("message",t)}static sendRequest(t,o,i){const a=JSON.parse(JSON.stringify(i)),r=new Promise((n,y)=>{const b=j=>{const l=j.data;if(t===l.id)if(this.removeListener(b),window.clearTimeout(R),l.error===!0){const F=JSON.parse(l.data);y(new Error(F.message))}else l.event?(typeof i[0]!="function"&&y(new Error(`Expected frontend event handler to be a function: ${o}`)),n(this.registerEventHandler(o,i[0]))):n(l.data)},R=setTimeout(()=>{this.removeListener(b),y(new Error(`Timed out while waiting for response: id: ${t}, command: ${o}`))},3e5);this.addListener(b)});return vscode.postMessage({id:t,command:o,data:a}),r}static registerEventHandler(t,o){const i=a=>{const r=a.data;if(r.command===t){if(!r.event)throw new Error(`Expected backend handler to be an event emitter: ${t}`);o(r.data)}};return this.addListener(i),{dispose:()=>this.removeListener(i)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(t,o)=>{if(typeof o!="string"){console.warn(`Tried to index webview client with non-string property: ${String(o)}`);return}if(o==="init"){const a=vscode.getState()??{};if(a.__once)return()=>Promise.resolve();vscode.setState(Object.assign(a,{__once:!0}))}const i=(this.counter++).toString();return(...a)=>this.sendRequest(i,o,a)}})}}v.counter=0,v.initialized=!1,v.messageListeners=new Set;const w=new Set;window.addEventListener("remount",()=>w.clear());const O={created(){if(this.$data===void 0)return;const s=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const t=this.id??`${this.name??`DEFAULT-${w.size}`}-${this.$options._count}`;if(this.$options._unid=t,w.has(t)){console.warn(`Component "${t}" already exists. State-saving functionality will be disabled.`);return}w.add(t);const o=s[t]??{};Object.keys(this.$data).forEach(i=>{this.$data[i]=o[i]??this.$data[i]}),Object.keys(this.$data).forEach(i=>{this.$watch(i,a=>{const r=vscode.getState()??{},n=Object.assign(r[t]??{},{[i]:a!==void 0?JSON.parse(JSON.stringify(a)):void 0});vscode.setState(Object.assign(r,{[t]:n}))},{deep:!0})})}},g=v.create();let C;const B=(0,e.defineComponent)({data(){return{initialData:{Header:"",SearchInputPlaceholder:"",VersionPrefix:"",RegistryNames:[],Region:"",LocalizedMessages:{noSchemasFound:"",searching:"",loading:"",select:""}},searchText:"",searchProgressInfo:"",searchResults:[],selectedSchema:{},selectedVersion:"",schemaContent:"",schemaVersions:[],downloadDisabled:!0}},watch:{searchText:function(s,t){window.clearTimeout(C),C=window.setTimeout(()=>this.userSearchedText(),250)}},async created(){this.initialData=await g.init()??this.initialData},methods:{async userSearchedText(){if(this.resetSearchResults(),this.resetSchemaContentAndVersionDropdown(),this.downloadDisabled=!0,this.searchText===""){this.searchProgressInfo=this.initialData.LocalizedMessages.noSchemasFound;return}this.searchProgressInfo=this.initialData.LocalizedMessages.searching;const s=await g.searchSchemas(this.searchText);if(s.resultsNotFound){this.searchProgressInfo=this.initialData.LocalizedMessages.noSchemasFound;return}this.searchProgressInfo=this.initialData.LocalizedMessages.select,this.searchResults=s.results},userSelectedSchema:function(){this.resetSchemaContentAndVersionDropdown(),this.downloadDisabled=!1,this.fetchSchemaContent()},downloadClicked:function(){g.downloadCodeBindings(this.selectedSchema)},async fetchSchemaContent(){this.schemaContent=this.initialData.LocalizedMessages.loading;const s=await g.fetchSchemaContent(this.selectedSchema,this.selectedVersion);this.schemaContent=s.results,this.selectedVersion=s.version,this.schemaVersions=s.versionList??this.schemaVersions},resetSearchResults:function(){this.selectedSchema={},this.searchResults=[],this.searchProgressInfo=""},resetSchemaContentAndVersionDropdown:function(){this.selectedVersion="",this.schemaContent="",this.schemaVersions=[]}},mixins:[O]});var x=h(4407);const z=(0,x.Z)(B,[["render",M]]);const L=()=>(0,e.createApp)(z),k=L();k.mount("#vue-app"),window.addEventListener("remount",()=>{k.unmount(),L().mount("#vue-app")})})();var V=this;for(var D in u)V[D]=u[D];u.__esModule&&Object.defineProperty(V,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
