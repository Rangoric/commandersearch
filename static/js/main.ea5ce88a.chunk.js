(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(52)},29:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),s=(a(29),a(13),a(14),a(30),a(1)),l=a(3),o=a(5),u=a(4),m=a(6),h=a(8),d=a(21),b=a(10),p=a.n(b),C=a(22),f=a(7),v=a(23),E=a.n(v),j=function e(){Object(s.a)(this,e),this.name="",this.type="",this.text="",this.orderBy="name"},O=function e(){Object(s.a)(this,e),this.Results=[],this.Criteria=new j},g=r.a.createContext(new function e(){Object(s.a)(this,e),this.SearchData=new O,this.refreshResults=function(){},this.onCriteriaChange=function(e){},this.clearCriteria=function(){}}),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e,new O))).refreshResults=a.refreshResults.bind(Object(f.a)(Object(f.a)(a))),a.onCriteriaChange=a.onCriteriaChange.bind(Object(f.a)(Object(f.a)(a))),a.clearCriteria=a.clearCriteria.bind(Object(f.a)(Object(f.a)(a))),a.state=new O,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"refreshResults",value:function(){var e=Object(C.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.magicthegathering.io/v1/cards",{params:this.state.Criteria});case 2:t=e.sent,this.setState({Results:t.data.cards.filter(function(e){return e.imageUrl})});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onCriteriaChange",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState({Criteria:Object(d.a)({},this.state.Criteria,Object(h.a)({},a,n))})}},{key:"clearCriteria",value:function(){this.setState({Criteria:new j,Results:[]})}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:{SearchData:this.state,refreshResults:this.refreshResults,onCriteriaChange:this.onCriteriaChange,clearCriteria:this.clearCriteria}},this.props.children)}}]),t}(n.Component),y=function(e,t,a,n){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},e),r.a.createElement("input",{className:"form-control",name:t,id:t,value:a,onChange:n})))},N=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Search Criteria"),r.a.createElement(g.Consumer,null,function(e){var t=e.SearchData,a=e.refreshResults,n=e.onCriteriaChange,i=e.clearCriteria;return r.a.createElement("div",null,y("Name Filter:","name",t.Criteria.name,n),y("Type Filter:","type",t.Criteria.type,n),y("Text Filter:","text",t.Criteria.text,n),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-primary",onClick:a},"Search")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-secondary",onClick:i},"Clear"))))}))}}]),t}(n.Component),k=r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Welcome"),r.a.createElement("p",null,"This is a simple ",r.a.createElement("em",null,"Magic: The Gathering")," commander search."),r.a.createElement("p",null,"When making a commander deck, I usually have in mind the cards I want to use, or at least know what keywords I would want to be using. This search is set up to make that easy."),r.a.createElement("p",null,"A few sample searches:"),r.a.createElement("p",null,"Name: dragon, Type: elder to get 5 big dragons"),r.a.createElement("p",null,"Name: bridge, Type: art, Text: hand to get the ensnaring bridge, there are 5 different ones")),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={Card:e.Card},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-image-top",src:this.state.Card.imageUrl,alt:this.state.Card.name}),r.a.createElement("div",{className:"card-header"},this.state.Card.name,r.a.createElement("br",null),"(",this.state.Card.setName,")"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,this.state.Card.type),r.a.createElement("p",null,this.state.Card.text))))}}]),t}(n.Component),x=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.props.Cards.map(function(e){return r.a.createElement(R,{Card:e,key:e.id})}))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.Consumer,null,function(e){var t=e.SearchData;return r.a.createElement("div",null,t.Results.length?r.a.createElement(x,{Cards:t.Results}):k)})}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col"},r.a.createElement(S,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.ea5ce88a.chunk.js.map