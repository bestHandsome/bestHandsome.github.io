import{h as V,g as io,e as ho,a as uo,l as S,aR as go,Z as m,a6 as bo,ai as Co,aS as vo,ak as l,Y as fo,_ as p,$ as y,a7 as z,a0 as A,f as po,d as mo,r as ko,a1 as xo,p as yo,t as Io,m as I}from"./index-06154a72.js";import{b as Po,c as $o}from"./Close-cd2efd8a.js";import{u as zo,d as h,r as L,c as So}from"./use-rtl-cc014dc1.js";import{u as Bo}from"./use-css-vars-class-b6cc7c20.js";import{c as D}from"./Loading-9f5640cf.js";const Vo=(o,...r)=>typeof o=="function"?o(...r):typeof o=="string"?V(o):typeof o=="number"?V(String(o)):null;let P,$;const Ho=()=>{var o,r;P=Po?(r=(o=document)===null||o===void 0?void 0:o.fonts)===null||r===void 0?void 0:r.ready:void 0,$=!1,P!==void 0?P.then(()=>{$=!0}):$=!0};Ho();function Lo(o){if($)return;let r=!1;io(()=>{$||P==null||P.then(()=>{r||o()})}),ho(()=>{r=!0})}function Do(o,r){return uo(o,e=>{e!==void 0&&(r.value=e)}),S(()=>o.value===void 0?r.value:o.value)}function Ko(o,r){return S(()=>{for(const e of r)if(o[e]!==void 0)return o[e];return o[r[r.length-1]]})}const{c:Ao}=go(),Yo="vueuc-style",{cubicBezierEaseInOut:K}=bo;function Zo({name:o="fade-in",enterDuration:r="0.2s",leaveDuration:e="0.2s",enterCubicBezier:b=K,leaveCubicBezier:a=K}={}){return[m(`&.${o}-transition-enter-active`,{transition:`all ${r} ${b}!important`}),m(`&.${o}-transition-leave-active`,{transition:`all ${e} ${a}!important`}),m(`&.${o}-transition-enter-from, &.${o}-transition-leave-to`,{opacity:0}),m(`&.${o}-transition-leave-from, &.${o}-transition-enter-to`,{opacity:1})]}const Ro=o=>{const{textColor2:r,primaryColorHover:e,primaryColorPressed:b,primaryColor:a,infoColor:d,successColor:t,warningColor:s,errorColor:i,baseColor:k,borderColor:x,opacityDisabled:u,tagColor:v,closeIconColor:n,closeIconColorHover:c,closeIconColorPressed:f,borderRadiusSmall:g,fontSizeMini:C,fontSizeTiny:B,fontSizeSmall:H,fontSizeMedium:R,heightMini:_,heightTiny:M,heightSmall:T,heightMedium:E,closeColorHover:w,closeColorPressed:O,buttonColor2Hover:W,buttonColor2Pressed:j,fontWeightStrong:F}=o;return Object.assign(Object.assign({},vo),{closeBorderRadius:g,heightTiny:_,heightSmall:M,heightMedium:T,heightLarge:E,borderRadius:g,opacityDisabled:u,fontSizeTiny:C,fontSizeSmall:B,fontSizeMedium:H,fontSizeLarge:R,fontWeightStrong:F,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:k,colorCheckable:"#0000",colorHoverCheckable:W,colorPressedCheckable:j,colorChecked:a,colorCheckedHover:e,colorCheckedPressed:b,border:`1px solid ${x}`,textColor:r,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:n,closeIconColorHover:c,closeIconColorPressed:f,closeColorHover:w,closeColorPressed:O,borderPrimary:`1px solid ${l(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:l(a,{alpha:.12}),colorBorderedPrimary:l(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:l(a,{alpha:.12}),closeColorPressedPrimary:l(a,{alpha:.18}),borderInfo:`1px solid ${l(d,{alpha:.3})}`,textColorInfo:d,colorInfo:l(d,{alpha:.12}),colorBorderedInfo:l(d,{alpha:.1}),closeIconColorInfo:d,closeIconColorHoverInfo:d,closeIconColorPressedInfo:d,closeColorHoverInfo:l(d,{alpha:.12}),closeColorPressedInfo:l(d,{alpha:.18}),borderSuccess:`1px solid ${l(t,{alpha:.3})}`,textColorSuccess:t,colorSuccess:l(t,{alpha:.12}),colorBorderedSuccess:l(t,{alpha:.1}),closeIconColorSuccess:t,closeIconColorHoverSuccess:t,closeIconColorPressedSuccess:t,closeColorHoverSuccess:l(t,{alpha:.12}),closeColorPressedSuccess:l(t,{alpha:.18}),borderWarning:`1px solid ${l(s,{alpha:.35})}`,textColorWarning:s,colorWarning:l(s,{alpha:.15}),colorBorderedWarning:l(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:l(s,{alpha:.12}),closeColorPressedWarning:l(s,{alpha:.18}),borderError:`1px solid ${l(i,{alpha:.23})}`,textColorError:i,colorError:l(i,{alpha:.1}),colorBorderedError:l(i,{alpha:.08}),closeIconColorError:i,closeIconColorHoverError:i,closeIconColorPressedError:i,closeColorHoverError:l(i,{alpha:.12}),closeColorPressedError:l(i,{alpha:.18})})},_o={name:"Tag",common:Co,self:Ro},Mo=_o,To={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Eo=fo("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),y("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),y("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),y("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),y("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),p("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[y("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),y("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),p("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),p("icon, avatar",[p("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),p("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),p("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[m("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),m("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),p("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[m("&:hover","background-color: var(--n-color-checked-hover);"),m("&:active","background-color: var(--n-color-checked-pressed);")])])])]),wo=Object.assign(Object.assign(Object.assign({},A.props),To),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Oo=po("n-tag"),qo=mo({name:"Tag",props:wo,setup(o){const r=ko(null),{mergedBorderedRef:e,mergedClsPrefixRef:b,inlineThemeDisabled:a,mergedRtlRef:d}=xo(o),t=A("Tag","-tag",Eo,Mo,o,b);yo(Oo,{roundRef:Io(o,"round")});function s(n){if(!o.disabled&&o.checkable){const{checked:c,onCheckedChange:f,onUpdateChecked:g,"onUpdate:checked":C}=o;g&&g(!c),C&&C(!c),f&&f(!c)}}function i(n){if(o.triggerClickOnClose||n.stopPropagation(),!o.disabled){const{onClose:c}=o;c&&So(c,n)}}const k={setTextContent(n){const{value:c}=r;c&&(c.textContent=n)}},x=zo("Tag",d,b),u=S(()=>{const{type:n,size:c,color:{color:f,textColor:g}={}}=o,{common:{cubicBezierEaseInOut:C},self:{padding:B,closeMargin:H,closeMarginRtl:R,borderRadius:_,opacityDisabled:M,textColorCheckable:T,textColorHoverCheckable:E,textColorPressedCheckable:w,textColorChecked:O,colorCheckable:W,colorHoverCheckable:j,colorPressedCheckable:F,colorChecked:Y,colorCheckedHover:Z,colorCheckedPressed:q,closeBorderRadius:G,fontWeightStrong:J,[h("colorBordered",n)]:Q,[h("closeSize",c)]:X,[h("closeIconSize",c)]:oo,[h("fontSize",c)]:eo,[h("height",c)]:N,[h("color",n)]:ro,[h("textColor",n)]:lo,[h("border",n)]:no,[h("closeIconColor",n)]:U,[h("closeIconColorHover",n)]:ao,[h("closeIconColorPressed",n)]:co,[h("closeColorHover",n)]:so,[h("closeColorPressed",n)]:to}}=t.value;return{"--n-font-weight-strong":J,"--n-avatar-size-override":`calc(${N} - 8px)`,"--n-bezier":C,"--n-border-radius":_,"--n-border":no,"--n-close-icon-size":oo,"--n-close-color-pressed":to,"--n-close-color-hover":so,"--n-close-border-radius":G,"--n-close-icon-color":U,"--n-close-icon-color-hover":ao,"--n-close-icon-color-pressed":co,"--n-close-icon-color-disabled":U,"--n-close-margin":H,"--n-close-margin-rtl":R,"--n-close-size":X,"--n-color":f||(e.value?Q:ro),"--n-color-checkable":W,"--n-color-checked":Y,"--n-color-checked-hover":Z,"--n-color-checked-pressed":q,"--n-color-hover-checkable":j,"--n-color-pressed-checkable":F,"--n-font-size":eo,"--n-height":N,"--n-opacity-disabled":M,"--n-padding":B,"--n-text-color":g||lo,"--n-text-color-checkable":T,"--n-text-color-checked":O,"--n-text-color-hover-checkable":E,"--n-text-color-pressed-checkable":w}}),v=a?Bo("tag",S(()=>{let n="";const{type:c,size:f,color:{color:g,textColor:C}={}}=o;return n+=c[0],n+=f[0],g&&(n+=`a${D(g)}`),C&&(n+=`b${D(C)}`),e.value&&(n+="c"),n}),u,o):void 0;return Object.assign(Object.assign({},k),{rtlEnabled:x,mergedClsPrefix:b,contentRef:r,mergedBordered:e,handleClick:s,handleCloseClick:i,cssVars:a?void 0:u,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var o,r;const{mergedClsPrefix:e,rtlEnabled:b,closable:a,color:{borderColor:d}={},round:t,onRender:s,$slots:i}=this;s==null||s();const k=L(i.avatar,u=>u&&I("div",{class:`${e}-tag__avatar`},u)),x=L(i.icon,u=>u&&I("div",{class:`${e}-tag__icon`},u));return I("div",{class:[`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:b,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:t,[`${e}-tag--avatar`]:k,[`${e}-tag--icon`]:x,[`${e}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||k,I("span",{class:`${e}-tag__content`,ref:"contentRef"},(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)),!this.checkable&&a?I($o,{clsPrefix:e,class:`${e}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:t,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?I("div",{class:`${e}-tag__border`,style:{borderColor:d}}):null)}});export{qo as _,Ao as a,Ko as b,Yo as c,Zo as f,Lo as o,Vo as r,Oo as t,Do as u};
