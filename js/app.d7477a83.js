(function(){"use strict";var t={8283:function(t,e,o){var s=o(5130),n=o(6768),r=o(6450),a=o(8477),l=o(9562);function c(t,e,o,s,c,i){const u=(0,n.g2)("router-view"),d=(0,n.g2)("side-bar"),f=(0,n.g2)("app-bar");return(0,n.uX)(),(0,n.Wv)(r.E,null,{default:(0,n.k6)((()=>[(0,n.bF)(a.Y,null,{default:(0,n.k6)((()=>[(0,n.bF)(u,null,{default:(0,n.k6)((({Component:t,route:e})=>[(0,n.bF)(l.vt,{mode:"out-in"},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.CE)("div",{key:e.name},[((0,n.uX)(),(0,n.Wv)((0,n.$y)(t)))]))])),_:2},1024)])),_:1})])),_:1}),(0,n.bF)(d),(0,n.bF)(f)])),_:1})}var i=o(8353),u=o(3524),d=o(9827),f=o(6756),p=o(5526);const k=(0,n.Lk)("span",{class:"text-h6 text-body-1 text-grey-darken-2 text-spacing-1"},"About",-1),b=(0,n.Lk)("span",{class:"text-h6 text-body-1 text-grey-darken-2 text-spacing-1"},"Works",-1),m=(0,n.Lk)("span",{class:"text-body-1 text-grey-darken-2 text-spacing-1"},"Contact",-1);function g(t,e,o,s,r,a){return a.showAppBar?((0,n.uX)(),(0,n.Wv)(u.z,{key:0,flat:"",floating:"",class:"v-toolbar--blur"},{default:(0,n.k6)((()=>[t.mdAndUp?((0,n.uX)(),(0,n.Wv)(f.L,{key:0,"no-gutters":"",justify:"end",class:"py-2"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:"auto",class:"text-center my-2"},{default:(0,n.k6)((()=>[(0,n.bF)(d.D,{flat:"",color:"background",onClick:e[0]||(e[0]=t=>a.scrollToAboutme())},{default:(0,n.k6)((()=>[k])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:"auto",class:"text-center my-2"},{default:(0,n.k6)((()=>[(0,n.bF)(d.D,{flat:"",color:"background",onClick:e[1]||(e[1]=t=>a.scrollToWorks())},{default:(0,n.k6)((()=>[b])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:"auto",class:"text-center my-2"},{default:(0,n.k6)((()=>[(0,n.bF)(d.D,{flat:"",color:"background",onClick:e[2]||(e[2]=t=>a.scrollToContact())},{default:(0,n.k6)((()=>[m])),_:1})])),_:1})])),_:1})):(0,n.Q3)("",!0)])),_:1})):(0,n.Q3)("",!0)}o(4114);var h=o(782),x={name:"AppBar",data:()=>({...(0,i._F)()}),computed:{...(0,h.aH)({position:t=>t.position}),showAppBar(){if(this.mdAndUp)return!0;const{name:t}=this.$route;return"home"!==t},routeHome(){console.log(this.$route.name);const{name:t}=this.$route;return"home"===t}},methods:{...(0,h.PY)({setScrollToAfterEach:"setScrollToAfterEach"}),goBackAndScroll(t){this.setScrollToAfterEach(t),this.$router.push({name:"home"})},scrollToAboutme(){const{aboutme:t}=this.position;if(!1===this.routeHome)return this.goBackAndScroll("aboutme");window.scrollTo({top:t,behavior:"smooth"})},scrollToWorks(){const{works:t}=this.position;if(!1===this.routeHome)return this.goBackAndScroll("works");window.scrollTo({top:t,behavior:"smooth"})},scrollToContact(){const{contact:t}=this.position;if(!1===this.routeHome)return this.goBackAndScroll("contact");window.scrollTo({top:t,behavior:"smooth"})}}},y=o(1241);const F=(0,y.A)(x,[["render",g]]);var _=F,v=o(9669),B=o(6938),A=o(1721),w=o(2585);const T=(0,n.Lk)("span",{class:"text-body-2 text-grey-darken-3 text-spacing-1"},"About",-1),W=(0,n.Lk)("span",{class:"text-body-2 text-grey-darken-3 text-spacing-1"},"Works",-1),C=(0,n.Lk)("span",{class:"text-body-2 text-grey-darken-3 text-spacing-1"},"Contact",-1);function L(t,e,o,s,r,a){return(0,n.uX)(),(0,n.Wv)(w.e,{width:t.menu?120:40,location:"right",color:"background",permanent:"",floating:""},(0,n.eX)({append:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"py-3",justify:"end"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:"auto",class:"text-subheading text-spacing-2 text-rotate text-vertical text-grey-darken-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" CHANON's ")])),_:1})])),_:1})])),default:(0,n.k6)((()=>[(0,n.bF)(l.vt,{mode:"out-in"},{default:(0,n.k6)((()=>[t.menu&&t.smAndDown?((0,n.uX)(),(0,n.Wv)(B.x8,{key:0,density:"compact",nav:""},{default:(0,n.k6)((()=>[(0,n.bF)(A.g,{class:"cursor-pointer",onClick:e[1]||(e[1]=t=>a.scrollToAboutme())},{default:(0,n.k6)((()=>[T])),_:1}),(0,n.bF)(A.g,{class:"cursor-pointer",onClick:e[2]||(e[2]=t=>a.scrollToWorks())},{default:(0,n.k6)((()=>[W])),_:1}),(0,n.bF)(A.g,{class:"cursor-pointer",onClick:e[3]||(e[3]=t=>a.scrollToContact())},{default:(0,n.k6)((()=>[C])),_:1})])),_:1})):(0,n.Q3)("",!0)])),_:1})])),_:2},[t.smAndDown?{name:"prepend",fn:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"py-3"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-right"},{default:(0,n.k6)((()=>[(0,n.bF)(d.D,{icon:"",flat:"",size:"small",color:"background",onClick:e[0]||(e[0]=e=>t.menu=!t.menu)},{default:(0,n.k6)((()=>[(0,n.bF)(v.w,{size:"24",color:"grey-darken-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" fas fa-grip-lines ")])),_:1})])),_:1})])),_:1})])),_:1})])),key:"0"}:void 0]),1032,["width"])}var E={name:"SideBar",data:()=>({...(0,i._F)(),menu:!1}),computed:{...(0,h.aH)({position:t=>t.position}),routeHome(){const{name:t}=this.$route;return"home"===t}},methods:{...(0,h.PY)({setScrollToAfterEach:"setScrollToAfterEach"}),goBackAndScroll(t){this.setScrollToAfterEach(t),this.$router.push({name:"home"})},scrollToAboutme(){const{aboutme:t}=this.position;if(this.menu=!1,!1===this.routeHome)return this.goBackAndScroll("aboutme");setTimeout((()=>{window.scrollTo({top:t,behavior:"smooth"})}),300)},scrollToWorks(){const{works:t}=this.position;if(this.menu=!1,!1===this.routeHome)return this.goBackAndScroll("works");setTimeout((()=>{window.scrollTo({top:t,behavior:"smooth"})}),300)},scrollToContact(){const{contact:t}=this.position;if(this.menu=!1,!1===this.routeHome)return this.goBackAndScroll("contact");setTimeout((()=>{window.scrollTo({top:t,behavior:"smooth"})}),300)}}};const S=(0,y.A)(E,[["render",L]]);var P=S,j={name:"App",components:{AppBar:_,SideBar:P},data:()=>({...(0,i._F)()})};const H=(0,y.A)(j,[["render",c]]);var D=H,$=o(1387);function O(t,e,o,s,r,a){const l=(0,n.g2)("profile"),c=(0,n.g2)("about-me"),i=(0,n.g2)("skills"),u=(0,n.g2)("works"),d=(0,n.g2)("contact");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(l,{ref:"profile"},null,512),(0,n.bF)(c,{ref:"aboutme"},null,512),(0,n.bF)(i),(0,n.bF)(u,{ref:"works"},null,512),(0,n.bF)(d,{ref:"contact"},null,512)],64)}var X=o(4232),U=o(3813),I=o(307);function M(t,e,o,s,r,a){return(0,n.uX)(),(0,n.Wv)(U.I,{id:"profile",fluid:"",class:"pa-0"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{style:(0,X.Tr)(a.fixedHeadingHeight),cols:12,md:11,"offset-md":1,class:"pl-10 px-md-0"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"fill-height","align-content":"center","align-content-md":"start"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-spacing-1 text-h4 py-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" Chanon Chanchamla ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-spacing-1 text-grey-darken-3 text-h6"},{default:(0,n.k6)((()=>[(0,n.eW)(" Front-End Developer. ")])),_:1})])),_:1})])),_:1},8,["style"]),(0,n.bF)(p.B,{style:(0,X.Tr)(a.fixedProfileHeight),cols:12,class:"bg-clean-sky"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",justify:"center",align:"end",class:"fill-height"},{default:(0,n.k6)((()=>[(0,n.bF)(I.y,{src:t.faceImage,"max-height":90*t.height/100,height:"85%",position:"top center"},null,8,["src","max-height"])])),_:1})])),_:1},8,["style"])])),_:1})])),_:1})}var z=o.p+"img/img5567.2757124a.png",N={name:"HelloWorld",data:()=>({faceImage:z,...(0,i._F)()}),computed:{fixedHeadingHeight(){const t=this.mobile?35:30;let e=this.height*t/100;return e<=170&&this.mdAndUp?"":(this.mdAndUp&&(e-=64),{height:`${e}px`,maxHeight:`${e}px`})},fixedProfileHeight(){const t=this.mobile?65:70,e=this.height*t/100;return e<=400&&this.mdAndUp?"":{height:`${e}px`,maxHeight:`${e}px`}}}};const Y=(0,y.A)(N,[["render",M],["__scopeId","data-v-09e532a0"]]);var V=Y,Q=o(4220);const G=(0,n.Lk)("p",{class:"text-body-1 text-grey-darken-2 text-indent-1 text-lg-center"}," สวัสดีครับ ผมชานนท์ จันทร์แจ่มหล้า รักในการเขียน Front-End และออกแบบ UX/UI ประสบการณ์ 8 ปี ในการสร้างและออกแบบ Responsive Website ที่ใช้งานได้ง่าย เชี่ยวชาญภาษา HTML, CSS, JavaScript, Vue.js และใช้ Figma เป็นเครื่องมือออกแบบ UX/UI ",-1);function R(t,e,o,s,r,a){return(0,n.bo)(((0,n.uX)(),(0,n.Wv)(U.I,{ref:"aboutme",fluid:"",class:"px-0 pb-8 pt-16"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,sm:11,"offset-sm":1,class:"pl-10 pr-0 pl-sm-6 pr-sm-6 pr-md-16"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-spacing-1 text-h3 text-grey-darken-3 text-center pt-12 pb-8"},{default:(0,n.k6)((()=>[(0,n.eW)(" About ")])),_:1})])),_:1}),(0,n.bF)(f.L,{"no-gutters":"",class:"py-6"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"pr-0 pr-md-6"},{default:(0,n.k6)((()=>[G])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})),[[Q.r,a.setPosition]])}var J={name:"AboutMe",data:()=>({...(0,i._F)()}),mounted(){this.setPosition()},methods:{...(0,h.PY)({setPositionAboutme:"setPositionAboutme"}),setPosition(){const{offsetTop:t}=this.$refs.aboutme.$el;if(this.mdAndUp)return this.setPositionAboutme(t);this.setPositionAboutme(t+50)}}};const q=(0,y.A)(J,[["render",R]]);var K=q;function Z(t,e,o,s,r,a){return(0,n.uX)(),(0,n.Wv)(U.I,{id:"skill",fluid:"",class:"px-0 py-8"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,sm:11,"offset-sm":1,class:"pl-10 pr-0 pl-sm-0 pr-sm-0 pr-md-10"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-spacing-1 text-h3 text-grey-darken-3 text-center pt-6"},{default:(0,n.k6)((()=>[(0,n.eW)(" Skills ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"py-4"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,sm:6,md:4,class:"py-7"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center text-h6 text-grey-darken-1 py-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" DESIGN ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center pt-5 pb-6"},{default:(0,n.k6)((()=>[(0,n.bF)(v.w,{size:40,color:"grey-darken-1"},{default:(0,n.k6)((()=>[(0,n.eW)("fas fa-pen-ruler")])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-1 text-grey-darken-2 py-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" ออกแบบ UX/UI โดยคำนึงถึงความพึงพอใจของผู้ใช้งานเป็นหลัก ออกแบบอย่างเรียบง่าย เป็นระเบียบ ใช้งานได้อย่างง่ายดาย ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey"},{default:(0,n.k6)((()=>[(0,n.eW)(" :: Figma, User Centered Design, Visual Design, Human Computer Interaction, Responsive Web Design ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,sm:6,md:4,class:"py-7"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center text-h6 text-grey-darken-1 py-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" CODING ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center pt-5 pb-6"},{default:(0,n.k6)((()=>[(0,n.bF)(v.w,{size:40,color:"grey-darken-1"},{default:(0,n.k6)((()=>[(0,n.eW)("fas fa-code")])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-1 text-grey-darken-2 py-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" เข้าใจหลักการออกแบบ นำมาใช้ Coding อย่างพิถีพิถัน โครงสร้าง Code เป็นระเบียบ แยกแต่ละการทำงานเป็นฟังก์ชั่นลดความซ้ำซ้อน และรองรับการใช้งานกับอุปกรณ์ได้หลากหลาย ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey"},{default:(0,n.k6)((()=>[(0,n.eW)(" :: Vue.js, JavaScript, HTML, CSS, Vuetify, Bootstrap, PHP, Nuxt.js (basic) ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,sm:6,md:4,class:"py-7"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center text-h6 text-grey-darken-1 py-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" DEPLOY ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center pt-5 pb-6"},{default:(0,n.k6)((()=>[(0,n.bF)(v.w,{size:40,color:"grey-darken-1"},{default:(0,n.k6)((()=>[(0,n.eW)("fas fa-code-branch")])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-1 text-grey-darken-2 py-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" ตรวจสอบคุณภาพ, Review code ลดข้อผิดพลาด เพื่อส่งมอบงานที่ดีให้ผู้ใช้งาน ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey"},{default:(0,n.k6)((()=>[(0,n.eW)(" :: Git Version Control, Eslint, SonarLint ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,sm:6,md:4,class:"py-7"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center text-h6 text-grey-darken-1 py-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" DATABASE ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center pt-5 pb-6"},{default:(0,n.k6)((()=>[(0,n.bF)(v.w,{size:40,color:"grey-darken-1"},{default:(0,n.k6)((()=>[(0,n.eW)("fas fa-database")])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-1 text-grey-darken-2 py-3"},{default:(0,n.k6)((()=>[(0,n.eW)(" ตรวจสอบวิเคราะห์ข้อมูล เขียนคำสั่ง SQL และเข้าใจ Data Dictionary ")])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey"},{default:(0,n.k6)((()=>[(0,n.eW)(" :: Oracle, MySQL ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var tt={name:"MySkills",data:()=>({...(0,i._F)()})};const et=(0,y.A)(tt,[["render",Z]]);var ot=et,st=o(8520),nt=o(4830),rt=o(5719),at=o.p+"img/17.19d3bf0c.png",lt=o(6080),ct=o(6945);const it=(0,n.Lk)("span",null,"Linkage 2",-1),ut=(0,n.Lk)("span",null,"CDT HUB",-1),dt=(0,n.Lk)("span",null,"สำนักทะเบียนออนไลน์",-1),ft=(0,n.Lk)("span",null,"ทะเบียนเจ้าหน้าที่โรงพยาบาล",-1),pt=(0,n.Lk)("span",null,"ThaID",-1),kt=(0,n.Lk)("span",null,"ระบบทะเบียนราษฎร",-1);function bt(t,e,o,s,r,a){return(0,n.bo)(((0,n.uX)(),(0,n.Wv)(U.I,{ref:"works",fluid:"",class:"px-0 py-8"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,sm:11,"offset-sm":1,class:"pl-10 pr-0 pl-sm-0 pr-sm-0 pr-md-10"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-spacing-1 text-h3 text-grey-darken-3 text-center pt-6"},{default:(0,n.k6)((()=>[(0,n.eW)(" Works ")])),_:1}),(0,n.bF)(p.B,{col:12,class:"py-6"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,sm:6,lg:4,class:"py-5"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",justify:"center",class:"px-0 px-sm-6"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center py-3"},{default:(0,n.k6)((()=>[(0,n.bF)(I.y,{src:st,"aspect-ratio":"1.6",cover:"",position:"top left",width:"80%",class:"elevation-2 rounded ma-auto cursor-pointer",onClick:e[0]||(e[0]=t=>a.go("linkage"))})])),_:1}),(0,n.bF)(p.B,{cols:"auto",class:"text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer",onClick:e[1]||(e[1]=t=>a.go("linkage"))},{default:(0,n.k6)((()=>[it])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey py-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" 2024 ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,sm:6,lg:4,class:"py-5"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center py-3"},{default:(0,n.k6)((()=>[(0,n.bF)(I.y,{src:nt,"aspect-ratio":"1.6",cover:"",position:"top left",width:"80%",class:"elevation-2 rounded ma-auto cursor-pointer",onClick:e[2]||(e[2]=t=>a.go("cdthub"))})])),_:1}),(0,n.bF)(p.B,{cols:"auto",class:"text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer",onClick:e[3]||(e[3]=t=>a.go("cdthub"))},{default:(0,n.k6)((()=>[ut])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey py-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" 2023 ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,sm:6,lg:4,class:"py-5"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center py-3"},{default:(0,n.k6)((()=>[(0,n.bF)(I.y,{src:rt,"aspect-ratio":"1.6",cover:"",position:"top left",width:"80%",class:"elevation-2 rounded ma-auto cursor-pointer",onClick:e[4]||(e[4]=t=>a.go("officer"))})])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer",onClick:e[5]||(e[5]=t=>a.go("officer"))},{default:(0,n.k6)((()=>[dt])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey py-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" 2023 ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,sm:6,lg:4,class:"py-5"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center py-3"},{default:(0,n.k6)((()=>[(0,n.bF)(I.y,{src:at,"aspect-ratio":"1.6",cover:"",position:"top left",width:"80%",class:"elevation-2 rounded ma-auto cursor-pointer",onClick:e[6]||(e[6]=t=>a.go("gemp"))})])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer",onClick:e[7]||(e[7]=t=>a.go("gemp"))},{default:(0,n.k6)((()=>[ft])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey py-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" 2023 ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,sm:6,lg:4,class:"py-5"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center py-3"},{default:(0,n.k6)((()=>[(0,n.bF)(I.y,{src:lt,"aspect-ratio":"1.6",cover:"",position:"top left",width:"80%",class:"elevation-2 rounded ma-auto cursor-pointer",onClick:e[8]||(e[8]=t=>a.go("cors"))})])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer",onClick:e[9]||(e[9]=t=>a.go("cors"))},{default:(0,n.k6)((()=>[pt])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey py-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" 2022 - 2023 ")])),_:1})])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:12,sm:6,lg:4,class:"py-5"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",class:"px-0 px-sm-6",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-center py-3"},{default:(0,n.k6)((()=>[(0,n.bF)(I.y,{src:ct,"aspect-ratio":"1.6",cover:"",position:"top left",width:"80%",class:"elevation-2 rounded ma-auto cursor-pointer",onClick:e[10]||(e[10]=t=>a.go("tr31"))})])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-h6 text-grey-darken-2 pt-4 cursor-pointer",onClick:e[11]||(e[11]=t=>a.go("tr31"))},{default:(0,n.k6)((()=>[kt])),_:1}),(0,n.bF)(p.B,{cols:12,class:"text-center text-body-2 text-grey py-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" 2018 - 2024 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})),[[Q.r,a.setPosition]])}var mt={name:"MyWorks",data:()=>({...(0,i._F)()}),mounted(){this.setPosition()},methods:{...(0,h.PY)({setLastScroll:"setLastScroll",setPositionWorks:"setPositionWorks"}),setPosition(){console.log("resize");const{offsetTop:t}=this.$refs.works.$el;if(this.mdAndUp)return this.setPositionWorks(t);this.setPositionWorks(t)},go(t){const{scrollTop:e}=document.documentElement;this.setLastScroll(e),this.$router.push({name:t})}}};const gt=(0,y.A)(mt,[["render",bt]]);var ht=gt;function xt(t,e,o,s,r,a){return(0,n.bo)(((0,n.uX)(),(0,n.Wv)(U.I,{ref:"contact",fluid:"",class:"px-0 pt-8 pb-16"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,sm:11,"offset-sm":1,class:"pl-10 pr-0 pl-sm-0 pr-sm-0 pr-md-10"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:12,class:"text-spacing-1 text-h3 text-grey-darken-3 text-center pt-6 pb-5"},{default:(0,n.k6)((()=>[(0,n.eW)(" Contact ")])),_:1}),(0,n.bF)(p.B,{col:12,class:"py-6"},{default:(0,n.k6)((()=>[(0,n.bF)(f.L,{"no-gutters":"",justify:"center",align:"end"},{default:(0,n.k6)((()=>[(0,n.bF)(p.B,{cols:"auto",class:"pr-5"},{default:(0,n.k6)((()=>[(0,n.bF)(v.w,{color:"grey-darken-1"},{default:(0,n.k6)((()=>[(0,n.eW)(" fas fa-envelope ")])),_:1})])),_:1}),(0,n.bF)(p.B,{cols:"auto",class:"text-body-1 text-grey-darken-2"},{default:(0,n.k6)((()=>[(0,n.eW)(" chanon.chanch@gmail.com ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})),[[Q.r,a.setPosition]])}var yt={name:"MyContact",data:()=>({...(0,i._F)()}),mounted(){this.setPosition()},methods:{...(0,h.PY)({setPositionContact:"setPositionContact"}),setPosition(){const{offsetTop:t}=this.$refs.contact.$el;if(this.mdAndUp)return this.setPositionContact(t);this.setPositionContact(t+50)}}};const Ft=(0,y.A)(yt,[["render",xt]]);var _t=Ft,vt=(0,n.pM)({name:"HomeView",components:{Profile:V,AboutMe:K,Skills:ot,Works:ht,Contact:_t},computed:{...(0,h.aH)({lastScroll:t=>t.lastScroll,scrollToAfterEach:t=>t.scrollToAfterEach,position:t=>t.position})},mounted(){if(null==this.scrollToAfterEach)return this.scrollToPosition(this.lastScroll);const{offsetTop:t}=this.$refs[this.scrollToAfterEach].$el;return this.scrollToPosition(t-100)},methods:{scrollToPosition(t){document.documentElement.scrollTo(0,t)}}});const Bt=(0,y.A)(vt,[["render",O]]);var At=Bt;const wt=[{path:"/",name:"home",component:At},{path:"/works/cdt-hub",name:"cdthub",component:()=>o.e(118).then(o.bind(o,9205))},{path:"/works/linkage-2",name:"linkage",component:()=>o.e(740).then(o.bind(o,4791))},{path:"/works/officer",name:"officer",component:()=>o.e(872).then(o.bind(o,2461))},{path:"/works/thaid",name:"cors",component:()=>o.e(39).then(o.bind(o,3411))},{path:"/works/hospital-employee",name:"gemp",component:()=>o.e(55).then(o.bind(o,3864))},{path:"/works/civil-registration",name:"tr31",component:()=>o.e(188).then(o.bind(o,8657))}],Tt=(0,$.aE)({history:(0,$.Bt)(),routes:wt});var Wt=Tt,Ct=(0,h.y$)({state:{lastScroll:0,position:{aboutme:0,works:0,contact:0},scrollToAfterEach:null},getters:{},mutations:{setLastScroll(t,e){t.lastScroll=e},setPositionAboutme(t,e){t.position.aboutme=e},setPositionWorks(t,e){t.position.works=e},setPositionContact(t,e){t.position.contact=e},setScrollToAfterEach(t,e){t.scrollToAfterEach=e}},actions:{},modules:{}}),Lt=o(1036),Et=o(8600);const St={dark:!1,colors:{background:"#FDFDFD",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#416D6D","primary-darken-1":"#306060",secondary:"#82AFAF","secondary-darken-1":"#4C7F85",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00","clean-sky":"#E2EAEF","light-sage-green":"#A5B297","green-dried-herb":"#556246","light-green-teal":"#82AFAF","light-olive":"#808000","light-brown":"#B77332","dark-olive":"#5F6F52","green-olive":"#606C38"}};var Pt=(0,Lt.$N)({theme:{defaultSet:"fa",aliases:Et.z,sets:{fa:Et.fa},defaultTheme:"customThemeLight",themes:{customThemeLight:St}}});(0,s.Ef)(D).use(Wt).use(Ct).use(Pt).mount("#app")},6080:function(t,e,o){t.exports=o.p+"img/1.ba365060.jpg"},4830:function(t,e,o){t.exports=o.p+"img/1.541bbebc.jpg"},8520:function(t,e,o){t.exports=o.p+"img/5.e305a9fa.jpg"},5719:function(t,e,o){t.exports=o.p+"img/1.36c92d30.jpg"},6945:function(t,e,o){t.exports=o.p+"img/1.9155e6b8.png"}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,r){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],r=t[u][2];for(var l=!0,c=0;c<s.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](s[c])}))?s.splice(c--,1):(l=!1,r<a&&(a=r));if(l){t.splice(u--,1);var i=n();void 0!==i&&(e=i)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,n,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,s){return o.f[s](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/"+t+"."+{39:"4d65cad0",55:"1d4b9d10",118:"b9703fe5",188:"b493559b",740:"fd1bfe4a",872:"09be74fd"}[t]+".js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portfolio:";o.l=function(s,n,r,a){if(t[s])t[s].push(n);else{var l,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var d=i[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+r){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",e+r),l.src=s),t[s]=[n];var f=function(e,o){l.onerror=l.onload=null,clearTimeout(p);var n=t[s];if(delete t[s],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((function(t){return t(o)})),e)return e(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={524:0};o.f.j=function(e,s){var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)s.push(n[2]);else{var r=new Promise((function(o,s){n=t[e]=[o,s]}));s.push(n[2]=r);var a=o.p+o.u(e),l=new Error,c=function(s){if(o.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var r=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}};o.l(a,c,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,a=s[0],l=s[1],c=s[2],i=0;if(a.some((function(e){return 0!==t[e]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var u=c(o)}for(e&&e(s);i<a.length;i++)r=a[i],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},s=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(8283)}));s=o.O(s)})();
//# sourceMappingURL=app.d7477a83.js.map