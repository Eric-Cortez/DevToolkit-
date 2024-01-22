"use strict";(self.webpackChunkdev_toolkit=self.webpackChunkdev_toolkit||[]).push([[907],{8291:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=s(5893),t=s(1151);const l={sidebar_position:8},o="CSS Basics",r={id:"Web-basics/css",title:"CSS Basics",description:"CSS (Cascading Style Sheets) is a styling language used to control the presentation of web documents. It enhances the look and feel of HTML elements. Here are some fundamental concepts:",source:"@site/docs/Web-basics/css.md",sourceDirName:"Web-basics",slug:"/Web-basics/css",permalink:"/DevToolkit/docs/Web-basics/css",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Web-basics/css.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"webDevSidebar",previous:{title:"HTML Basics",permalink:"/DevToolkit/docs/Web-basics/html"},next:{title:"JS",permalink:"/DevToolkit/docs/Web-basics/javascript"}},a={},d=[{value:"Selectors",id:"selectors",level:2},{value:"Applying Styles",id:"applying-styles",level:3},{value:"Common Properties",id:"common-properties",level:2},{value:"Box Model",id:"box-model",level:2},{value:"Flexbox and Grid Layout",id:"flexbox-and-grid-layout",level:2},{value:"Flexbox",id:"flexbox",level:3},{value:"Grid Layout",id:"grid-layout",level:3},{value:"Responsive Design",id:"responsive-design",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"css-basics",children:"CSS Basics"}),"\n",(0,i.jsx)(n.p,{children:"CSS (Cascading Style Sheets) is a styling language used to control the presentation of web documents. It enhances the look and feel of HTML elements. Here are some fundamental concepts:"}),"\n",(0,i.jsx)(n.h2,{id:"selectors",children:"Selectors"}),"\n",(0,i.jsx)(n.p,{children:"Selectors are patterns used to select and style HTML elements. Three main types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tags/Elements:"})," HTML elements (tags) act as selectors, enabling CSS rules to modify their appearances. Styles can enhance or completely transform the default look. For instance, the following css rule styles all ",(0,i.jsx)(n.code,{children:"<p>"})," element with a font size of 24px and a color of #333."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"p {\n   font-size: 24px;\n   color: #333;\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Classes:"})," When class attribute is added to an HTML tag, it modifies the tag's appearance, offering a versatile styling option for multiple tags. The class selector, identified by a period, can be used multiple times on a page. Example of a class declaration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"  .highlight {\n      background-color: yellow;\n  }\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IDs:"})," An ID selector uniquely identifies an element in an HTML document, naming and styling a specific part of the page layout. It is used only once on a page and starts with a pound sign (#).Example of an id declaration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"  #header {\n  border-bottom: 1px solid #ccc;\n  }\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"applying-styles",children:"Applying Styles"}),"\n",(0,i.jsxs)(n.p,{children:["Styles can be applied inline, within an HTML document using the ",(0,i.jsx)(n.code,{children:"<style>"})," tag, or in an external stylesheet using the ",(0,i.jsx)(n.code,{children:"<link>"}),". It is best practice to use an external style sheet as shown below."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'    <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <title>My Page</title>\n            <link rel="stylesheet" href="styles.css">\n        </head>\n        <body>\n            \x3c!-- Your HTML content here --\x3e\n        </body>\n    </html>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"common-properties",children:"Common Properties"}),"\n",(0,i.jsx)(n.p,{children:"Some commonly used CSS properties include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"color:"})," Sets the text color."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"font-size:"})," Sets the font size."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"margin:"})," Sets the margin space."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"padding:"})," Sets the padding space."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"border:"})," Sets the border properties."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"background-color:"})," Sets the background color."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"box-model",children:"Box Model"}),"\n",(0,i.jsx)(n.p,{children:"All HTML elements can be considered as boxes. The CSS box model consists of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content:"})," Actual content of the box."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Padding:"})," Space between content and border."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Border:"})," Border around the padding."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Margin:"})," Space outside the border."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://commons.wikimedia.org/wiki/File:Boxmodell-detail.png#/media/File:Boxmodell-detail.png",children:(0,i.jsx)(n.img,{src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png",alt:"Boxmodell-detail.png"})})}),"\n",(0,i.jsxs)(n.p,{children:["By ",(0,i.jsx)(n.a,{href:"//commons.wikimedia.org/wiki/User:G%C3%BCnther_M._Apsel",children:"Matthias Apsel"})," - Own work, ",(0,i.jsx)(n.a,{href:"http://creativecommons.org/publicdomain/zero/1.0/deed.en",children:"CC0"}),", ",(0,i.jsx)(n.a,{href:"https://commons.wikimedia.org/w/index.php?curid=34932417",children:"Link"})]}),"\n",(0,i.jsx)(n.h2,{id:"flexbox-and-grid-layout",children:"Flexbox and Grid Layout"}),"\n",(0,i.jsx)(n.p,{children:"Flexbox and Grid Layout are powerful CSS features that facilitate the creation of flexible and responsive designs."}),"\n",(0,i.jsx)(n.h3,{id:"flexbox",children:"Flexbox"}),"\n",(0,i.jsx)(n.p,{children:"Flexbox is a one-dimensional layout method for laying out items in rows or columns. It provides an efficient way to distribute space and align items within a container."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".container {\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n}\n\n.item {\n   flex: 1;\n   margin: 10px;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"grid-layout",children:"Grid Layout"}),"\n",(0,i.jsx)(n.p,{children:"Grid Layout is a two-dimensional layout system for the web. It allows you to design complex layouts with rows and columns, providing precise control over the placement and sizing of elements."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"    .container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 10px;\n  }\n\n  .item {\n    grid-column: span 2;\n  }\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"These layouts offer flexibility and responsiveness, making them essential tools for modern web design."}),"\n",(0,i.jsx)(n.h2,{id:"responsive-design",children:"Responsive Design"}),"\n",(0,i.jsx)(n.p,{children:"CSS allows for the creation of responsive designs that adapt to different screen sizes. Using techniques like media queries, styles can be adjusted based on the device's characteristics."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"@media only screen and (max-width: 600px) {\n   body {\n      font-size: 14px;\n   }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note: These are just the basics of CSS. As you delve deeper, you'll discover more advanced features and techniques to create stunning web designs."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(7294);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);