(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(30)},28:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),a=n(19),i=n.n(a),c=(n(28),n(9)),u=n(10),s=n(13),l=n(11),d=n(14),f=r.createElement,h=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return f("table",{},f("tbody",{},this.props.boardMatrix.map(function(t,e){return f("tr",{key:e},t.map(function(t,e){return f("td",{key:e},t)}))})))}}]),e}(r.Component),g=n(17),p=n(35),b=n(33),m=n(36),y=n(31),v=n(20),w=n(32),j=n(34),k=n(37),O="abcdefghijklmnopqrstuvwxyz",x=function(t){return g.a(function(){return function(t){return g.a(function(){return O[Math.floor(Math.random()*O.length+1)]},p.a(0,t))}(t)},p.a(0,t))},B=function(t,e){return p.a(t>0?t-1:t,t<e-1?t+2:t+1)},C=function t(e,n,r,o,a){if(e===n.length)return!0;var i=v.a(function(t){return t.letter===n[e]&&!w.a(t.coords,o)},function(t,e,n){return b.a(B(t,n.length).map(function(t){return B(e,n.length).map(function(e){return{coords:[t,e],letter:n[t][e]}})}))}(r[0],r[1],a));return 0!==i.length&&j.a(function(t){return t},i.map(function(r){return t(e+1,n,r.coords,k.a(r.coords,o),a)}))},W=function(t,e){var n=function(t,e){return b.a(p.a(0,e.length).map(function(n){return m.a(y.a,p.a(0,e.length).map(function(r){return e[n][r]===t?[n,r]:null}))}))}(t[0],e);for(var r in n)if(C(1,t,n[r],[n[r]],e))return!0;return!1},G=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={word:""},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return f("div",{},f("input",{onChange:function(e){return t.setState({word:e.target.value})},value:this.state.word}),f("button",{onClick:function(){t.state.word.length>=3?(t.setState({word:""}),t.props.submitGuess(t.state.word)):console.log("Should be longer than 2 letters")}},"Submit Guess"))}}]),e}(r.Component),S=n(29),T=function(t){return S("https://wordsapiv1.p.mashape.com/words/".concat(t),{method:"GET",headers:{"X-RapidAPI-Key":"9cec01def3mshbab011fd8d8f4a4p12ebf8jsn00b43fb8e433"}})},M=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={boggleBoard:[],correctWords:[]},n.checkGuess=function(t){if(w.a(t,n.state.correctWords))alert("Already guessed word");else{if(W(t.split(""),n.state.boggleBoard))return T(t).then(function(e){e.ok?n.setState({correctWords:k.a(t,n.state.correctWords)}):alert("Word does not exist!")});alert("Word not in board")}},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return f("div",{style:{margin:"5em",alignText:"center"}},f("div",{style:{display:"flex",justifyContent:"center"}},f("h1",{},"Let's Play Boggle!")),f("div",{style:{display:"flex",justifyContent:"center"}},f("button",{onClick:function(){return t.setState({boggleBoard:x(4),correctWords:[]})},style:{width:"200px",height:"25px",alignText:"center"}},"Make New Boggle Board")),f("div",{style:{display:"flex",justifyContent:"center",marginTop:"1em"}},f(h,{boardMatrix:this.state.boggleBoard})),f("div",{style:{display:"flex",justifyContent:"center",marginTop:"1em"}},this.state.boggleBoard.length?f(G,{submitGuess:function(e){return t.checkGuess(e)}}):null),f("div",{style:{display:"flex",justifyContent:"center",marginTop:"1em"}},this.state.boggleBoard.length?f("ul",{},g.a(function(t){return f("li",{key:t},t)},this.state.correctWords)):null))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.57e5c704.chunk.js.map