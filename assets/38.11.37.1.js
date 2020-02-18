(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{525:function(t,s,e){var i=e(634);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(4).default)("b026285e",i,!0,{})},608:function(t,s,i){"use strict";var a=i(0),r=i(2),o=i(5),n=i(10),u=a.a.extend({i18n:Object(r.a)("common/views/components/user-menu.vue"),props:["user","source"],data(){let t=[{icon:["fas","at"],text:this.$t("mention"),action:()=>{this.$post({mention:this.user})}},null,{icon:["fas","list"],text:this.$t("push-to-list"),action:this.pushList}];return this.$store.getters.isSignedIn&&this.$store.state.i.id!=this.user.id&&(t=t.concat([null,{icon:this.user.isMuted?["fas","eye"]:["far","eye-slash"],text:this.user.isMuted?this.$t("unmute"):this.$t("mute"),action:this.toggleMute},{icon:"ban",text:this.user.isBlocking?this.$t("unblock"):this.$t("block"),action:this.toggleBlock},null,{icon:o.db,text:this.$t("report-abuse"),action:this.reportAbuse}])),this.$store.getters.isSignedIn&&(this.$store.state.i.isAdmin||this.$store.state.i.isModerator)&&(t=t.concat([null,{icon:o.Wb,text:this.user.isSilenced?this.$t("unsilence"):this.$t("silence"),action:this.toggleSilence},{icon:n.B,text:this.user.isSuspended?this.$t("unsuspend"):this.$t("suspend"),action:this.toggleSuspend}])),{items:t}},methods:{closed(){this.$nextTick(()=>{this.destroyDom()})},async pushList(){const t=this.$t("select-list"),s=await this.$root.api("users/lists/list"),{canceled:e,result:i}=await this.$root.dialog({type:null,title:t,select:{items:s.map(t=>({value:t.id,text:t.name}))},showCancelButton:!0});e||(await this.$root.api("users/lists/push",{listId:i,userId:this.user.id}),this.$root.dialog({type:"success",splash:!0}))},async toggleMute(){if(this.user.isMuted){if(!await this.getConfirmed(this.$t("unmute-confirm")))return;this.$root.api("mute/delete",{userId:this.user.id}).then(()=>{this.user.isMuted=!1},()=>{this.$root.dialog({type:"error",text:e})})}else{if(!await this.getConfirmed(this.$t("mute-confirm")))return;this.$root.api("mute/create",{userId:this.user.id}).then(()=>{this.user.isMuted=!0},()=>{this.$root.dialog({type:"error",text:e})})}},async toggleBlock(){if(this.user.isBlocking){if(!await this.getConfirmed(this.$t("unblock-confirm")))return;this.$root.api("blocking/delete",{userId:this.user.id}).then(()=>{this.user.isBlocking=!1},()=>{this.$root.dialog({type:"error",text:e})})}else{if(!await this.getConfirmed(this.$t("block-confirm")))return;this.$root.api("blocking/create",{userId:this.user.id}).then(()=>{this.user.isBlocking=!0},()=>{this.$root.dialog({type:"error",text:e})})}},async reportAbuse(){const t=this.$t("report-abuse-reported"),{canceled:s,result:e}=await this.$root.dialog({title:this.$t("report-abuse-detail"),input:!0});s||this.$root.api("users/report-abuse",{userId:this.user.id,comment:e}).then(()=>{this.$root.dialog({type:"success",text:t})},t=>{this.$root.dialog({type:"error",text:t})})},async toggleSilence(){await this.getConfirmed(this.$t(this.user.isSilenced?"unsilence-confirm":"silence-confirm"))&&this.$root.api(this.user.isSilenced?"admin/unsilence-user":"admin/silence-user",{userId:this.user.id}).then(()=>{this.user.isSilenced=!this.user.isSilenced,this.$root.dialog({type:"success",splash:!0})},t=>{this.$root.dialog({type:"error",text:t})})},async toggleSuspend(){await this.getConfirmed(this.$t(this.user.isSuspended?"unsuspend-confirm":"suspend-confirm"))&&this.$root.api(this.user.isSuspended?"admin/unsuspend-user":"admin/suspend-user",{userId:this.user.id}).then(()=>{this.user.isSuspended=!this.user.isSuspended,this.$root.dialog({type:"success",splash:!0})},t=>{this.$root.dialog({type:"error",text:t})})},async getConfirmed(t){return!(await this.$root.dialog({type:"warning",showCancelButton:!0,title:"confirm",text:t})).canceled}}}),d=i(1),l=Object(d.a)(u,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticStyle:{position:"initial"}},[s("mk-menu",{attrs:{source:this.source,items:this.items},on:{closed:this.closed}})],1)}),[],!1,null,null,null);s.a=l.exports},633:function(t,s,e){"use strict";var i=e(525);e.n(i).a},634:function(t,s,e){(s=e(3)(!1)).push([t.i,'.zubukjlciycdsyynicqrnlsmdwmymzqu[data-v-1ab4a802]{background:var(--deckColumnBg)}.zubukjlciycdsyynicqrnlsmdwmymzqu>.is-remote[data-v-1ab4a802]{padding:8px 16px;font-size:12px}.zubukjlciycdsyynicqrnlsmdwmymzqu>.is-remote.is-remote[data-v-1ab4a802]{color:var(--remoteInfoFg);background:var(--remoteInfoBg)}.zubukjlciycdsyynicqrnlsmdwmymzqu>.is-remote>a[data-v-1ab4a802]{font-weight:700}.zubukjlciycdsyynicqrnlsmdwmymzqu>header[data-v-1ab4a802]{overflow:hidden;background-size:cover;background-position:50%}.zubukjlciycdsyynicqrnlsmdwmymzqu>header>div[data-v-1ab4a802]{padding:32px;background:rgba(0,0,0,.5);color:#fff;text-align:center}.zubukjlciycdsyynicqrnlsmdwmymzqu>header>div>.menu[data-v-1ab4a802]{position:absolute;top:8px;left:8px;padding:8px;font-size:16px;text-shadow:0 0 8px #000}.zubukjlciycdsyynicqrnlsmdwmymzqu>header>div>.follow[data-v-1ab4a802]{position:absolute;top:16px;right:16px}.zubukjlciycdsyynicqrnlsmdwmymzqu>header>div>.avatar[data-v-1ab4a802]{display:block;width:64px;height:64px;margin:0 auto}.zubukjlciycdsyynicqrnlsmdwmymzqu>header>div>.name[data-v-1ab4a802]{display:block;margin-top:8px;font-weight:700;text-shadow:0 0 8px #000;color:#fff}.zubukjlciycdsyynicqrnlsmdwmymzqu>header>div>.acct[data-v-1ab4a802]{display:block;font-size:14px;opacity:.7;text-shadow:0 0 8px #000}.zubukjlciycdsyynicqrnlsmdwmymzqu>header>div>.acct>.locked[data-v-1ab4a802]{opacity:.8}.zubukjlciycdsyynicqrnlsmdwmymzqu>header>div>.followed[data-v-1ab4a802]{display:inline-block;font-size:12px;background:rgba(0,0,0,.5);opacity:.7;margin-top:2px;padding:4px;border-radius:4px}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info[data-v-1ab4a802]{padding:16px;font-size:12px;color:var(--text);text-align:center;background:var(--face)}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info[data-v-1ab4a802]:before{content:"";display:blcok;position:absolute;top:-32px;left:0;right:0;width:0;margin:0 auto;border:16px solid transparent;border-bottom:16px solid var(--face)}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.fields[data-v-1ab4a802]{margin-top:8px}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.fields>.field[data-v-1ab4a802]{display:flex;padding:0;margin:0;align-items:center}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.fields>.field>.name[data-v-1ab4a802]{padding:4px;margin:4px;width:30%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.fields>.field>.value[data-v-1ab4a802]{padding:4px;margin:4px;width:70%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.counts[data-v-1ab4a802]{display:grid;grid-template-columns:2fr 2fr 2fr;margin-top:8px;border-top:solid var(--lineWidth) var(--faceDivider)}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.counts>div[data-v-1ab4a802]{padding:8px 8px 0;text-align:center}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.counts>div>a[data-v-1ab4a802]{color:var(--text)}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.counts>div>a>b[data-v-1ab4a802]{display:block;font-size:110%}.zubukjlciycdsyynicqrnlsmdwmymzqu>.info>.counts>div>a>span[data-v-1ab4a802]{display:block;font-size:80%;opacity:.7}',""]),t.exports=s},893:function(t,s,e){"use strict";e.r(s);var i=e(0),a=e(2),r=e(16),o=e(187),n=e(608),u=i.a.extend({i18n:Object(a.a)("deck/deck.user-column.vue"),components:{XColumn:o.a},data:()=>({user:null,fetching:!0}),computed:{bannerStyle(){return null==this.user?{}:null==this.user.bannerUrl?{}:{backgroundColor:this.user.bannerColor,backgroundImage:`url(${this.user.bannerUrl})`}}},watch:{$route:"fetch"},created(){this.fetch()},methods:{fetch(){this.fetching=!0,this.$root.api("users/show",Object(r.a)(this.$route.params.user)).then(t=>{this.user=t,this.fetching=!1})},menu(){const t=this.$root.new(n.a,{source:this.$refs.menu,user:this.user});this.$once("hook:beforeDestroy",()=>{t.destroyDom()})}}}),d=(e(633),e(1)),l=Object(d.a)(u,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("x-column",{scopedSlots:t._u([{key:"header",fn:function(){return[e("fa",{attrs:{icon:"user"}}),t.user?e("mk-user-name",{key:t.user.id,attrs:{user:t.user}}):t._e()]},proxy:!0}])},[t.user?e("div",{staticClass:"zubukjlciycdsyynicqrnlsmdwmymzqu"},[null!=t.user.host?e("div",{staticClass:"is-remote"},[e("details",[e("summary",[e("fa",{attrs:{icon:"exclamation-triangle"}}),t._v(" "+t._s(t.$t("@.is-remote-user")))],1),e("a",{attrs:{href:t.user.url,rel:"nofollow noopener",target:"_blank"}},[t._v(t._s(t.$t("@.view-on-remote")))])])]):t._e(),e("header",{style:t.bannerStyle},[e("div",[e("button",{ref:"menu",staticClass:"menu",on:{click:t.menu}},[e("fa",{attrs:{icon:"ellipsis-h"}})],1),t.$store.getters.isSignedIn&&t.user.id!=t.$store.state.i.id?e("mk-follow-button",{staticClass:"follow",attrs:{user:t.user,mini:""}}):t._e(),e("mk-avatar",{key:t.user.id,staticClass:"avatar",attrs:{user:t.user,"disable-preview":!0}}),e("router-link",{staticClass:"name",attrs:{to:t._f("userPage")(t.user)}},[e("mk-user-name",{key:t.user.id,attrs:{user:t.user,nowrap:!1}})],1),e("span",{staticClass:"acct"},[t._v("@"+t._s(t._f("acct")(t.user))+" "),1==t.user.isLocked?e("fa",{staticClass:"locked",attrs:{icon:"lock","fixed-width":""}}):t._e()],1),t.user.isFollowed?e("span",{staticClass:"followed"},[t._v(t._s(t.$t("follows-you")))]):t._e()],1)]),e("div",{staticClass:"info"},[e("div",{staticClass:"description"},[t.user.description?e("mfm",{key:t.user.id,attrs:{text:t.user.description,"is-note":!1,author:t.user,i:t.$store.state.i,"custom-emojis":t.user.emojis}}):t._e()],1),t.user.fields?e("div",{key:t.user.id,staticClass:"fields"},t._l(t.user.fields,(function(s,i){return e("dl",{key:i,staticClass:"field"},[e("dt",{staticClass:"name"},[e("mfm",{attrs:{text:s.name,plain:!0,"custom-emojis":t.user.emojis}})],1),e("dd",{staticClass:"value"},[e("mfm",{attrs:{text:s.value,author:t.user,i:t.$store.state.i,"custom-emojis":t.user.emojis}})],1)])})),0):t._e(),e("div",{staticClass:"counts"},[e("div",[e("router-link",{attrs:{to:t._f("userPage")(t.user)}},[e("b",[t._v(t._s(t._f("number")(t.user.notesCount)))]),e("span",[t._v(t._s(t.$t("posts")))])])],1),e("div",[e("router-link",{attrs:{to:t._f("userPage")(t.user,"following")}},[e("b",[t._v(t._s(t._f("number")(t.user.followingCount)))]),e("span",[t._v(t._s(t.$t("following")))])])],1),e("div",[e("router-link",{attrs:{to:t._f("userPage")(t.user,"followers")}},[e("b",[t._v(t._s(t._f("number")(t.user.followersCount)))]),e("span",[t._v(t._s(t.$t("followers")))])])],1)])]),e("router-view",{attrs:{user:t.user}})],1):t._e()])}),[],!1,null,"1ab4a802",null);s.default=l.exports}}]);
//# sourceMappingURL=38.11.37.1.js.map