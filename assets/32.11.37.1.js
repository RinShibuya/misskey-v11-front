(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{549:function(t,e,s){var a=s(689);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(4).default)("7947f174",a,!0,{})},550:function(t,e,s){var a=s(691);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(4).default)("3f601b23",a,!0,{})},551:function(t,e,s){var a=s(693);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(4).default)("a0afe39a",a,!0,{})},552:function(t,e,s){var a=s(695);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(4).default)("a34a8f0e",a,!0,{})},608:function(t,s,a){"use strict";var i=a(0),r=a(2),o=a(5),n=a(10),d=i.a.extend({i18n:Object(r.a)("common/views/components/user-menu.vue"),props:["user","source"],data(){let t=[{icon:["fas","at"],text:this.$t("mention"),action:()=>{this.$post({mention:this.user})}},null,{icon:["fas","list"],text:this.$t("push-to-list"),action:this.pushList}];return this.$store.getters.isSignedIn&&this.$store.state.i.id!=this.user.id&&(t=t.concat([null,{icon:this.user.isMuted?["fas","eye"]:["far","eye-slash"],text:this.user.isMuted?this.$t("unmute"):this.$t("mute"),action:this.toggleMute},{icon:"ban",text:this.user.isBlocking?this.$t("unblock"):this.$t("block"),action:this.toggleBlock},null,{icon:o.db,text:this.$t("report-abuse"),action:this.reportAbuse}])),this.$store.getters.isSignedIn&&(this.$store.state.i.isAdmin||this.$store.state.i.isModerator)&&(t=t.concat([null,{icon:o.Wb,text:this.user.isSilenced?this.$t("unsilence"):this.$t("silence"),action:this.toggleSilence},{icon:n.B,text:this.user.isSuspended?this.$t("unsuspend"):this.$t("suspend"),action:this.toggleSuspend}])),{items:t}},methods:{closed(){this.$nextTick(()=>{this.destroyDom()})},async pushList(){const t=this.$t("select-list"),e=await this.$root.api("users/lists/list"),{canceled:s,result:a}=await this.$root.dialog({type:null,title:t,select:{items:e.map(t=>({value:t.id,text:t.name}))},showCancelButton:!0});s||(await this.$root.api("users/lists/push",{listId:a,userId:this.user.id}),this.$root.dialog({type:"success",splash:!0}))},async toggleMute(){if(this.user.isMuted){if(!await this.getConfirmed(this.$t("unmute-confirm")))return;this.$root.api("mute/delete",{userId:this.user.id}).then(()=>{this.user.isMuted=!1},()=>{this.$root.dialog({type:"error",text:e})})}else{if(!await this.getConfirmed(this.$t("mute-confirm")))return;this.$root.api("mute/create",{userId:this.user.id}).then(()=>{this.user.isMuted=!0},()=>{this.$root.dialog({type:"error",text:e})})}},async toggleBlock(){if(this.user.isBlocking){if(!await this.getConfirmed(this.$t("unblock-confirm")))return;this.$root.api("blocking/delete",{userId:this.user.id}).then(()=>{this.user.isBlocking=!1},()=>{this.$root.dialog({type:"error",text:e})})}else{if(!await this.getConfirmed(this.$t("block-confirm")))return;this.$root.api("blocking/create",{userId:this.user.id}).then(()=>{this.user.isBlocking=!0},()=>{this.$root.dialog({type:"error",text:e})})}},async reportAbuse(){const t=this.$t("report-abuse-reported"),{canceled:e,result:s}=await this.$root.dialog({title:this.$t("report-abuse-detail"),input:!0});e||this.$root.api("users/report-abuse",{userId:this.user.id,comment:s}).then(()=>{this.$root.dialog({type:"success",text:t})},t=>{this.$root.dialog({type:"error",text:t})})},async toggleSilence(){await this.getConfirmed(this.$t(this.user.isSilenced?"unsilence-confirm":"silence-confirm"))&&this.$root.api(this.user.isSilenced?"admin/unsilence-user":"admin/silence-user",{userId:this.user.id}).then(()=>{this.user.isSilenced=!this.user.isSilenced,this.$root.dialog({type:"success",splash:!0})},t=>{this.$root.dialog({type:"error",text:t})})},async toggleSuspend(){await this.getConfirmed(this.$t(this.user.isSuspended?"unsuspend-confirm":"suspend-confirm"))&&this.$root.api(this.user.isSuspended?"admin/unsuspend-user":"admin/suspend-user",{userId:this.user.id}).then(()=>{this.user.isSuspended=!this.user.isSuspended,this.$root.dialog({type:"success",splash:!0})},t=>{this.$root.dialog({type:"error",text:t})})},async getConfirmed(t){return!(await this.$root.dialog({type:"warning",showCancelButton:!0,title:"confirm",text:t})).canceled}}}),c=a(1),u=Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{position:"initial"}},[e("mk-menu",{attrs:{source:this.source,items:this.items},on:{closed:this.closed}})],1)}),[],!1,null,null,null);s.a=u.exports},687:function(t,e){t.exports=function(t){var e=Object.prototype.toString.call(t),s=new Date;"[object String]"!==e&&"[object Number]"!==e||(t=new Date(t));var a=s.getFullYear()-t.getFullYear(),i=s.getMonth()-t.getMonth(),r=s.getDate()<t.getDate();return(i<0||0===i&&r)&&a--,a}},688:function(t,e,s){"use strict";var a=s(549);s.n(a).a},689:function(t,e,s){(e=s(3)(!1)).push([t.i,".zxrjzpcj[data-v-3ab53461]{display:inline-block;padding:6px 8px 6px 6px;margin-top:4px;margin-bottom:4px;border-radius:32px;white-space:nowrap}.zxrjzpcj[data-v-3ab53461]:hover{text-decoration:none}.zxrjzpcj.twitter[data-v-3ab53461]{color:#fff;background:#1da1f3}.zxrjzpcj.twitter[data-v-3ab53461]:hover{background:#0c87cf}.zxrjzpcj.github[data-v-3ab53461]{color:#fff;background:#171515}.zxrjzpcj.github[data-v-3ab53461]:hover{background:#000}.zxrjzpcj.discord[data-v-3ab53461]{color:#fff;background:#7289da}.zxrjzpcj.discord[data-v-3ab53461]:hover{background:#4968ce}",""]),t.exports=e},690:function(t,e,s){"use strict";var a=s(550);s.n(a).a},691:function(t,e,s){(e=s(3)(!1)).push([t.i,".nbogcrmo>*[data-v-22eaf0b0]{margin-right:10px}",""]),t.exports=e},692:function(t,e,s){"use strict";var a=s(551);s.n(a).a},693:function(t,e,s){(e=s(3)(!1)).push([t.i,".header[data-v-92130aaa]{background:var(--face);overflow:hidden}.header.round[data-v-92130aaa]{border-radius:6px}.header.shadow[data-v-92130aaa]{box-shadow:0 3px 8px rgba(0,0,0,.2)}.header>.banner-container[data-v-92130aaa]{height:250px;overflow:hidden;background-size:cover;background-position:50%}.header>.banner-container>.banner[data-v-92130aaa]{height:100%;background-color:#383838;background-size:cover;background-position:50%;box-shadow:inset 0 0 128px rgba(0,0,0,.5)}.header>.banner-container>.fade[data-v-92130aaa]{position:absolute;bottom:0;left:0;width:100%;height:78px;background:linear-gradient(transparent,rgba(0,0,0,.7))}.header>.banner-container>.followed[data-v-92130aaa]{position:absolute;top:12px;left:12px;padding:4px 6px;color:#fff;background:rgba(0,0,0,.7);font-size:12px}.header>.banner-container>.actions[data-v-92130aaa]{position:absolute;top:12px;right:12px}.header>.banner-container>.actions>.menu[data-v-92130aaa]{height:100%;padding:0 14px;color:#fff;text-shadow:0 0 8px #000;font-size:16px}.header>.banner-container>.title[data-v-92130aaa]{position:absolute;bottom:0;left:0;width:100%;padding:0 0 8px 154px;color:#fff}.header>.banner-container>.title>.name[data-v-92130aaa]{display:block;margin:0;line-height:32px;font-weight:700;font-size:1.8em;text-shadow:0 0 8px #000}.header>.banner-container>.title>div>*[data-v-92130aaa]{display:inline-block;margin-right:16px;line-height:20px;opacity:.8}.header>.banner-container>.title>div>.username[data-v-92130aaa]{font-weight:700}.header>.avatar[data-v-92130aaa]{display:block;position:absolute;top:170px;left:16px;z-index:2;width:120px;height:120px;box-shadow:1px 1px 3px rgba(0,0,0,.2)}>.header>.avatar.cat[data-v-92130aaa]:after,>.header>.avatar.cat[data-v-92130aaa]:before{border-width:8px}.header>.body[data-v-92130aaa]{padding:16px 16px 16px 154px;color:var(--text)}.header>.body>.description[data-v-92130aaa]{font-size:15px}.header>.body>.description>.empty[data-v-92130aaa]{margin:0;opacity:.5}.header>.body>.fields[data-v-92130aaa]{margin-top:16px}.header>.body>.fields>.field[data-v-92130aaa]{display:flex;padding:0;margin:0;align-items:center}.header>.body>.fields>.field>.name[data-v-92130aaa]{border-right:1px solid var(--faceDivider);width:30%;font-weight:700;text-align:center}.header>.body>.fields>.field>.name[data-v-92130aaa],.header>.body>.fields>.field>.value[data-v-92130aaa]{padding:4px;margin:4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.header>.body>.fields>.field>.value[data-v-92130aaa]{width:70%}.header>.body>.info[data-v-92130aaa]{margin-top:16px;padding-top:16px;border-top:1px solid var(--faceDivider);font-size:15px}.header>.body>.info[data-v-92130aaa]:empty{display:none}.header>.body>.info>*[data-v-92130aaa]{margin-right:16px}.header>.body>.status[data-v-92130aaa]{margin-top:16px;padding-top:16px;border-top:1px solid var(--faceDivider);font-size:80%}.header>.body>.status>*[data-v-92130aaa]{display:inline-block;padding-right:16px;margin-right:16px;color:inherit}.header>.body>.status[data-v-92130aaa]>:not(:last-child){border-right:1px solid var(--faceDivider)}.header>.body>.status>.clickable[data-v-92130aaa]{cursor:pointer}.header>.body>.status>.clickable[data-v-92130aaa]:hover{color:var(--faceTextButtonHover)}.header>.body>.status>*>b[data-v-92130aaa]{margin-right:4px;font-size:1rem;font-weight:700;color:var(--primary)}",""]),t.exports=e},694:function(t,e,s){"use strict";var a=s(552);s.n(a).a},695:function(t,e,s){(e=s(3)(!1)).push([t.i,".omechnps[data-v-2e4c276a]{width:100%;margin:0 auto}.omechnps>.is-remote[data-v-2e4c276a],.omechnps>.is-suspended[data-v-2e4c276a]{margin-bottom:16px;padding:14px 16px;font-size:14px}.omechnps>.is-remote.round[data-v-2e4c276a],.omechnps>.is-suspended.round[data-v-2e4c276a]{border-radius:6px}.omechnps>.is-remote.shadow[data-v-2e4c276a],.omechnps>.is-suspended.shadow[data-v-2e4c276a]{box-shadow:0 3px 8px rgba(0,0,0,.2)}.omechnps>.is-remote.is-suspended[data-v-2e4c276a],.omechnps>.is-suspended.is-suspended[data-v-2e4c276a]{color:var(--suspendedInfoFg);background:var(--suspendedInfoBg)}.omechnps>.is-remote.is-remote[data-v-2e4c276a],.omechnps>.is-suspended.is-remote[data-v-2e4c276a]{color:var(--remoteInfoFg);background:var(--remoteInfoBg)}.omechnps>.is-remote>a[data-v-2e4c276a],.omechnps>.is-suspended>a[data-v-2e4c276a]{font-weight:700}.omechnps>.main>.header[data-v-2e4c276a]{margin-bottom:16px}",""]),t.exports=e},884:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s(2),r=s(16),o=s(20),n=s(687),d=s(608),c=a.a.extend({props:["url","text","icon","service"]}),u=(s(688),s(1)),l=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"zxrjzpcj",class:this.service,attrs:{href:this.url,rel:"noopener",target:"_blank"}},[e("fa",{attrs:{icon:this.icon,size:"lg","fixed-width":""}}),e("span",[this._v(this._s(this.text))])],1)}),[],!1,null,"3ab53461",null).exports,h=a.a.extend({components:{XIntegration:l},props:["user"]}),p=(s(690),Object(u.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nbogcrmo",attrs:{"v-if":t.user.twitter||t.user.github||t.user.discord}},[t.user.twitter?s("x-integration",{attrs:{service:"twitter",url:"https://twitter.com/"+t.user.twitter.screenName,text:t.user.twitter.screenName,icon:["fab","twitter"]}}):t._e(),t.user.github?s("x-integration",{attrs:{service:"github",url:"https://github.com/"+t.user.github.login,text:t.user.github.login,icon:["fab","github"]}}):t._e(),t.user.discord?s("x-integration",{attrs:{service:"discord",url:"https://discordapp.com/users/"+t.user.discord.id,text:t.user.discord.username+"#"+t.user.discord.discriminator,icon:["fab","discord"]}}):t._e()],1)}),[],!1,null,"22eaf0b0",null).exports),f=a.a.extend({i18n:Object(i.a)("desktop/views/pages/user/user.header.vue"),components:{XIntegrations:p},props:["user"],computed:{style(){return null==this.user.bannerUrl?{}:{backgroundColor:this.user.bannerColor,backgroundImage:`url(${this.user.bannerUrl})`}},age(){return n(this.user.birthday)}},mounted(){this.user.bannerUrl},beforeDestroy(){this.user.bannerUrl},methods:{mention(){this.$post({mention:this.user})},onScroll(){const t=this.$refs.banner,e=window.scrollY,s=-e/1.25;t.style.backgroundPosition=`center calc(50% - ${s}px)`;const a=e/32;a<=10&&(t.style.filter=`blur(${a}px)`)},menu(){const t=this.$root.new(d.a,{source:this.$refs.menu,user:this.user});this.$once("hook:beforeDestroy",()=>{t.destroyDom()})}}}),g=(s(692),Object(u.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header",class:{shadow:t.$store.state.device.useShadow,round:t.$store.state.device.roundedCorners}},[s("div",{staticClass:"banner-container",style:t.style},[s("div",{ref:"banner",staticClass:"banner",style:t.style}),s("div",{staticClass:"fade"}),s("div",{staticClass:"title"},[s("p",{staticClass:"name"},[s("mk-user-name",{attrs:{user:t.user,nowrap:!1}})],1),s("div",[s("span",{staticClass:"username"},[s("mk-acct",{attrs:{user:t.user,detail:!0}})],1),t.user.isBot?s("span",{attrs:{title:t.$t("is-bot")}},[s("fa",{attrs:{icon:"robot"}})],1):t._e()])]),t.$store.getters.isSignedIn&&t.$store.state.i.id!=t.user.id&&t.user.isFollowed?s("span",{staticClass:"followed"},[t._v(t._s(t.$t("follows-you")))]):t._e(),t.$store.getters.isSignedIn?s("div",{staticClass:"actions"},[s("button",{ref:"menu",staticClass:"menu",on:{click:t.menu}},[s("fa",{attrs:{icon:"ellipsis-h"}})],1),t.$store.state.i.id!=t.user.id?s("mk-follow-button",{staticClass:"follow",attrs:{user:t.user,inline:!0,transparent:!1}}):t._e()],1):t._e()]),s("mk-avatar",{staticClass:"avatar",attrs:{user:t.user,"disable-preview":!0}}),s("div",{staticClass:"body"},[s("div",{staticClass:"description"},[t.user.description?s("mfm",{attrs:{text:t.user.description,"is-note":!1,author:t.user,i:t.$store.state.i,"custom-emojis":t.user.emojis}}):s("p",{staticClass:"empty"},[t._v(t._s(t.$t("no-description")))]),s("x-integrations",{staticStyle:{"margin-top":"16px"},attrs:{user:t.user}})],1),t.user.fields?s("div",{key:t.user.id,staticClass:"fields"},t._l(t.user.fields,(function(e,a){return s("dl",{key:a,staticClass:"field"},[s("dt",{staticClass:"name"},[s("mfm",{attrs:{text:e.name,plain:!0,"custom-emojis":t.user.emojis}})],1),s("dd",{staticClass:"value"},[s("mfm",{attrs:{text:e.value,author:t.user,i:t.$store.state.i,"custom-emojis":t.user.emojis}})],1)])})),0):t._e(),s("div",{staticClass:"info"},[null===t.user.host&&t.user.location?s("span",{staticClass:"location"},[s("fa",{attrs:{icon:"map-marker"}}),t._v(" "+t._s(t.user.location))],1):t._e(),null===t.user.host&&t.user.birthday?s("span",{staticClass:"birthday"},[s("fa",{attrs:{icon:"birthday-cake"}}),t._v(" "+t._s(t.user.birthday.replace("-",t.$t("year")).replace("-",t.$t("month"))+t.$t("day"))+" ("+t._s(t.$t("years-old",{age:t.age}))+")")],1):t._e()]),s("div",{staticClass:"status"},[s("router-link",{staticClass:"notes-count",attrs:{to:t._f("userPage")(t.user)}},[s("b",[t._v(t._s(t._f("number")(t.user.notesCount)))]),t._v(t._s(t.$t("posts")))]),s("router-link",{staticClass:"following clickable",attrs:{to:t._f("userPage")(t.user,"following")}},[s("b",[t._v(t._s(t._f("number")(t.user.followingCount)))]),t._v(t._s(t.$t("following")))]),s("router-link",{staticClass:"followers clickable",attrs:{to:t._f("userPage")(t.user,"followers")}},[s("b",[t._v(t._s(t._f("number")(t.user.followersCount)))]),t._v(t._s(t.$t("followers")))])],1)])],1)}),[],!1,null,"92130aaa",null).exports),b=a.a.extend({i18n:Object(i.a)(),components:{XHeader:g},data:()=>({fetching:!0,user:null}),watch:{$route:"fetch"},created(){this.fetch()},methods:{fetch(){this.fetching=!0,o.a.start(),this.$root.api("users/show",Object(r.a)(this.$route.params.user)).then(t=>{this.user=t,this.fetching=!1,o.a.done()})},warp(t){this.$refs.tl.warp(t)}}}),m=(s(694),Object(u.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.fetching?t._e():s("div",{staticClass:"omechnps"},[t.user.isSuspended?s("div",{staticClass:"is-suspended",class:{shadow:t.$store.state.device.useShadow,round:t.$store.state.device.roundedCorners}},[s("fa",{attrs:{icon:"exclamation-triangle"}}),t._v(" "+t._s(t.$t("@.user-suspended"))+"\n\t")],1):t._e(),null!=t.user.host?s("div",{staticClass:"is-remote",class:{shadow:t.$store.state.device.useShadow,round:t.$store.state.device.roundedCorners}},[s("fa",{attrs:{icon:"exclamation-triangle"}}),t._v(" "+t._s(t.$t("@.is-remote-user"))),s("a",{attrs:{href:t.user.url,rel:"nofollow noopener",target:"_blank"}},[t._v(t._s(t.$t("@.view-on-remote")))])],1):t._e(),s("div",{staticClass:"main"},[s("x-header",{staticClass:"header",attrs:{user:t.user}}),s("router-view",{attrs:{user:t.user}})],1)])}),[],!1,null,"2e4c276a",null));e.default=m.exports}}]);
//# sourceMappingURL=32.11.37.1.js.map