(this["webpackJsonpfirebase-auth-tutorial"]=this["webpackJsonpfirebase-auth-tutorial"]||[]).push([[0],{38:function(t,n,e){},40:function(t,n,e){},41:function(t,n,e){"use strict";e.r(n);var a=e(11),i=e(16),u=e.n(i),r=e(17),c=e(18),s=e(22),o=e(21),h=e(9),p=e(19),l=e.n(p),b=(e(38),e(8));h.a.initializeApp({apiKey:"AIzaSyBUlhikg7WeSdMdyFuPLbC6Lm7OpkFdG7M",authDomain:"lund344155chat-app.firebaseapp.com"});var d=function(t){Object(s.a)(e,t);var n=Object(o.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=n.call.apply(n,[this].concat(i))).state={isSignedIn:!1},t.uiConfig={signInFlow:"popup",signInOptions:[h.a.auth.GoogleAuthProvider.PROVIDER_ID,h.a.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},t.componentDidMount=function(){h.a.auth().onAuthStateChanged((function(n){t.setState({isSignedIn:!!n})}))},t}return Object(c.a)(e,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:this.state.isSignedIn?Object(b.jsxs)("span",{children:[Object(b.jsx)("button",{onClick:function(){return h.a.auth().signOut()},children:"Sign out!"}),Object(b.jsxs)("h1",{children:["Welcome ",h.a.auth().currentUser.displayName]}),Object(b.jsx)("img",{alt:"profile picture",src:h.a.auth().currentUser.photoURL})]}):Object(b.jsx)(l.a,{uiConfig:this.uiConfig,firebaseAuth:h.a.auth()})})}}]),e}(a.Component);e(40);u.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9858b507.chunk.js.map