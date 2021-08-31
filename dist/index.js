/*!
 * @md-util-loader-docs v1.0.1
 * (c) 2020-2021 xs
 * Released under the MIT License.
 * 2021-08-31 3:56:22
 */
const marked=require('markdown-it')({xhtmlOut:true,breaks:true,linkify:true,typographer:false});const tags=['h1','h2','h3','h4','ul','ol','pre','img','p','table'];module.exports=async function(source){const loaderContext=this;const{async,query}=loaderContext;const type=query.type??'react';const callback=async();try{const className=type==='react'?'className':'class';let html=marked.render(source).replace(/{/g,'{"{"{').replace(/}/g,'{"}"}').replace(/{"{"{/g,'{"{"}').replace(/(\n)/g,'{"\\n"}');tags.forEach((tag)=>{html=html.replace(new RegExp(`<${tag}(([\s\S])*?)>`,'g'),`<${tag} ${className}="dui-md-${tag}">`)});let result;if(type==='react'){html=html.replace(/class=/g,'className=');result=`import React from'react';export default function(){return(<div className="dui-md">${html}</div>)}`}else if(type==='vue'){result=`<templete><div class="dui-md">${html}</div></templete>`}else{result=html}callback(null,result)}catch(err){callback(null,err)}};
