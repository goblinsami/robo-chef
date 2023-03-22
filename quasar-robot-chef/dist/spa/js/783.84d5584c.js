"use strict";(globalThis["webpackChunkquasar_robot_chef"]=globalThis["webpackChunkquasar_robot_chef"]||[]).push([[783],{6783:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var a=n(9835),l=n(6970);const o=e=>((0,a.dD)("data-v-6234cc10"),e=e(),(0,a.Cn)(),e),i={class:"container row items-center justify-center"},s=o((()=>(0,a._)("h5",null,"Robo Chef",-1))),r={class:"q-py-md row justify-center"},c={class:"input-card col-12 q-px-md"},d={class:"q-pa-md"},p={class:"row justify-between items-center"},u={class:"col-2"},m={class:"q-px-lg row justify-center q-py-md q-my-sm"},g={key:0,class:"flex column items-center input-card q-px-md",style:{margin:"auto"}},h={class:"col-12 text-h5"},w=o((()=>(0,a._)("b",null,"Ingredientes",-1))),f={class:"col-12 self-start"},b=o((()=>(0,a._)("b",null,"Preparación",-1))),y={class:"col-12 self-start"},_={class:"input-card",style:{margin:"auto"}},v=o((()=>(0,a._)("b",null,"Ingredientes",-1))),q={class:"col-12 self-start"},C=o((()=>(0,a._)("b",null,"Preparación",-1))),I={class:"col-12 self-start"},k={class:"row justify-center q-pb-md q-pl-md"},x={key:0,id:"label",class:"col-12 row items-center"},H=o((()=>(0,a._)("div",{class:"text-grey"},"Hecho con RoboChef",-1))),W={class:"col-12",id:"btn-section"};function A(e,t,n,o,A,S){const $=(0,a.up)("q-icon"),z=(0,a.up)("q-item-label"),D=(0,a.up)("q-item-section"),V=(0,a.up)("q-item"),Z=(0,a.up)("q-btn"),j=(0,a.up)("q-select"),P=(0,a.up)("q-avatar"),R=(0,a.up)("q-card-section"),Q=(0,a.up)("q-card"),L=(0,a.up)("q-expansion-item"),U=(0,a.up)("q-list"),O=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("section",null,[(0,a._)("header",i,[s,(0,a.Wm)($,{name:"smart_toy",size:"md",class:"q-pl-sm"})]),(0,a._)("article",r,[(0,a._)("div",c,[(0,a._)("div",d,[(0,a.Wm)(j,{ref:"qSelect",outlined:"",modelValue:e.selected,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selected=t),"use-input":"","use-chips":"",multiple:"","new-value-mode":"toggle","input-debounce":"0",options:e.filterOptions,onFilter:e.filterFn,label:"Añade ingredientes",type:"text",tabindex:"0","menu-shrink":"","max-values":"5",onNewValue:e.createValue,onInputValue:t[2]||(t[2]=t=>e.handleUpdateInputValue(t))},{option:(0,a.w5)((t=>[(0,a._)("div",p,[(0,a.Wm)(V,(0,a.dG)(t.itemProps,{class:"col-10"}),{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.opt),1)])),_:2},1024)])),_:2},1024)])),_:2},1040),(0,a._)("div",u,[(0,a.Wm)($,{name:"delete",color:"grey-4",size:"xs",onClick:n=>e.deleteIngredient(t.opt),style:{cursor:"pointer"}},null,8,["onClick"])])])])),append:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"col-12",color:"grey",label:"+",style:{width:"100%"},onClick:t[0]||(t[0]=t=>e.manuallyAddIngredient()),flat:""})])),"before-options":(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(Z,{class:"col-12",color:"grey",label:"ok",style:{width:"100%"},flat:""},null,512),[[O]])])),"after-options":(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(Z,{class:"col-12",color:"grey",label:"ok",style:{width:"100%"},flat:""},null,512),[[O]])])),_:1},8,["modelValue","options","onFilter","onNewValue"])])])]),(0,a._)("article",m,[(0,a.Wm)(Z,{color:"warning",label:"Submit",onClick:t[3]||(t[3]=t=>e.submitInput()),loading:e.loading},null,8,["loading"])]),e.response?((0,a.wg)(),(0,a.iD)("article",g,[(0,a._)("h1",h,(0,l.zw)(e.response["title"]),1),w,(0,a._)("ul",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.response["ingredients"],(e=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,l.zw)(e),1)))),128))]),b,(0,a._)("ul",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.response["prep"],(e=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,l.zw)(e),1)))),128))])])):(0,a.kq)("",!0),(0,a._)("article",_,[(0,a.Wm)(U,{bordered:"",separator:"",class:"rounded-borders"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.getRecipes,((t,n)=>((0,a.wg)(),(0,a.j4)(L,{key:n,ref_for:!0,ref:"printcontent"},{header:(0,a.w5)((()=>[(0,a.Wm)(D,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{icon:"kitchen",color:"primary","text-color":"white"})])),_:1}),(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.title),1)])),_:2},1024)])),default:(0,a.w5)((()=>[(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(R,{class:"q-pb-0"},{default:(0,a.w5)((()=>[v,(0,a._)("ul",q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t["ingredients"],(e=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,l.zw)(e),1)))),128))]),C,(0,a._)("ul",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t["prep"],(e=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,l.zw)(e),1)))),128))])])),_:2},1024),(0,a._)("div",k,[e.label?((0,a.wg)(),(0,a.iD)("div",x,[H,(0,a.Wm)($,{name:"smart_toy",size:"sm",class:"q-pl-sm",color:"grey"})])):(0,a.kq)("",!0),(0,a._)("div",W,[(0,a.Wm)(Z,{round:"",color:"blue-4",icon:"share",onClick:n=>e.share(t)},null,8,["onClick"]),(0,a.Wm)(Z,{round:"",color:"light-green-4 q-mx-sm",icon:"share",onClick:n=>e.share2(t)},null,8,["onClick"]),(0,a.Wm)(Z,{round:"",color:"grey-5",icon:"content_copy",onClick:a=>e.share3(t,n),ref_for:!0,ref:"btn"},null,8,["onClick"])])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])}n(9665);var S=n(499),$=n(3100);const z=["Agua","Tu carita bonita","Tu lindo trasero","Tomate","Anchoa","Lechuga","Manzana","Ron","Calamar","Carne de bebé","Cristales rotos","Tornillos","Cigarros","Pan","Miel","el espíritu de Galicia","tu triste infancia","cuchillo de carnicero","esperanza","Barcelona","Entrecot","Pimienta","Nata líquida","queso Roquefort"],D=(0,a.aZ)({name:"MainLayout",setup(){const e=(0,S.iH)(null),t=(0,S.iH)(null),l=(0,S.iH)(null),o=(0,S.iH)(null),i="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",s="https://api.openai.com/v1/completions",r=JSON.parse('{ "title": "Ensalada de Tonmate, Anchoa y Manicomio", "ingredients": [ "Tomate", "Anchoa", "Lechuga", "Aceite de Oliva", "Vinagre de Manzana", "Sal", "Pimienta" ], "prep": [ "Cortar los tomates en rodajas finas.", "Cortar la lechuga en juliana.", "En un bol, mezclar los ingredientes cortados con las anchoas.", "Añadir aceite de oliva, vinagre de manszanna, sal y pimienta al gusto.", "Mezclar bien los ingredientes.", "Servir la ensalada en un plato." ] }'),c=(0,$.oR)(),d=(0,a.Fl)((()=>c.state.recipes["ingredients"])),p=(0,a.Fl)((()=>c.state.recipes["recipes"])),u=(0,S.iH)(z),m=(0,S.iH)(!0);return(0,a.bv)((()=>{d.value.length||c.dispatch("recipes/action_setIngredients",z)})),{courseDiv:o,label:m,text:(0,S.iH)(""),selected:(0,S.iH)([]),showList:(0,S.iH)(!1),response:(0,S.iH)(null),loading:(0,S.iH)(!1),getRecipes:p,maxIngredientsOptions:(0,S.iH)(20),inputValue:(0,S.iH)(""),qSelect:e,printcontent:l,customSelect:t,getIngredients:d,test3:(0,S.iH)(r),filterOptions:u,handleUpdateInputValue(e){this.inputValue=e},deleteIngredient(e){let t=d.value.indexOf(e);d.value.splice(t,1),c.dispatch("recipes/action_setIngredients",d.value)},manuallyAddIngredient(){console.log(d.value.length),this.inputValue.length&&d.value.length<20&&(this.$refs.qSelect.add(this.inputValue),c.dispatch("recipes/action_addIngredient",this.inputValue),this.$refs.qSelect.updateInputValue(""),this.$refs.qSelect.focus())},tst6(){let e=Math.floor(5*Math.random())+1,t=5-e;console.log("💛".repeat(e)+"🖤".repeat(t))},share3s(e,t){console.log(e,t,this.$refs.btn[t].$el),console.log(this.$refs.printcontent)},async share3(e,t){const a=this.$refs.printcontent[t].$el;console.log("printing..",this.$refs.printcontent[0].$parent.$parent);const l={type:"dataURL"},o=n(4052),i=await o(a,l),s=document.createElement("a");s.setAttribute("download","download.png"),s.setAttribute("href",i.toDataURL("image/png"));const r=await fetch(s),c=await r.blob();await navigator.clipboard.write([new ClipboardItem({"image/png":c})]),console.log("done")},share(e){console.log(e["prep"][0]),console.log(e["ingredients"].join("-"));let t=`He hecho' ${e.title}' con robochef\n`,n=Math.floor(5*Math.random())+1,a=5-n,l="💛".repeat(n)+"🤍".repeat(a)+"\n",o=t+"\n"+l+"\n🍕 Ñam!\n\n";console.log(o.length),window.open("https://twitter.com/intent/tweet?url="+encodeURIComponent("robo-chef-ai.netlify.app")+"&text=🤖 "+encodeURIComponent(o.substring(0,250)))},share2(e){let t=`He hecho *${e.title}* con robochef`,n=e["ingredients"].map((e=>`•${e}`)).join("\n"),a=e["prep"].map((e=>`•${e}`)).join("\n"),l=t+"\n *Ingredientes:*"+n+"\n *Preparación*"+a+" "+encodeURIComponent("https://robo-chef-ai.netlify.app/#/");window.open(`https://wa.me/?text=${l}`)},createValue(e,t){e.length>0&&d.value.length<20&&(z.includes(e)||(z.push(e),c.dispatch("recipes/action_addIngredient",e)),t(e,"toggle"))},filterFn(e,t){t((()=>{if(""===e)u.value=d.value;else{const t=e.toLowerCase();u.value=d.value.filter((e=>e.toLowerCase().indexOf(t)>-1))}}))},removeIngredient(e,t){this.selected.splice(t,1)},test2(){console.log(p.value),console.log(d.value)},submitInput(){console.log(this.selected),this.showList=!0,this.response=null,this.requestAPI()},async requestAPI(){const e=this.selected;this.loading=!0;const t=await fetch(s,{model:"text-davinci-003",method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({model:"text-davinci-003",prompt:`Eres un cocinero robot experto. Recibes un array de ingredientes :${e} y das una receta directamente. Añade los ingredientes que quieras. No das explicaciones, no saludas, no te despides, solo das la receta directamente. Divide cada paso de la preparación. No muestres otra cosa que el título de la receta, ingredientes y preparación en forma de objeto JSON completo y válido, cuyas propiedades se llaman title, ingredients y prep.`,temperature:.7,max_tokens:256,top_p:1,frequency_penalty:0,presence_penalty:0})}),n=await t.json();this.loading=!1;try{this.response=JSON.parse(n.choices[0].text),c.dispatch("recipes/action_setRecipes",this.response)}catch(a){alert("Something Went Wrong try again"),this.requestAPI()}console.log(this.response)}}}});var V=n(1639),Z=n(2857),j=n(7554),P=n(490),R=n(1233),Q=n(3115),L=n(9379),U=n(7691),O=n(3246),T=n(9542),M=n(1357),N=n(4458),E=n(3190),F=n(2146),K=n(9984),B=n.n(K);const J=(0,V.Z)(D,[["render",A],["__scopeId","data-v-6234cc10"]]),Y=J;B()(D,"components",{QIcon:Z.Z,QSelect:j.Z,QItem:P.Z,QItemSection:R.Z,QItemLabel:Q.Z,QBtn:L.Z,QChip:U.Z,QList:O.Z,QExpansionItem:T.Z,QAvatar:M.Z,QCard:N.Z,QCardSection:E.Z}),B()(D,"directives",{ClosePopup:F.Z})}}]);