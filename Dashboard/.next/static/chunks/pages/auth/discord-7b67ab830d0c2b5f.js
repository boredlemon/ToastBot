(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{8585:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/discord",function(){return t(8660)}])},2597:function(n,e,t){"use strict";t.d(e,{zx:function(){return c.zx},Zb:function(){return o.Z},nS:function(){return r.nS},B1:function(){return r.B1},Ph:function(){return c.Ph},rs:function(){return c.rs}});var r=t(7169);t(5893),t(7174);var o=t(3419),c=t(2888)},8660:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r=t(2729),o=t(5893),c=t(7294),a=t(129),i=t.n(a),u=t(8806),s=t(2597),l=t(2064),h=t(8454);let d="http://localhost:1500/graphql";new l.f({uri:d,cache:new h.h});let f=n=>new l.f({uri:d,cache:new h.h,headers:n?{Authorization:n}:void 0});var _=t(389),p=t.n(_);function w(){let n=(0,r._)(["\n                    query User {\n                        CurrentUser {\n                            username\n                            id\n                            avatar\n                        }\n                    }\n                "]);return w=function(){return n},n}function g(){let[n,e]=(0,c.useState)();return(0,c.useEffect)(()=>{let n=document.getElementById("loginButton"),{token:t}=i().parse(location.search,{ignoreQueryPrefix:!0});async function r(){let{data:n,errors:r}=await f(t).query({query:(0,u.Ps)(w())});if(r){console.log(r);return}e(n.CurrentUser)}t?(r(),n.addEventListener("click",()=>{localStorage.setItem("auth_token",t),window.location.href="/dashboard/@me"})):window.location.href="/"},[]),console.log(n),(0,o.jsx)("div",{className:"".concat(p().container," ").concat(p().help),children:(0,o.jsxs)("div",{className:p().loginInfos,children:[(null==n?void 0:n.avatar)?(0,o.jsx)("img",{src:"https://cdn.discordapp.com/avatars/".concat(n.id,"/").concat(n.avatar,".webp?size=2048"),alt:"@".concat(n.username)}):(0,o.jsx)("div",{className:p().placeholder}),(0,o.jsx)("label",{children:null==n?void 0:n.username}),(0,o.jsx)(s.zx,{id:"loginButton",children:(0,o.jsx)(s.zx.Content,{children:"Logar"})})]})})}},389:function(n){n.exports={container:"Auth_container__Y8pF9",help:"Auth_help__grfns",loginInfos:"Auth_loginInfos__qQJKw",placeholder:"Auth_placeholder__krghE"}},4654:function(){}},function(n){n.O(0,[866,774,888,179],function(){return n(n.s=8585)}),_N_E=n.O()}]);