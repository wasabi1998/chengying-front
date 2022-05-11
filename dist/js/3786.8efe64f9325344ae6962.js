(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[3786],{52027:t=>{var e=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32};e.Diff=function(t,e){return[t,e]},e.prototype.diff_main=function(t,n,i,r){void 0===r&&(r=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+1e3*this.Diff_Timeout);var h=r;if(null==t||null==n)throw new Error("Null input. (diff_main)");if(t==n)return t?[new e.Diff(0,t)]:[];void 0===i&&(i=!0);var s=i,f=this.diff_commonPrefix(t,n),a=t.substring(0,f);t=t.substring(f),n=n.substring(f),f=this.diff_commonSuffix(t,n);var l=t.substring(t.length-f);t=t.substring(0,t.length-f),n=n.substring(0,n.length-f);var g=this.diff_compute_(t,n,s,h);return a&&g.unshift(new e.Diff(0,a)),l&&g.push(new e.Diff(0,l)),this.diff_cleanupMerge(g),g},e.prototype.diff_compute_=function(t,n,i,r){var h;if(!t)return[new e.Diff(1,n)];if(!n)return[new e.Diff(-1,t)];var s=t.length>n.length?t:n,f=t.length>n.length?n:t,a=s.indexOf(f);if(-1!=a)return h=[new e.Diff(1,s.substring(0,a)),new e.Diff(0,f),new e.Diff(1,s.substring(a+f.length))],t.length>n.length&&(h[0][0]=h[2][0]=-1),h;if(1==f.length)return[new e.Diff(-1,t),new e.Diff(1,n)];var l=this.diff_halfMatch_(t,n);if(l){var g=l[0],o=l[1],c=l[2],u=l[3],p=l[4],d=this.diff_main(g,c,i,r),_=this.diff_main(o,u,i,r);return d.concat([new e.Diff(0,p)],_)}return i&&t.length>100&&n.length>100?this.diff_lineMode_(t,n,r):this.diff_bisect_(t,n,r)},e.prototype.diff_lineMode_=function(t,n,i){var r=this.diff_linesToChars_(t,n);t=r.chars1,n=r.chars2;var h=r.lineArray,s=this.diff_main(t,n,!1,i);this.diff_charsToLines_(s,h),this.diff_cleanupSemantic(s),s.push(new e.Diff(0,""));for(var f=0,a=0,l=0,g="",o="";f<s.length;){switch(s[f][0]){case 1:l++,o+=s[f][1];break;case-1:a++,g+=s[f][1];break;case 0:if(a>=1&&l>=1){s.splice(f-a-l,a+l),f=f-a-l;for(var c=this.diff_main(g,o,!1,i),u=c.length-1;u>=0;u--)s.splice(f,0,c[u]);f+=c.length}l=0,a=0,g="",o=""}f++}return s.pop(),s},e.prototype.diff_bisect_=function(t,n,i){for(var r=t.length,h=n.length,s=Math.ceil((r+h)/2),f=s,a=2*s,l=new Array(a),g=new Array(a),o=0;o<a;o++)l[o]=-1,g[o]=-1;l[f+1]=0,g[f+1]=0;for(var c=r-h,u=c%2!=0,p=0,d=0,_=0,b=0,v=0;v<s&&!((new Date).getTime()>i);v++){for(var m=-v+p;m<=v-d;m+=2){for(var w=f+m,x=(A=m==-v||m!=v&&l[w-1]<l[w+1]?l[w+1]:l[w-1]+1)-m;A<r&&x<h&&t.charAt(A)==n.charAt(x);)A++,x++;if(l[w]=A,A>r)d+=2;else if(x>h)p+=2;else if(u){if((D=f+c-m)>=0&&D<a&&-1!=g[D])if(A>=(y=r-g[D]))return this.diff_bisectSplit_(t,n,A,x,i)}}for(var M=-v+_;M<=v-b;M+=2){for(var y,D=f+M,k=(y=M==-v||M!=v&&g[D-1]<g[D+1]?g[D+1]:g[D-1]+1)-M;y<r&&k<h&&t.charAt(r-y-1)==n.charAt(h-k-1);)y++,k++;if(g[D]=y,y>r)b+=2;else if(k>h)_+=2;else if(!u){if((w=f+c-M)>=0&&w<a&&-1!=l[w]){var A;x=f+(A=l[w])-w;if(A>=(y=r-y))return this.diff_bisectSplit_(t,n,A,x,i)}}}}return[new e.Diff(-1,t),new e.Diff(1,n)]},e.prototype.diff_bisectSplit_=function(t,e,n,i,r){var h=t.substring(0,n),s=e.substring(0,i),f=t.substring(n),a=e.substring(i),l=this.diff_main(h,s,!1,r),g=this.diff_main(f,a,!1,r);return l.concat(g)},e.prototype.diff_linesToChars_=function(t,e){var n=[],i={};function r(t){for(var e="",r=0,s=-1,f=n.length;s<t.length-1;){-1==(s=t.indexOf("\n",r))&&(s=t.length-1);var a=t.substring(r,s+1);(i.hasOwnProperty?i.hasOwnProperty(a):void 0!==i[a])?e+=String.fromCharCode(i[a]):(f==h&&(a=t.substring(r),s=t.length),e+=String.fromCharCode(f),i[a]=f,n[f++]=a),r=s+1}return e}n[0]="";var h=4e4,s=r(t);return h=65535,{chars1:s,chars2:r(e),lineArray:n}},e.prototype.diff_charsToLines_=function(t,e){for(var n=0;n<t.length;n++){for(var i=t[n][1],r=[],h=0;h<i.length;h++)r[h]=e[i.charCodeAt(h)];t[n][1]=r.join("")}},e.prototype.diff_commonPrefix=function(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,i=Math.min(t.length,e.length),r=i,h=0;n<r;)t.substring(h,r)==e.substring(h,r)?h=n=r:i=r,r=Math.floor((i-n)/2+n);return r},e.prototype.diff_commonSuffix=function(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,i=Math.min(t.length,e.length),r=i,h=0;n<r;)t.substring(t.length-r,t.length-h)==e.substring(e.length-r,e.length-h)?h=n=r:i=r,r=Math.floor((i-n)/2+n);return r},e.prototype.diff_commonOverlap_=function(t,e){var n=t.length,i=e.length;if(0==n||0==i)return 0;n>i?t=t.substring(n-i):n<i&&(e=e.substring(0,n));var r=Math.min(n,i);if(t==e)return r;for(var h=0,s=1;;){var f=t.substring(r-s),a=e.indexOf(f);if(-1==a)return h;s+=a,0!=a&&t.substring(r-s)!=e.substring(0,s)||(h=s,s++)}},e.prototype.diff_halfMatch_=function(t,e){if(this.Diff_Timeout<=0)return null;var n=t.length>e.length?t:e,i=t.length>e.length?e:t;if(n.length<4||2*i.length<n.length)return null;var r=this;function h(t,e,n){for(var i,h,s,f,a=t.substring(n,n+Math.floor(t.length/4)),l=-1,g="";-1!=(l=e.indexOf(a,l+1));){var o=r.diff_commonPrefix(t.substring(n),e.substring(l)),c=r.diff_commonSuffix(t.substring(0,n),e.substring(0,l));g.length<c+o&&(g=e.substring(l-c,l)+e.substring(l,l+o),i=t.substring(0,n-c),h=t.substring(n+o),s=e.substring(0,l-c),f=e.substring(l+o))}return 2*g.length>=t.length?[i,h,s,f,g]:null}var s,f,a,l,g,o=h(n,i,Math.ceil(n.length/4)),c=h(n,i,Math.ceil(n.length/2));return o||c?(s=c?o&&o[4].length>c[4].length?o:c:o,t.length>e.length?(f=s[0],a=s[1],l=s[2],g=s[3]):(l=s[0],g=s[1],f=s[2],a=s[3]),[f,a,l,g,s[4]]):null},e.prototype.diff_cleanupSemantic=function(t){for(var n=!1,i=[],r=0,h=null,s=0,f=0,a=0,l=0,g=0;s<t.length;)0==t[s][0]?(i[r++]=s,f=l,a=g,l=0,g=0,h=t[s][1]):(1==t[s][0]?l+=t[s][1].length:g+=t[s][1].length,h&&h.length<=Math.max(f,a)&&h.length<=Math.max(l,g)&&(t.splice(i[r-1],0,new e.Diff(-1,h)),t[i[r-1]+1][0]=1,r--,s=--r>0?i[r-1]:-1,f=0,a=0,l=0,g=0,h=null,n=!0)),s++;for(n&&this.diff_cleanupMerge(t),this.diff_cleanupSemanticLossless(t),s=1;s<t.length;){if(-1==t[s-1][0]&&1==t[s][0]){var o=t[s-1][1],c=t[s][1],u=this.diff_commonOverlap_(o,c),p=this.diff_commonOverlap_(c,o);u>=p?(u>=o.length/2||u>=c.length/2)&&(t.splice(s,0,new e.Diff(0,c.substring(0,u))),t[s-1][1]=o.substring(0,o.length-u),t[s+1][1]=c.substring(u),s++):(p>=o.length/2||p>=c.length/2)&&(t.splice(s,0,new e.Diff(0,o.substring(0,p))),t[s-1][0]=1,t[s-1][1]=c.substring(0,c.length-p),t[s+1][0]=-1,t[s+1][1]=o.substring(p),s++),s++}s++}},e.prototype.diff_cleanupSemanticLossless=function(t){function n(t,n){if(!t||!n)return 6;var i=t.charAt(t.length-1),r=n.charAt(0),h=i.match(e.nonAlphaNumericRegex_),s=r.match(e.nonAlphaNumericRegex_),f=h&&i.match(e.whitespaceRegex_),a=s&&r.match(e.whitespaceRegex_),l=f&&i.match(e.linebreakRegex_),g=a&&r.match(e.linebreakRegex_),o=l&&t.match(e.blanklineEndRegex_),c=g&&n.match(e.blanklineStartRegex_);return o||c?5:l||g?4:h&&!f&&a?3:f||a?2:h||s?1:0}for(var i=1;i<t.length-1;){if(0==t[i-1][0]&&0==t[i+1][0]){var r=t[i-1][1],h=t[i][1],s=t[i+1][1],f=this.diff_commonSuffix(r,h);if(f){var a=h.substring(h.length-f);r=r.substring(0,r.length-f),h=a+h.substring(0,h.length-f),s=a+s}for(var l=r,g=h,o=s,c=n(r,h)+n(h,s);h.charAt(0)===s.charAt(0);){r+=h.charAt(0),h=h.substring(1)+s.charAt(0),s=s.substring(1);var u=n(r,h)+n(h,s);u>=c&&(c=u,l=r,g=h,o=s)}t[i-1][1]!=l&&(l?t[i-1][1]=l:(t.splice(i-1,1),i--),t[i][1]=g,o?t[i+1][1]=o:(t.splice(i+1,1),i--))}i++}},e.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,e.whitespaceRegex_=/\s/,e.linebreakRegex_=/[\r\n]/,e.blanklineEndRegex_=/\n\r?\n$/,e.blanklineStartRegex_=/^\r?\n\r?\n/,e.prototype.diff_cleanupEfficiency=function(t){for(var n=!1,i=[],r=0,h=null,s=0,f=!1,a=!1,l=!1,g=!1;s<t.length;)0==t[s][0]?(t[s][1].length<this.Diff_EditCost&&(l||g)?(i[r++]=s,f=l,a=g,h=t[s][1]):(r=0,h=null),l=g=!1):(-1==t[s][0]?g=!0:l=!0,h&&(f&&a&&l&&g||h.length<this.Diff_EditCost/2&&f+a+l+g==3)&&(t.splice(i[r-1],0,new e.Diff(-1,h)),t[i[r-1]+1][0]=1,r--,h=null,f&&a?(l=g=!0,r=0):(s=--r>0?i[r-1]:-1,l=g=!1),n=!0)),s++;n&&this.diff_cleanupMerge(t)},e.prototype.diff_cleanupMerge=function(t){t.push(new e.Diff(0,""));for(var n,i=0,r=0,h=0,s="",f="";i<t.length;)switch(t[i][0]){case 1:h++,f+=t[i][1],i++;break;case-1:r++,s+=t[i][1],i++;break;case 0:r+h>1?(0!==r&&0!==h&&(0!==(n=this.diff_commonPrefix(f,s))&&(i-r-h>0&&0==t[i-r-h-1][0]?t[i-r-h-1][1]+=f.substring(0,n):(t.splice(0,0,new e.Diff(0,f.substring(0,n))),i++),f=f.substring(n),s=s.substring(n)),0!==(n=this.diff_commonSuffix(f,s))&&(t[i][1]=f.substring(f.length-n)+t[i][1],f=f.substring(0,f.length-n),s=s.substring(0,s.length-n))),i-=r+h,t.splice(i,r+h),s.length&&(t.splice(i,0,new e.Diff(-1,s)),i++),f.length&&(t.splice(i,0,new e.Diff(1,f)),i++),i++):0!==i&&0==t[i-1][0]?(t[i-1][1]+=t[i][1],t.splice(i,1)):i++,h=0,r=0,s="",f=""}""===t[t.length-1][1]&&t.pop();var a=!1;for(i=1;i<t.length-1;)0==t[i-1][0]&&0==t[i+1][0]&&(t[i][1].substring(t[i][1].length-t[i-1][1].length)==t[i-1][1]?(t[i][1]=t[i-1][1]+t[i][1].substring(0,t[i][1].length-t[i-1][1].length),t[i+1][1]=t[i-1][1]+t[i+1][1],t.splice(i-1,1),a=!0):t[i][1].substring(0,t[i+1][1].length)==t[i+1][1]&&(t[i-1][1]+=t[i+1][1],t[i][1]=t[i][1].substring(t[i+1][1].length)+t[i+1][1],t.splice(i+1,1),a=!0)),i++;a&&this.diff_cleanupMerge(t)},e.prototype.diff_xIndex=function(t,e){var n,i=0,r=0,h=0,s=0;for(n=0;n<t.length&&(1!==t[n][0]&&(i+=t[n][1].length),-1!==t[n][0]&&(r+=t[n][1].length),!(i>e));n++)h=i,s=r;return t.length!=n&&-1===t[n][0]?s:s+(e-h)},e.prototype.diff_prettyHtml=function(t){for(var e=[],n=/&/g,i=/</g,r=/>/g,h=/\n/g,s=0;s<t.length;s++){var f=t[s][0],a=t[s][1].replace(n,"&amp;").replace(i,"&lt;").replace(r,"&gt;").replace(h,"&para;<br>");switch(f){case 1:e[s]='<ins style="background:#e6ffe6;">'+a+"</ins>";break;case-1:e[s]='<del style="background:#ffe6e6;">'+a+"</del>";break;case 0:e[s]="<span>"+a+"</span>"}}return e.join("")},e.prototype.diff_text1=function(t){for(var e=[],n=0;n<t.length;n++)1!==t[n][0]&&(e[n]=t[n][1]);return e.join("")},e.prototype.diff_text2=function(t){for(var e=[],n=0;n<t.length;n++)-1!==t[n][0]&&(e[n]=t[n][1]);return e.join("")},e.prototype.diff_levenshtein=function(t){for(var e=0,n=0,i=0,r=0;r<t.length;r++){var h=t[r][0],s=t[r][1];switch(h){case 1:n+=s.length;break;case-1:i+=s.length;break;case 0:e+=Math.max(n,i),n=0,i=0}}return e+=Math.max(n,i)},e.prototype.diff_toDelta=function(t){for(var e=[],n=0;n<t.length;n++)switch(t[n][0]){case 1:e[n]="+"+encodeURI(t[n][1]);break;case-1:e[n]="-"+t[n][1].length;break;case 0:e[n]="="+t[n][1].length}return e.join("\t").replace(/%20/g," ")},e.prototype.diff_fromDelta=function(t,n){for(var i=[],r=0,h=0,s=n.split(/\t/g),f=0;f<s.length;f++){var a=s[f].substring(1);switch(s[f].charAt(0)){case"+":try{i[r++]=new e.Diff(1,decodeURI(a))}catch(t){throw new Error("Illegal escape in diff_fromDelta: "+a)}break;case"-":case"=":var l=parseInt(a,10);if(isNaN(l)||l<0)throw new Error("Invalid number in diff_fromDelta: "+a);var g=t.substring(h,h+=l);"="==s[f].charAt(0)?i[r++]=new e.Diff(0,g):i[r++]=new e.Diff(-1,g);break;default:if(s[f])throw new Error("Invalid diff operation in diff_fromDelta: "+s[f])}}if(h!=t.length)throw new Error("Delta length ("+h+") does not equal source text length ("+t.length+").");return i},e.prototype.match_main=function(t,e,n){if(null==t||null==e||null==n)throw new Error("Null input. (match_main)");return n=Math.max(0,Math.min(n,t.length)),t==e?0:t.length?t.substring(n,n+e.length)==e?n:this.match_bitap_(t,e,n):-1},e.prototype.match_bitap_=function(t,e,n){if(e.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var i=this.match_alphabet_(e),r=this;function h(t,i){var h=t/e.length,s=Math.abs(n-i);return r.Match_Distance?h+s/r.Match_Distance:s?1:h}var s=this.Match_Threshold,f=t.indexOf(e,n);-1!=f&&(s=Math.min(h(0,f),s),-1!=(f=t.lastIndexOf(e,n+e.length))&&(s=Math.min(h(0,f),s)));var a,l,g=1<<e.length-1;f=-1;for(var o,c=e.length+t.length,u=0;u<e.length;u++){for(a=0,l=c;a<l;)h(u,n+l)<=s?a=l:c=l,l=Math.floor((c-a)/2+a);c=l;var p=Math.max(1,n-l+1),d=Math.min(n+l,t.length)+e.length,_=Array(d+2);_[d+1]=(1<<u)-1;for(var b=d;b>=p;b--){var v=i[t.charAt(b-1)];if(_[b]=0===u?(_[b+1]<<1|1)&v:(_[b+1]<<1|1)&v|(o[b+1]|o[b])<<1|1|o[b+1],_[b]&g){var m=h(u,b-1);if(m<=s){if(s=m,!((f=b-1)>n))break;p=Math.max(1,2*n-f)}}}if(h(u+1,n)>s)break;o=_}return f},e.prototype.match_alphabet_=function(t){for(var e={},n=0;n<t.length;n++)e[t.charAt(n)]=0;for(n=0;n<t.length;n++)e[t.charAt(n)]|=1<<t.length-n-1;return e},e.prototype.patch_addContext_=function(t,n){if(0!=n.length){if(null===t.start2)throw Error("patch not initialized");for(var i=n.substring(t.start2,t.start2+t.length1),r=0;n.indexOf(i)!=n.lastIndexOf(i)&&i.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)r+=this.Patch_Margin,i=n.substring(t.start2-r,t.start2+t.length1+r);r+=this.Patch_Margin;var h=n.substring(t.start2-r,t.start2);h&&t.diffs.unshift(new e.Diff(0,h));var s=n.substring(t.start2+t.length1,t.start2+t.length1+r);s&&t.diffs.push(new e.Diff(0,s)),t.start1-=h.length,t.start2-=h.length,t.length1+=h.length+s.length,t.length2+=h.length+s.length}},e.prototype.patch_make=function(t,n,i){var r,h;if("string"==typeof t&&"string"==typeof n&&void 0===i)r=t,(h=this.diff_main(r,n,!0)).length>2&&(this.diff_cleanupSemantic(h),this.diff_cleanupEfficiency(h));else if(t&&"object"==typeof t&&void 0===n&&void 0===i)h=t,r=this.diff_text1(h);else if("string"==typeof t&&n&&"object"==typeof n&&void 0===i)r=t,h=n;else{if("string"!=typeof t||"string"!=typeof n||!i||"object"!=typeof i)throw new Error("Unknown call format to patch_make.");r=t,h=i}if(0===h.length)return[];for(var s=[],f=new e.patch_obj,a=0,l=0,g=0,o=r,c=r,u=0;u<h.length;u++){var p=h[u][0],d=h[u][1];switch(a||0===p||(f.start1=l,f.start2=g),p){case 1:f.diffs[a++]=h[u],f.length2+=d.length,c=c.substring(0,g)+d+c.substring(g);break;case-1:f.length1+=d.length,f.diffs[a++]=h[u],c=c.substring(0,g)+c.substring(g+d.length);break;case 0:d.length<=2*this.Patch_Margin&&a&&h.length!=u+1?(f.diffs[a++]=h[u],f.length1+=d.length,f.length2+=d.length):d.length>=2*this.Patch_Margin&&a&&(this.patch_addContext_(f,o),s.push(f),f=new e.patch_obj,a=0,o=c,l=g)}1!==p&&(l+=d.length),-1!==p&&(g+=d.length)}return a&&(this.patch_addContext_(f,o),s.push(f)),s},e.prototype.patch_deepCopy=function(t){for(var n=[],i=0;i<t.length;i++){var r=t[i],h=new e.patch_obj;h.diffs=[];for(var s=0;s<r.diffs.length;s++)h.diffs[s]=new e.Diff(r.diffs[s][0],r.diffs[s][1]);h.start1=r.start1,h.start2=r.start2,h.length1=r.length1,h.length2=r.length2,n[i]=h}return n},e.prototype.patch_apply=function(t,e){if(0==t.length)return[e,[]];t=this.patch_deepCopy(t);var n=this.patch_addPadding(t);e=n+e+n,this.patch_splitMax(t);for(var i=0,r=[],h=0;h<t.length;h++){var s,f,a=t[h].start2+i,l=this.diff_text1(t[h].diffs),g=-1;if(l.length>this.Match_MaxBits?-1!=(s=this.match_main(e,l.substring(0,this.Match_MaxBits),a))&&(-1==(g=this.match_main(e,l.substring(l.length-this.Match_MaxBits),a+l.length-this.Match_MaxBits))||s>=g)&&(s=-1):s=this.match_main(e,l,a),-1==s)r[h]=!1,i-=t[h].length2-t[h].length1;else if(r[h]=!0,i=s-a,l==(f=-1==g?e.substring(s,s+l.length):e.substring(s,g+this.Match_MaxBits)))e=e.substring(0,s)+this.diff_text2(t[h].diffs)+e.substring(s+l.length);else{var o=this.diff_main(l,f,!1);if(l.length>this.Match_MaxBits&&this.diff_levenshtein(o)/l.length>this.Patch_DeleteThreshold)r[h]=!1;else{this.diff_cleanupSemanticLossless(o);for(var c,u=0,p=0;p<t[h].diffs.length;p++){var d=t[h].diffs[p];0!==d[0]&&(c=this.diff_xIndex(o,u)),1===d[0]?e=e.substring(0,s+c)+d[1]+e.substring(s+c):-1===d[0]&&(e=e.substring(0,s+c)+e.substring(s+this.diff_xIndex(o,u+d[1].length))),-1!==d[0]&&(u+=d[1].length)}}}}return[e=e.substring(n.length,e.length-n.length),r]},e.prototype.patch_addPadding=function(t){for(var n=this.Patch_Margin,i="",r=1;r<=n;r++)i+=String.fromCharCode(r);for(r=0;r<t.length;r++)t[r].start1+=n,t[r].start2+=n;var h=t[0],s=h.diffs;if(0==s.length||0!=s[0][0])s.unshift(new e.Diff(0,i)),h.start1-=n,h.start2-=n,h.length1+=n,h.length2+=n;else if(n>s[0][1].length){var f=n-s[0][1].length;s[0][1]=i.substring(s[0][1].length)+s[0][1],h.start1-=f,h.start2-=f,h.length1+=f,h.length2+=f}if(0==(s=(h=t[t.length-1]).diffs).length||0!=s[s.length-1][0])s.push(new e.Diff(0,i)),h.length1+=n,h.length2+=n;else if(n>s[s.length-1][1].length){f=n-s[s.length-1][1].length;s[s.length-1][1]+=i.substring(0,f),h.length1+=f,h.length2+=f}return i},e.prototype.patch_splitMax=function(t){for(var n=this.Match_MaxBits,i=0;i<t.length;i++)if(!(t[i].length1<=n)){var r=t[i];t.splice(i--,1);for(var h=r.start1,s=r.start2,f="";0!==r.diffs.length;){var a=new e.patch_obj,l=!0;for(a.start1=h-f.length,a.start2=s-f.length,""!==f&&(a.length1=a.length2=f.length,a.diffs.push(new e.Diff(0,f)));0!==r.diffs.length&&a.length1<n-this.Patch_Margin;){var g=r.diffs[0][0],o=r.diffs[0][1];1===g?(a.length2+=o.length,s+=o.length,a.diffs.push(r.diffs.shift()),l=!1):-1===g&&1==a.diffs.length&&0==a.diffs[0][0]&&o.length>2*n?(a.length1+=o.length,h+=o.length,l=!1,a.diffs.push(new e.Diff(g,o)),r.diffs.shift()):(o=o.substring(0,n-a.length1-this.Patch_Margin),a.length1+=o.length,h+=o.length,0===g?(a.length2+=o.length,s+=o.length):l=!1,a.diffs.push(new e.Diff(g,o)),o==r.diffs[0][1]?r.diffs.shift():r.diffs[0][1]=r.diffs[0][1].substring(o.length))}f=(f=this.diff_text2(a.diffs)).substring(f.length-this.Patch_Margin);var c=this.diff_text1(r.diffs).substring(0,this.Patch_Margin);""!==c&&(a.length1+=c.length,a.length2+=c.length,0!==a.diffs.length&&0===a.diffs[a.diffs.length-1][0]?a.diffs[a.diffs.length-1][1]+=c:a.diffs.push(new e.Diff(0,c))),l||t.splice(++i,0,a)}}},e.prototype.patch_toText=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=t[n];return e.join("")},e.prototype.patch_fromText=function(t){var n=[];if(!t)return n;for(var i=t.split("\n"),r=0,h=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;r<i.length;){var s=i[r].match(h);if(!s)throw new Error("Invalid patch string: "+i[r]);var f=new e.patch_obj;for(n.push(f),f.start1=parseInt(s[1],10),""===s[2]?(f.start1--,f.length1=1):"0"==s[2]?f.length1=0:(f.start1--,f.length1=parseInt(s[2],10)),f.start2=parseInt(s[3],10),""===s[4]?(f.start2--,f.length2=1):"0"==s[4]?f.length2=0:(f.start2--,f.length2=parseInt(s[4],10)),r++;r<i.length;){var a=i[r].charAt(0);try{var l=decodeURI(i[r].substring(1))}catch(t){throw new Error("Illegal escape in patch_fromText: "+l)}if("-"==a)f.diffs.push(new e.Diff(-1,l));else if("+"==a)f.diffs.push(new e.Diff(1,l));else if(" "==a)f.diffs.push(new e.Diff(0,l));else{if("@"==a)break;if(""!==a)throw new Error('Invalid patch mode "'+a+'" in: '+l)}r++}}return n},(e.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0}).prototype.toString=function(){for(var t,e=["@@ -"+(0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1)+" +"+(0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2)+" @@\n"],n=0;n<this.diffs.length;n++){switch(this.diffs[n][0]){case 1:t="+";break;case-1:t="-";break;case 0:t=" "}e[n+1]=t+encodeURI(this.diffs[n][1])+"\n"}return e.join("").replace(/%20/g," ")},t.exports=e,t.exports.diff_match_patch=e,t.exports.DIFF_DELETE=-1,t.exports.DIFF_INSERT=1,t.exports.DIFF_EQUAL=0},58657:(t,e,n)=>{var i=n(60386);t.exports=function(t,e,n){for(n=n||document,t={parentNode:t};(t=t.parentNode)&&t!==n;)if(i(t,e))return t}},60386:t=>{"use strict";t.exports=function(t,e){var n=window.Element.prototype,i=n.matches||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector;if(!t||1!==t.nodeType)return!1;var r=t.parentNode;if(i)return i.call(t,e);for(var h=r.querySelectorAll(e),s=h.length,f=0;f<s;f++)if(h[f]===t)return!0;return!1}}}]);