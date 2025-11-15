import{t as f,M as w,a3 as C,j as v,i as m,g as P,o as z,y as S,z as E,e as F,s as W,N as T,O as D,E as V}from"./index-CN1fDS-C.js";import{t as A}from"./chunk-4BX2VUAB-DPBuENG3-B9arYP-q.js";import{I}from"./treemap-KMMF4GRG-CUGL7R-H-C_flV7am.js";import"./_baseUniq-DByKPDz4-BOw8W0jW.js";import"./_basePickBy-XhsUfmrt-hP7NznXp.js";import"./mermaid-BXl3LOEh.js";import"./clone-CeqvGCx0-BRxjkXs1.js";var M=D.packet,u,y=(u=class{constructor(){this.packet=[],this.setAccTitle=P,this.getAccTitle=z,this.setDiagramTitle=S,this.getDiagramTitle=E,this.getAccDescription=F,this.setAccDescription=W}getConfig(){const t=w({...M,...T().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){V(),this.packet=[]}},f(u,"PacketDB"),u),Y=1e4,j=f((t,e)=>{A(t,e);let r=-1,i=[],n=1;const{bitsPerRow:l}=e.getConfig();for(let{start:a,end:o,bits:d,label:c}of t.blocks){if(a!==void 0&&o!==void 0&&o<a)throw new Error(`Packet block ${a} - ${o} is invalid. End must be greater than start.`);if(a??=r+1,a!==r+1)throw new Error(`Packet block ${a} - ${o??a} is not contiguous. It should start from ${r+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(o??=a+(d??1)-1,d??=o-a+1,r=o,m.debug(`Packet block ${a} - ${r} with label ${c}`);i.length<=l+1&&e.getPacket().length<Y;){const[p,s]=H({start:a,end:o,bits:d,label:c},n,l);if(i.push(p),p.end+1===n*l&&(e.pushWord(i),i=[],n++),!s)break;({start:a,end:o,bits:d,label:c}=s)}}e.pushWord(i)},"populate"),H=f((t,e,r)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*r)return[t,void 0];const i=e*r-1,n=e*r;return[{start:t.start,end:i,label:t.label,bits:i-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),x={parser:{yy:void 0},parse:f(async t=>{const e=await I("packet",t),r=x.parser?.yy;if(!(r instanceof y))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");m.debug(e),j(e,r)},"parse")},L=f((t,e,r,i)=>{const n=i.db,l=n.getConfig(),{rowHeight:a,paddingY:o,bitWidth:d,bitsPerRow:c}=l,p=n.getPacket(),s=n.getDiagramTitle(),h=a+o,b=h*(p.length+1)-(s?0:a),k=d*c+2,g=C(e);g.attr("viewbox",`0 0 ${k} ${b}`),v(g,b,k,l.useMaxWidth);for(const[$,B]of p.entries())N(g,B,$,l);g.append("text").text(s).attr("x",k/2).attr("y",b-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),N=f((t,e,r,{rowHeight:i,paddingX:n,paddingY:l,bitWidth:a,bitsPerRow:o,showBits:d})=>{const c=t.append("g"),p=r*(i+l)+l;for(const s of e){const h=s.start%o*a+1,b=(s.end-s.start+1)*a-n;if(c.append("rect").attr("x",h).attr("y",p).attr("width",b).attr("height",i).attr("class","packetBlock"),c.append("text").attr("x",h+b/2).attr("y",p+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(s.label),!d)continue;const k=s.end===s.start,g=p-2;c.append("text").attr("x",h+(k?b/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(s.start),k||c.append("text").attr("x",h+b).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(s.end)}},"drawWord"),R={draw:L},O={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},q=f(({packet:t}={})=>{const e=w(O,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),_={parser:x,get db(){return new y},renderer:R,styles:q};export{_ as diagram};
