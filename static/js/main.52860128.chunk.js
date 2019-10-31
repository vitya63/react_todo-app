(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,l){e.exports=l(17)},15:function(e,t,l){},16:function(e,t,l){},17:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),c=l(3),r=l.n(c),o=(l(15),l(16),l(1)),i=l(4),s=l(5),m=l(6),d=l(8),u=l(7),p=l(9);var f=function(e){var t=e.handleSubmit,l=e.handleTitleChange,a=e.value;return n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:l,onKeyPress:t,value:a}))};var h=function(e){var t=e.item,l=e.toggleOne,a=e.clearItem;return n.a.createElement("li",{className:t.completed?"completed":""},n.a.createElement("div",{className:"view"},n.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,onChange:l,checked:t.completed}),n.a.createElement("label",{htmlFor:"todo-1"},t.title),n.a.createElement("button",{type:"button",id:t.id,onClick:a,className:"destroy"})))};var g=function(e){var t=e.items,l=e.clearCompleted;return t.some(function(e){return e.completed})?n.a.createElement("button",{type:"button",onClick:l,className:"clear-completed",style:{display:"block"}},"Clear completed"):""};var b=function(e){var t=e.items,l=e.handleFilter,a=e.clearCompleted;return t.length>0?n.a.createElement("footer",{className:"footer",style:{display:"block"}},n.a.createElement("span",{className:"todo-count"},t.length,"items left"),n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement("a",{onClick:l,href:"#/",className:"selected"},"All")),n.a.createElement("li",null,n.a.createElement("a",{onClick:l,href:"#/active"},"Active")),n.a.createElement("li",null,n.a.createElement("a",{onClick:l,href:"#/completed"},"Completed"))),n.a.createElement(g,{items:t,clearCompleted:a})):""};var v=function(e){var t=e.items,l=e.toggleOne,a=e.toggleAll,c=e.handleFilter,r=e.selectedTab,i=e.clearItem,s=e.clearCompleted,m=[];return"All"===r?m=Object(o.a)(t):"Active"===r?m=Object(o.a)(t).filter(function(e){return!e.completed}):"Completed"===r&&(m=Object(o.a)(t).filter(function(e){return e.completed})),t.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"main",style:{display:"block"}},n.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:a}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement("ul",{className:"todo-list"},m.map(function(e){return n.a.createElement(h,{item:e,key:e.id,toggleOne:l,clearItem:i})}))),n.a.createElement(b,{items:t,handleFilter:c,clearCompleted:s})):""};function E(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,a)}return l}function O(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?E(l,!0).forEach(function(t){Object(i.a)(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):E(l).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}var y=function(e){function t(e){var l;return Object(s.a)(this,t),(l=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){13!==e.which&&13!==e.keyCode||""!==l.state.title&&l.setState(function(e){return O({},e,{id:e.id+1,todos:[{id:e.id,title:e.title,completed:!1}].concat(Object(o.a)(e.todos)),title:""})})},l.handleTitleChange=function(e){l.setState({title:e.target.value})},l.toggleOne=function(e){var t=+e.target.id;l.setState(function(e){return O({},e,{todos:e.todos.map(function(e){return t===e.id&&e.completed?O({},e,{completed:!1}):t!==e.id||e.completed?e:O({},e,{completed:!0})})})})},l.toggleAll=function(){l.setState(function(e){return O({},e,{todos:e.todos.map(function(t){return e.todos.every(function(e){return e.completed})?O({},t,{completed:!1}):O({},t,{completed:!0})})})})},l.handleFilter=function(e){document.querySelector(".filters .selected").className="";var t=e.target,a=t.innerText;"All"===a?(t.className="selected",l.setState({selectedTab:"All"})):"Active"===a?(t.className="selected",l.setState({selectedTab:"Active"})):"Completed"===a&&(t.className="selected",l.setState({selectedTab:"Completed"}))},l.clearItem=function(e){var t=+e.target.id;l.setState(function(e){return O({},e,{todos:Object(o.a)(e.todos).filter(function(e){return e.id!==t})})})},l.clearCompleted=function(e){l.setState(function(e){return O({},e,{todos:Object(o.a)(e.todos).filter(function(e){return!e.completed})})})},l.state={todos:[],id:1,title:"",selectedTab:"All"},l}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"todoapp"},n.a.createElement(f,{handleSubmit:this.handleSubmit,handleTitleChange:this.handleTitleChange,value:this.state.title}),n.a.createElement(v,{items:this.state.todos,toggleOne:this.toggleOne,toggleAll:this.toggleAll,handleFilter:this.handleFilter,selectedTab:this.state.selectedTab,clearItem:this.clearItem,clearCompleted:this.clearCompleted}))}}]),t}(n.a.Component);r.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.52860128.chunk.js.map