(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(48);var r=a(0),n=a.n(r),i=a(157),s=a.n(i),o=a(160),c=a.n(o),u=a(159),l=a(161),f=a(173);t.default=function(e){var t=c()(e,"data.site.siteMetadata.title"),a=c()(e,"data.allMarkdownRemark.edges"),r=e.pageContext.tag;return n.a.createElement(u.a,{location:e.location,title:t},n.a.createElement(s.a,{title:"Tags | "+t}),n.a.createElement(f.a,{queryKey:"Tag",queryValue:r}),a.map(function(e){var t=e.node;return n.a.createElement(l.a,{key:t.fields.slug,author:t.frontmatter.author,category:t.frontmatter.category,content:t.excerpt,date:t.frontmatter.date,slug:t.fields.slug,tags:t.frontmatter.tags,title:c()(t,"frontmatter.title")||t.fields.slug})}))};var d="571259444"},149:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(154),c=function(e){var t=e.className,a=e.icon,r=e.size,i=o[a];return n.a.createElement(i,{className:t||null,size:r||20})};c.propTypes={className:s.a.string,icon:s.a.string.isRequired,size:s.a.number},t.a=c},151:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=(a(154),a(149)),c=a(152),u=function(e){var t=e.category,a=e.hideIcon,r=(e.lede,e.modifier);return n.a.createElement("div",{className:"CategoryLink "+(r?"CategoryLink--"+r:"")},!a&&n.a.createElement(o.a,{className:"CategoryLink__icon",icon:"Folder"}),n.a.createElement(c.a,{queryKey:"categories",queryValue:t}))};u.propTypes={category:s.a.string.isRequired,hideIcon:s.a.bool,lede:s.a.string,modifier:s.a.string},t.a=u},152:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(150),c=function(e){var t=e.className,a=e.queryKey,r=e.queryValue;return n.a.createElement(o.Link,{className:"SearchLink SearchLink--"+a+" "+(t||""),to:"/"+a+"/"+r},r)};c.propTypes={className:s.a.string,queryKey:s.a.string.isRequired,queryValue:s.a.string.isRequired},t.a=c},153:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=function(e){var t=e.centered,a=e.children;return n.a.createElement("header",{className:"PageHeader "+(t?"PageHeader--centered":"")},a,n.a.createElement("hr",null))};s.propTypes={centered:a.n(i).a.bool},t.a=s},155:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(149),c=function(e){var t=e.date,a=e.hideIcon,r=e.modifier;return n.a.createElement("div",{className:"PostDate "+(r?"PostDate--"+r:"")},!a&&n.a.createElement(o.a,{className:"PostDate__icon",icon:"Calendar"}),n.a.createElement("time",{className:"PostDate__date"},t))};c.propTypes={date:s.a.string.isRequired,hideIcon:s.a.bool,modifier:s.a.string},t.a=c},156:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(155),c=a(151),u=(a(48),a(152)),l=a(149),f=function(e){var t=e.hideIcon,a=e.modifier,r=e.tags;return n.a.createElement("div",{className:"TagLinks "+(a?"TagLinks--"+a:"")},!t&&n.a.createElement(l.a,{className:"TagLinks__icon",icon:"Tag"}),r.map(function(e){return n.a.createElement(u.a,{key:e,queryKey:"tags",queryValue:e})}))};f.propTypes={hideIcon:s.a.bool,modifier:s.a.string,tags:s.a.arrayOf(s.a.string).isRequired};var d=f,m=function(e){var t="https://twitter.com/intent/tweet?text="+("“"+e.articleTitle+"” by Sean McPherson (@_seanmcp)  ̶ "+e.articleHref);return n.a.createElement("a",{className:"TweetButton",href:t,target:"_blank"},n.a.createElement(l.a,{className:"TweetButton__icon",icon:"Twitter"}),n.a.createElement("span",{className:"TweetButton__text"},"Share"))};m.propTypes={articleHref:s.a.string.isRequired,articleTitle:s.a.string.isRequired};var g=m,p=function(e){var t=e.articleHref,a=e.articleTitle,r=e.category,i=e.date,s=e.modifier,u=e.tags;return n.a.createElement("footer",{className:"PostFooter "+(s?"PostFooter--"+s:"")},i&&n.a.createElement(o.a,{date:i,modifier:"post-footer"}),r&&n.a.createElement(c.a,{category:r}),n.a.createElement(d,{modifier:"post-footer",tags:u}),t&&a&&n.a.createElement(g,{articleHref:t,articleTitle:a}))};p.propTypes={articleHref:s.a.string,articleTitle:s.a.string,date:s.a.string,modifier:s.a.string,tags:s.a.arrayOf(s.a.string).isRequired};t.a=p},161:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(150),c=a(151),u=a(156),l=function(e){return n.a.createElement("article",{className:"PostPreview "+(e.condensed?"PostPreview--condensed":"")},n.a.createElement("header",{className:"PostPreview__header"},n.a.createElement("h3",{className:"PostPreview__title"},n.a.createElement(o.Link,{to:"articles/"+e.slug},e.title)),n.a.createElement(c.a,{category:e.category})),n.a.createElement("p",{className:"PostPreview__content",dangerouslySetInnerHTML:{__html:e.content}}),n.a.createElement(u.a,{date:e.date,tags:e.tags}))};l.propTypes={author:s.a.string,condensed:s.a.bool,content:s.a.string.isRequired,date:s.a.string.isRequired,slug:s.a.string.isRequired,title:s.a.string.isRequired},t.a=l},163:function(e,t){var a=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return a.test(e)}},173:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(174),c=a.n(o),u=a(153),l=function(e){var t=e.queryKey,a=e.queryValue,r=c()(a);return n.a.createElement(u.a,null,n.a.createElement("h1",{className:"SearchHeader__heading"},r),n.a.createElement("p",null,"All the articles ","Category"===t?"in":"with"," the “",n.a.createElement("strong",null,r),"” ",t.toLowerCase(),"."))};l.propTypes={queryKey:s.a.string.isRequired,queryValue:s.a.string.isRequired},t.a=l},174:function(e,t,a){var r=a(162),n=a(175);e.exports=function(e){return n(r(e).toLowerCase())}},175:function(e,t,a){var r=a(176)("toUpperCase");e.exports=r},176:function(e,t,a){var r=a(177),n=a(163),i=a(179),s=a(162);e.exports=function(e){return function(t){t=s(t);var a=n(t)?i(t):void 0,o=a?a[0]:t.charAt(0),c=a?r(a,1).join(""):t.slice(1);return o[e]()+c}}},177:function(e,t,a){var r=a(178);e.exports=function(e,t,a){var n=e.length;return a=void 0===a?n:a,!t&&a>=n?e:r(e,t,a)}},178:function(e,t){e.exports=function(e,t,a){var r=-1,n=e.length;t<0&&(t=-t>n?0:n+t),(a=a>n?n:a)<0&&(a+=n),n=t>a?0:a-t>>>0,t>>>=0;for(var i=Array(n);++r<n;)i[r]=e[r+t];return i}},179:function(e,t,a){var r=a(180),n=a(163),i=a(181);e.exports=function(e){return n(e)?i(e):r(e)}},180:function(e,t){e.exports=function(e){return e.split("")}},181:function(e,t){var a="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",n="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+n+")"+"?",u="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[i,s,o].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),l="(?:"+[i+r+"?",r,s,o,a].join("|")+")",f=RegExp(n+"(?="+n+")|"+l+u,"g");e.exports=function(e){return e.match(f)||[]}}}]);
//# sourceMappingURL=component---src-templates-tag-template-js-c006d56b1648ec486071.js.map