function _defineProperties(n,l){for(var t=0;t<l.length;t++){var u=l[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{yfYS:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J"),o=function n(){_classCallCheck(this,n)},e=t("pMnS"),i=t("s7LF"),a=t("SVse"),r=function(){function n(l,t,u){_classCallCheck(this,n),this.router=l,this.studentservice=t,this.facultyservice=u,this.tile=1,this.login=!1}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"studentlogin",value:function(){var n=this;this.studentservice.login({username:this.username,password:this.password}).subscribe((function(l){l.data.length>=1&&(localStorage.setItem("student",l.data[0]._id),n.router.navigate(["/student"]))}))}},{key:"teacherlogin",value:function(){var n=this;this.facultyservice.login({username:this.username,password:this.password}).subscribe((function(l){l.data.length>=1&&(localStorage.setItem("teacher",l.data[0]._id),n.router.navigate(["/teacher"]))}))}}]),n}(),c=t("iInd"),s=t("ZvwH"),b=t("7NEa"),g=u.rb({encapsulation:0,styles:[[".btn-custom[_ngcontent-%COMP%]{min-width:100px!important;border-radius:2px!important;font-weight:800}.btn-custom[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000;border:2px solid #463e63}.card[_ngcontent-%COMP%]{overflow:hidden!important}.fire[_ngcontent-%COMP%]{z-index:1000!important;background-image:url(selective-focus-photography-of-bookshelf-with-books-1370296.53c7383fdb98be48984e.jpg);background-size:cover}.bg-img[_ngcontent-%COMP%]{background-color:#372f54}.layer-inner[_ngcontent-%COMP%]{-webkit-clip-path:circle(50% at 0 0);clip-path:circle(50% at 0 0);background-color:#5c5671;position:absolute;z-index:5}.layer-outer[_ngcontent-%COMP%]{-webkit-clip-path:circle(75.7% at 0 0);clip-path:circle(75.7% at 0 0);background-color:#413863;position:absolute;z-index:1}.index-5[_ngcontent-%COMP%]{z-index:10}.bg-default[_ngcontent-%COMP%]{background-color:transparent!important}.btn-success[_ngcontent-%COMP%]{background-color:#0f033c!important;border-color:transparent!important}.btn-success.focus[_ngcontent-%COMP%], .btn-success[_ngcontent-%COMP%]:focus{box-shadow:none!important}.logo-container[_ngcontent-%COMP%]{POSITION:absolute;top:45%;left:50%;transform:translate(-50%,-50%);color:#1b53a0;width:350px}.pattern-1[_ngcontent-%COMP%]{min-height:100vh;-webkit-clip-path:polygon(30% 0,100% 0,100% 100%,0 100%);clip-path:polygon(30% 0,100% 0,100% 100%,0 100%);background-color:#1b53a0;color:#fff}.pattern-2[_ngcontent-%COMP%]{min-height:100vh}.access-control[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}button[_ngcontent-%COMP%]{box-shadow:none!important;outline:0}.btn-primary[_ngcontent-%COMP%]{min-width:250px;height:50px;border:1px solid #fff;background:#1b53a0;transition:.2s}.btn-primary[_ngcontent-%COMP%]:hover{background:#fff;border:1px solid #fff;color:#1b53a0}.btn-primary[_ngcontent-%COMP%]:active{background:#fff!important;border:1px solid #fff;color:#1b53a0!important}.btn-main[_ngcontent-%COMP%]{min-width:200px;height:50px;border:1px solid #1b53a0;background:#fff;color:#1b53a0;transition:.2s}.btn-main[_ngcontent-%COMP%]:hover{border:1px solid #fff;background:#fff0;color:#fff}button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:13px}.form-control[_ngcontent-%COMP%]{border:none;outline:0;box-shadow:none;min-width:250px;height:45px}@media(max-width:992px){.logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;text-align:center}}@media(max-width:767px){.pattern-1[_ngcontent-%COMP%]{min-height:60vh;-webkit-clip-path:inherit;clip-path:inherit;position:relative}.pattern-2[_ngcontent-%COMP%]{min-height:40vh;position:relative}.logo-container[_ngcontent-%COMP%]{right:inherit;left:50%;transform:translate(-50%,-50%);text-align:center;width:90%}.logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}}@media(max-height:567px){.pattern-2[_ngcontent-%COMP%]{min-height:200px}.pattern-1[_ngcontent-%COMP%]{min-height:calc(100vh - 200px);height:auto;padding:20px}.access-control[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;transform:translate(-50%,-50%)}.btn-main[_ngcontent-%COMP%]{margin:auto}}"]],data:{}});function d(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,6,"div",[["class","access-control"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,2,"button",[["class","btn btn-main d-block mb-3"]],null,[[null,"click"]],(function(n,l,t){var u=!0,o=n.component;return"click"===l&&(o.login=!o.login,u=!1!==(o.tile=2)&&u),u}),null,null)),(n()(),u.tb(2,0,null,null,0,"i",[["class","fas fa-chalkboard-teacher"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["Teacher Login"])),(n()(),u.tb(4,0,null,null,2,"button",[["class","btn btn-main d-block mb-3"]],null,[[null,"click"]],(function(n,l,t){var u=!0,o=n.component;return"click"===l&&(o.login=!o.login,u=!1!==(o.tile=1)&&u),u}),null,null)),(n()(),u.tb(5,0,null,null,0,"i",[["class","fas fa-user-graduate"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["Student Login"]))],null,null)}function p(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,2,"div",[["class","d-block text-center"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.studentlogin()&&u),u}),null,null)),(n()(),u.Lb(-1,null,["Login"]))],null,null)}function f(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,2,"div",[["class","d-block text-center"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.teacherlogin()&&u),u}),null,null)),(n()(),u.Lb(-1,null,["Login"]))],null,null)}function h(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,27,"div",[["class","login-form"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,1,"div",[["class","col px-0 text-primary mb-3"]],null,null,null,null,null)),(n()(),u.tb(2,0,null,null,0,"i",[["class","fas fa-arrow-left bg-light py-2 px-2 rounded-circle shadow-sm"]],null,[[null,"click"]],(function(n,l,t){var u=!0,o=n.component;return"click"===l&&(u=0!=(o.login=!o.login)&&u),u}),null,null)),(n()(),u.tb(3,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u.tb(4,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["Username"])),(n()(),u.tb(6,0,null,null,5,"input",[["aria-describedby","emailHelp"],["class","form-control"],["id","exampleInputEmail1"],["placeholder","Username"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var o=!0,e=n.component;return"input"===l&&(o=!1!==u.Fb(n,7)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==u.Fb(n,7).onTouched()&&o),"compositionstart"===l&&(o=!1!==u.Fb(n,7)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u.Fb(n,7)._compositionEnd(t.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.username=t)&&o),o}),null,null)),u.sb(7,16384,null,0,i.c,[u.D,u.k,[2,i.a]],null,null),u.Ib(1024,null,i.g,(function(n){return[n]}),[i.c]),u.sb(9,671744,null,0,i.j,[[8,null],[8,null],[8,null],[6,i.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Ib(2048,null,i.h,null,[i.j]),u.sb(11,16384,null,0,i.i,[[4,i.h]],null,null),(n()(),u.tb(12,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u.tb(13,0,null,null,1,"label",[["for",""]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["Password"])),(n()(),u.tb(15,0,null,null,5,"input",[["class","form-control"],["id","exampleInputPassword1"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var o=!0,e=n.component;return"input"===l&&(o=!1!==u.Fb(n,16)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==u.Fb(n,16).onTouched()&&o),"compositionstart"===l&&(o=!1!==u.Fb(n,16)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u.Fb(n,16)._compositionEnd(t.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.password=t)&&o),o}),null,null)),u.sb(16,16384,null,0,i.c,[u.D,u.k,[2,i.a]],null,null),u.Ib(1024,null,i.g,(function(n){return[n]}),[i.c]),u.sb(18,671744,null,0,i.j,[[8,null],[8,null],[8,null],[6,i.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Ib(2048,null,i.h,null,[i.j]),u.sb(20,16384,null,0,i.i,[[4,i.h]],null,null),(n()(),u.tb(21,0,null,null,2,"div",[["class","d-block text-right mt-1 mb-3"]],null,null,null,null,null)),(n()(),u.tb(22,0,null,null,1,"a",[["class","text-light"],["href",""]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["Forget password?"])),(n()(),u.ib(16777216,null,null,1,null,p)),u.sb(25,16384,null,0,a.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,f)),u.sb(27,16384,null,0,a.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,9,0,t.username),n(l,18,0,t.password),n(l,25,0,1===t.tile),n(l,27,0,2===t.tile)}),(function(n,l){n(l,6,0,u.Fb(l,11).ngClassUntouched,u.Fb(l,11).ngClassTouched,u.Fb(l,11).ngClassPristine,u.Fb(l,11).ngClassDirty,u.Fb(l,11).ngClassValid,u.Fb(l,11).ngClassInvalid,u.Fb(l,11).ngClassPending),n(l,15,0,u.Fb(l,20).ngClassUntouched,u.Fb(l,20).ngClassTouched,u.Fb(l,20).ngClassPristine,u.Fb(l,20).ngClassDirty,u.Fb(l,20).ngClassValid,u.Fb(l,20).ngClassInvalid,u.Fb(l,20).ngClassPending)}))}function m(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,11,"div",[["class","container-fluid p-0"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,10,"div",[["class","row m-0"]],null,null,null,null,null)),(n()(),u.tb(2,0,null,null,4,"div",[["class","col-md-5 pattern-2"]],null,null,null,null,null)),(n()(),u.tb(3,0,null,null,3,"div",[["class","logo-container text-center"]],null,null,null,null,null)),(n()(),u.tb(4,0,null,null,0,"img",[["alt",""],["class","mb-3"],["src","../../../assets/img/logo.png"]],null,null,null,null,null)),(n()(),u.tb(5,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,["M.G.M International"])),(n()(),u.tb(7,0,null,null,4,"div",[["class","col-md-7 pattern-1"]],null,null,null,null,null)),(n()(),u.ib(16777216,null,null,1,null,d)),u.sb(9,16384,null,0,a.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,h)),u.sb(11,16384,null,0,a.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,9,0,!t.login),n(l,11,0,t.login)}),null)}var C=u.pb("app-layout",r,(function(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,1,"app-layout",[],null,null,null,m,g)),u.sb(1,114688,null,0,r,[c.k,s.a,b.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),v=function n(){_classCallCheck(this,n)};t.d(l,"LandingModuleNgFactory",(function(){return _}));var _=u.qb(o,[],(function(n){return u.Cb([u.Db(512,u.j,u.bb,[[8,[e.a,C]],[3,u.j],u.w]),u.Db(4608,a.m,a.l,[u.t,[2,a.x]]),u.Db(4608,i.q,i.q,[]),u.Db(1073742336,a.c,a.c,[]),u.Db(1073742336,i.p,i.p,[]),u.Db(1073742336,i.e,i.e,[]),u.Db(1073742336,c.o,c.o,[[2,c.t],[2,c.k]]),u.Db(1073742336,v,v,[]),u.Db(1073742336,o,o,[]),u.Db(1024,c.i,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);