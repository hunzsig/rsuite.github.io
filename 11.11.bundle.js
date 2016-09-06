/*! Last update: Tue Sep 06 2016 23:14:56 GMT+0800 (CST) */
webpackJsonp([11],{381:function(t,e,a){"use strict";function d(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),l=d(n),m=a(254),v=a(338),r=d(v),I=a(335),N={basic:"var instance = (\n    <Nav>\n        <Nav.Item active>Item A</Nav.Item>\n        <Nav.Item>Item B</Nav.Item>\n        <Nav.Item>Item C</Nav.Item>\n        <Nav.Item disabled>Item D</Nav.Item>\n    </Nav>\n);\nReactDOM.render(instance, mountNode);\n",pills:"var instance = (\n    <Nav pills>\n        <Nav.Item active>Item A</Nav.Item>\n        <Nav.Item>Item B</Nav.Item>\n        <Nav.Item>Item C</Nav.Item>\n        <Nav.Item disabled>Item D</Nav.Item>\n    </Nav>\n);\nReactDOM.render(instance, mountNode);\n",tabs:"var instance = (\n    <Nav tabs>\n        <Nav.Item active>Item A</Nav.Item>\n        <Nav.Item>Item B</Nav.Item>\n        <Nav.Item>Item C</Nav.Item>\n        <Nav.Item disabled>Item D</Nav.Item>\n    </Nav>\n);\nReactDOM.render(instance, mountNode);\n",stacked:"var instance = (\n    <Nav pills stacked>\n        <Nav.Item active>Item A</Nav.Item>\n        <Nav.Item>Item B</Nav.Item>\n        <Nav.Item>Item C</Nav.Item>\n        <Nav.Item disabled>Item D</Nav.Item>\n    </Nav>\n);\nReactDOM.render(instance, mountNode);\n",justified:"var instance = (\n    <Nav pills justified>\n        <Nav.Item active>Item A</Nav.Item>\n        <Nav.Item>Item B</Nav.Item>\n        <Nav.Item>Item C</Nav.Item>\n        <Nav.Item disabled>Item D</Nav.Item>\n    </Nav>\n);\nReactDOM.render(instance, mountNode);\n",dropdown:'\nvar instance = (\n    <Nav pills >\n        <Nav.Item active eventKey="A">Item A</Nav.Item>\n        <Nav.Item eventKey="B">Item B</Nav.Item>\n        <Nav.Item eventKey="C">Item C</Nav.Item>\n        <Nav.Item eventKey="D" >Item D</Nav.Item>\n        <Nav.Dropdown eventKey="E" select title="Item E">\n            <Nav.Item eventKey="E-1" >Item E-1</Nav.Item>\n            <Nav.Item eventKey="E-2" >Item E-2</Nav.Item>\n            <Nav.Item eventKey="E-3" >Item E-3</Nav.Item>\n            <Nav.Item eventKey="E-4" >Item E-4</Nav.Item>\n        </Nav.Dropdown>\n    </Nav>\n);\nReactDOM.render(instance, mountNode);\n'};e["default"]=l["default"].createClass({displayName:"navs",render:function(){return l["default"].createElement(m.Col,{md:9,sm:12},l["default"].createElement("h1",{className:"page-header"},"Navs",l["default"].createElement("span",{className:"page-header-en"},l["default"].createElement("code",null,"Nav"),"、",l["default"].createElement("code",null,"Nav.Item"))),l["default"].createElement("h3",null,"默认样式"),l["default"].createElement(r["default"],{code:N.basic}),l["default"].createElement("h3",null,"胶囊式标签"),l["default"].createElement(r["default"],{code:N.pills}),l["default"].createElement("h3",null,"标签式导航"),l["default"].createElement(r["default"],{code:N.tabs}),l["default"].createElement("h3",null,"垂直导航"),l["default"].createElement(r["default"],{code:N.stacked}),l["default"].createElement("h3",null,"宽度自适应"),l["default"].createElement(r["default"],{code:N.justified}),l["default"].createElement("h3",null,"混入下拉按钮"),l["default"].createElement(r["default"],{code:N.dropdown}),l["default"].createElement("h3",null,"组件属性"),l["default"].createElement(I.Markdown,null,a(382)))}})},382:function(t,e){t.exports="<h4 id=nav>Nav</h4> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>tabs</td> <td>boolean</td> <td>false</td> <td>标签式导航</td> </tr> <tr> <td>pills</td> <td>boolean</td> <td>false</td> <td>胶囊式导航</td> </tr> <tr> <td>justified</td> <td>boolean</td> <td>false</td> <td>宽度自适应</td> </tr> <tr> <td>stacked</td> <td>boolean</td> <td>false</td> <td>垂直导航</td> </tr> <tr> <td>pullRight</td> <td>boolean</td> <td>false</td> <td>偏右</td> </tr> <tr> <td>activeKey</td> <td>any</td> <td></td> <td></td> </tr> <tr> <td>onSelect</td> <td>function</td> <td></td> <td></td> </tr> </tbody> </table> <h4 id=nav-item>Nav.Item</h4> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>active</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>disabled</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>href</td> <td>boolean</td> <td>string</td> <td></td> </tr> <tr> <td>onClick</td> <td>function</td> <td>false</td> <td></td> </tr> <tr> <td>onSelect</td> <td>function</td> <td>false</td> <td></td> </tr> <tr> <td>eventKey</td> <td>any</td> <td></td> <td></td> </tr> <tr> <td>componentClass</td> <td>elementType</td> <td></td> </tr> </tbody> </table>"}});