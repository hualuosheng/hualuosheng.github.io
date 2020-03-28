(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{296:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js-表单基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-表单基础知识"}},[t._v("#")]),t._v(" JS 表单基础知识")]),t._v(" "),s("p",[t._v("这一章通过以下几个方面来总结一下 js 中的表单：")]),t._v(" "),s("ul",[s("li",[t._v("表单元素")]),t._v(" "),s("li",[t._v("表单操作")]),t._v(" "),s("li",[t._v("富文本")])]),t._v(" "),s("h2",{attrs:{id:"表单元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单元素"}},[t._v("#")]),t._v(" 表单元素")]),t._v(" "),s("p",[t._v("常见的表单元素有：文本框，下拉框等。")]),t._v(" "),s("h3",{attrs:{id:"文本框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本框"}},[t._v("#")]),t._v(" 文本框")]),t._v(" "),s("p",[t._v("文本框是我们最常用的表单元素，它有一些独有的属性：")]),t._v(" "),s("ul",[s("li",[t._v("size 显示字符数。")]),t._v(" "),s("li",[t._v("maxLength 接受最大字符数。")])]),t._v(" "),s("p",[t._v("获取文本框中被选择的值：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取焦点，并选中所有文字")]),t._v("\ntext1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selecttionStart text1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selecttionEnd "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//选中的文字开头和结束的索引")]),t._v("\ntext1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSelectionRange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//选取前3个字符")]),t._v("\n")])])]),s("p",[t._v("我们使用一下 api 来过滤输入：")]),t._v(" "),s("ul",[s("li",[t._v("beforecopy 复制。")]),t._v(" "),s("li",[t._v("copy")]),t._v(" "),s("li",[t._v("beforecut 剪切。")]),t._v(" "),s("li",[t._v("cut")]),t._v(" "),s("li",[t._v("beforepaste 粘贴。")]),t._v(" "),s("li",[t._v("paste")])]),t._v(" "),s("p",[t._v("HTML5 中的约束验证属性：")]),t._v(" "),s("ul",[s("li",[t._v("required 属性。")]),t._v(" "),s("li",[t._v("type= email url 等。")]),t._v(" "),s("li",[t._v("partten 属性。")]),t._v(" "),s("li",[t._v("checkValidity 方法。")]),t._v(" "),s("li",[t._v("novalidate 不进行验证 表单属性。")])]),t._v(" "),s("h3",{attrs:{id:"选择框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择框"}},[t._v("#")]),t._v(" 选择框")]),t._v(" "),s("p",[t._v("选择框也是我们常用到的表单元素。")]),t._v(" "),s("h4",{attrs:{id:"选择框的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择框的值"}},[t._v("#")]),t._v(" 选择框的值")]),t._v(" "),s("ul",[s("li",[t._v("如果没选中，value 为空字符串。")]),t._v(" "),s("li",[t._v("如果有一个选中项，option 有 value 字段，则 select 的 value 为选中 option 的 value。")]),t._v(" "),s("li",[t._v("如果有一个选中项，但 option 没有 value 字段，则 select 的 value=选中的 option 的 text。")]),t._v(" "),s("li",[t._v("如果是多选框，则 value 为第一个选中项的值，按上面 2 条规则取。")])]),t._v(" "),s("h4",{attrs:{id:"选择框的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择框的操作"}},[t._v("#")]),t._v(" 选择框的操作")]),t._v(" "),s("p",[t._v("1、设置选择框选中项")]),t._v(" "),s("p",[t._v("通过修改 select.selectedIndex 值。")]),t._v(" "),s("p",[t._v("2、添加选项")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM方法：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  append\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newOption创建元素：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" append\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// select.add添加元素：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  select"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("3、移除选项")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM方法：")]),t._v("\nremoveChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将对应选择项设置为null：")]),t._v("\nselect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"表单元素共性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单元素共性"}},[t._v("#")]),t._v(" 表单元素共性")]),t._v(" "),s("p",[t._v("所有的表单元素都有一些共有的属性和方法。")]),t._v(" "),s("p",[t._v("共有属性：")]),t._v(" "),s("ul",[s("li",[t._v("disabled 是否被禁用。")]),t._v(" "),s("li",[t._v("form 指向所在 form。")]),t._v(" "),s("li",[t._v("name 字段名称。")]),t._v(" "),s("li",[t._v("readOnly 是否只读。")]),t._v(" "),s("li",[t._v("tabIndex 当前字段的切换序号。")]),t._v(" "),s("li",[t._v("type 类型。")]),t._v(" "),s("li",[t._v("value 值。")]),t._v(" "),s("li",[t._v("autofocus 自动获取焦点。")])]),t._v(" "),s("p",[t._v("共有方法：")]),t._v(" "),s("ul",[s("li",[t._v("focus")]),t._v(" "),s("li",[t._v("blur")]),t._v(" "),s("li",[t._v("change （input textarea 需要改变并失去焦点才触发，select 直接触发）。")])]),t._v(" "),s("h2",{attrs:{id:"表单操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单操作"}},[t._v("#")]),t._v(" 表单操作")]),t._v(" "),s("p",[t._v("表单操作主要是通过：提交表单和重置表单。")]),t._v(" "),s("h3",{attrs:{id:"获取表单元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取表单元素"}},[t._v("#")]),t._v(" 获取表单元素")]),t._v(" "),s("p",[t._v("直接通过 form 标签，就能获取到内部表单元素的值。")]),t._v(" "),s("ul",[s("li",[t._v("form.element[0]")]),t._v(" "),s("li",[t._v("form.element['text1'] 获取 name=text1 的元素。")])]),t._v(" "),s("h3",{attrs:{id:"表单提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单提交"}},[t._v("#")]),t._v(" 表单提交")]),t._v(" "),s("p",[t._v("以下三种元素，在点击时都会触发 form.submit 事件。")]),t._v(" "),s("ul",[s("li",[t._v("input type=submit")]),t._v(" "),s("li",[t._v("input type=image")]),t._v(" "),s("li",[t._v("button type=submit")])]),t._v(" "),s("h3",{attrs:{id:"重置表单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重置表单"}},[t._v("#")]),t._v(" 重置表单")]),t._v(" "),s("p",[t._v("使用以下两种方式，可以重置表单中填写的数据。")]),t._v(" "),s("ul",[s("li",[t._v("input type=rest")]),t._v(" "),s("li",[t._v("button type=reset")])]),t._v(" "),s("h3",{attrs:{id:"表单序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单序列化"}},[t._v("#")]),t._v(" 表单序列化")]),t._v(" "),s("p",[t._v("在使用 get 方法表单提交时，会先将表单值进行序列化拼接到 url 上。")]),t._v(" "),s("ul",[s("li",[t._v("对表单字段的名称和值进行 url 编码，使用 & 分隔。")]),t._v(" "),s("li",[t._v("不发送禁用的表单字段。")]),t._v(" "),s("li",[t._v("只发送勾选的复选框和单选按钮。")]),t._v(" "),s("li",[t._v("不发送 type=reset 和 button 的按钮。")]),t._v(" "),s("li",[t._v("多选选择框中的每个选中的值单独一个条目。")]),t._v(" "),s("li",[t._v("单击提交按钮时，也会发送提交按钮，否则不发送提交按钮，也包括 type=image 的元素。")]),t._v(" "),s("li",[t._v("select 元素的值，就是选中的 option 的 value，如果没 value 就是 text。")])]),t._v(" "),s("h2",{attrs:{id:"富文本元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#富文本元素"}},[t._v("#")]),t._v(" 富文本元素")]),t._v(" "),s("p",[t._v("富文本元素其实并不属于表单，在提交时不会被提交给服务器。")]),t._v(" "),s("p",[t._v("富文本的本质是页面中嵌入一个包含空 html 页面的 iframe 。通过设置 designMode=“on” 属性这个空白 html 页面可以被编辑，可编辑对象是 body 元素的 html 代码。也可以使用 contenteditable 属性将一个 div 元素模仿富文本元素。")]),t._v(" "),s("comment")],1)}),[],!1,null,null,null);a.default=n.exports}}]);