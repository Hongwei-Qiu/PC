webpackJsonp([9],{QlWu:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mvHQ"),n=i.n(a),s=i("ZMHN"),o=i("lKwb"),r={components:{},data:function(){return{inputtext:{typew:"",mobile:"",password:"",open:!1,value3:""}}},methods:{handleClick:function(){this.open=!this.open},handleChange:function(t){this.value3=t,console.log(t)},handleClear:function(){this.open=!1},handleOk:function(){this.open=!1},submit:function(){var t=this;if(""==this.inputtext.typew)return this.$Toast({message:"角色不能为空",duration:1200}),!1;if(""==this.inputtext.mobile)return this.$Toast({message:"账号不能为空",duration:1200}),!1;if(""==this.inputtext.password)return this.$Toast({message:"密码不能为空",duration:1200}),!1;var e=this.inputtext.mobile,i=this.inputtext.password,a=this.inputtext.typew,r=this.$md5("appid="+o.a.appid+"&mobile="+e+"&password="+i+"&timeStamp="+o.a.timeStamp+"&type="+a+o.a.appsecret);this.$post(o.a.root+o.a.login,{appid:o.a.appid,mobile:e,password:i,type:a,timeStamp:o.a.timeStamp,sign:r,active:o.a.active}).then(function(e){if(400==e.code)return t.$Toast({message:e.msg,duration:1200}),!1;if(402==e.code)return t.$Toast({message:"账号或密码错误",duration:1200}),!1;if(403==e.code)return t.$Toast({message:"账号已被禁用",duration:1200}),!1;e.code;var i=new Object;i.token=e.data.token,i.type=e.data.type;var a=n()(i);t.$store.commit(s.a,a),t.$Toast({message:"登录成功",duration:1e3}),1==e.data.type&&setTimeout(function(){t.$router.push("/caigou_index")},1500),2==e.data.type&&setTimeout(function(){t.$router.push("/gongying_index")},1500),3==e.data.type&&setTimeout(function(){t.$router.push("/shiji_index")},1500),4==e.data.type&&setTimeout(function(){t.$router.push("/yewu_index")},1500),5==e.data.type&&setTimeout(function(){t.$router.push("/guanli_index")},1500)})}},created:function(){var t=this,e=(this.$route.name,this),i=localStorage.getItem("token"),a=JSON.parse(i);if(null!=a)1==a.type&&this.$router.push("/caigou_index"),2==a.type&&this.$router.push("/gongying_index"),3==a.type&&this.$router.push("/shiji_index"),4==a.type&&this.$router.push("/yewu_index"),5==a.type&&this.$router.push("/guanli_index");else{var n=this.$md5("appid="+o.a.appid+"&timeStamp="+o.a.timeStamp+o.a.appsecret);this.$get(o.a.root+o.a.roleType,{appid:o.a.appid,timeStamp:o.a.timeStamp,sign:n}).then(function(i){if(403==i.code)return t.$router.push("/contact"),!1;if(200==i.code){var a=i.data;new MobileSelect({trigger:"#trigger1",title:"",wheels:[{data:a}],position:[0],transitionEnd:function(t,e){},callback:function(t,i){3==i[0].id?(e.inputtext.mobile="",e.inputtext.password="",$("#triggws").attr("readonly",!0),$(".adminislo_iw").show(),e.$get(o.a.root+o.a.cart,{appid:o.a.appid,timeStamp:o.a.timeStamp,sign:n}).then(function(t){var i=t.data;new MobileSelect({trigger:"#triggws",title:"",wheels:[{data:i}],position:[0],transitionEnd:function(t,e){},callback:function(t,i){e.inputtext.mobile=i[0].value}})})):($(".mobileSelect:eq(1)").remove(),$("#triggws").removeAttr("readonly"),$(".adminislo_iw").hide(),e.inputtext.mobile="",e.inputtext.password=""),$("#trigger1").val(i[0].value),e.inputtext.typew=i[0].id}})}})}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"main"},[t._m(0),t._v(" "),i("section",{staticClass:"adminis_tih"}),t._v(" "),i("section",{staticClass:"adminis_gd"}),t._v(" "),i("article",{staticClass:"adminislo"},[i("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("ol",[i("li",[i("cite",[t._v("角色：")]),t._v(" "),t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext.typew,expression:"inputtext.typew"}],attrs:{type:"hidden",name:"typew",readonly:""},domProps:{value:t.inputtext.typew},on:{input:function(e){e.target.composing||t.$set(t.inputtext,"typew",e.target.value)}}}),t._v(" "),i("input",{attrs:{type:"text",placeholder:"请选择角色",autocomplete:"off",id:"trigger1",readonly:""}})]),t._v(" "),i("li",[i("cite",[t._v("账号：")]),t._v(" "),t._m(2),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext.mobile,expression:"inputtext.mobile"}],attrs:{type:"text",name:"mobile",placeholder:"请输入账号",id:"triggws",autocomplete:"off"},domProps:{value:t.inputtext.mobile},on:{input:function(e){e.target.composing||t.$set(t.inputtext,"mobile",e.target.value)}}})]),t._v(" "),i("li",[i("cite",[t._v("密码：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext.password,expression:"inputtext.password"}],attrs:{type:"password",name:"password",placeholder:"请输入密码",autocomplete:"off"},domProps:{value:t.inputtext.password},on:{input:function(e){e.target.composing||t.$set(t.inputtext,"password",e.target.value)}}})])]),t._v(" "),t._m(3)])]),t._v(" "),i("section",{staticClass:"clear"}),t._v(" "),[i("DatePicker",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择日期",open:t.open,value:t.value3,type:"date"},on:{"on-change":t.handleChange,"on-clear":t.handleClear,"on-ok":t.handleOk}})]],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"adminis_ti"},[e("section",{staticClass:"adminis_tio"},[this._v("登录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"adminislo_i"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"adminislo_i adminislo_iw",staticStyle:{display:"none"}},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"adminis_button_m"},[e("button",{staticClass:"adminis_button",attrs:{type:"submit"}},[this._v("登录")])])}]},u=i("VU/8")(r,p,!1,null,null,null);e.default=u.exports}});