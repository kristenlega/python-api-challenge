google.maps.__gjsload__('visualization_impl', function(_){var N$=function(){if(null!=M$)return M$;var a=document.createElement("canvas");return M$=!(!a.getContext||!a.getContext("2d"))},O$=function(a){for(var b=Array(a),c=0;c<a;++c)b[c]=0;c=Array(a);for(var d=0;d<a;++d)c[d]=b.concat();return c},xka=function(a){if(!a||!a.getLength())return 1;var b=new _.Vf;a.forEach(function(l){l&&b.extend(l.location?l.location:l)});var c=b.Wa.i,d=b.Ra.i,e=Math.max(b.Wa.j-c,b.Ra.j-d);if(1E-9>e){var f=0;a.forEach(function(l){l instanceof _.J?++f:f+=l.weight});return Math.max(1,
f)}var g=800/e,h=O$(800),k=1;a.forEach(function(l){if(l){var m=l.location?l.location:l;l=l.weight||1;m=new _.O(Math.max(0,Math.min(799,Math.floor((m.lat()-c)*g))),Math.max(0,Math.min(799,Math.floor((m.lng()-d)*g))));h[m.x][m.y]+=l;k=Math.max(k,h[m.x][m.y])}});return k},zka=function(a,b){var c=[],d=[],e=1E3/(a.length-1);_.A(a,function(h,k){c.push(k*e);d.push(_.cM(h))});a=Array(1001);for(var f=0,g=0;1001>g;++g)g>c[f+1]&&++f,a[g]=f<c.length-1?yka(e*f,g,e*(f+1),d[f],d[f+1]):d[d.length-1],a[g].alpha*=
b,a[g].alpha=_.$d(Math.floor(255*a[g].alpha),0,255);return a},yka=function(a,b,c,d,e){if(a==c)return d;a=(b-a)/(c-a);return new _.$L(Math.floor((e.o-d.o)*a+d.o),Math.floor((e.j-d.j)*a+d.j),Math.floor((e.i-d.i)*a+d.i),(e.alpha-d.alpha)*a+d.alpha)},P$=function(a,b){this.H=a;this.j=b;this.i=1;this.o=[]},Q$=function(a,b,c){_.fo(b.Ma,"");if(N$()){var d=b.ownerDocument,e,f=e=d.createElement("canvas");_.lo(f);f.width=f.height=256;f=f.getContext("2d");var g=1<a.i;b.Ma.appendChild(e);b=Aka(a,b);e=a.o;for(var h=
Math.floor(e.length/2),k=b.length,l=k-h,m=O$(k),q=0;q<k;++q)for(var r=b[q],v=m[q],u=0;u<k;++u){var x=r[u];if(x)for(var w=u-h,F=Math.min(l,u+h+1),H=Math.max(h,w);H<F;++H)v[H]+=x*e[H-w]}b=O$(k-2*h);for(q=0;q<k;++q)for(r=m[q],v=Math.max(h,q-h),u=Math.min(l,q+h+1),x=q-h,w=h,F=0;w<l;++w,++F)if(H=r[w])for(var L=v;L<u;++L)b[L-h][F]+=H*e[L-x];e=Math.ceil(256/a.i);e=f.createImageData(e,e);h=a.get("gradient");k=h[h.length-1];c=h.length/c;l=e.data;q=m=0;for(r=b.length;q<r;++q)for(v=b[q],u=0,x=v.length;u<x;++u)(w=
v[u])||h[0].alpha?(w=h[Math.floor(w*c)]||k,l[m++]=w.o,l[m++]=w.j,l[m++]=w.i,l[m++]=w.alpha):m+=4;g?(d=d.createElement("canvas"),d.width=d.height=256/a.i,d.getContext("2d").putImageData(e,0,0),f.scale(a.i,a.i),f.drawImage(d,0,0)):f.putImageData(e,0,0)}},Aka=function(a,b){var c=a.get("projection");c=_.Jn(c);var d=a.get("radius");d=Math.round(d/a.i)*a.i;var e=b.ad,f=(256+2*d)/a.i,g=O$(f),h;for(h in e){var k=e[h],l=c.fromLatLngToPoint(new _.J(k.Ka,k.Ha,!0)),m=c.fromLatLngToPoint(new _.J(k.Oa,k.Na,!0)),
q=null;q=_.Tp(a.j,new _.bh(l.x,l.y),b.zoom,function(w){return w});m=_.Tp(a.j,new _.bh(m.x,m.y),b.zoom,function(w){return w});l=d/256;q=_.$p(a.j,{Ca:Math.min(q.Ca,m.Ca)+l,Da:Math.min(q.Da,m.Da)+l,Ia:b.zoom});q=new _.O(q.i,q.j);k=a.H.search(k);m=0;for(l=k.length;m<l;++m){var r=k[m],v=c.fromLatLngToPoint(new _.J(r.Xa.x,r.Xa.y)),u=0,x=0;v=_.Ty(a.j,new _.bh(v.x,v.y),new _.bh(q.x,q.y),b.zoom);u=Math.floor(256*v.Ca);x=Math.floor(256*v.Da);v=Math.floor((x+d)/a.i);u=Math.floor((u+d)/a.i);0<=v&&v<f&&0<=u&&
u<f&&(g[v][u]+=r.weight)}}return g},U$=function(a,b){b=void 0===b?_.nq:b;var c=this;this.T=b;this.ka=new _.Q(256,256);this.i={};b=_.Eh(-100,-300,100,300);this.W=new _.lL(b,void 0);b=_.Eh(-90,-180,90,180);this.o=_.rL(b,function(d,e){return d.Xa.equals(e.Xa)&&d.weight==e.weight});this.ua=[];this.$=new _.nh;this.j=0;this.H=new P$(this.o,this.T);this.H.bindTo("projection",this,"projection",!0);this.H.bindTo("gradient",this,"gradient",!0);this.H.bindTo("radius",this,"radius",!0);a(this.$,function(d){return Q$(c.H,
d,c.j)});this.ta=new _.gn(function(){var d=c.j;c.j=R$(c);_.be(d,c.j)||S$(c)},0);this.addListener("data_changed",function(){return Bka(c)});this.addListener("maxintensity_changed",function(){c.j=R$(c);S$(c)});this.addListener("gradient_changed",function(){S$(c)});this.addListener("opacity_changed",function(){var d=c.get("opacity"),e;for(e in c.i)c.i.hasOwnProperty(e)&&_.Pz(c.i[e].Ma,d)});this.addListener("radius_changed",function(){for(var d in c.i)if(c.i.hasOwnProperty(d)){var e=c.i[d],f=void 0,g=
e.ad;for(f in g)g.hasOwnProperty(f)&&c.W.remove(g[f]);e.ad={};T$(c,e)}S$(c)});this.triggersTileLoadEvent=!0},T$=function(a,b){var c={Ca:b.Va.x,Da:b.Va.y,Ia:b.zoom},d=a.get("radius"),e=_.Jn(a.get("projection")),f=_.$p(a.T,c);f=new _.O(f.i,f.j);d=_.Sy(a.T,c,d/256);c=d.min;d=d.max;c=_.Eh(c.i,c.j,d.i,d.j);_.sL(c,e,f,function(g){g.i=b;b.ad[_.pf(g)]=g;_.mL(a.W,g)})},R$=function(a){var b=a.get("maxIntensity");return 1<=b?b:xka(a.get("data"))},Bka=function(a){a.o.clear();var b=a.get("data");b&&(b.forEach(function(e){e&&
_.qL(a.o,V$(e))}),a.ta.Mb());S$(a);for(var c=_.p(a.ua),d=c.next();!d.done;d=c.next())_.M.removeListener(d.value);a.ua=b?[b.addListener("insert_at",function(e){return W$(a,e)}),b.addListener("remove_at",function(e,f){return X$(a,f)}),b.addListener("set_at",function(e,f){X$(a,f);W$(a,e)})]:[]},W$=function(a,b){if(b=a.get("data").getAt(b))b=V$(b),_.qL(a.o,b),a.ta.Mb(),Y$(a,b.Xa)},X$=function(a,b){b&&(b=V$(b),a.o.remove(b),a.ta.Mb(),Y$(a,b.Xa))},Y$=function(a,b){b=_.oL(a.W,b);b=_.p(b);for(var c=b.next();!c.done;c=
b.next())_.oh(a.$,c.value.i)},S$=function(a){for(var b in a.i)a.i.hasOwnProperty(b)&&_.oh(a.$,a.i[b])},V$=function(a){var b=a.location?a.location:a;a=a.weight||1;return{Xa:new _.O(b.lat(),b.lng()),weight:a}},Z$=function(a,b){var c=new _.RJ(_.SJ(250));this.i=a;a.i=(0,_.y)(this.o,this);this.T=b;this.j=c},$$=function(){},M$,Cka="rgba(102, 255, 0, 0);rgba(102, 255, 0, 1);rgba(147, 255, 0, 1);rgba(193, 255, 0, 1);rgba(238, 255, 0, 1);rgba(244, 227, 0, 1);rgba(249, 198, 0, 1);rgba(255, 170, 0, 1);rgba(255, 113, 0, 1);rgba(255, 57, 0, 1);rgba(255, 0, 0, 1)".split(";");_.z(P$,_.N);P$.prototype.radius_changed=function(){var a=this.get("radius");N$()?this.i=20>a?1:2:this.i=4;a=Math.round(a/this.i);for(var b=a/3,c=[],d=-a;d<=a;d++)c.push(Math.exp(-d*d/(2*b*b)));this.o=c};_.Ba(U$,_.qj);U$.prototype.Nb=function(){return{tileSize:{ya:this.ka.width,Aa:this.ka.height},Ua:this.T,Vb:2,Xb:this.va.bind(this)}};
U$.prototype.va=function(a,b){var c=this,d=(void 0===b?{}:b).Jb,e=document.createElement("div");_.Rh(e,this.ka);b=this.get("opacity");void 0!==b&&_.Pz(e,b);var f={Ma:e,zoom:a.Ia,Va:new _.O(a.Ca,a.Da),ad:{},ownerDocument:document};e.wb=f;this.i[_.pf(f)]=f;T$(this,f);this.j||(this.j=R$(this));Q$(this.H,f,this.j);var g=!1;a=Promise.resolve();a.then(function(){g=!0});return{ub:function(){return e},qc:function(){return g},loaded:a,release:function(){_.fo(e,"");delete c.i[_.pf(f)];d&&d()}}};
U$.prototype.releaseTile=function(a){if(a){var b=a.wb;a.wb=null;delete this.i[_.pf(b)];a=this.W;for(var c in b.ad)b.ad.hasOwnProperty(c)&&a.remove(b.ad[c]);_.fo(b.Ma,"")}};Z$.prototype.o=function(){_.GJ(this.j,(0,_.y)(this.H,this))};Z$.prototype.H=function(){a:{var a=this.i.j;for(var b in a){a=a[b];this.i.remove(a);break a}a=null}a&&this.T(a)};$$.prototype.i=function(a){var b=a.o,c=a.o=a.get("map");b&&(a.i&&(a.i.unbindAll(),a.i=null),a.j&&(a.j.release(),a.j=null),_.Fn("Lh","-p",a));if(c){var d=function(){k&&k.unbindAll();k=new U$(g,h);c&&k.bindTo("projection",c);k.bindTo("data",a);k.bindTo("maxIntensity",a);k.bindTo("gradient",e,"colorGradient");k.bindTo("radius",f,"renderingRadius");a.i&&(k.bindTo("opacity",a.i),e.set("opacity",1))};a.i=new _.gt({dissipating:!0,gradient:Cka,opacity:.6,radius:10});a.i.bindTo("dissipating",a);a.i.bindTo("gradient",
a);a.i.bindTo("opacity",a);a.i.bindTo("radius",a);var e=new _.kK(["stringGradient","opacity"],"colorGradient",function(q,r){return zka(q,r)});e.bindTo("stringGradient",a.i,"gradient",!0);var f=new _.kK(["radius","dissipating","zoom"],"renderingRadius",function(q,r,v){return r?q:Math.min(Math.round(q*Math.pow(2,v)),256)});f.bindTo("radius",a.i);f.bindTo("zoom",c);f.bindTo("dissipating",a.i);var g=function(q,r){new Z$(q,r)};b=c.__gm;var h=void 0,k=null;d();var l=k.Nb(),m=_.Sg(l);b.j.then(function(q){q.ke.hb(function(r){r&&
h!=r.Ua&&(h=r.Ua,d(),m.set(k.Nb()))})});_.IL(c,m,"overlayLayer",15,{Cj:function(q){a.j&&a.j.release();a.j=q}});_.rg(c,"Lh");_.En("Lh","-p",a)}};_.bf("visualization_impl",new $$);});
