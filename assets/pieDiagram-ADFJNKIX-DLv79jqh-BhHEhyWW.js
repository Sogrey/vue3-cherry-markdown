import{t as u,e as q,s as G,o as U,g as Z,z as H,y as K,i as V,J as Q,M as X,a3 as Y,a5 as ee,j as te,E as ae,O as ie,a6 as x,a7 as ne,a8 as z}from"./index-CJOznUyG.js";import{t as re}from"./chunk-4BX2VUAB-DPBuENG3-CmwQgelL.js";import{I as le}from"./treemap-KMMF4GRG-CUGL7R-H-DHnwgQoc.js";import{h as J}from"./arc-CyjqiOvv-CjfRw2by.js";import{h as se}from"./ordinal-Cboi1Yqb-DUCuiKwa.js";import"./_baseUniq-DByKPDz4-UNb9nL3W.js";import"./_basePickBy-XhsUfmrt-Drz9Jf4j.js";import"./mermaid-aQBogYZO.js";import"./clone-CeqvGCx0-DRrE6F5g.js";import"./init-Gi6I4Gst-DHuO7-vr.js";function oe(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function pe(e){return e}function ce(){var e=pe,a=oe,f=null,s=x(0),o=x(z),y=x(0);function l(t){var n,p=(t=ne(t)).length,d,v,m=0,c=new Array(p),r=new Array(p),w=+s.apply(this,arguments),S=Math.min(z,Math.max(-z,o.apply(this,arguments)-w)),h,D=Math.min(Math.abs(S)/p,y.apply(this,arguments)),b=D*(S<0?-1:1),g;for(n=0;n<p;++n)(g=r[c[n]=n]=+e(t[n],n,t))>0&&(m+=g);for(a!=null?c.sort(function($,A){return a(r[$],r[A])}):f!=null&&c.sort(function($,A){return f(t[$],t[A])}),n=0,v=m?(S-p*b)/m:0;n<p;++n,w=h)d=c[n],g=r[d],h=w+(g>0?g*v:0)+b,r[d]={data:t[d],index:n,value:g,startAngle:w,endAngle:h,padAngle:D};return r}return l.value=function(t){return arguments.length?(e=typeof t=="function"?t:x(+t),l):e},l.sortValues=function(t){return arguments.length?(a=t,f=null,l):a},l.sort=function(t){return arguments.length?(f=t,a=null,l):f},l.startAngle=function(t){return arguments.length?(s=typeof t=="function"?t:x(+t),l):s},l.endAngle=function(t){return arguments.length?(o=typeof t=="function"?t:x(+t),l):o},l.padAngle=function(t){return arguments.length?(y=typeof t=="function"?t:x(+t),l):y},l}var ue=ie.pie,R={sections:new Map,showData:!1},C=R.sections,W=R.showData,de=structuredClone(ue),ge=u(()=>structuredClone(de),"getConfig"),fe=u(()=>{C=new Map,W=R.showData,ae()},"clear"),he=u(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);C.has(e)||(C.set(e,a),V.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),me=u(()=>C,"getSections"),we=u(e=>{W=e},"setShowData"),xe=u(()=>W,"getShowData"),L={getConfig:ge,clear:fe,setDiagramTitle:K,getDiagramTitle:H,setAccTitle:Z,getAccTitle:U,setAccDescription:G,getAccDescription:q,addSection:he,getSections:me,setShowData:we,getShowData:xe},ye=u((e,a)=>{re(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ve={parse:u(async e=>{const a=await le("pie",e);V.debug(a),ye(a,L)},"parse")},Se=u(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),$e=Se,Ae=u(e=>{const a=[...e.values()].reduce((s,o)=>s+o,0),f=[...e.entries()].map(([s,o])=>({label:s,value:o})).filter(s=>s.value/a*100>=1).sort((s,o)=>o.value-s.value);return ce().value(s=>s.value)(f)},"createPieArcs"),De=u((e,a,f,s)=>{V.debug(`rendering pie chart
`+e);const o=s.db,y=Q(),l=X(o.getConfig(),y.pie),t=40,n=18,p=4,d=450,v=d,m=Y(a),c=m.append("g");c.attr("transform","translate("+v/2+","+d/2+")");const{themeVariables:r}=y;let[w]=ee(r.pieOuterStrokeWidth);w??=2;const S=l.textPosition,h=Math.min(v,d)/2-t,D=J().innerRadius(0).outerRadius(h),b=J().innerRadius(h*S).outerRadius(h*S);c.append("circle").attr("cx",0).attr("cy",0).attr("r",h+w/2).attr("class","pieOuterCircle");const g=o.getSections(),$=Ae(g),A=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12];let T=0;g.forEach(i=>{T+=i});const E=$.filter(i=>(i.data.value/T*100).toFixed(0)!=="0"),k=se(A);c.selectAll("mySlices").data(E).enter().append("path").attr("d",D).attr("fill",i=>k(i.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(E).enter().append("text").text(i=>(i.data.value/T*100).toFixed(0)+"%").attr("transform",i=>"translate("+b.centroid(i)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const F=[...g.entries()].map(([i,O])=>({label:i,value:O})),M=c.selectAll(".legend").data(F).enter().append("g").attr("class","legend").attr("transform",(i,O)=>{const B=n+p,I=B*F.length/2,_=12*n,j=O*B-I;return"translate("+_+","+j+")"});M.append("rect").attr("width",n).attr("height",n).style("fill",i=>k(i.label)).style("stroke",i=>k(i.label)),M.append("text").attr("x",n+p).attr("y",n-p).text(i=>o.getShowData()?`${i.label} [${i.value}]`:i.label);const P=Math.max(...M.selectAll("text").nodes().map(i=>i?.getBoundingClientRect().width??0)),N=v+t+n+p+P;m.attr("viewBox",`0 0 ${N} ${d}`),te(m,d,N,l.useMaxWidth)},"draw"),be={draw:De},Fe={parser:ve,db:L,renderer:be,styles:$e};export{Fe as diagram};
