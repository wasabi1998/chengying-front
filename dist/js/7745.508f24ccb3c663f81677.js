(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[7745],{4130:t=>{function e(t){return t}function n(t,n,i,r,a){this._old=t,this._new=n,this._oldKeyGetter=i||e,this._newKeyGetter=r||e,this.context=a}function i(t,e,n,i,r){for(var a=0;a<t.length;a++){var s="_ec_"+r[i](t[a],a),o=e[s];null==o?(n.push(s),e[s]=a):(o.length||(e[s]=o=[o]),o.push(a))}}n.prototype={constructor:n,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},r=[],a=[];for(i(t,{},r,"_oldKeyGetter",this),i(e,n,a,"_newKeyGetter",this),s=0;s<t.length;s++){if(null!=(u=n[o=r[s]]))(c=u.length)?(1===c&&(n[o]=null),u=u.shift()):n[o]=null,this._update&&this._update(u,s);else this._remove&&this._remove(s)}for(var s=0;s<a.length;s++){var o=a[s];if(n.hasOwnProperty(o)){var u;if(null==(u=n[o]))continue;if(u.length)for(var h=0,c=u.length;h<c;h++)this._add&&this._add(u[h]);else this._add&&this._add(u)}}}};var r=n;t.exports=r},80690:(t,e,n)=>{var i=n(33051);var r=function(t){null!=t&&i.extend(this,t),this.otherDims={}};t.exports=r},87587:(t,e,n)=>{n(38175).__DEV__;var i=n(33051),r=n(4272),a=n(4130),s=n(99574),o=n(68540),u=o.defaultDimValueGetters,h=o.DefaultDataProvider,c=n(10381).summarizeDimensions,l=n(80690),f=i.isObject,d={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},_="undefined"==typeof Uint32Array?Array:Uint32Array,m="undefined"==typeof Int32Array?Array:Int32Array,v="undefined"==typeof Uint16Array?Array:Uint16Array;function g(t){return t._rawCount>65535?_:v}var p=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],y=["_extent","_approximateExtent","_rawExtent"];function D(t,e){i.each(p.concat(e.__wrappedMethods||[]),(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t.__wrappedMethods=e.__wrappedMethods,i.each(y,(function(n){t[n]=i.clone(e[n])})),t._calculationInfo=i.extend(e._calculationInfo)}var I=function(t,e){t=t||["x","y"];for(var n={},r=[],a={},s=0;s<t.length;s++){var o=t[s];i.isString(o)?o=new l({name:o}):o instanceof l||(o=new l(o));var u=o.name;o.type=o.type||"float",o.coordDim||(o.coordDim=u,o.coordDimIndex=0),o.otherDims=o.otherDims||{},r.push(u),n[u]=o,o.index=s,o.createInvertedIndices&&(a[u]=[])}this.dimensions=r,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=c(this),this._invertedIndicesMap=a,this._calculationInfo={},this.userOutput=this._dimensionsSummary.userOutput},w=I.prototype;function x(t,e,n,i,r){var a=d[e.type],s=i-1,o=e.name,u=t[o][s];if(u&&u.length<n){for(var h=new a(Math.min(r-s*n,n)),c=0;c<u.length;c++)h[c]=u[c];t[o][s]=h}for(var l=i*n;l<r;l+=n)t[o].push(new a(Math.min(r-l,n)))}function R(t){var e=t._invertedIndicesMap;i.each(e,(function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){n=e[i]=new m(r.categories.length);for(var a=0;a<n.length;a++)n[a]=-1;for(a=0;a<t._count;a++)n[t.get(i,a)]=a}}))}function O(t,e,n){var i;if(null!=e){var r=t._chunkSize,a=Math.floor(n/r),s=n%r,o=t.dimensions[e],u=t._storage[o][a];if(u){i=u[s];var h=t._dimensionInfos[o].ordinalMeta;h&&h.categories.length&&(i=h.categories[i])}}return i}function C(t){return t}function S(t){return t<this._count&&t>=0?this._indices[t]:-1}function A(t,e){var n=t._idList[e];return null==n&&(n=O(t,t._idDimIdx,e)),null==n&&(n="e\0\0"+e),n}function M(t){return i.isArray(t)||(t=[t]),t}function E(t,e){var n=t.dimensions,r=new I(i.map(n,t.getDimensionInfo,t),t.hostModel);D(r,t);for(var a=r._storage={},s=t._storage,o=0;o<n.length;o++){var u=n[o];s[u]&&(i.indexOf(e,u)>=0?(a[u]=N(s[u]),r._rawExtent[u]=k(),r._extent[u]=null):a[u]=s[u])}return r}function N(t){for(var e,n,i=new Array(t.length),r=0;r<t.length;r++)i[r]=(e=t[r],n=void 0,(n=e.constructor)===Array?e.slice():new n(e));return i}function k(){return[1/0,-1/0]}w.type="list",w.hasItemOption=!0,w.getDimension=function(t){return"number"!=typeof t&&(isNaN(t)||this._dimensionInfos.hasOwnProperty(t))||(t=this.dimensions[t]),t},w.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},w.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},w.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},w.initData=function(t,e,n){(s.isInstance(t)||i.isArrayLike(t))&&(t=new h(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=u[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._dimValueGetterArrayRows=u.arrayRows,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},w.getProvider=function(){return this._rawData},w.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},w.appendValues=function(t,e){for(var n=this._chunkSize,i=this._storage,r=this.dimensions,a=r.length,s=this._rawExtent,o=this.count(),u=o+Math.max(t.length,e?e.length:0),h=this._chunkCount,c=0;c<a;c++){s[g=r[c]]||(s[g]=k()),i[g]||(i[g]=[]),x(i,this._dimensionInfos[g],n,h,u),this._chunkCount=i[g].length}for(var l=new Array(a),f=o;f<u;f++){for(var d=f-o,_=Math.floor(f/n),m=f%n,v=0;v<a;v++){var g=r[v],p=this._dimValueGetterArrayRows(t[d]||l,g,d,v);i[g][_][m]=p;var y=s[g];p<y[0]&&(y[0]=p),p>y[1]&&(y[1]=p)}e&&(this._nameList[f]=e[d])}this._rawCount=this._count=u,this._extent={},R(this)},w._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,a=this._storage,s=this.dimensions,o=s.length,u=this._dimensionInfos,h=this._nameList,c=this._idList,l=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,_=0;_<o;_++){l[I=s[_]]||(l[I]=k());var m=u[I];0===m.otherDims.itemName&&(n=this._nameDimIdx=_),0===m.otherDims.itemId&&(this._idDimIdx=_),a[I]||(a[I]=[]),x(a,m,i,d,e),this._chunkCount=a[I].length}for(var v=new Array(o),g=t;g<e;g++){v=r.getItem(g,v);for(var p=Math.floor(g/i),y=g%i,D=0;D<o;D++){var I,w=a[I=s[D]][p],O=this._dimValueGetter(v,I,g,D);w[y]=O;var C=l[I];O<C[0]&&(C[0]=O),O>C[1]&&(C[1]=O)}if(!r.pure){var S=h[g];if(v&&null==S)if(null!=v.name)h[g]=S=v.name;else if(null!=n){var A=s[n],M=a[A][p];if(M){S=M[y];var E=u[A].ordinalMeta;E&&E.categories.length&&(S=E.categories[S])}}var N=null==v?null:v.id;null==N&&null!=S&&(f[S]=f[S]||0,N=S,f[S]>0&&(N+="__ec__"+f[S]),f[S]++),null!=N&&(c[g]=N)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},R(this)}},w.count=function(){return this._count},w.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array){r=new e(n);for(var i=0;i<n;i++)r[i]=t[i]}else r=new e(t.buffer,0,n)}else{var r=new(e=g(this))(this.count());for(i=0;i<r.length;i++)r[i]=i}return r},w.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},w.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},w._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},w.getValues=function(t,e){var n=[];i.isArray(t)||(e=t,t=this.dimensions);for(var r=0,a=t.length;r<a;r++)n.push(this.get(t[r],e));return n},w.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=0,i=e.length;n<i;n++)if(isNaN(this.get(e[n],t)))return!1;return!0},w.getDataExtent=function(t){t=this.getDimension(t);var e=this._storage[t],n=k();if(!e)return n;var i,r=this.count();if(!this._indices)return this._rawExtent[t].slice();if(i=this._extent[t])return i.slice();for(var a=(i=n)[0],s=i[1],o=0;o<r;o++){var u=this._getFast(t,this.getRawIndex(o));u<a&&(a=u),u>s&&(s=u)}return i=[a,s],this._extent[t]=i,i},w.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},w.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},w.getCalculationInfo=function(t){return this._calculationInfo[t]},w.setCalculationInfo=function(t,e){f(t)?i.extend(this._calculationInfo,t):this._calculationInfo[t]=e},w.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},w.getMedian=function(t){var e=[];this.each(t,(function(t,n){isNaN(t)||e.push(t)}));var n=[].concat(e).sort((function(t,e){return t-e})),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},w.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},w.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},w.indexOfRawIndex=function(t){if(t>=this._rawCount||t<0)return-1;if(!this._indices)return t;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var a=(i+r)/2|0;if(e[a]<t)i=a+1;else{if(!(e[a]>t))return a;r=a-1}}return-1},w.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=1/0,a=-1,s=0,o=0,u=this.count();o<u;o++){var h=e-this.get(t,o),c=Math.abs(h);c<=n&&((c<r||c===r&&h>=0&&a<0)&&(r=c,a=h,s=0),h===a&&(i[s++]=o))}return i.length=s,i},w.getRawIndex=C,w.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},w.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||O(this,this._nameDimIdx,e)||""},w.getId=function(t){return A(this,this.getRawIndex(t))},w.each=function(t,e,n,r){"use strict";if(this._count){"function"==typeof t&&(r=n,n=e,e=t,t=[]),n=n||r||this;for(var a=(t=i.map(M(t),this.getDimension,this)).length,s=0;s<this.count();s++)switch(a){case 0:e.call(n,s);break;case 1:e.call(n,this.get(t[0],s),s);break;case 2:e.call(n,this.get(t[0],s),this.get(t[1],s),s);break;default:for(var o=0,u=[];o<a;o++)u[o]=this.get(t[o],s);u[o]=s,e.apply(n,u)}}},w.filterSelf=function(t,e,n,r){"use strict";if(this._count){"function"==typeof t&&(r=n,n=e,e=t,t=[]),n=n||r||this,t=i.map(M(t),this.getDimension,this);for(var a=this.count(),s=new(g(this))(a),o=[],u=t.length,h=0,c=t[0],l=0;l<a;l++){var f,d=this.getRawIndex(l);if(0===u)f=e.call(n,l);else if(1===u){var _=this._getFast(c,d);f=e.call(n,_,l)}else{for(var m=0;m<u;m++)o[m]=this._getFast(c,d);o[m]=l,f=e.apply(n,o)}f&&(s[h++]=d)}return h<a&&(this._indices=s),this._count=h,this._extent={},this.getRawIndex=this._indices?S:C,this}},w.selectRange=function(t){"use strict";if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),a=new(g(this))(r),s=0,o=e[0],u=t[o][0],h=t[o][1],c=!1;if(!this._indices){var l=0;if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var _=f[d],m=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<m;v++){((w=_[v])>=u&&w<=h||isNaN(w))&&(a[s++]=l),l++}c=!0}else if(2===i){f=this._storage[o];var p=this._storage[e[1]],y=t[e[1]][0],D=t[e[1]][1];for(d=0;d<this._chunkCount;d++){_=f[d];var I=p[d];for(m=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<m;v++){var w=_[v],x=I[v];(w>=u&&w<=h||isNaN(w))&&(x>=y&&x<=D||isNaN(x))&&(a[s++]=l),l++}}c=!0}}if(!c)if(1===i)for(v=0;v<r;v++){var R=this.getRawIndex(v);((w=this._getFast(o,R))>=u&&w<=h||isNaN(w))&&(a[s++]=R)}else for(v=0;v<r;v++){var O=!0;for(R=this.getRawIndex(v),d=0;d<i;d++){var A=e[d];((w=this._getFast(n,R))<t[A][0]||w>t[A][1])&&(O=!1)}O&&(a[s++]=this.getRawIndex(v))}return s<r&&(this._indices=a),this._count=s,this._extent={},this.getRawIndex=this._indices?S:C,this}}},w.mapArray=function(t,e,n,i){"use strict";"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,(function(){r.push(e&&e.apply(this,arguments))}),n),r},w.map=function(t,e,n,r){"use strict";n=n||r||this;var a=E(this,t=i.map(M(t),this.getDimension,this));a._indices=this._indices,a.getRawIndex=a._indices?S:C;for(var s=a._storage,o=[],u=this._chunkSize,h=t.length,c=this.count(),l=[],f=a._rawExtent,d=0;d<c;d++){for(var _=0;_<h;_++)l[_]=this.get(t[_],d);l[h]=d;var m=e&&e.apply(n,l);if(null!=m){"object"!=typeof m&&(o[0]=m,m=o);for(var v=this.getRawIndex(d),g=Math.floor(v/u),p=v%u,y=0;y<m.length;y++){var D=t[y],I=m[y],w=f[D],x=s[D];x&&(x[g][p]=I),I<w[0]&&(w[0]=I),I>w[1]&&(w[1]=I)}}}return a},w.downSample=function(t,e,n,i){for(var r=E(this,[t]),a=r._storage,s=[],o=Math.floor(1/e),u=a[t],h=this.count(),c=this._chunkSize,l=r._rawExtent[t],f=new(g(this))(h),d=0,_=0;_<h;_+=o){o>h-_&&(o=h-_,s.length=o);for(var m=0;m<o;m++){var v=this.getRawIndex(_+m),p=Math.floor(v/c),y=v%c;s[m]=u[p][y]}var D=n(s),I=this.getRawIndex(Math.min(_+i(s,D)||0,h-1)),w=I%c;u[Math.floor(I/c)][w]=D,D<l[0]&&(l[0]=D),D>l[1]&&(l[1]=D),f[d++]=I}return r._count=d,r._indices=f,r.getRawIndex=S,r},w.getItemModel=function(t){var e=this.hostModel;return new r(this.getRawDataItem(t),e,e&&e.ecModel)},w.diff=function(t){var e=this;return new a(t?t.getIndices():[],this.getIndices(),(function(e){return A(t,e)}),(function(t){return A(e,t)}))},w.getVisual=function(t){var e=this._visual;return e&&e[t]},w.setVisual=function(t,e){if(f(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},w.setLayout=function(t,e){if(f(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},w.getLayout=function(t){return this._layout[t]},w.getItemLayout=function(t){return this._itemLayouts[t]},w.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?i.extend(this._itemLayouts[t]||{},e):e},w.clearItemLayouts=function(){this._itemLayouts.length=0},w.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},w.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,f(e))for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a],r[a]=!0);else i[e]=n,r[e]=!0},w.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var T=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};w.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(T,e)),this._graphicEls[t]=e},w.getItemGraphicEl=function(t){return this._graphicEls[t]},w.eachItemGraphicEl=function(t,e){i.each(this._graphicEls,(function(n,i){n&&t&&t.call(e,n,i)}))},w.cloneShallow=function(t){if(!t){var e=i.map(this.dimensions,this.getDimensionInfo,this);t=new I(e,this.hostModel)}if(t._storage=this._storage,D(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?S:C,t},w.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(i.slice(arguments)))})},w.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],w.CHANGABLE_METHODS=["filterSelf","selectRange"];var L=I;t.exports=L},51401:(t,e,n)=>{var i=n(33051),r=i.createHashMap,a=i.isObject,s=i.map;function o(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}o.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&s(n,c);return new o({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var u=o.prototype;function h(t){return t._map||(t._map=r(t.categories))}function c(t){return a(t)&&null!=t.value?t.value:t+""}u.getOrdinal=function(t){return h(this).get(t)},u.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=h(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var l=o;t.exports=l},99574:(t,e,n)=>{var i=n(33051),r=i.createHashMap,a=i.isTypedArray,s=n(34251).enableClassCheck,o=n(93819),u=o.SOURCE_FORMAT_ORIGINAL,h=o.SERIES_LAYOUT_BY_COLUMN,c=o.SOURCE_FORMAT_UNKNOWN,l=o.SOURCE_FORMAT_TYPED_ARRAY,f=o.SOURCE_FORMAT_KEYED_COLUMNS;function d(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===f?{}:[]),this.sourceFormat=t.sourceFormat||c,this.seriesLayoutBy=t.seriesLayoutBy||h,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&r(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}d.seriesDataToSource=function(t){return new d({data:t,sourceFormat:a(t)?l:u,fromDataset:!1})},s(d);var _=d;t.exports=_},34380:(t,e,n)=>{var i=n(33051),r=i.createHashMap,a=i.each,s=i.isString,o=i.defaults,u=i.extend,h=i.isObject,c=i.clone,l=n(32234).normalizeToArray,f=n(61772),d=f.guessOrdinal,_=f.BE_ORDINAL,m=n(99574),v=n(10381).OTHER_DIMENSIONS,g=n(80690);function p(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}var y=function(t,e,n){m.isInstance(e)||(e=m.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var i=(n.dimsDef||[]).slice(),f=r(),y=r(),D=[],I=function(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return a(e,(function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))})),r}(e,t,i,n.dimCount),w=0;w<I;w++){var x=i[w]=u({},h(i[w])?i[w]:{name:i[w]}),R=x.name,O=D[w]=new g;null!=R&&null==f.get(R)&&(O.name=O.displayName=R,f.set(R,w)),null!=x.type&&(O.type=x.type),null!=x.displayName&&(O.displayName=x.displayName)}var C=n.encodeDef;!C&&n.encodeDefaulter&&(C=n.encodeDefaulter(e,I)),(C=r(C)).each((function(t,e){if(1===(t=l(t).slice()).length&&!s(t[0])&&t[0]<0)C.set(e,!1);else{var n=C.set(e,[]);a(t,(function(t,i){s(t)&&(t=f.get(t)),null!=t&&t<I&&(n[i]=t,A(D[t],e,i))}))}}));var S=0;function A(t,e,n){null!=v.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,y.set(e,!0))}a(t,(function(t,e){var n,i,r;if(s(t))n=t,t={};else{n=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=c(t)).ordinalMeta=u,i=t.dimsDef,r=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}if(!1!==(f=C.get(n))){var f;if(!(f=l(f)).length)for(var d=0;d<(i&&i.length||1);d++){for(;S<D.length&&null!=D[S].coordDim;)S++;S<D.length&&f.push(S++)}a(f,(function(e,a){var s=D[e];if(A(o(s,t),n,a),null==s.name&&i){var u=i[a];!h(u)&&(u={name:u}),s.name=s.displayName=u.name,s.defaultTooltip=u.defaultTooltip}r&&o(s.otherDims,r)}))}}));var M=n.generateCoord,E=n.generateCoordCount,N=null!=E;E=M?E||1:0;for(var k=M||"value",T=0;T<I;T++){null==(O=D[T]=D[T]||new g).coordDim&&(O.coordDim=p(k,y,N),O.coordDimIndex=0,(!M||E<=0)&&(O.isExtraCoord=!0),E--),null==O.name&&(O.name=p(O.coordDim,f)),null!=O.type||d(e,T,O.name)!==_.Must&&(!O.isExtraCoord||null==O.otherDims.itemName&&null==O.otherDims.seriesName)||(O.type="ordinal")}return D};t.exports=y},55623:(t,e,n)=>{var i=n(34380);t.exports=function(t,e){return i((e=e||{}).coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,encodeDefaulter:e.encodeDefaulter,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})}},68540:(t,e,n)=>{n(38175).__DEV__;var i=n(33051),r=(i.isTypedArray,i.extend),a=(i.assert,i.each),s=i.isObject,o=n(32234),u=o.getDataItemValue,h=o.isDataItemOption,c=n(85669).parseDate,l=n(99574),f=n(93819),d=f.SOURCE_FORMAT_TYPED_ARRAY,_=f.SOURCE_FORMAT_ARRAY_ROWS,m=f.SOURCE_FORMAT_ORIGINAL,v=f.SOURCE_FORMAT_OBJECT_ROWS;function g(t,e){l.isInstance(t)||(t=l.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===d&&(this._offset=0,this._dimSize=e,this._data=n);var a=y[i===_?i+"_"+t.seriesLayoutBy:i];r(this,a)}var p=g.prototype;p.pure=!1,p.persistent=!0,p.getSource=function(){return this._source};var y={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:w},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:D,getItem:I,appendData:w},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;a(t,(function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])}))}},original:{count:D,getItem:I,appendData:w},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}};function D(){return this._data.length}function I(t){return this._data[t]}function w(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}var x={arrayRows:R,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:R,original:function(t,e,n,i){var r=u(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:R};function R(t,e,n,i){return null!=n?t[n]:t}var O={arrayRows:C,objectRows:function(t,e,n,i){return S(t[e],this._dimensionInfos[e])},keyedColumns:C,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&h(t)&&(this.hasItemOption=!0),S(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}};function C(t,e,n,i){return S(t[i],this._dimensionInfos[e])}function S(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+c(t)),null==t||""===t?NaN:+t}e.DefaultDataProvider=g,e.defaultDimValueGetters=O,e.retrieveRawValue=function(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,a,s=t.getProvider().getSource().sourceFormat,o=t.getDimensionInfo(n);return o&&(r=o.name,a=o.index),x[s](i,e,a,r)}}},e.retrieveRawAttr=function(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===m||i===v){var r=t.getRawDataItem(e);return i!==m||s(r)||(r=null),r?r[n]:void 0}}}},99936:(t,e,n)=>{var i=n(33051),r=i.each,a=i.isString;function s(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}e.enableDataStack=function(t,e,n){var i,s,o,u,h=(n=n||{}).byIndex,c=n.stackedCoordDimension,l=!(!t||!t.get("stack"));if(r(e,(function(t,n){a(t)&&(e[n]=t={name:t}),l&&!t.isExtraCoord&&(h||i||!t.ordinalMeta||(i=t),s||"ordinal"===t.type||"time"===t.type||c&&c!==t.coordDim||(s=t))})),!s||h||i||(h=!0),s){o="__\0ecstackresult",u="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var f=s.coordDim,d=s.type,_=0;r(e,(function(t){t.coordDim===f&&_++})),e.push({name:o,coordDim:f,coordDimIndex:_,type:d,isExtraCoord:!0,isCalculationCoord:!0}),_++,e.push({name:u,coordDim:u,coordDimIndex:_,type:d,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:s&&s.name,stackedByDimension:i&&i.name,isStackedByIndex:h,stackedOverDimension:u,stackResultDimension:o}},e.isDimensionStacked=s,e.getStackedDimension=function(t,e){return s(t,e)?t.getCalculationInfo("stackResultDimension"):e}},10381:(t,e,n)=>{var i=n(33051),r=i.each,a=i.createHashMap,s=(i.assert,n(38175).__DEV__,a(["tooltip","label","itemName","itemId","seriesName"]));function o(t,e){return t.hasOwnProperty(e)||(t[e]=[]),t[e]}e.OTHER_DIMENSIONS=s,e.summarizeDimensions=function(t){var e={},n=e.encode={},i=a(),u=[],h=[],c=e.userOutput={dimensionNames:t.dimensions.slice(),encode:{}};r(t.dimensions,(function(e){var r,a=t.getDimensionInfo(e),l=a.coordDim;if(l){var f=a.coordDimIndex;o(n,l)[f]=e,a.isExtraCoord||(i.set(l,1),"ordinal"!==(r=a.type)&&"time"!==r&&(u[0]=e),o(c.encode,l)[f]=a.index),a.defaultTooltip&&h.push(e)}s.each((function(t,e){var i=o(n,e),r=a.otherDims[e];null!=r&&!1!==r&&(i[r]=a.name)}))}));var l=[],f={};i.each((function(t,e){var i=n[e];f[e]=i[0],l=l.concat(i)})),e.dataDimsOnCoord=l,e.encodeFirstDimNotExtra=f;var d=n.label;d&&d.length&&(u=d.slice());var _=n.tooltip;return _&&_.length?h=_.slice():h.length||(h=u.slice()),n.defaultedLabel=u,n.defaultedTooltip=h,e},e.getDimensionTypeByAxis=function(t){return"category"===t?"ordinal":"time"===t?"time":"float"}},61772:(t,e,n)=>{n(38175).__DEV__;var i=n(32234),r=i.makeInner,a=i.getDataItemValue,s=n(33051),o=s.createHashMap,u=s.each,h=s.map,c=s.isArray,l=s.isString,f=s.isObject,d=s.isTypedArray,_=s.isArrayLike,m=s.extend,v=(s.assert,n(99574)),g=n(93819),p=g.SOURCE_FORMAT_ORIGINAL,y=g.SOURCE_FORMAT_ARRAY_ROWS,D=g.SOURCE_FORMAT_OBJECT_ROWS,I=g.SOURCE_FORMAT_KEYED_COLUMNS,w=g.SOURCE_FORMAT_UNKNOWN,x=g.SOURCE_FORMAT_TYPED_ARRAY,R=g.SERIES_LAYOUT_BY_ROW,O={Must:1,Might:2,Not:3},C=r();function S(t){if(t){var e=o();return h(t,(function(t,n){if(null==(t=m({},f(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var i=e.get(t.name);return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t}))}}function A(t,e,n,i){if(null==i&&(i=1/0),e===R)for(var r=0;r<n.length&&r<i;r++)t(n[r]?n[r][0]:null,r);else{var a=n[0]||[];for(r=0;r<a.length&&r<i;r++)t(a[r],r)}}function M(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}function E(t,e,n,i,r,s){var o,u,h;if(d(t))return O.Not;if(i){var _=i[s];f(_)?(u=_.name,h=_.type):l(_)&&(u=_)}if(null!=h)return"ordinal"===h?O.Must:O.Not;if(e===y)if(n===R){for(var m=t[s],v=0;v<(m||[]).length&&v<5;v++)if(null!=(o=C(m[r+v])))return o}else for(v=0;v<t.length&&v<5;v++){var g=t[r+v];if(g&&null!=(o=C(g[s])))return o}else if(e===D){if(!u)return O.Not;for(v=0;v<t.length&&v<5;v++){if((w=t[v])&&null!=(o=C(w[u])))return o}}else if(e===I){if(!u)return O.Not;if(!(m=t[u])||d(m))return O.Not;for(v=0;v<m.length&&v<5;v++)if(null!=(o=C(m[v])))return o}else if(e===p)for(v=0;v<t.length&&v<5;v++){var w=t[v],x=a(w);if(!c(x))return O.Not;if(null!=(o=C(x[s])))return o}function C(t){var e=l(t);return null!=t&&isFinite(t)&&""!==t?e?O.Might:O.Not:e&&"-"!==t?O.Must:void 0}return O.Not}e.BE_ORDINAL=O,e.detectSourceFormat=function(t){var e=t.option.source,n=w;if(d(e))n=x;else if(c(e)){0===e.length&&(n=y);for(var i=0,r=e.length;i<r;i++){var a=e[i];if(null!=a){if(c(a)){n=y;break}if(f(a)){n=D;break}}}}else if(f(e)){for(var s in e)if(e.hasOwnProperty(s)&&_(e[s])){n=I;break}}else if(null!=e)throw new Error("Invalid data");C(t).sourceFormat=n},e.getSource=function(t){return C(t).source},e.resetSourceDefaulter=function(t){C(t).datasetMap=o()},e.prepareSource=function(t){var e=t.option,n=e.data,i=d(n)?x:p,r=!1,s=e.seriesLayoutBy,o=e.sourceHeader,h=e.dimensions,f=M(t);if(f){var _=f.option;n=_.source,i=C(f).sourceFormat,r=!0,s=s||_.seriesLayoutBy,null==o&&(o=_.sourceHeader),h=h||_.dimensions}var m=function(t,e,n,i,r){if(!t)return{dimensionsDefine:S(r)};var s,o;if(e===y)"auto"===i||null==i?A((function(t){null!=t&&"-"!==t&&(l(t)?null==o&&(o=1):o=0)}),n,t,10):o=i?1:0,r||1!==o||(r=[],A((function(t,e){r[e]=null!=t?t:""}),n,t)),s=r?r.length:n===R?t.length:t[0]?t[0].length:null;else if(e===D)r||(r=function(t){var e,n=0;for(;n<t.length&&!(e=t[n++]););if(e){var i=[];return u(e,(function(t,e){i.push(e)})),i}}(t));else if(e===I)r||(r=[],u(t,(function(t,e){r.push(e)})));else if(e===p){var h=a(t[0]);s=c(h)&&h.length||1}return{startIndex:o,dimensionsDefine:S(r),dimensionsDetectCount:s}}(n,i,s,o,h);C(t).source=new v({data:n,fromDataset:r,seriesLayoutBy:s,sourceFormat:i,dimensionsDefine:m.dimensionsDefine,startIndex:m.startIndex,dimensionsDetectCount:m.dimensionsDetectCount,encodeDefine:e.encode})},e.makeSeriesEncodeForAxisCoordSys=function(t,e,n){var i={},r=M(e);if(!r||!t)return i;var a,s,o=[],h=[],c=e.ecModel,l=C(c).datasetMap,d=r.uid+"_"+n.seriesLayoutBy;t=t.slice(),u(t,(function(e,n){!f(e)&&(t[n]={name:e}),"ordinal"===e.type&&null==a&&(a=n,s=v(t[n])),i[e.name]=[]}));var _=l.get(d)||l.set(d,{categoryWayDim:s,valueWayDim:0});function m(t,e,n){for(var i=0;i<n;i++)t.push(e+i)}function v(t){var e=t.dimsDef;return e?e.length:1}return u(t,(function(t,e){var n=t.name,r=v(t);if(null==a){var s=_.valueWayDim;m(i[n],s,r),m(h,s,r),_.valueWayDim+=r}else if(a===e)m(i[n],0,r),m(o,0,r);else{s=_.categoryWayDim;m(i[n],s,r),m(h,s,r),_.categoryWayDim+=r}})),o.length&&(i.itemName=o),h.length&&(i.seriesName=h),i},e.makeSeriesEncodeForNameBased=function(t,e,n){var i={};if(!M(t))return i;var r,a=e.sourceFormat,s=e.dimensionsDefine;a!==D&&a!==I||u(s,(function(t,e){"name"===(f(t)?t.name:t)&&(r=e)}));var o=function(){for(var t={},i={},o=[],u=0,h=Math.min(5,n);u<h;u++){var c=E(e.data,a,e.seriesLayoutBy,s,e.startIndex,u);o.push(c);var l=c===O.Not;if(l&&null==t.v&&u!==r&&(t.v=u),(null==t.n||t.n===t.v||!l&&o[t.n]===O.Not)&&(t.n=u),f(t)&&o[t.n]!==O.Not)return t;l||(c===O.Might&&null==i.v&&u!==r&&(i.v=u),null!=i.n&&i.n!==i.v||(i.n=u))}function f(t){return null!=t.v&&null!=t.n}return f(t)?t:f(i)?i:null}();if(o){i.value=o.v;var h=null!=r?r:o.n;i.itemName=[h],i.seriesName=[h]}return i},e.guessOrdinal=function(t,e){return E(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}},93819:(t,e)=>{e.SOURCE_FORMAT_ORIGINAL="original",e.SOURCE_FORMAT_ARRAY_ROWS="arrayRows",e.SOURCE_FORMAT_OBJECT_ROWS="objectRows",e.SOURCE_FORMAT_KEYED_COLUMNS="keyedColumns",e.SOURCE_FORMAT_UNKNOWN="unknown",e.SOURCE_FORMAT_TYPED_ARRAY="typedArray",e.SERIES_LAYOUT_BY_COLUMN="column",e.SERIES_LAYOUT_BY_ROW="row"}}]);