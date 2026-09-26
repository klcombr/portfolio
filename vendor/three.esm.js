var Ka="180";var Qa=0,ir=1,ja=2;var sr=1,to=2,Ve=3,$n=0,Ce=1,We=2,un=0,gi=1,ji=2,rr=3,ar=4,eo=5,Kn=100,no=101,io=102,so=103,ro=104,ao=200,oo=201,lo=202,co=203,ho=204,uo=205,fo=206,po=207,mo=208,go=209,_o=210,xo=211,vo=212,yo=213,Mo=214,ts=0,es=1,ns=2,_i=3,is=4,ss=5,rs=6,as=7,So=0,bo=1,Eo=2,nn=0,To=1,Ao=2,wo=3,Ro=4,Co=5,Io=6,Po=7;var Qn=301,Sn=302,os=303,ls=304,xi=306,Lo=1000,Do=1001,Uo=1002,jn=1003,No=1004;var vi=1005;var bn=1006,cs=1007;var ti=1008;var dn=1009,Fo=1010,Oo=1011,yi=1012,or=1013,ei=1014,fn=1015,Mi=1016,lr=1017,cr=1018,ni=1020,Bo=35902,zo=35899,ko=1021,Ho=1022,Xe=1023,hs=1026,Si=1027,Go=1028,hr=1029,Vo=1030,ur=1031;var dr=1033,us=33776,ds=33777,fs=33778,ps=33779,fr=35840,pr=35841,mr=35842,gr=35843,_r=36196,xr=37492,vr=37496,yr=37808,Mr=37809,Sr=37810,br=37811,Er=37812,Tr=37813,Ar=37814,wr=37815,Rr=37816,Cr=37817,Ir=37818,Pr=37819,Lr=37820,Dr=37821,Ur=36492,Nr=36494,Fr=36495,Or=36283,Br=36284,zr=36285,kr=36286;var Wo=3201;var Xo=0,qo=1,En="",Hr="srgb",bi="srgb-linear",Gr="linear",Kt="srgb";var Yo=512,Zo=513,Jo=514,Vr=515,$o=516,Ko=517,Qo=518,jo=519;var Wr="300 es",Xr=2000;class pn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ds=Math.PI/180,Qi=180/Math.PI;function Ei(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(me[t&255]+me[t>>8&255]+me[t>>16&255]+me[t>>24&255]+"-"+me[e&255]+me[e>>8&255]+"-"+me[e>>16&15|64]+me[e>>24&255]+"-"+me[n&63|128]+me[n>>8&255]+"-"+me[n>>16&255]+me[n>>24&255]+me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function Zl(t,e){return(t%e+e)%e}function Us(t,e,n){return(1-n)*t+n*e}function hi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function Se(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let a=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r+0],d=s[r+1],g=s[r+2],y=s[r+3];if(o===0){t[e+0]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(h!==y||a!==u||l!==d||c!==g){let x=1-o,f=a*u+l*d+c*g+h*y,p=f>=0?1:-1,C=1-f*f;if(C>Number.EPSILON){let T=Math.sqrt(C),U=Math.atan2(T,f*p);x=Math.sin(x*U)/T,o=Math.sin(o*U)/T}let M=o*p;if(a=a*x+u*M,l=l*x+d*M,c=c*x+g*M,h=h*x+y*M,x===1-o){let T=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=T,l*=T,c*=T,h*=T}}t[e]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let o=n[i],a=n[i+1],l=n[i+2],c=n[i+3],h=s[r],u=s[r+1],d=s[r+2],g=s[r+3];return t[e]=o*g+c*h+a*d-l*u,t[e+1]=a*g+c*u+l*h-o*d,t[e+2]=l*g+c*d+o*u-a*h,t[e+3]=c*g-o*h-a*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:o,sin:a}=Math,l=o(n/2),c=o(i/2),h=o(s/2),u=a(n/2),d=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"YXZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"ZXY":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"ZYX":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"YZX":this._x=u*c*h+l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h-u*d*g;break;case"XZY":this._x=u*c*h-l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10],u=n+o+h;if(u>0){let d=0.5/Math.sqrt(u+1);this._w=0.25/d,this._x=(c-a)*d,this._y=(s-l)*d,this._z=(r-i)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(c-a)/d,this._x=0.25*d,this._y=(i+r)/d,this._z=(s+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(i+r)/d,this._y=0.25*d,this._z=(a+c)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(r-i)/d,this._x=(s+l)/d,this._y=(a+c)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:o,_y:a,_z:l,_w:c}=e;return this._x=n*c+r*o+i*l-s*a,this._y=i*c+r*a+s*o-n*l,this._z=s*c+r*l+n*a-i*o,this._w=r*c-n*o-i*a-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,r=this._w,o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0)this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o;else this.copy(t);if(o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let a=1-o*o;if(a<=Number.EPSILON){let d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let l=Math.sqrt(a),c=Math.atan2(l,o),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(La.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(La.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:o,w:a}=t,l=2*(r*i-o*n),c=2*(o*e-s*i),h=2*(s*n-r*e);return this.x=e+a*l+r*h-o*c,this.y=n+a*c+o*l-s*h,this.z=i+a*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:o,z:a}=e;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Ns=new N,La=new mn;class Nt{constructor(t,e,n,i,s,r,o,a,l){if(Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,o,a,l)}set(t,e,n,i,s,r,o,a,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=o,c[3]=e,c[4]=s,c[5]=a,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],g=n[8],y=i[0],x=i[3],f=i[6],p=i[1],C=i[4],M=i[7],T=i[2],U=i[5],w=i[8];return s[0]=r*y+o*p+a*T,s[3]=r*x+o*C+a*U,s[6]=r*f+o*M+a*w,s[1]=l*y+c*p+h*T,s[4]=l*x+c*C+h*U,s[7]=l*f+c*M+h*w,s[2]=u*y+d*p+g*T,s[5]=u*x+d*C+g*U,s[8]=u*f+d*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],c=t[8];return e*r*c-e*o*l-n*s*c+n*o*a+i*s*l-i*r*a}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],c=t[8],h=c*r-o*l,u=o*a-c*s,d=l*s-r*a,g=e*h+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(i*l-c*n)*y,t[2]=(o*n-i*r)*y,t[3]=u*y,t[4]=(c*e-i*a)*y,t[5]=(i*s-o*e)*y,t[6]=d*y,t[7]=(n*a-l*e)*y,t[8]=(r*e-n*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){let a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*r+l*o)+r+t,-i*l,i*a,-i*(-l*r+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fs.makeScale(t,e)),this}rotate(t){return this.premultiply(Fs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fs.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Fs=new Nt;function qr(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function mi(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tl(){let t=mi("canvas");return t.style.display="block",t}var Da={};function Jn(t){if(t in Da)return;Da[t]=!0,console.warn(t)}function el(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Ua=new Nt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Na=new Nt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Jl(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,o){if(this.enabled===!1||r===o||!r||!o)return s;if(this.spaces[r].transfer==="srgb")s.r=tn(s.r),s.g=tn(s.g),s.b=tn(s.b);if(this.spaces[r].primaries!==this.spaces[o].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer==="srgb")s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Jn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Jn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Ua,fromXYZ:Na,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Ua,fromXYZ:Na,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Ht=Jl();function tn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Zn(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Nn;class Yr{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Nn===void 0)Nn=mi("canvas");Nn.width=t.width,Nn.height=t.height;let i=Nn.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Nn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=tn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(tn(e[n]/255)*255);else e[n]=tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var $l=0;class Ti{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(e instanceof VideoFrame)t.set(e.displayHeight,e.displayWidth,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)if(i[r].isDataTexture)s.push(Os(i[r].image));else s.push(Os(i[r]))}else s=Os(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Os(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Yr.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var Kl=0,Bs=new N;class ve extends pn{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,o=1023,a=1009,l=ve.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Ei(),this.name="",this.source=new Ti(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(Bs).x}get height(){return this.source.getSize(Bs).y}get depth(){return this.source.getSize(Bs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=300;ve.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,o=0.1,a=t.elements,l=a[0],c=a[4],h=a[8],u=a[1],d=a[5],g=a[9],y=a[2],x=a[6],f=a[10];if(Math.abs(c-u)<0.01&&Math.abs(h-y)<0.01&&Math.abs(g-x)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+y)<0.1&&Math.abs(g+x)<0.1&&Math.abs(l+d+f-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,M=(d+1)/2,T=(f+1)/2,U=(c+u)/4,w=(h+y)/4,I=(g+x)/4;if(C>M&&C>T)if(C<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(C),i=U/n,s=w/n;else if(M>T)if(M<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(M),n=U/i,s=I/i;else if(T<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(T),n=w/s,i=I/s;return this.set(n,i,s,e),this}let p=Math.sqrt((x-g)*(x-g)+(h-y)*(h-y)+(u-c)*(u-c));if(Math.abs(p)<0.001)p=1;return this.x=(x-g)/p,this.y=(h-y)/p,this.z=(u-c)/p,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zr extends pn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new ve(i);this.textures=[];let r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(t!==null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ti(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null)this.depthTexture=t.depthTexture.clone();return this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Zr{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class ms extends ve{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jr extends ve{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ne.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ne.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ne.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++){if(t.isMesh===!0)t.getVertexPosition(r,Ne);else Ne.fromBufferAttribute(s,r);Ne.applyMatrix4(t.matrixWorld),this.expandByPoint(Ne)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Li.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Li.copy(n.boundingBox)}Li.applyMatrix4(t.matrixWorld),this.union(Li)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ne),Ne.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ui),Di.subVectors(this.max,ui),Fn.subVectors(t.a,ui),On.subVectors(t.b,ui),Bn.subVectors(t.c,ui),rn.subVectors(On,Fn),an.subVectors(Bn,On),xn.subVectors(Fn,Bn);let e=[0,-rn.z,rn.y,0,-an.z,an.y,0,-xn.z,xn.y,rn.z,0,-rn.x,an.z,0,-an.x,xn.z,0,-xn.x,-rn.y,rn.x,0,-an.y,an.x,0,-xn.y,xn.x,0];if(!zs(e,Fn,On,Bn,Di))return!1;if(e=[1,0,0,0,1,0,0,0,1],!zs(e,Fn,On,Bn,Di))return!1;return Ui.crossVectors(rn,an),e=[Ui.x,Ui.y,Ui.z],zs(e,Fn,On,Bn,Di)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ne).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(Ne).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Ze=[new N,new N,new N,new N,new N,new N,new N,new N],Ne=new N,Li=new Tn,Fn=new N,On=new N,Bn=new N,rn=new N,an=new N,xn=new N,ui=new N,Di=new N,Ui=new N,vn=new N;function zs(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){vn.fromArray(t,r);let a=s.x*Math.abs(vn.x)+s.y*Math.abs(vn.y)+s.z*Math.abs(vn.z),l=e.dot(vn),c=n.dot(vn),h=i.dot(vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ql=new Tn,di=new N,ks=new N;class ii{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Ql.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;di.subVectors(t,this.center);let e=di.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(di,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(di.copy(t.center).add(ks)),this.expandByPoint(di.copy(t.center).sub(ks));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Je=new N,Hs=new N,Ni=new N,on=new N,Gs=new N,Fi=new N,Vs=new N;class gs{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Je.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Hs.copy(t).add(e).multiplyScalar(0.5),Ni.copy(e).sub(t).normalize(),on.copy(this.origin).sub(Hs);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Ni),o=on.dot(this.direction),a=-on.dot(Ni),l=on.lengthSq(),c=Math.abs(1-r*r),h,u,d,g;if(c>0)if(h=r*a-o,u=r*o-a,g=s*c,h>=0)if(u>=-g)if(u<=g){let y=1/c;h*=y,u*=y,d=h*(h+r*u+2*o)+u*(r*h+u+2*a)+l}else u=s,h=Math.max(0,-(r*u+o)),d=-h*h+u*(u+2*a)+l;else u=-s,h=Math.max(0,-(r*u+o)),d=-h*h+u*(u+2*a)+l;else if(u<=-g)h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-a),s),d=-h*h+u*(u+2*a)+l;else if(u<=g)h=0,u=Math.min(Math.max(-s,-a),s),d=u*(u+2*a)+l;else h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-a),s),d=-h*h+u*(u+2*a)+l;else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),d=-h*h+u*(u+2*a)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(Hs).addScaledVector(Ni,u);return d}intersectSphere(t,e){Je.subVectors(t.center,this.origin);let n=Je.dot(this.direction),i=Je.dot(Je)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,a=n+r;if(a<0)return null;if(o<0)return this.at(a,e);return this.at(o,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l;else n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l;if(c>=0)s=(t.min.y-u.y)*c,r=(t.max.y-u.y)*c;else s=(t.max.y-u.y)*c,r=(t.min.y-u.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)o=(t.min.z-u.z)*h,a=(t.max.z-u.z)*h;else o=(t.max.z-u.z)*h,a=(t.min.z-u.z)*h;if(n>a||o>i)return null;if(o>n||n!==n)n=o;if(a<i||i!==i)i=a;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,i,s){Gs.subVectors(e,t),Fi.subVectors(n,t),Vs.crossVectors(Gs,Fi);let r=this.direction.dot(Vs),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;on.subVectors(this.origin,t);let a=o*this.direction.dot(Fi.crossVectors(on,Fi));if(a<0)return null;let l=o*this.direction.dot(Gs.cross(on));if(l<0)return null;if(a+l>r)return null;let c=-o*on.dot(Vs);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,s,r,o,a,l,c,h,u,d,g,y,x){if(oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,o,a,l,c,h,u,d,g,y,x)}set(t,e,n,i,s,r,o,a,l,c,h,u,d,g,y,x){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=o,f[13]=a,f[2]=l,f[6]=c,f[10]=h,f[14]=u,f[3]=d,f[7]=g,f[11]=y,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/zn.setFromMatrixColumn(t,0).length(),s=1/zn.setFromMatrixColumn(t,1).length(),r=1/zn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let u=r*c,d=r*h,g=o*c,y=o*h;e[0]=a*c,e[4]=-a*h,e[8]=l,e[1]=d+g*l,e[5]=u-y*l,e[9]=-o*a,e[2]=y-u*l,e[6]=g+d*l,e[10]=r*a}else if(t.order==="YXZ"){let u=a*c,d=a*h,g=l*c,y=l*h;e[0]=u+y*o,e[4]=g*o-d,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-o,e[2]=d*o-g,e[6]=y+u*o,e[10]=r*a}else if(t.order==="ZXY"){let u=a*c,d=a*h,g=l*c,y=l*h;e[0]=u-y*o,e[4]=-r*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*c,e[9]=y-u*o,e[2]=-r*l,e[6]=o,e[10]=r*a}else if(t.order==="ZYX"){let u=r*c,d=r*h,g=o*c,y=o*h;e[0]=a*c,e[4]=g*l-d,e[8]=u*l+y,e[1]=a*h,e[5]=y*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*a,e[10]=r*a}else if(t.order==="YZX"){let u=r*a,d=r*l,g=o*a,y=o*l;e[0]=a*c,e[4]=y-u*h,e[8]=g*h+d,e[1]=h,e[5]=r*c,e[9]=-o*c,e[2]=-l*c,e[6]=d*h+g,e[10]=u-y*h}else if(t.order==="XZY"){let u=r*a,d=r*l,g=o*a,y=o*l;e[0]=a*c,e[4]=-h,e[8]=l*c,e[1]=u*h+y,e[5]=r*c,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*c,e[10]=y*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jl,t,tc)}lookAt(t,e,n){let i=this.elements;if(Ae.subVectors(t,e),Ae.lengthSq()===0)Ae.z=1;if(Ae.normalize(),ln.crossVectors(n,Ae),ln.lengthSq()===0){if(Math.abs(n.z)===1)Ae.x+=0.0001;else Ae.z+=0.0001;Ae.normalize(),ln.crossVectors(n,Ae)}return ln.normalize(),Oi.crossVectors(Ae,ln),i[0]=ln.x,i[4]=Oi.x,i[8]=Ae.x,i[1]=ln.y,i[5]=Oi.y,i[9]=Ae.y,i[2]=ln.z,i[6]=Oi.z,i[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],g=n[2],y=n[6],x=n[10],f=n[14],p=n[3],C=n[7],M=n[11],T=n[15],U=i[0],w=i[4],I=i[8],H=i[12],S=i[1],v=i[5],R=i[9],G=i[13],X=i[2],k=i[6],J=i[10],V=i[14],Q=i[3],B=i[7],at=i[11],ut=i[15];return s[0]=r*U+o*S+a*X+l*Q,s[4]=r*w+o*v+a*k+l*B,s[8]=r*I+o*R+a*J+l*at,s[12]=r*H+o*G+a*V+l*ut,s[1]=c*U+h*S+u*X+d*Q,s[5]=c*w+h*v+u*k+d*B,s[9]=c*I+h*R+u*J+d*at,s[13]=c*H+h*G+u*V+d*ut,s[2]=g*U+y*S+x*X+f*Q,s[6]=g*w+y*v+x*k+f*B,s[10]=g*I+y*R+x*J+f*at,s[14]=g*H+y*G+x*V+f*ut,s[3]=p*U+C*S+M*X+T*Q,s[7]=p*w+C*v+M*k+T*B,s[11]=p*I+C*R+M*J+T*at,s[15]=p*H+C*G+M*V+T*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],a=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14],g=t[3],y=t[7],x=t[11],f=t[15];return g*(+s*a*h-i*l*h-s*o*u+n*l*u+i*o*d-n*a*d)+y*(+e*a*d-e*l*u+s*r*u-i*r*d+i*l*c-s*a*c)+x*(+e*l*h-e*o*d-s*r*h+n*r*d+s*o*c-n*l*c)+f*(-i*o*c-e*a*h+e*o*u+i*r*h-n*r*u+n*a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],g=t[12],y=t[13],x=t[14],f=t[15],p=h*x*l-y*u*l+y*a*d-o*x*d-h*a*f+o*u*f,C=g*u*l-c*x*l-g*a*d+r*x*d+c*a*f-r*u*f,M=c*y*l-g*h*l+g*o*d-r*y*d-c*o*f+r*h*f,T=g*h*a-c*y*a-g*o*u+r*y*u+c*o*x-r*h*x,U=e*p+n*C+i*M+s*T;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/U;return t[0]=p*w,t[1]=(y*u*s-h*x*s-y*i*d+n*x*d+h*i*f-n*u*f)*w,t[2]=(o*x*s-y*a*s+y*i*l-n*x*l-o*i*f+n*a*f)*w,t[3]=(h*a*s-o*u*s-h*i*l+n*u*l+o*i*d-n*a*d)*w,t[4]=C*w,t[5]=(c*x*s-g*u*s+g*i*d-e*x*d-c*i*f+e*u*f)*w,t[6]=(g*a*s-r*x*s-g*i*l+e*x*l+r*i*f-e*a*f)*w,t[7]=(r*u*s-c*a*s+c*i*l-e*u*l-r*i*d+e*a*d)*w,t[8]=M*w,t[9]=(g*h*s-c*y*s-g*n*d+e*y*d+c*n*f-e*h*f)*w,t[10]=(r*y*s-g*o*s+g*n*l-e*y*l-r*n*f+e*o*f)*w,t[11]=(c*o*s-r*h*s-c*n*l+e*h*l+r*n*d-e*o*d)*w,t[12]=T*w,t[13]=(c*y*i-g*h*i+g*n*u-e*y*u-c*n*x+e*h*x)*w,t[14]=(g*o*i-r*y*i-g*n*a+e*y*a+r*n*x-e*o*x)*w,t[15]=(r*h*i-c*o*i+c*n*a-e*h*a-r*n*u+e*o*u)*w,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:o,z:a}=t,l=s*r,c=s*o;return this.set(l*r+n,l*o-i*a,l*a+i*o,0,l*o+i*a,c*o+n,c*a-i*r,0,l*a-i*o,c*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:o,_w:a}=e,l=s+s,c=r+r,h=o+o,u=s*l,d=s*c,g=s*h,y=r*c,x=r*h,f=o*h,p=a*l,C=a*c,M=a*h,{x:T,y:U,z:w}=n;return i[0]=(1-(y+f))*T,i[1]=(d+M)*T,i[2]=(g-C)*T,i[3]=0,i[4]=(d-M)*U,i[5]=(1-(u+f))*U,i[6]=(x+p)*U,i[7]=0,i[8]=(g+C)*w,i[9]=(x-p)*w,i[10]=(1-(u+y))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=zn.set(i[0],i[1],i[2]).length(),r=zn.set(i[4],i[5],i[6]).length(),o=zn.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;t.x=i[12],t.y=i[13],t.z=i[14],Fe.copy(this);let l=1/s,c=1/r,h=1/o;return Fe.elements[0]*=l,Fe.elements[1]*=l,Fe.elements[2]*=l,Fe.elements[4]*=c,Fe.elements[5]*=c,Fe.elements[6]*=c,Fe.elements[8]*=h,Fe.elements[9]*=h,Fe.elements[10]*=h,e.setFromRotationMatrix(Fe),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r,o=2000,a=!1){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),g,y;if(a)g=s/(r-s),y=r*s/(r-s);else if(o===2000)g=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===2001)g=-r/(r-s),y=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,o=2000,a=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),g,y;if(a)g=1/(r-s),y=r/(r-s);else if(o===2000)g=-2/(r-s),y=-(r+s)/(r-s);else if(o===2001)g=-1/(r-s),y=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var zn=new N,Fe=new oe,jl=new N(0,0,0),tc=new N(1,1,1),ln=new N,Oi=new N,Ae=new N,Fa=new oe,Oa=new mn;class Ge{constructor(t=0,e=0,n=0,i=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(e){case"XYZ":if(this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-kt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,d),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(a,s);break;case"ZYX":if(this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,d),this._z=Math.atan2(a,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(kt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(o,d);break;case"XZY":if(this._z=Math.asin(-kt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(o,s);else this._x=Math.atan2(-c,d),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Fa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class _s{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var ec=0,Ba=new N,kn=new mn,$e=new oe,Bi=new N,fi=new N,nc=new N,ic=new mn,za=new N(1,0,0),ka=new N(0,1,0),Ha=new N(0,0,1),Ga={type:"added"},sc={type:"removed"},Hn={type:"childadded",child:null},Ws={type:"childremoved",child:null};class ye extends pn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();let t=new N,e=new Ge,n=new mn,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Nt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(za,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(Ha,t)}translateOnAxis(t,e){return Ba.copy(t).applyQuaternion(this.quaternion),this.position.add(Ba.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(za,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(Ha,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Bi.copy(t);else Bi.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)$e.lookAt(fi,Bi,this.up);else $e.lookAt(Bi,fi,this.up);if(this.quaternion.setFromRotationMatrix($e),i)$e.extractRotation(i.matrixWorld),kn.setFromRotationMatrix($e),this.quaternion.premultiply(kn.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ga),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(sc),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld);return t.applyMatrix4($e),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ga),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,t,nc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,ic,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((o)=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(t);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];s(t.shapes,h)}else s(t.shapes,a)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){let o=r(t.geometries),a=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);if(o.length>0)n.geometries=o;if(a.length>0)n.materials=a;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(u.length>0)n.skeletons=u;if(d.length>0)n.animations=d;if(g.length>0)n.nodes=g}return n.object=i,n;function r(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new N(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oe=new N,Ke=new N,Xs=new N,Qe=new N,Gn=new N,Vn=new N,Va=new N,qs=new N,Ys=new N,Zs=new N,Js=new se,$s=new se,Ks=new se;class De{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Oe.subVectors(t,e),i.cross(Oe);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Oe.subVectors(i,e),Ke.subVectors(n,e),Xs.subVectors(t,e);let r=Oe.dot(Oe),o=Oe.dot(Ke),a=Oe.dot(Xs),l=Ke.dot(Ke),c=Ke.dot(Xs),h=r*l-o*o;if(h===0)return s.set(0,0,0),null;let u=1/h,d=(l*a-o*c)*u,g=(r*c-o*a)*u;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Qe)===null)return!1;return Qe.x>=0&&Qe.y>=0&&Qe.x+Qe.y<=1}static getInterpolation(t,e,n,i,s,r,o,a){if(this.getBarycoord(t,e,n,i,Qe)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(s,Qe.x),a.addScaledVector(r,Qe.y),a.addScaledVector(o,Qe.z),a}static getInterpolatedAttribute(t,e,n,i,s,r){return Js.setScalar(0),$s.setScalar(0),Ks.setScalar(0),Js.fromBufferAttribute(t,e),$s.fromBufferAttribute(t,n),Ks.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Js,s.x),r.addScaledVector($s,s.y),r.addScaledVector(Ks,s.z),r}static isFrontFacing(t,e,n,i){return Oe.subVectors(n,e),Ke.subVectors(t,e),Oe.cross(Ke).dot(i)<0?!0:!1}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),Oe.cross(Ke).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return De.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return De.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return De.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return De.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return De.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,o;Gn.subVectors(i,n),Vn.subVectors(s,n),qs.subVectors(t,n);let a=Gn.dot(qs),l=Vn.dot(qs);if(a<=0&&l<=0)return e.copy(n);Ys.subVectors(t,i);let c=Gn.dot(Ys),h=Vn.dot(Ys);if(c>=0&&h<=c)return e.copy(i);let u=a*h-c*l;if(u<=0&&a>=0&&c<=0)return r=a/(a-c),e.copy(n).addScaledVector(Gn,r);Zs.subVectors(t,s);let d=Gn.dot(Zs),g=Vn.dot(Zs);if(g>=0&&d<=g)return e.copy(s);let y=d*l-a*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Vn,o);let x=c*g-d*h;if(x<=0&&h-c>=0&&d-g>=0)return Va.subVectors(s,i),o=(h-c)/(h-c+(d-g)),e.copy(i).addScaledVector(Va,o);let f=1/(x+y+u);return r=y*f,o=u*f,e.copy(n).addScaledVector(Gn,r).addScaledVector(Vn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function Qs(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Ht.workingColorSpace){if(t=Zl(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Qs(r,s,t+0.3333333333333333),this.g=Qs(r,s,t),this.b=Qs(r,s,t-0.3333333333333333)}return Ht.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=nl[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else console.warn("THREE.Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tn(t.r),this.g=tn(t.g),this.b=tn(t.b),this}copyLinearToSRGB(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Ht.workingToColorSpace(ge.copy(this),t),Math.round(kt(ge.r*255,0,255))*65536+Math.round(kt(ge.g*255,0,255))*256+Math.round(kt(ge.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.workingToColorSpace(ge.copy(this),e);let{r:n,g:i,b:s}=ge,r=Math.max(n,i,s),o=Math.min(n,i,s),a,l,c=(o+r)/2;if(o===r)a=0,l=0;else{let h=r-o;switch(l=c<=0.5?h/(r+o):h/(2-r-o),r){case n:a=(i-s)/h+(i<s?6:0);break;case i:a=(s-n)/h+2;break;case s:a=(n-i)/h+4;break}a/=6}return t.h=a,t.s=l,t.l=c,t}getRGB(t,e=Ht.workingColorSpace){return Ht.workingToColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t="srgb"){Ht.workingToColorSpace(ge.copy(this),t);let{r:e,g:n,b:i}=ge;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(zi);let n=Us(cn.h,zi.h,e),i=Us(cn.s,zi.s,e),s=Us(cn.l,zi.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ge=new Wt;Wt.NAMES=nl;var rc=0;class An extends pn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let o in s){let a=s[o];delete a.metadata,r.push(a)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class xs extends An{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var le=new N,ki=new Xt,ac=0;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ac++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ki.fromBufferAttribute(this,e),ki.applyMatrix3(t),this.setXY(e,ki.x,ki.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=hi(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Se(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=hi(e,this.array);return e}setX(t,e){if(this.normalized)e=Se(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=hi(e,this.array);return e}setY(t,e){if(this.normalized)e=Se(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=hi(e,this.array);return e}setZ(t,e){if(this.normalized)e=Se(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=hi(e,this.array);return e}setW(t,e){if(this.normalized)e=Se(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Se(e,this.array),n=Se(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")t.name=this.name;if(this.usage!==35044)t.usage=this.usage;return t}}class vs extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ys extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class en extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}var oc=0,Le=new oe,js=new ye,Wn=new N,we=new Tn,pi=new Tn,fe=new N;class qe extends pn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((qr(t))?ys:vs)(t,1);else this.index=t;return this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new en(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Tn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(we.setFromBufferAttribute(s),this.morphTargetsRelative)fe.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(fe);else this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ii;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let o=e[s];if(pi.setFromBufferAttribute(o),this.morphTargetsRelative)fe.addVectors(we.min,pi.min),we.expandByPoint(fe),fe.addVectors(we.max,pi.max),we.expandByPoint(fe);else we.expandByPoint(pi.min),we.expandByPoint(pi.max)}we.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let s=0,r=e.length;s<r;s++){let o=e[s],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(fe.fromBufferAttribute(o,l),a)Wn.fromBufferAttribute(t,l),fe.add(Wn);i=Math.max(i,n.distanceToSquared(fe))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),o=[],a=[];for(let I=0;I<n.count;I++)o[I]=new N,a[I]=new N;let l=new N,c=new N,h=new N,u=new Xt,d=new Xt,g=new Xt,y=new N,x=new N;function f(I,H,S){l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,H),h.fromBufferAttribute(n,S),u.fromBufferAttribute(s,I),d.fromBufferAttribute(s,H),g.fromBufferAttribute(s,S),c.sub(l),h.sub(l),d.sub(u),g.sub(u);let v=1/(d.x*g.y-g.x*d.y);if(!isFinite(v))return;y.copy(c).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(v),x.copy(h).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(v),o[I].add(y),o[H].add(y),o[S].add(y),a[I].add(x),a[H].add(x),a[S].add(x)}let p=this.groups;if(p.length===0)p=[{start:0,count:t.count}];for(let I=0,H=p.length;I<H;++I){let S=p[I],{start:v,count:R}=S;for(let G=v,X=v+R;G<X;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let C=new N,M=new N,T=new N,U=new N;function w(I){T.fromBufferAttribute(i,I),U.copy(T);let H=o[I];C.copy(H),C.sub(T.multiplyScalar(T.dot(H))).normalize(),M.crossVectors(U,H);let v=M.dot(a[I])<0?-1:1;r.setXYZW(I,C.x,C.y,C.z,v)}for(let I=0,H=p.length;I<H;++I){let S=p[I],{start:v,count:R}=S;for(let G=v,X=v+R;G<X;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new N,s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),y=t.getX(u+1),x=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,x),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),o.add(c),a.add(c),l.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,a){let{array:l,itemSize:c,normalized:h}=o,u=new l.constructor(a.length*c),d=0,g=0;for(let y=0,x=a.length;y<x;y++){if(o.isInterleavedBufferAttribute)d=a[y]*o.data.stride+o.offset;else d=a[y]*c;for(let f=0;f<c;f++)u[g++]=l[d++]}return new Re(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new qe,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],l=t(a,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let a=[],l=s[o];for(let c=0,h=l.length;c<h;c++){let u=l[c],d=t(u,n);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,a=r.length;o<a;o++){let l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!=="")t.name=this.name;if(Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)t[l]=a[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let a in n){let l=n[a];t.data.attributes[a]=l.toJSON(t.data)}let i={},s=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];c.push(d.toJSON(t.data))}if(c.length>0)i[a]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let o=this.boundingSphere;if(o!==null)t.data.boundingSphere=o.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],h=s[l];for(let u=0,d=h.length;u<d;u++)c.push(h[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=t.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Wa=new oe,yn=new gs,Hi=new ii,Xa=new N,Gi=new N,Vi=new N,Wi=new N,tr=new N,Xi=new N,qa=new N,qi=new N;class Be extends ye{constructor(t=new qe,e=new xs){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Xi.set(0,0,0);for(let a=0,l=s.length;a<l;a++){let c=o[a],h=s[a];if(c===0)continue;if(tr.fromBufferAttribute(h,t),r)Xi.addScaledVector(tr,c);else Xi.addScaledVector(tr.sub(e),c)}e.add(Xi)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Hi.copy(n.boundingSphere),Hi.applyMatrix4(s),yn.copy(t.ray).recast(t.near),Hi.containsPoint(yn.origin)===!1){if(yn.intersectSphere(Hi,Xa)===null)return;if(yn.origin.distanceToSquared(Xa)>(t.far-t.near)**2)return}if(Wa.copy(s).invert(),yn.copy(t.ray).applyMatrix4(Wa),n.boundingBox!==null){if(yn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,yn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:u,drawRange:d}=s;if(o!==null)if(Array.isArray(r))for(let g=0,y=u.length;g<y;g++){let x=u[g],f=r[x.materialIndex],p=Math.max(x.start,d.start),C=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let M=p,T=C;M<T;M+=3){let U=o.getX(M),w=o.getX(M+1),I=o.getX(M+2);if(i=Yi(this,f,t,n,l,c,h,U,w,I),i)i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,e.push(i)}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let x=g,f=y;x<f;x+=3){let p=o.getX(x),C=o.getX(x+1),M=o.getX(x+2);if(i=Yi(this,r,t,n,l,c,h,p,C,M),i)i.faceIndex=Math.floor(x/3),e.push(i)}}else if(a!==void 0)if(Array.isArray(r))for(let g=0,y=u.length;g<y;g++){let x=u[g],f=r[x.materialIndex],p=Math.max(x.start,d.start),C=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let M=p,T=C;M<T;M+=3){let U=M,w=M+1,I=M+2;if(i=Yi(this,f,t,n,l,c,h,U,w,I),i)i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,e.push(i)}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let x=g,f=y;x<f;x+=3){let p=x,C=x+1,M=x+2;if(i=Yi(this,r,t,n,l,c,h,p,C,M),i)i.faceIndex=Math.floor(x/3),e.push(i)}}}}function lc(t,e,n,i,s,r,o,a){let l;if(e.side===1)l=i.intersectTriangle(o,r,s,!0,a);else l=i.intersectTriangle(s,r,o,e.side===0,a);if(l===null)return null;qi.copy(a),qi.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(qi);if(c<n.near||c>n.far)return null;return{distance:c,point:qi.clone(),object:t}}function Yi(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Gi),t.getVertexPosition(l,Vi),t.getVertexPosition(c,Wi);let h=lc(t,e,n,i,Gi,Vi,Wi,qa);if(h){let u=new N;if(De.getBarycoord(qa,Gi,Vi,Wi,u),s)h.uv=De.getInterpolatedAttribute(s,a,l,c,u,new Xt);if(r)h.uv1=De.getInterpolatedAttribute(r,a,l,c,u,new Xt);if(o){if(h.normal=De.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let d={a,b:l,c,normal:new N,materialIndex:0};De.getNormal(Gi,Vi,Wi,d.normal),h.face=d,h.barycoord=u}return h}class si extends qe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let a=[],l=[],c=[],h=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(c,3)),this.setAttribute("uv",new en(h,2));function g(y,x,f,p,C,M,T,U,w,I,H){let S=M/w,v=T/I,R=M/2,G=T/2,X=U/2,k=w+1,J=I+1,V=0,Q=0,B=new N;for(let at=0;at<J;at++){let ut=at*v-G;for(let Ct=0;Ct<k;Ct++){let zt=Ct*S-R;B[y]=zt*p,B[x]=ut*C,B[f]=X,l.push(B.x,B.y,B.z),B[y]=0,B[x]=0,B[f]=U>0?1:-1,c.push(B.x,B.y,B.z),h.push(Ct/w),h.push(1-at/I),V+=1}}for(let at=0;at<I;at++)for(let ut=0;ut<w;ut++){let Ct=u+ut+k*at,zt=u+ut+k*(at+1),re=u+(ut+1)+k*(at+1),Gt=u+(ut+1)+k*at;a.push(Ct,zt,Gt),a.push(zt,re,Gt),Q+=6}o.addGroup(d,Q,H),d+=Q,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wn(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))e[n][i]=s.slice();else e[n][i]=s}}return e}function _e(t){let e={};for(let n=0;n<t.length;n++){let i=wn(t[n]);for(let s in i)e[s]=i[s]}return e}function cc(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $r(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Ht.workingColorSpace}var il={clone:wn,merge:_e},hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends An{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hc,this.fragmentShader=uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wn(t.uniforms),this.uniformsGroups=cc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}}class Ms extends ye{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var hn=new N,Ya=new Xt,Za=new Xt;class be extends Ms{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ds*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Ds*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(hn.x,hn.y).multiplyScalar(-t/hn.z),hn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-t/hn.z)}getViewSize(t,e){return this.getViewBounds(t,Ya,Za),e.subVectors(Za,Ya)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ds*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=r;s+=r.offsetX*i/a,e-=r.offsetY*n/l,i*=r.width/a,n*=r.height/l}let o=this.filmOffset;if(o!==0)s+=t*o/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var Xn=-90,qn=1;class Kr extends ye{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new be(Xn,qn,t,e);i.layers=this.layers,this.add(i);let s=new be(Xn,qn,t,e);s.layers=this.layers,this.add(s);let r=new be(Xn,qn,t,e);r.layers=this.layers,this.add(r);let o=new be(Xn,qn,t,e);o.layers=this.layers,this.add(o);let a=new be(Xn,qn,t,e);a.layers=this.layers,this.add(a);let l=new be(Xn,qn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,o,a]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,a),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(h,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ss extends ve{constructor(t=[],e=301,n,i,s,r,o,a,l,c){super(t,e,n,i,s,r,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qr extends sn{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ss(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new si(5,5,5),s=new ze({name:"CubemapFromEquirect",uniforms:wn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;let r=new Be(i,s),o=e.minFilter;if(e.minFilter===1008)e.minFilter=1006;return new Kr(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}class Yn extends ye{constructor(){super();this.isGroup=!0,this.type="Group"}}var dc={type:"move"};class Ai{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,o=this._targetRay,a=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let y of t.hand.values()){let x=e.getJointPose(y,n),f=this._getHandJoint(l,y);if(x!==null)f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius;f.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=0.02,g=0.005;if(l.inputState.pinching&&u>d+g)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&u<=d-g)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(a!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity);else a.hasLinearVelocity=!1;if(s.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity);else a.hasAngularVelocity=!1}}if(o!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity);else o.hasLinearVelocity=!1;if(i.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(dc)}}}if(o!==null)o.visible=i!==null;if(a!==null)a.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jr extends ye{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)e.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)e.object.backgroundIntensity=this.backgroundIntensity;if(e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)e.object.environmentIntensity=this.environmentIntensity;return e.object.environmentRotation=this.environmentRotation.toArray(),e}}var er=new N,fc=new N,pc=new Nt;class je{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=er.subVectors(n,e).cross(fc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(er),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let s=-(t.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pc.getNormalMatrix(t),i=this.coplanarPoint(er).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Mn=new ii,mc=new Xt(0.5,0.5),Zi=new N;class bs{constructor(t=new je,e=new je,n=new je,i=new je,s=new je,r=new je){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],g=s[8],y=s[9],x=s[10],f=s[11],p=s[12],C=s[13],M=s[14],T=s[15];if(i[0].setComponents(l-r,d-c,f-g,T-p).normalize(),i[1].setComponents(l+r,d+c,f+g,T+p).normalize(),i[2].setComponents(l+o,d+h,f+y,T+C).normalize(),i[3].setComponents(l-o,d-h,f-y,T-C).normalize(),n)i[4].setComponents(a,u,x,M).normalize(),i[5].setComponents(l-a,d-u,f-x,T-M).normalize();else if(i[4].setComponents(l-a,d-u,f-x,T-M).normalize(),e===2000)i[5].setComponents(l+a,d+u,f+x,T+M).normalize();else if(e===2001)i[5].setComponents(a,u,x,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){Mn.center.set(0,0,0);let e=mc.distanceTo(t.center);return Mn.radius=0.7071067811865476+e,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Zi.x=i.normal.x>0?t.max.x:t.min.x,Zi.y=i.normal.y>0?t.max.y:t.min.y,Zi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ta extends An{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Ja=new oe,nr=new gs,Ji=new ii,$i=new N;class ea extends ye{constructor(t=new qe,e=new ta){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ji.copy(n.boundingSphere),Ji.applyMatrix4(i),Ji.radius+=s,t.ray.intersectsSphere(Ji)===!1)return;Ja.copy(i).invert(),nr.copy(t.ray).applyMatrix4(Ja);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=n.index,h=n.attributes.position;if(l!==null){let u=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=u,y=d;g<y;g++){let x=l.getX(g);$i.fromBufferAttribute(h,x),$a($i,x,a,i,t,e,this)}}else{let u=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let g=u,y=d;g<y;g++)$i.fromBufferAttribute(h,g),$a($i,g,a,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $a(t,e,n,i,s,r,o){let a=nr.distanceSqToPoint(t);if(a<n){let l=new N;nr.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Es extends ve{constructor(t,e,n=1014,i,s,r,o=1003,a=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,i,s,r,o,a,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ti(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);if(this.compareFunction!==null)e.compareFunction=this.compareFunction;return e}}class Ts extends ve{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wi extends qe{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,o=Math.floor(n),a=Math.floor(i),l=o+1,c=a+1,h=t/o,u=e/a,d=[],g=[],y=[],x=[];for(let f=0;f<c;f++){let p=f*u-r;for(let C=0;C<l;C++){let M=C*h-s;g.push(M,-p,0),y.push(0,0,1),x.push(C/o),x.push(1-f/a)}}for(let f=0;f<a;f++)for(let p=0;p<o;p++){let C=p+l*f,M=p+l*(f+1),T=p+1+l*(f+1),U=p+1+l*f;d.push(C,M,U),d.push(M,T,U)}this.setIndex(d),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.widthSegments,t.heightSegments)}}class na extends An{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ia extends An{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ki(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function gc(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}class ri{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let o=e[1];if(t<o)n=2,s=o;for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let o=n+r>>>1;if(t<e[o])r=o;else n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class sa extends ri{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,o=2*e-n;break;case 2402:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,a=2*n-e;break;case 2402:r=1,a=n+i[1]-i[0];break;default:r=t-1,a=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(a-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=t*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),y=g*g,x=y*g,f=-u*x+2*u*y-u*g,p=(1+u)*x+(-1.5-2*u)*y+(-0.5+u)*g+1,C=(-1-d)*x+(1.5+d)*y+0.5*g,M=d*x-d*y;for(let T=0;T!==o;++T)s[T]=f*r[c+T]+p*r[l+T]+C*r[a+T]+M*r[h+T];return s}}class ra extends ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=t*o,l=a-o,c=(n-e)/(i-e),h=1-c;for(let u=0;u!==o;++u)s[u]=r[l+u]*h+r[a+u]*c;return s}}class aa extends ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ue{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ki(e,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ki(t.times,Array),values:Ki(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let o=0;o!==s;o++){let a=n[o];if(typeof a==="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),t=!1;break}r=a}if(i!==void 0){if(gc(i))for(let o=0,a=i.length;o!==a;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let o=1;o<s;++o){let a=!1,l=t[o],c=t[o+1];if(l!==c&&(o!==1||l!==t[0]))if(!i){let h=o*n,u=h-n,d=h+n;for(let g=0;g!==n;++g){let y=e[h+g];if(y!==e[u+g]||y!==e[d+g]){a=!0;break}}}else a=!0;if(a){if(o!==r){t[r]=t[o];let h=o*n,u=r*n;for(let d=0;d!==n;++d)e[u+d]=e[h+d]}++r}}if(s>0){t[r]=t[s];for(let o=s*n,a=r*n,l=0;l!==n;++l)e[a+l]=e[o+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ue.prototype.ValueTypeName="";Ue.prototype.TimeBufferType=Float32Array;Ue.prototype.ValueBufferType=Float32Array;Ue.prototype.DefaultInterpolation=2301;class Rn extends Ue{constructor(t,e,n){super(t,e,n)}}Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=2300;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;class oa extends Ue{constructor(t,e,n,i){super(t,e,n,i)}}oa.prototype.ValueTypeName="color";class la extends Ue{constructor(t,e,n,i){super(t,e,n,i)}}la.prototype.ValueTypeName="number";class ca extends ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),l=t*o;for(let c=l+o;l!==c;l+=4)mn.slerpFlat(s,0,r,l-o,r,l,a);return s}}class As extends Ue{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ca(this.times,this.values,this.getValueSize(),t)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Cn extends Ue{constructor(t,e,n){super(t,e,n)}}Cn.prototype.ValueTypeName="string";Cn.prototype.ValueBufferType=Array;Cn.prototype.DefaultInterpolation=2300;Cn.prototype.InterpolantFactoryMethodLinear=void 0;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;class ha extends Ue{constructor(t,e,n,i){super(t,e,n,i)}}ha.prototype.ValueTypeName="vector";class ua{constructor(t,e,n){let i=this,s=!1,r=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(c){if(o++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,o)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,o);if(r===o){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],g=l[h+1];if(d.global)d.lastIndex=0;if(d.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var sl=new ua;class da{constructor(t){this.manager=t!==void 0?t:sl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}da.DEFAULT_MATERIAL_NAME="__DEFAULT";class fa extends Ms{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class pa extends be{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var ma="\\[\\]\\.:\\/",_c=new RegExp("["+ma+"]","g"),ga="[^"+ma+"]",xc="[^"+ma.replace("\\.","")+"]",vc=/((?:WC+[\/:])*)/.source.replace("WC",ga),yc=/(WCOD+)?/.source.replace("WCOD",xc),Mc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ga),Sc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ga),bc=new RegExp("^"+vc+yc+Mc+Sc+"$"),Ec=["material","materials","bones","map"];class rl{constructor(t,e,n){let i=n||qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class qt{constructor(t,e,n){this.path=e,this.parsedPath=n||qt.parseTrackName(e),this.node=qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new qt(t,e,n);else return new qt.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_c,"")}static parseTrackName(t){let e=bc.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Ec.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=qt.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))a=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qt.Composite=rl;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ep=new Float32Array(1);function _a(t,e,n,i){let s=Tc(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Tc(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function Cl(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){if(e===!0)return;if(n===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Ac(t){let e=new WeakMap;function n(a,l){let{array:c,usage:h}=a,u=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)g=t.HALF_FLOAT;else g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let{array:h,updateRanges:u}=l;if(t.bindBuffer(c,a),u.length===0)t.bufferSubData(c,0,h);else{u.sort((g,y)=>g.start-y.start);let d=0;for(let g=1;g<u.length;g++){let y=u[d],x=u[g];if(x.start<=y.start+y.count+1)y.count=Math.max(y.count,x.start+x.count-y.start);else++d,u[d]=x}u.length=d+1;for(let g=0,y=u.length;g<y;g++){let x=u[g];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;return e.get(a)}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=e.get(a);if(l)t.deleteBuffer(l.buffer),e.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=e.get(a);if(!h||h.version<a.version)e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$c=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Th=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ah=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,su=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ru=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Au=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Du=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ku=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;var Vu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ku=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,id=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:wc,alphahash_pars_fragment:Rc,alphamap_fragment:Cc,alphamap_pars_fragment:Ic,alphatest_fragment:Pc,alphatest_pars_fragment:Lc,aomap_fragment:Dc,aomap_pars_fragment:Uc,batching_pars_vertex:Nc,batching_vertex:Fc,begin_vertex:Oc,beginnormal_vertex:Bc,bsdfs:zc,iridescence_fragment:kc,bumpmap_pars_fragment:Hc,clipping_planes_fragment:Gc,clipping_planes_pars_fragment:Vc,clipping_planes_pars_vertex:Wc,clipping_planes_vertex:Xc,color_fragment:qc,color_pars_fragment:Yc,color_pars_vertex:Zc,color_vertex:Jc,common:$c,cube_uv_reflection_fragment:Kc,defaultnormal_vertex:Qc,displacementmap_pars_vertex:jc,displacementmap_vertex:th,emissivemap_fragment:eh,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:sh,envmap_fragment:rh,envmap_common_pars_fragment:ah,envmap_pars_fragment:oh,envmap_pars_vertex:lh,envmap_physical_pars_fragment:vh,envmap_vertex:ch,fog_vertex:hh,fog_pars_vertex:uh,fog_fragment:dh,fog_pars_fragment:fh,gradientmap_pars_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:_h,lights_pars_begin:xh,lights_toon_fragment:yh,lights_toon_pars_fragment:Mh,lights_phong_fragment:Sh,lights_phong_pars_fragment:bh,lights_physical_fragment:Eh,lights_physical_pars_fragment:Th,lights_fragment_begin:Ah,lights_fragment_maps:wh,lights_fragment_end:Rh,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Ph,logdepthbuf_vertex:Lh,map_fragment:Dh,map_pars_fragment:Uh,map_particle_fragment:Nh,map_particle_pars_fragment:Fh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:Bh,morphinstance_vertex:zh,morphcolor_vertex:kh,morphnormal_vertex:Hh,morphtarget_pars_vertex:Gh,morphtarget_vertex:Vh,normal_fragment_begin:Wh,normal_fragment_maps:Xh,normal_pars_fragment:qh,normal_pars_vertex:Yh,normal_vertex:Zh,normalmap_pars_fragment:Jh,clearcoat_normal_fragment_begin:$h,clearcoat_normal_fragment_maps:Kh,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:jh,opaque_fragment:tu,packing:eu,premultiplied_alpha_fragment:nu,project_vertex:iu,dithering_fragment:su,dithering_pars_fragment:ru,roughnessmap_fragment:au,roughnessmap_pars_fragment:ou,shadowmap_pars_fragment:lu,shadowmap_pars_vertex:cu,shadowmap_vertex:hu,shadowmask_pars_fragment:uu,skinbase_vertex:du,skinning_pars_vertex:fu,skinning_vertex:pu,skinnormal_vertex:mu,specularmap_fragment:gu,specularmap_pars_fragment:_u,tonemapping_fragment:xu,tonemapping_pars_fragment:vu,transmission_fragment:yu,transmission_pars_fragment:Mu,uv_pars_fragment:Su,uv_pars_vertex:bu,uv_vertex:Eu,worldpos_vertex:Tu,background_vert:Au,background_frag:wu,backgroundCube_vert:Ru,backgroundCube_frag:Cu,cube_vert:Iu,cube_frag:Pu,depth_vert:Lu,depth_frag:Du,distanceRGBA_vert:Uu,distanceRGBA_frag:Nu,equirect_vert:Fu,equirect_frag:Ou,linedashed_vert:Bu,linedashed_frag:zu,meshbasic_vert:ku,meshbasic_frag:Hu,meshlambert_vert:Gu,meshlambert_frag:Vu,meshmatcap_vert:Wu,meshmatcap_frag:Xu,meshnormal_vert:qu,meshnormal_frag:Yu,meshphong_vert:Zu,meshphong_frag:Ju,meshphysical_vert:$u,meshphysical_frag:Ku,meshtoon_vert:Qu,meshtoon_frag:ju,points_vert:td,points_frag:ed,shadow_vert:nd,shadow_frag:id,sprite_vert:sd,sprite_frag:rd},st={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Xt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ye={basic:{uniforms:_e([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:_e([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:_e([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:_e([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:_e([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:_e([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:_e([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:_e([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:_e([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:_e([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:_e([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:_e([st.common,st.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:_e([st.lights,st.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ye.physical={uniforms:_e([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var ws={r:0,b:0,g:0},In=new Ge,ad=new oe;function od(t,e,n,i,s,r,o){let a=new Wt(0),l=r===!0?0:1,c,h,u=null,d=0,g=null;function y(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture)T=(M.backgroundBlurriness>0?n:e).get(T);return T}function x(M){let T=!1,U=y(M);if(U===null)p(a,l);else if(U&&U.isColor)p(U,1),T=!0;let w=t.xr.getEnvironmentBlendMode();if(w==="additive")i.buffers.color.setClear(0,0,0,1,o);else if(w==="alpha-blend")i.buffers.color.setClear(0,0,0,0,o);if(t.autoClear||T)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function f(M,T){let U=y(T);if(U&&(U.isCubeTexture||U.mapping===xi)){if(h===void 0)h=new Be(new si(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:wn(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h);if(In.copy(T.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1)In.y*=-1,In.z*=-1;if(h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ad.makeRotationFromEuler(In)),h.material.toneMapped=Ht.getTransfer(U.colorSpace)!==Kt,u!==U||d!==U.version||g!==t.toneMapping)h.material.needsUpdate=!0,u=U,d=U.version,g=t.toneMapping;h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)}else if(U&&U.isTexture){if(c===void 0)c=new Be(new wi(2,2),new ze({name:"BackgroundMaterial",uniforms:wn(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c);if(c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(U.colorSpace)!==Kt,U.matrixAutoUpdate===!0)U.updateMatrix();if(c.material.uniforms.uvTransform.value.copy(U.matrix),u!==U||d!==U.version||g!==t.toneMapping)c.material.needsUpdate=!0,u=U,d=U.version,g=t.toneMapping;c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)}}function p(M,T){M.getRGB(ws,$r(t)),i.buffers.color.setClear(ws.r,ws.g,ws.b,T,o)}function C(){if(h!==void 0)h.geometry.dispose(),h.material.dispose(),h=void 0;if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:f,dispose:C}}function ld(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,R,G,X,k){let J=!1,V=u(X,G,R);if(r!==V)r=V,c(r.object);if(J=g(v,X,G,k),J)y(v,X,G,k);if(k!==null)e.update(k,t.ELEMENT_ARRAY_BUFFER);if(J||o){if(o=!1,T(v,R,G,X),k!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer)}}function l(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function h(v){return t.deleteVertexArray(v)}function u(v,R,G){let X=G.wireframe===!0,k=i[v.id];if(k===void 0)k={},i[v.id]=k;let J=k[R.id];if(J===void 0)J={},k[R.id]=J;let V=J[X];if(V===void 0)V=d(l()),J[X]=V;return V}function d(v){let R=[],G=[],X=[];for(let k=0;k<n;k++)R[k]=0,G[k]=0,X[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:X,object:v,attributes:{},index:null}}function g(v,R,G,X){let k=r.attributes,J=R.attributes,V=0,Q=G.getAttributes();for(let B in Q)if(Q[B].location>=0){let ut=k[B],Ct=J[B];if(Ct===void 0){if(B==="instanceMatrix"&&v.instanceMatrix)Ct=v.instanceMatrix;if(B==="instanceColor"&&v.instanceColor)Ct=v.instanceColor}if(ut===void 0)return!0;if(ut.attribute!==Ct)return!0;if(Ct&&ut.data!==Ct.data)return!0;V++}if(r.attributesNum!==V)return!0;if(r.index!==X)return!0;return!1}function y(v,R,G,X){let k={},J=R.attributes,V=0,Q=G.getAttributes();for(let B in Q)if(Q[B].location>=0){let ut=J[B];if(ut===void 0){if(B==="instanceMatrix"&&v.instanceMatrix)ut=v.instanceMatrix;if(B==="instanceColor"&&v.instanceColor)ut=v.instanceColor}let Ct={};if(Ct.attribute=ut,ut&&ut.data)Ct.data=ut.data;k[B]=Ct,V++}r.attributes=k,r.attributesNum=V,r.index=X}function x(){let v=r.newAttributes;for(let R=0,G=v.length;R<G;R++)v[R]=0}function f(v){p(v,0)}function p(v,R){let G=r.newAttributes,X=r.enabledAttributes,k=r.attributeDivisors;if(G[v]=1,X[v]===0)t.enableVertexAttribArray(v),X[v]=1;if(k[v]!==R)t.vertexAttribDivisor(v,R),k[v]=R}function C(){let v=r.newAttributes,R=r.enabledAttributes;for(let G=0,X=R.length;G<X;G++)if(R[G]!==v[G])t.disableVertexAttribArray(G),R[G]=0}function M(v,R,G,X,k,J,V){if(V===!0)t.vertexAttribIPointer(v,R,G,k,J);else t.vertexAttribPointer(v,R,G,X,k,J)}function T(v,R,G,X){x();let k=X.attributes,J=G.getAttributes(),V=R.defaultAttributeValues;for(let Q in J){let B=J[Q];if(B.location>=0){let at=k[Q];if(at===void 0){if(Q==="instanceMatrix"&&v.instanceMatrix)at=v.instanceMatrix;if(Q==="instanceColor"&&v.instanceColor)at=v.instanceColor}if(at!==void 0){let ut=at.normalized,Ct=at.itemSize,zt=e.get(at);if(zt===void 0)continue;let{buffer:re,type:Gt,bytesPerElement:q}=zt,rt=Gt===t.INT||Gt===t.UNSIGNED_INT||at.gpuType===or;if(at.isInterleavedBufferAttribute){let nt=at.data,vt=nt.stride,Pt=at.offset;if(nt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<B.locationSize;Lt++)p(B.location+Lt,nt.meshPerAttribute);if(v.isInstancedMesh!==!0&&X._maxInstanceCount===void 0)X._maxInstanceCount=nt.meshPerAttribute*nt.count}else for(let Lt=0;Lt<B.locationSize;Lt++)f(B.location+Lt);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Lt=0;Lt<B.locationSize;Lt++)M(B.location+Lt,Ct/B.locationSize,Gt,ut,vt*q,(Pt+Ct/B.locationSize*Lt)*q,rt)}else{if(at.isInstancedBufferAttribute){for(let nt=0;nt<B.locationSize;nt++)p(B.location+nt,at.meshPerAttribute);if(v.isInstancedMesh!==!0&&X._maxInstanceCount===void 0)X._maxInstanceCount=at.meshPerAttribute*at.count}else for(let nt=0;nt<B.locationSize;nt++)f(B.location+nt);t.bindBuffer(t.ARRAY_BUFFER,re);for(let nt=0;nt<B.locationSize;nt++)M(B.location+nt,Ct/B.locationSize,Gt,ut,Ct*q,Ct/B.locationSize*nt*q,rt)}}else if(V!==void 0){let ut=V[Q];if(ut!==void 0)switch(ut.length){case 2:t.vertexAttrib2fv(B.location,ut);break;case 3:t.vertexAttrib3fv(B.location,ut);break;case 4:t.vertexAttrib4fv(B.location,ut);break;default:t.vertexAttrib1fv(B.location,ut)}}}}C()}function U(){H();for(let v in i){let R=i[v];for(let G in R){let X=R[G];for(let k in X)h(X[k].object),delete X[k];delete R[G]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;let R=i[v.id];for(let G in R){let X=R[G];for(let k in X)h(X[k].object),delete X[k];delete R[G]}delete i[v.id]}function I(v){for(let R in i){let G=i[R];if(G[v.id]===void 0)continue;let X=G[v.id];for(let k in X)h(X[k].object),delete X[k];delete G[v.id]}}function H(){if(S(),o=!0,r===s)return;r=s,c(r.object)}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:f,disableUnusedAttributes:C}}function cd(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,u){if(u===0)return;t.drawArraysInstanced(i,c,h,u),n.update(h,i,u)}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];n.update(g,i,1)}function l(c,h,u,d){if(u===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<c.length;y++)o(c[y],h[y],d[y]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let y=0;for(let x=0;x<u;x++)y+=h[x]*d[x];n.update(y,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hd(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){if(I!==Xe&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(I){let H=I===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(I!==dn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==fn&&!H)return!1;return!0}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}if(I==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let u=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=y>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:C,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:U,maxSamples:w}}function ud(t){let e=this,n=null,i=0,s=!1,r=!1,o=new je,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let g=u.length!==0||d||i!==0||s;return s=d,i=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,g){let{clippingPlanes:y,clipIntersection:x,clipShadows:f}=u,p=t.get(u);if(!s||y===null||y.length===0||r&&!f)if(r)h(null);else c();else{let C=r?0:i,M=C*4,T=p.clippingState||null;l.value=T,T=h(y,d,M,g);for(let U=0;U!==M;++U)T[U]=n[U];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(u,d,g,y){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=l.value,y!==!0||f===null){let p=g+x*4,C=d.matrixWorldInverse;if(a.getNormalMatrix(C),f===null||f.length<p)f=new Float32Array(p);for(let M=0,T=g;M!==x;++M,T+=4)o.copy(u[M]).applyMatrix4(C,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function dd(t){let e=new WeakMap;function n(o,a){if(a===os)o.mapping=Qn;else if(a===ls)o.mapping=Sn;return o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===os||a===ls)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qr(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);if(l!==void 0)e.delete(a),l.dispose()}function r(){e=new WeakMap}return{get:i,dispose:r}}var oi=4,al=[0.125,0.215,0.35,0.446,0.526,0.582],Dn=20,xa=new fa,ol=new Wt,va=null,ya=0,Ma=0,Sa=!1,Ln=(1+Math.sqrt(5))/2,ai=1/Ln,ll=[new N(-Ln,ai,0),new N(Ln,ai,0),new N(-ai,0,Ln),new N(ai,0,Ln),new N(0,Ln,-ai),new N(0,Ln,ai),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],fd=new N;class Ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:o=fd}=s;va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let a=this._allocateTargets();if(a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a,o),e>0)this._blur(a,0,0,e);return this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,ya,Ma),this._renderer.xr.enabled=Sa,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Qn||t.mapping===Sn)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Mi,format:Xe,colorSpace:bi,depthBuffer:!1},i=cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=cl(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pd(s)),this._blurMaterial=md(s,t,e)}return i}_compileMaterial(t){let e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,i,s){let a=new be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,{autoClear:u,toneMapping:d}=h;if(h.getClearColor(ol),h.toneMapping=nn,h.autoClear=!1,h.state.buffers.depth.getReversed())h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null);let y=new xs({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),x=new Be(new si,y),f=!1,p=t.background;if(p){if(p.isColor)y.color.copy(p),t.background=null,f=!0}else y.color.copy(ol),f=!0;for(let C=0;C<6;C++){let M=C%3;if(M===0)a.up.set(0,l[C],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[C],s.y,s.z);else if(M===1)a.up.set(0,0,l[C]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[C],s.z);else a.up.set(0,l[C],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[C]);let T=this._cubeSize;if(Rs(i,M*T,C>2?T:0,T,T),h.setRenderTarget(i),f)h.render(x,a);h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Qn||t.mapping===Sn;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=ul();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=hl();let s=i?this._cubemapMaterial:this._equirectMaterial,r=new Be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let a=this._cubeSize;Rs(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(r,xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ll[(i-s-1)%ll.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){let a=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let c=3,h=new Be(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Dn-1),y=s/g,x=isFinite(s)?1+Math.floor(c*y):Dn;if(x>Dn)console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Dn}`);let f=[],p=0;for(let w=0;w<Dn;++w){let I=w/y,H=Math.exp(-I*I/2);if(f.push(H),w===0)p+=H;else if(w<x)p+=2*H}for(let w=0;w<f.length;w++)f[w]=f[w]/p;if(u.envMap.value=t.texture,u.samples.value=x,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o)u.poleAxis.value=o;let{_lodMax:C}=this;u.dTheta.value=g,u.mipInt.value=C-n;let M=this._sizeLods[i],T=3*M*(i>C-oi?i-C+oi:0),U=4*(this._cubeSize-M);Rs(e,T,U,3*M,2*M),a.setRenderTarget(e),a.render(h,xa)}}function pd(t){let e=[],n=[],i=[],s=t,r=t-oi+1+al.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);n.push(a);let l=1/a;if(o>t-oi)l=al[o-t+oi-1];else if(o===0)l=0;i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,y=6,x=3,f=2,p=1,C=new Float32Array(x*y*g),M=new Float32Array(f*y*g),T=new Float32Array(p*y*g);for(let w=0;w<g;w++){let I=w%3*2/3-1,H=w>2?0:-1,S=[I,H,0,I+0.6666666666666666,H,0,I+0.6666666666666666,H+1,0,I,H,0,I+0.6666666666666666,H+1,0,I,H+1,0];C.set(S,x*y*w),M.set(d,f*y*w);let v=[w,w,w,w,w,w];T.set(v,p*y*w)}let U=new qe;if(U.setAttribute("position",new Re(C,x)),U.setAttribute("uv",new Re(M,f)),U.setAttribute("faceIndex",new Re(T,p)),e.push(U),s>oi)s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function cl(t,e,n){let i=new sn(t,e,n);return i.texture.mapping=xi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function md(t,e,n){let i=new Float32Array(Dn),s=new N(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function hl(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function ul(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gd(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===os||l===ls,h=l===Qn||l===Sn;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d){if(n===null)n=new Ea(t);return u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture}else if(u!==void 0)return u.texture;else{let g=a.image;if(c&&g&&g.height>0||h&&g&&s(g)){if(n===null)n=new Ea(t);return u=c?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)if(a[h]!==void 0)l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);if(c!==void 0)e.delete(l),c.dispose()}function o(){if(e=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:o}}function _d(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Jn("THREE.WebGLRenderer: "+i+" extension not supported.");return s}}}function xd(t,e,n,i){let s={},r=new WeakMap;function o(u){let d=u.target;if(d.index!==null)e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete s[d.id];let g=r.get(d);if(g)e.remove(g),r.delete(d);if(i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0)delete d._maxInstanceCount;n.memory.geometries--}function a(u,d){if(s[d.id]===!0)return d;return d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++,d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],t.ARRAY_BUFFER)}function c(u){let d=[],g=u.index,y=u.attributes.position,x=0;if(g!==null){let C=g.array;x=g.version;for(let M=0,T=C.length;M<T;M+=3){let U=C[M+0],w=C[M+1],I=C[M+2];d.push(U,w,w,I,I,U)}}else if(y!==void 0){let C=y.array;x=y.version;for(let M=0,T=C.length/3-1;M<T;M+=3){let U=M+0,w=M+1,I=M+2;d.push(U,w,w,I,I,U)}}else return;let f=new((qr(d))?ys:vs)(d,1);f.version=x;let p=r.get(u);if(p)e.remove(p);r.set(u,f)}function h(u){let d=r.get(u);if(d){let g=u.index;if(g!==null){if(d.version<g.version)c(u)}}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function vd(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,g){t.drawElements(i,g,r,d*o),n.update(g,i,1)}function c(d,g,y){if(y===0)return;t.drawElementsInstanced(i,g,r,d*o,y),n.update(g,i,y)}function h(d,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,r,d,0,y);let f=0;for(let p=0;p<y;p++)f+=g[p];n.update(f,i,1)}function u(d,g,y,x){if(y===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/o,g[p],x[p]);else{f.multiDrawElementsInstancedWEBGL(i,g,0,r,d,0,x,0,y);let p=0;for(let C=0;C<y;C++)p+=g[C]*x[C];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yd(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Md(t,e,n){let i=new WeakMap,s=new se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};if(d!==void 0)d.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],M=0;if(g===!0)M=1;if(y===!0)M=2;if(x===!0)M=3;let T=a.attributes.position.count*M,U=1;if(T>e.maxTextureSize)U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize;let w=new Float32Array(T*U*4*u),I=new ms(w,T,U,u);I.type=fn,I.needsUpdate=!0;let H=M*4;for(let v=0;v<u;v++){let R=f[v],G=p[v],X=C[v],k=T*U*4*v;for(let J=0;J<R.count;J++){let V=J*H;if(g===!0)s.fromBufferAttribute(R,J),w[k+V+0]=s.x,w[k+V+1]=s.y,w[k+V+2]=s.z,w[k+V+3]=0;if(y===!0)s.fromBufferAttribute(G,J),w[k+V+4]=s.x,w[k+V+5]=s.y,w[k+V+6]=s.z,w[k+V+7]=0;if(x===!0)s.fromBufferAttribute(X,J),w[k+V+8]=s.x,w[k+V+9]=s.y,w[k+V+10]=s.z,w[k+V+11]=X.itemSize===4?s.w:1}}d={count:u,texture:I,size:new Xt(T,U)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function Sd(t,e,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c)e.update(u),s.set(u,c);if(l.isInstancedMesh){if(l.hasEventListener("dispose",a)===!1)l.addEventListener("dispose",a);if(s.get(l)!==c){if(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null)n.update(l.instanceColor,t.ARRAY_BUFFER);s.set(l,c)}}if(l.isSkinnedMesh){let d=l.skeleton;if(s.get(d)!==c)d.update(),s.set(d,c)}return u}function o(){s=new WeakMap}function a(l){let c=l.target;if(c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null)n.remove(c.instanceColor)}return{update:r,dispose:o}}var Il=new ve,dl=new Es(1,1),Pl=new ms,Ll=new Jr,Dl=new Ss,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function li(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=fl[s];if(r===void 0)r=new Float32Array(s),fl[s]=r;if(e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function ce(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function he(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Is(t,e){let n=pl[e];if(n===void 0)n=new Int32Array(e),pl[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bd(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Ed(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ce(n,e))return;t.uniform2fv(this.addr,e),he(n,e)}}function Td(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(ce(n,e))return;t.uniform3fv(this.addr,e),he(n,e)}}function Ad(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ce(n,e))return;t.uniform4fv(this.addr,e),he(n,e)}}function wd(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ce(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),he(n,e)}else{if(ce(n,i))return;_l.set(i),t.uniformMatrix2fv(this.addr,!1,_l),he(n,i)}}function Rd(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ce(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),he(n,e)}else{if(ce(n,i))return;gl.set(i),t.uniformMatrix3fv(this.addr,!1,gl),he(n,i)}}function Cd(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ce(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),he(n,e)}else{if(ce(n,i))return;ml.set(i),t.uniformMatrix4fv(this.addr,!1,ml),he(n,i)}}function Id(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Pd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ce(n,e))return;t.uniform2iv(this.addr,e),he(n,e)}}function Ld(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(ce(n,e))return;t.uniform3iv(this.addr,e),he(n,e)}}function Dd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ce(n,e))return;t.uniform4iv(this.addr,e),he(n,e)}}function Ud(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Nd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ce(n,e))return;t.uniform2uiv(this.addr,e),he(n,e)}}function Fd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(ce(n,e))return;t.uniform3uiv(this.addr,e),he(n,e)}}function Od(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ce(n,e))return;t.uniform4uiv(this.addr,e),he(n,e)}}function Bd(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)dl.compareFunction=Vr,r=dl;else r=Il;n.setTexture2D(e||r,s)}function zd(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Ll,s)}function kd(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Dl,s)}function Hd(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Pl,s)}function Gd(t){switch(t){case 5126:return bd;case 35664:return Ed;case 35665:return Td;case 35666:return Ad;case 35674:return wd;case 35675:return Rd;case 35676:return Cd;case 5124:case 35670:return Id;case 35667:case 35671:return Pd;case 35668:case 35672:return Ld;case 35669:case 35673:return Dd;case 5125:return Ud;case 36294:return Nd;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Hd}}function Vd(t,e){t.uniform1fv(this.addr,e)}function Wd(t,e){let n=li(e,this.size,2);t.uniform2fv(this.addr,n)}function Xd(t,e){let n=li(e,this.size,3);t.uniform3fv(this.addr,n)}function qd(t,e){let n=li(e,this.size,4);t.uniform4fv(this.addr,n)}function Yd(t,e){let n=li(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Zd(t,e){let n=li(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Jd(t,e){let n=li(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $d(t,e){t.uniform1iv(this.addr,e)}function Kd(t,e){t.uniform2iv(this.addr,e)}function Qd(t,e){t.uniform3iv(this.addr,e)}function jd(t,e){t.uniform4iv(this.addr,e)}function tf(t,e){t.uniform1uiv(this.addr,e)}function ef(t,e){t.uniform2uiv(this.addr,e)}function nf(t,e){t.uniform3uiv(this.addr,e)}function sf(t,e){t.uniform4uiv(this.addr,e)}function rf(t,e,n){let i=this.cache,s=e.length,r=Is(n,s);if(!ce(i,r))t.uniform1iv(this.addr,r),he(i,r);for(let o=0;o!==s;++o)n.setTexture2D(e[o]||Il,r[o])}function af(t,e,n){let i=this.cache,s=e.length,r=Is(n,s);if(!ce(i,r))t.uniform1iv(this.addr,r),he(i,r);for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Ll,r[o])}function of(t,e,n){let i=this.cache,s=e.length,r=Is(n,s);if(!ce(i,r))t.uniform1iv(this.addr,r),he(i,r);for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Dl,r[o])}function lf(t,e,n){let i=this.cache,s=e.length,r=Is(n,s);if(!ce(i,r))t.uniform1iv(this.addr,r),he(i,r);for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Pl,r[o])}function cf(t){switch(t){case 5126:return Vd;case 35664:return Wd;case 35665:return Xd;case 35666:return qd;case 35674:return Yd;case 35675:return Zd;case 35676:return Jd;case 5124:case 35670:return $d;case 35667:case 35671:return Kd;case 35668:case 35672:return Qd;case 35669:case 35673:return jd;case 5125:return tf;case 36294:return ef;case 36295:return nf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}class Ul{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gd(e.type)}}class Nl{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cf(e.type)}}class Fl{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(t,e[o.id],n)}}}var ba=/(\w+)(\])?(\[|\.)?/g;function xl(t,e){t.seq.push(e),t.map[e.id]=e}function hf(t,e,n){let i=t.name,s=i.length;ba.lastIndex=0;while(!0){let r=ba.exec(i),o=ba.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===s){xl(n,c===void 0?new Ul(a,t,e):new Nl(a,t,e));break}else{let u=n.map[a];if(u===void 0)u=new Fl(a),xl(n,u);n=u}}}class Ci{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);hf(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let o=e[s],a=n[o.id];if(a.needsUpdate!==!1)o.setValue(t,a.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function vl(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var uf=37297,df=0;function ff(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var yl=new Nt;function pf(t){Ht._getMatrix(yl,Ht.workingColorSpace,t);let e=`mat3( ${yl.elements.map((n)=>n.toFixed(4))} )`;switch(Ht.getTransfer(t)){case Gr:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ml(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+ff(t.getShaderSource(e),a)}else return r}function mf(t,e){let n=pf(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function gf(t,e){let n;switch(e){case To:n="Linear";break;case Ao:n="Reinhard";break;case wo:n="Cineon";break;case Ro:n="ACESFilmic";break;case Io:n="AgX";break;case Po:n="Neutral";break;case Co:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Cs=new N;function _f(){Ht.getLuminanceCoefficients(Cs);let t=Cs.x.toFixed(4),e=Cs.y.toFixed(4),n=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function xf(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function vf(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function yf(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;if(r.type===t.FLOAT_MAT2)a=2;if(r.type===t.FLOAT_MAT3)a=3;if(r.type===t.FLOAT_MAT4)a=4;n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ri(t){return t!==""}function Sl(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bl(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(t){return t.replace(Mf,bf)}var Sf=new Map;function bf(t,e){let n=Ft[e];if(n===void 0){let i=Sf.get(e);if(i!==void 0)n=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("Can not resolve #include <"+e+">")}return Ta(n)}var Ef=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(t){return t.replace(Ef,Tf)}function Tf(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tl(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}function Af(t){let e="SHADOWMAP_TYPE_BASIC";if(t.shadowMapType===sr)e="SHADOWMAP_TYPE_PCF";else if(t.shadowMapType===to)e="SHADOWMAP_TYPE_PCF_SOFT";else if(t.shadowMapType===Ve)e="SHADOWMAP_TYPE_VSM";return e}function wf(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qn:case Sn:e="ENVMAP_TYPE_CUBE";break;case xi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rf(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Sn:e="ENVMAP_MODE_REFRACTION";break}return e}function Cf(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case So:e="ENVMAP_BLENDING_MULTIPLY";break;case bo:e="ENVMAP_BLENDING_MIX";break;case Eo:e="ENVMAP_BLENDING_ADD";break}return e}function If(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Pf(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:o,fragmentShader:a}=n,l=Af(n),c=wf(n),h=Rf(n),u=Cf(n),d=If(n),g=xf(n),y=vf(r),x=s.createProgram(),f,p,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ri).join(`
`),f.length>0)f+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ri).join(`
`),p.length>0)p+=`
`}else f=[Tl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),p=[Tl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nn?"#define TONE_MAPPING":"",n.toneMapping!==nn?Ft.tonemapping_pars_fragment:"",n.toneMapping!==nn?gf("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,mf("linearToOutputTexel",n.outputColorSpace),_f(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ri).join(`
`);if(o=Ta(o),o=Sl(o,n),o=bl(o,n),a=Ta(a),a=Sl(a,n),a=bl(a,n),o=El(o),a=El(a),n.isRawShaderMaterial!==!0)C=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",n.glslVersion===Wr?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let M=C+f+o,T=C+p+a,U=vl(s,s.VERTEX_SHADER,M),w=vl(s,s.FRAGMENT_SHADER,T);if(s.attachShader(x,U),s.attachShader(x,w),n.index0AttributeName!==void 0)s.bindAttribLocation(x,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(x,0,"position");s.linkProgram(x);function I(R){if(t.debug.checkShaderErrors){let G=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(U)||"",k=s.getShaderInfoLog(w)||"",J=G.trim(),V=X.trim(),Q=k.trim(),B=!0,at=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,x,U,w);else{let ut=Ml(s,U,"vertex"),Ct=Ml(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+J+`
`+ut+`
`+Ct)}else if(J!=="")console.warn("THREE.WebGLProgram: Program Info Log:",J);else if(V===""||Q==="")at=!1;if(at)R.diagnostics={runnable:B,programLog:J,vertexShader:{log:V,prefix:f},fragmentShader:{log:Q,prefix:p}}}s.deleteShader(U),s.deleteShader(w),H=new Ci(s,x),S=yf(s,x)}let H;this.getUniforms=function(){if(H===void 0)I(this);return H};let S;this.getAttributes=function(){if(S===void 0)I(this);return S};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(v===!1)v=s.getProgramParameter(x,uf);return v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=df++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=w,this}var Lf=0;class Ol{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Bl(t),e.set(t,n);return n}}class Bl{constructor(t){this.id=Lf++,this.code=t,this.usedTimes=0}}function Df(t,e,n,i,s,r,o){let a=new _s,l=new Ol,c=new Set,h=[],{logarithmicDepthBuffer:u,vertexTextures:d,precision:g}=s,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){if(c.add(S),S===0)return"uv";return`uv${S}`}function f(S,v,R,G,X){let k=G.fog,J=X.geometry,V=S.isMeshStandardMaterial?G.environment:null,Q=(S.isMeshStandardMaterial?n:e).get(S.envMap||V),B=!!Q&&Q.mapping===xi?Q.image.height:null,at=y[S.type];if(S.precision!==null){if(g=s.getMaxPrecision(S.precision),g!==S.precision)console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead.")}let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ct=ut!==void 0?ut.length:0,zt=0;if(J.morphAttributes.position!==void 0)zt=1;if(J.morphAttributes.normal!==void 0)zt=2;if(J.morphAttributes.color!==void 0)zt=3;let re,Gt,q,rt;if(at){let Yt=Ye[at];re=Yt.vertexShader,Gt=Yt.fragmentShader}else re=S.vertexShader,Gt=S.fragmentShader,l.update(S),q=l.getVertexShaderID(S),rt=l.getFragmentShaderID(S);let nt=t.getRenderTarget(),vt=t.state.buffers.depth.getReversed(),Pt=X.isInstancedMesh===!0,Lt=X.isBatchedMesh===!0,ue=!!S.map,E=!!S.matcap,jt=!!Q,Ut=!!S.aoMap,It=!!S.lightMap,_t=!!S.bumpMap,te=!!S.normalMap,St=!!S.displacementMap,Tt=!!S.emissiveMap,pe=!!S.metalnessMap,de=!!S.roughnessMap,ae=S.anisotropy>0,b=S.clearcoat>0,m=S.dispersion>0,D=S.iridescence>0,W=S.sheen>0,Z=S.transmission>0,z=ae&&!!S.anisotropyMap,ft=b&&!!S.clearcoatMap,et=b&&!!S.clearcoatNormalMap,xt=b&&!!S.clearcoatRoughnessMap,wt=D&&!!S.iridescenceMap,tt=D&&!!S.iridescenceThicknessMap,ct=W&&!!S.sheenColorMap,yt=W&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,ht=!!S.specularColorMap,Ot=!!S.specularIntensityMap,A=Z&&!!S.transmissionMap,ot=Z&&!!S.thicknessMap,it=!!S.gradientMap,pt=!!S.alphaMap,K=S.alphaTest>0,Y=!!S.alphaHash,gt=!!S.extensions,Dt=nn;if(S.toneMapped){if(nt===null||nt.isXRRenderTarget===!0)Dt=t.toneMapping}let Jt={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:Gt,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:rt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Lt,batchingColor:Lt&&X._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&X.instanceColor!==null,instancingMorph:Pt&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?t.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:bi,alphaToCoverage:!!S.alphaToCoverage,map:ue,matcap:E,envMap:jt,envMapMode:jt&&Q.mapping,envMapCubeUVHeight:B,aoMap:Ut,lightMap:It,bumpMap:_t,normalMap:te,displacementMap:d&&St,emissiveMap:Tt,normalMapObjectSpace:te&&S.normalMapType===qo,normalMapTangentSpace:te&&S.normalMapType===Xo,metalnessMap:pe,roughnessMap:de,anisotropy:ae,anisotropyMap:z,clearcoat:b,clearcoatMap:ft,clearcoatNormalMap:et,clearcoatRoughnessMap:xt,dispersion:m,iridescence:D,iridescenceMap:wt,iridescenceThicknessMap:tt,sheen:W,sheenColorMap:ct,sheenRoughnessMap:yt,specularMap:Mt,specularColorMap:ht,specularIntensityMap:Ot,transmission:Z,transmissionMap:A,thicknessMap:ot,gradientMap:it,opaque:S.transparent===!1&&S.blending===gi&&S.alphaToCoverage===!1,alphaMap:pt,alphaTest:K,alphaHash:Y,combine:S.combine,mapUv:ue&&x(S.map.channel),aoMapUv:Ut&&x(S.aoMap.channel),lightMapUv:It&&x(S.lightMap.channel),bumpMapUv:_t&&x(S.bumpMap.channel),normalMapUv:te&&x(S.normalMap.channel),displacementMapUv:St&&x(S.displacementMap.channel),emissiveMapUv:Tt&&x(S.emissiveMap.channel),metalnessMapUv:pe&&x(S.metalnessMap.channel),roughnessMapUv:de&&x(S.roughnessMap.channel),anisotropyMapUv:z&&x(S.anisotropyMap.channel),clearcoatMapUv:ft&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(S.sheenRoughnessMap.channel),specularMapUv:Mt&&x(S.specularMap.channel),specularColorMapUv:ht&&x(S.specularColorMap.channel),specularIntensityMapUv:Ot&&x(S.specularIntensityMap.channel),transmissionMapUv:A&&x(S.transmissionMap.channel),thicknessMapUv:ot&&x(S.thicknessMap.channel),alphaMapUv:pt&&x(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(te||ae),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!J.attributes.uv&&(ue||pt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:X.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:zt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Dt,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&Ht.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:Tt&&S.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===We,flipSided:S.side===Ce,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function p(S){let v=[];if(S.shaderID)v.push(S.shaderID);else v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID);if(S.defines!==void 0)for(let R in S.defines)v.push(R),v.push(S.defines[R]);if(S.isRawShaderMaterial===!1)C(v,S),M(v,S),v.push(t.outputColorSpace);return v.push(S.customProgramCacheKey),v.join()}function C(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){if(a.disableAll(),v.supportsVertexTextures)a.enable(0);if(v.instancing)a.enable(1);if(v.instancingColor)a.enable(2);if(v.instancingMorph)a.enable(3);if(v.matcap)a.enable(4);if(v.envMap)a.enable(5);if(v.normalMapObjectSpace)a.enable(6);if(v.normalMapTangentSpace)a.enable(7);if(v.clearcoat)a.enable(8);if(v.iridescence)a.enable(9);if(v.alphaTest)a.enable(10);if(v.vertexColors)a.enable(11);if(v.vertexAlphas)a.enable(12);if(v.vertexUv1s)a.enable(13);if(v.vertexUv2s)a.enable(14);if(v.vertexUv3s)a.enable(15);if(v.vertexTangents)a.enable(16);if(v.anisotropy)a.enable(17);if(v.alphaHash)a.enable(18);if(v.batching)a.enable(19);if(v.dispersion)a.enable(20);if(v.batchingColor)a.enable(21);if(v.gradientMap)a.enable(22);if(S.push(a.mask),a.disableAll(),v.fog)a.enable(0);if(v.useFog)a.enable(1);if(v.flatShading)a.enable(2);if(v.logarithmicDepthBuffer)a.enable(3);if(v.reversedDepthBuffer)a.enable(4);if(v.skinning)a.enable(5);if(v.morphTargets)a.enable(6);if(v.morphNormals)a.enable(7);if(v.morphColors)a.enable(8);if(v.premultipliedAlpha)a.enable(9);if(v.shadowMapEnabled)a.enable(10);if(v.doubleSided)a.enable(11);if(v.flipSided)a.enable(12);if(v.useDepthPacking)a.enable(13);if(v.dithering)a.enable(14);if(v.transmission)a.enable(15);if(v.sheen)a.enable(16);if(v.opaque)a.enable(17);if(v.pointsUvs)a.enable(18);if(v.decodeVideoTexture)a.enable(19);if(v.decodeVideoTextureEmissive)a.enable(20);if(v.alphaToCoverage)a.enable(21);S.push(a.mask)}function T(S){let v=y[S.type],R;if(v){let G=Ye[v];R=il.clone(G.uniforms)}else R=S.uniforms;return R}function U(S,v){let R;for(let G=0,X=h.length;G<X;G++){let k=h[G];if(k.cacheKey===v){R=k,++R.usedTimes;break}}if(R===void 0)R=new Pf(t,v,S,r),h.push(R);return R}function w(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function H(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:T,acquireProgram:U,releaseProgram:w,releaseShaderCache:I,programs:h,dispose:H}}function Uf(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);if(a===void 0)a={},t.set(o,a);return a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Nf(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Al(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function wl(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u,d,g,y,x,f){let p=t[e];if(p===void 0)p={id:u.id,object:u,geometry:d,material:g,groupOrder:y,renderOrder:u.renderOrder,z:x,group:f},t[e]=p;else p.id=u.id,p.object=u,p.geometry=d,p.material=g,p.groupOrder=y,p.renderOrder=u.renderOrder,p.z=x,p.group=f;return e++,p}function a(u,d,g,y,x,f){let p=o(u,d,g,y,x,f);if(g.transmission>0)i.push(p);else if(g.transparent===!0)s.push(p);else n.push(p)}function l(u,d,g,y,x,f){let p=o(u,d,g,y,x,f);if(g.transmission>0)i.unshift(p);else if(g.transparent===!0)s.unshift(p);else n.unshift(p)}function c(u,d){if(n.length>1)n.sort(u||Nf);if(i.length>1)i.sort(d||Al);if(s.length>1)s.sort(d||Al)}function h(){for(let u=e,d=t.length;u<d;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ff(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;if(r===void 0)o=new wl,t.set(i,[o]);else if(s>=r.length)o=new wl,r.push(o);else o=r[s];return o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Of(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Wt};break;case"SpotLight":n={position:new N,direction:new N,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":n={color:new Wt,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function Bf(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var zf=0;function kf(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Hf(t){let e=new Of,n=Bf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,r=new oe,o=new oe;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let g=0,y=0,x=0,f=0,p=0,C=0,M=0,T=0,U=0,w=0,I=0;c.sort(kf);for(let S=0,v=c.length;S<v;S++){let R=c[S],{color:G,intensity:X,distance:k}=R,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=G.r*X,u+=G.g*X,d+=G.b*X;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],X);I++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,B=n.get(R);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=R.shadow.matrix,C++}i.directional[g]=V,g++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(G).multiplyScalar(X),V.distance=k,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[x]=V;let Q=R.shadow;if(R.map){if(i.spotLightMap[U]=R.map,U++,Q.updateMatrices(R),R.castShadow)w++}if(i.spotLightMatrix[x]=Q.matrix,R.castShadow){let B=n.get(R);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=J,T++}x++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(G).multiplyScalar(X),V.halfWidth.set(R.width*0.5,0,0),V.halfHeight.set(0,R.height*0.5,0),i.rectArea[f]=V,f++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let Q=R.shadow,B=n.get(R);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,i.pointShadow[y]=B,i.pointShadowMap[y]=J,i.pointShadowMatrix[y]=R.shadow.matrix,M++}i.point[y]=V,y++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(X),V.groundColor.copy(R.groundColor).multiplyScalar(X),i.hemi[p]=V,p++}}if(f>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2;else i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let H=i.hash;if(H.directionalLength!==g||H.pointLength!==y||H.spotLength!==x||H.rectAreaLength!==f||H.hemiLength!==p||H.numDirectionalShadows!==C||H.numPointShadows!==M||H.numSpotShadows!==T||H.numSpotMaps!==U||H.numLightProbes!==I)i.directional.length=g,i.spot.length=x,i.rectArea.length=f,i.point.length=y,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+U-w,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,H.directionalLength=g,H.pointLength=y,H.spotLength=x,H.rectAreaLength=f,H.hemiLength=p,H.numDirectionalShadows=C,H.numPointShadows=M,H.numSpotShadows=T,H.numSpotMaps=U,H.numLightProbes=I,i.version=zf++}function l(c,h){let u=0,d=0,g=0,y=0,x=0,f=h.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){let M=c[p];if(M.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(M.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),T.halfWidth.set(M.width*0.5,0,0),T.halfHeight.set(0,M.height*0.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let T=i.hemi[x];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:i}}function Rl(t){let e=new Hf(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gf(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;if(o===void 0)a=new Rl(t),e.set(s,[a]);else if(r>=o.length)a=new Rl(t),o.push(a);else a=o[r];return a}function i(){e=new WeakMap}return{get:n,dispose:i}}var Vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xf(t,e,n){let i=new bs,s=new Xt,r=new Xt,o=new se,a=new na({depthPacking:Wo}),l=new ia,c={},h=n.maxTextureSize,u={[$n]:Ce,[Ce]:$n,[We]:We},d=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Vf,fragmentShader:Wf}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let y=new qe;y.setAttribute("position",new Re(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new Be(y,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let p=this.type;this.render=function(w,I,H){if(f.enabled===!1)return;if(f.autoUpdate===!1&&f.needsUpdate===!1)return;if(w.length===0)return;let S=t.getRenderTarget(),v=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),G=t.state;if(G.setBlending(un),G.buffers.depth.getReversed()===!0)G.buffers.color.setClear(0,0,0,0);else G.buffers.color.setClear(1,1,1,1);G.buffers.depth.setTest(!0),G.setScissorTest(!1);let X=p!==Ve&&this.type===Ve,k=p===Ve&&this.type!==Ve;for(let J=0,V=w.length;J<V;J++){let Q=w[J],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let at=B.getFrameExtents();if(s.multiply(at),r.copy(B.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/at.x),s.x=r.x*at.x,B.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/at.y),s.y=r.y*at.y,B.mapSize.y=r.y}if(B.map===null||X===!0||k===!0){let Ct=this.type!==Ve?{minFilter:jn,magFilter:jn}:{};if(B.map!==null)B.map.dispose();B.map=new sn(s.x,s.y,Ct),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();let ut=B.getViewportCount();for(let Ct=0;Ct<ut;Ct++){let zt=B.getViewport(Ct);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),G.viewport(o),B.updateMatrices(Q,Ct),i=B.getFrustum(),T(I,H,B.camera,Q,this.type)}if(B.isPointLightShadow!==!0&&this.type===Ve)C(B,H);B.needsUpdate=!1}p=this.type,f.needsUpdate=!1,t.setRenderTarget(S,v,R)};function C(w,I){let H=e.update(x);if(d.defines.VSM_SAMPLES!==w.blurSamples)d.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new sn(s.x,s.y);d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(I,null,H,d,x,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(I,null,H,g,x,null)}function M(w,I,H,S){let v=null,R=H.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)v=R;else if(v=H.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let G=v.uuid,X=I.uuid,k=c[G];if(k===void 0)k={},c[G]=k;let J=k[X];if(J===void 0)J=v.clone(),k[X]=J,I.addEventListener("dispose",U);v=J}if(v.visible=I.visible,v.wireframe=I.wireframe,S===Ve)v.side=I.shadowSide!==null?I.shadowSide:I.side;else v.side=I.shadowSide!==null?I.shadowSide:u[I.side];if(v.alphaMap=I.alphaMap,v.alphaTest=I.alphaToCoverage===!0?0.5:I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,H.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let G=t.properties.get(v);G.light=H}return v}function T(w,I,H,S,v){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&v===Ve)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld);let X=e.update(w),k=w.material;if(Array.isArray(k)){let J=X.groups;for(let V=0,Q=J.length;V<Q;V++){let B=J[V],at=k[B.materialIndex];if(at&&at.visible){let ut=M(w,at,S,v);w.onBeforeShadow(t,w,I,H,X,ut,B),t.renderBufferDirect(H,null,X,ut,w,B),w.onAfterShadow(t,w,I,H,X,ut,B)}}}else if(k.visible){let J=M(w,k,S,v);w.onBeforeShadow(t,w,I,H,X,J,null),t.renderBufferDirect(H,null,X,J,w,null),w.onAfterShadow(t,w,I,H,X,J,null)}}}let G=w.children;for(let X=0,k=G.length;X<k;X++)T(G[X],I,H,S,v)}function U(w){w.target.removeEventListener("dispose",U);for(let H in c){let S=c[H],v=w.target.uuid;if(v in S)S[v].dispose(),delete S[v]}}}var qf={[ts]:es,[ns]:rs,[is]:as,[_i]:ss,[es]:ts,[rs]:ns,[as]:is,[ss]:_i};function Yf(t,e){function n(){let A=!1,ot=new se,it=null,pt=new se(0,0,0,0);return{setMask:function(K){if(it!==K&&!A)t.colorMask(K,K,K,K),it=K},setLocked:function(K){A=K},setClear:function(K,Y,gt,Dt,Jt){if(Jt===!0)K*=Dt,Y*=Dt,gt*=Dt;if(ot.set(K,Y,gt,Dt),pt.equals(ot)===!1)t.clearColor(K,Y,gt,Dt),pt.copy(ot)},reset:function(){A=!1,it=null,pt.set(-1,0,0,0)}}}function i(){let A=!1,ot=!1,it=null,pt=null,K=null;return{setReversed:function(Y){if(ot!==Y){let gt=e.get("EXT_clip_control");if(Y)gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT);else gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT);ot=Y;let Dt=K;K=null,this.setClear(Dt)}},getReversed:function(){return ot},setTest:function(Y){if(Y)nt(t.DEPTH_TEST);else vt(t.DEPTH_TEST)},setMask:function(Y){if(it!==Y&&!A)t.depthMask(Y),it=Y},setFunc:function(Y){if(ot)Y=qf[Y];if(pt!==Y){switch(Y){case ts:t.depthFunc(t.NEVER);break;case es:t.depthFunc(t.ALWAYS);break;case ns:t.depthFunc(t.LESS);break;case _i:t.depthFunc(t.LEQUAL);break;case is:t.depthFunc(t.EQUAL);break;case ss:t.depthFunc(t.GEQUAL);break;case rs:t.depthFunc(t.GREATER);break;case as:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pt=Y}},setLocked:function(Y){A=Y},setClear:function(Y){if(K!==Y){if(ot)Y=1-Y;t.clearDepth(Y),K=Y}},reset:function(){A=!1,it=null,pt=null,K=null,ot=!1}}}function s(){let A=!1,ot=null,it=null,pt=null,K=null,Y=null,gt=null,Dt=null,Jt=null;return{setTest:function(Yt){if(!A)if(Yt)nt(t.STENCIL_TEST);else vt(t.STENCIL_TEST)},setMask:function(Yt){if(ot!==Yt&&!A)t.stencilMask(Yt),ot=Yt},setFunc:function(Yt,ke,He){if(it!==Yt||pt!==ke||K!==He)t.stencilFunc(Yt,ke,He),it=Yt,pt=ke,K=He},setOp:function(Yt,ke,He){if(Y!==Yt||gt!==ke||Dt!==He)t.stencilOp(Yt,ke,He),Y=Yt,gt=ke,Dt=He},setLocked:function(Yt){A=Yt},setClear:function(Yt){if(Jt!==Yt)t.clearStencil(Yt),Jt=Yt},reset:function(){A=!1,ot=null,it=null,pt=null,K=null,Y=null,gt=null,Dt=null,Jt=null}}}let r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,g=[],y=null,x=!1,f=null,p=null,C=null,M=null,T=null,U=null,w=null,I=new Wt(0,0,0),H=0,S=!1,v=null,R=null,G=null,X=null,k=null,J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,B=t.getParameter(t.VERSION);if(B.indexOf("WebGL")!==-1)Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=Q>=1;else if(B.indexOf("OpenGL ES")!==-1)Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=Q>=2;let at=null,ut={},Ct=t.getParameter(t.SCISSOR_BOX),zt=t.getParameter(t.VIEWPORT),re=new se().fromArray(Ct),Gt=new se().fromArray(zt);function q(A,ot,it,pt){let K=new Uint8Array(4),Y=t.createTexture();t.bindTexture(A,Y),t.texParameteri(A,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(A,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let gt=0;gt<it;gt++)if(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)t.texImage3D(ot,0,t.RGBA,1,1,pt,0,t.RGBA,t.UNSIGNED_BYTE,K);else t.texImage2D(ot+gt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,K);return Y}let rt={};rt[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),rt[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),rt[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(t.DEPTH_TEST),o.setFunc(_i),_t(!1),te(ir),nt(t.CULL_FACE),Ut(un);function nt(A){if(h[A]!==!0)t.enable(A),h[A]=!0}function vt(A){if(h[A]!==!1)t.disable(A),h[A]=!1}function Pt(A,ot){if(u[A]!==ot){if(t.bindFramebuffer(A,ot),u[A]=ot,A===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=ot;if(A===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=ot;return!0}return!1}function Lt(A,ot){let it=g,pt=!1;if(A){if(it=d.get(ot),it===void 0)it=[],d.set(ot,it);let K=A.textures;if(it.length!==K.length||it[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,gt=K.length;Y<gt;Y++)it[Y]=t.COLOR_ATTACHMENT0+Y;it.length=K.length,pt=!0}}else if(it[0]!==t.BACK)it[0]=t.BACK,pt=!0;if(pt)t.drawBuffers(it)}function ue(A){if(y!==A)return t.useProgram(A),y=A,!0;return!1}let E={[Kn]:t.FUNC_ADD,[no]:t.FUNC_SUBTRACT,[io]:t.FUNC_REVERSE_SUBTRACT};E[so]=t.MIN,E[ro]=t.MAX;let jt={[ao]:t.ZERO,[oo]:t.ONE,[lo]:t.SRC_COLOR,[ho]:t.SRC_ALPHA,[_o]:t.SRC_ALPHA_SATURATE,[mo]:t.DST_COLOR,[fo]:t.DST_ALPHA,[co]:t.ONE_MINUS_SRC_COLOR,[uo]:t.ONE_MINUS_SRC_ALPHA,[go]:t.ONE_MINUS_DST_COLOR,[po]:t.ONE_MINUS_DST_ALPHA,[xo]:t.CONSTANT_COLOR,[vo]:t.ONE_MINUS_CONSTANT_COLOR,[yo]:t.CONSTANT_ALPHA,[Mo]:t.ONE_MINUS_CONSTANT_ALPHA};function Ut(A,ot,it,pt,K,Y,gt,Dt,Jt,Yt){if(A===un){if(x===!0)vt(t.BLEND),x=!1;return}if(x===!1)nt(t.BLEND),x=!0;if(A!==eo){if(A!==f||Yt!==S){if(p!==Kn||T!==Kn)t.blendEquation(t.FUNC_ADD),p=Kn,T=Kn;if(Yt)switch(A){case gi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ji:t.blendFunc(t.ONE,t.ONE);break;case rr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ar:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case gi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ji:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case rr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ar:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}C=null,M=null,U=null,w=null,I.set(0,0,0),H=0,f=A,S=Yt}return}if(K=K||ot,Y=Y||it,gt=gt||pt,ot!==p||K!==T)t.blendEquationSeparate(E[ot],E[K]),p=ot,T=K;if(it!==C||pt!==M||Y!==U||gt!==w)t.blendFuncSeparate(jt[it],jt[pt],jt[Y],jt[gt]),C=it,M=pt,U=Y,w=gt;if(Dt.equals(I)===!1||Jt!==H)t.blendColor(Dt.r,Dt.g,Dt.b,Jt),I.copy(Dt),H=Jt;f=A,S=!1}function It(A,ot){A.side===We?vt(t.CULL_FACE):nt(t.CULL_FACE);let it=A.side===Ce;if(ot)it=!it;_t(it),A.blending===gi&&A.transparent===!1?Ut(un):Ut(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),r.setMask(A.colorWrite);let pt=A.stencilWrite;if(a.setTest(pt),pt)a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass);Tt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?nt(t.SAMPLE_ALPHA_TO_COVERAGE):vt(t.SAMPLE_ALPHA_TO_COVERAGE)}function _t(A){if(v!==A){if(A)t.frontFace(t.CW);else t.frontFace(t.CCW);v=A}}function te(A){if(A!==Qa){if(nt(t.CULL_FACE),A!==R)if(A===ir)t.cullFace(t.BACK);else if(A===ja)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else vt(t.CULL_FACE);R=A}function St(A){if(A!==G){if(V)t.lineWidth(A);G=A}}function Tt(A,ot,it){if(A){if(nt(t.POLYGON_OFFSET_FILL),X!==ot||k!==it)t.polygonOffset(ot,it),X=ot,k=it}else vt(t.POLYGON_OFFSET_FILL)}function pe(A){if(A)nt(t.SCISSOR_TEST);else vt(t.SCISSOR_TEST)}function de(A){if(A===void 0)A=t.TEXTURE0+J-1;if(at!==A)t.activeTexture(A),at=A}function ae(A,ot,it){if(it===void 0)if(at===null)it=t.TEXTURE0+J-1;else it=at;let pt=ut[it];if(pt===void 0)pt={type:void 0,texture:void 0},ut[it]=pt;if(pt.type!==A||pt.texture!==ot){if(at!==it)t.activeTexture(it),at=it;t.bindTexture(A,ot||rt[A]),pt.type=A,pt.texture=ot}}function b(){let A=ut[at];if(A!==void 0&&A.type!==void 0)t.bindTexture(A.type,null),A.type=void 0,A.texture=void 0}function m(){try{t.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{t.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{t.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function z(){try{t.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ft(){try{t.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function et(){try{t.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xt(){try{t.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function wt(){try{t.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function tt(){try{t.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(A){if(re.equals(A)===!1)t.scissor(A.x,A.y,A.z,A.w),re.copy(A)}function yt(A){if(Gt.equals(A)===!1)t.viewport(A.x,A.y,A.z,A.w),Gt.copy(A)}function Mt(A,ot){let it=c.get(ot);if(it===void 0)it=new WeakMap,c.set(ot,it);let pt=it.get(A);if(pt===void 0)pt=t.getUniformBlockIndex(ot,A.name),it.set(A,pt)}function ht(A,ot){let pt=c.get(ot).get(A);if(l.get(ot)!==pt)t.uniformBlockBinding(ot,pt,A.__bindingPointIndex),l.set(ot,pt)}function Ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},at=null,ut={},u={},d=new WeakMap,g=[],y=null,x=!1,f=null,p=null,C=null,M=null,T=null,U=null,w=null,I=new Wt(0,0,0),H=0,S=!1,v=null,R=null,G=null,X=null,k=null,re.set(0,0,t.canvas.width,t.canvas.height),Gt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:vt,bindFramebuffer:Pt,drawBuffers:Lt,useProgram:ue,setBlending:Ut,setMaterial:It,setFlipSided:_t,setCullFace:te,setLineWidth:St,setPolygonOffset:Tt,setScissorTest:pe,activeTexture:de,bindTexture:ae,unbindTexture:b,compressedTexImage2D:m,compressedTexImage3D:D,texImage2D:wt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:ht,texStorage2D:et,texStorage3D:xt,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:ft,scissor:ct,viewport:yt,reset:Ot}}function Zf(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function y(b,m){return g?new OffscreenCanvas(b,m):mi("canvas")}function x(b,m,D){let W=1,Z=ae(b);if(Z.width>D||Z.height>D)W=D/Math.max(Z.width,Z.height);if(W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let z=Math.floor(W*Z.width),ft=Math.floor(W*Z.height);if(u===void 0)u=y(z,ft);let et=m?y(z,ft):u;return et.width=z,et.height=ft,et.getContext("2d").drawImage(b,0,0,z,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+ft+")."),et}else{if("data"in b)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+").");return b}return b}function f(b){return b.generateMipmaps}function p(b){t.generateMipmap(b)}function C(b){if(b.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function M(b,m,D,W,Z=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let z=m;if(m===t.RED){if(D===t.FLOAT)z=t.R32F;if(D===t.HALF_FLOAT)z=t.R16F;if(D===t.UNSIGNED_BYTE)z=t.R8}if(m===t.RED_INTEGER){if(D===t.UNSIGNED_BYTE)z=t.R8UI;if(D===t.UNSIGNED_SHORT)z=t.R16UI;if(D===t.UNSIGNED_INT)z=t.R32UI;if(D===t.BYTE)z=t.R8I;if(D===t.SHORT)z=t.R16I;if(D===t.INT)z=t.R32I}if(m===t.RG){if(D===t.FLOAT)z=t.RG32F;if(D===t.HALF_FLOAT)z=t.RG16F;if(D===t.UNSIGNED_BYTE)z=t.RG8}if(m===t.RG_INTEGER){if(D===t.UNSIGNED_BYTE)z=t.RG8UI;if(D===t.UNSIGNED_SHORT)z=t.RG16UI;if(D===t.UNSIGNED_INT)z=t.RG32UI;if(D===t.BYTE)z=t.RG8I;if(D===t.SHORT)z=t.RG16I;if(D===t.INT)z=t.RG32I}if(m===t.RGB_INTEGER){if(D===t.UNSIGNED_BYTE)z=t.RGB8UI;if(D===t.UNSIGNED_SHORT)z=t.RGB16UI;if(D===t.UNSIGNED_INT)z=t.RGB32UI;if(D===t.BYTE)z=t.RGB8I;if(D===t.SHORT)z=t.RGB16I;if(D===t.INT)z=t.RGB32I}if(m===t.RGBA_INTEGER){if(D===t.UNSIGNED_BYTE)z=t.RGBA8UI;if(D===t.UNSIGNED_SHORT)z=t.RGBA16UI;if(D===t.UNSIGNED_INT)z=t.RGBA32UI;if(D===t.BYTE)z=t.RGBA8I;if(D===t.SHORT)z=t.RGBA16I;if(D===t.INT)z=t.RGBA32I}if(m===t.RGB){if(D===t.UNSIGNED_INT_5_9_9_9_REV)z=t.RGB9_E5;if(D===t.UNSIGNED_INT_10F_11F_11F_REV)z=t.R11F_G11F_B10F}if(m===t.RGBA){let ft=Z?Gr:Ht.getTransfer(W);if(D===t.FLOAT)z=t.RGBA32F;if(D===t.HALF_FLOAT)z=t.RGBA16F;if(D===t.UNSIGNED_BYTE)z=ft===Kt?t.SRGB8_ALPHA8:t.RGBA8;if(D===t.UNSIGNED_SHORT_4_4_4_4)z=t.RGBA4;if(D===t.UNSIGNED_SHORT_5_5_5_1)z=t.RGB5_A1}if(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)e.get("EXT_color_buffer_float");return z}function T(b,m){let D;if(b){if(m===null||m===ei||m===ni)D=t.DEPTH24_STENCIL8;else if(m===fn)D=t.DEPTH32F_STENCIL8;else if(m===yi)D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(m===null||m===ei||m===ni)D=t.DEPTH_COMPONENT24;else if(m===fn)D=t.DEPTH_COMPONENT32F;else if(m===yi)D=t.DEPTH_COMPONENT16;return D}function U(b,m){if(f(b)===!0||b.isFramebufferTexture&&b.minFilter!==jn&&b.minFilter!==bn)return Math.log2(Math.max(m.width,m.height))+1;else if(b.mipmaps!==void 0&&b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return m.mipmaps.length;else return 1}function w(b){let m=b.target;if(m.removeEventListener("dispose",w),H(m),m.isVideoTexture)h.delete(m)}function I(b){let m=b.target;m.removeEventListener("dispose",I),v(m)}function H(b){let m=i.get(b);if(m.__webglInit===void 0)return;let D=b.source,W=d.get(D);if(W){let Z=W[m.__cacheKey];if(Z.usedTimes--,Z.usedTimes===0)S(b);if(Object.keys(W).length===0)d.delete(D)}i.remove(b)}function S(b){let m=i.get(b);t.deleteTexture(m.__webglTexture);let D=b.source,W=d.get(D);delete W[m.__cacheKey],o.memory.textures--}function v(b){let m=i.get(b);if(b.depthTexture)b.depthTexture.dispose(),i.remove(b.depthTexture);if(b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let Z=0;Z<m.__webglFramebuffer[W].length;Z++)t.deleteFramebuffer(m.__webglFramebuffer[W][Z]);else t.deleteFramebuffer(m.__webglFramebuffer[W]);if(m.__webglDepthbuffer)t.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)t.deleteFramebuffer(m.__webglFramebuffer[W]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer)t.deleteRenderbuffer(m.__webglDepthbuffer);if(m.__webglMultisampledFramebuffer)t.deleteFramebuffer(m.__webglMultisampledFramebuffer);if(m.__webglColorRenderbuffer){for(let W=0;W<m.__webglColorRenderbuffer.length;W++)if(m.__webglColorRenderbuffer[W])t.deleteRenderbuffer(m.__webglColorRenderbuffer[W])}if(m.__webglDepthRenderbuffer)t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let D=b.textures;for(let W=0,Z=D.length;W<Z;W++){let z=i.get(D[W]);if(z.__webglTexture)t.deleteTexture(z.__webglTexture),o.memory.textures--;i.remove(D[W])}i.remove(b)}let R=0;function G(){R=0}function X(){let b=R;if(b>=s.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures);return R+=1,b}function k(b){let m=[];return m.push(b.wrapS),m.push(b.wrapT),m.push(b.wrapR||0),m.push(b.magFilter),m.push(b.minFilter),m.push(b.anisotropy),m.push(b.internalFormat),m.push(b.format),m.push(b.type),m.push(b.generateMipmaps),m.push(b.premultiplyAlpha),m.push(b.flipY),m.push(b.unpackAlignment),m.push(b.colorSpace),m.join()}function J(b,m){let D=i.get(b);if(b.isVideoTexture)pe(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&D.__version!==b.version){let W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(D,b,m);return}}else if(b.isExternalTexture)D.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+m)}function V(b,m){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){rt(D,b,m);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+m)}function Q(b,m){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){rt(D,b,m);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+m)}function B(b,m){let D=i.get(b);if(b.version>0&&D.__version!==b.version){nt(D,b,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+m)}let at={[Lo]:t.REPEAT,[Do]:t.CLAMP_TO_EDGE,[Uo]:t.MIRRORED_REPEAT},ut={[jn]:t.NEAREST,[No]:t.NEAREST_MIPMAP_NEAREST,[vi]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[cs]:t.LINEAR_MIPMAP_NEAREST,[ti]:t.LINEAR_MIPMAP_LINEAR},Ct={[Yo]:t.NEVER,[jo]:t.ALWAYS,[Zo]:t.LESS,[Vr]:t.LEQUAL,[Jo]:t.EQUAL,[Qo]:t.GEQUAL,[$o]:t.GREATER,[Ko]:t.NOTEQUAL};function zt(b,m){if(m.type===fn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===bn||m.magFilter===cs||m.magFilter===vi||m.magFilter===ti||m.minFilter===bn||m.minFilter===cs||m.minFilter===vi||m.minFilter===ti))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(b,t.TEXTURE_WRAP_S,at[m.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,at[m.wrapT]),b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texParameteri(b,t.TEXTURE_WRAP_R,at[m.wrapR]);if(t.texParameteri(b,t.TEXTURE_MAG_FILTER,ut[m.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ut[m.minFilter]),m.compareFunction)t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ct[m.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===jn)return;if(m.minFilter!==vi&&m.minFilter!==ti)return;if(m.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function re(b,m){let D=!1;if(b.__webglInit===void 0)b.__webglInit=!0,m.addEventListener("dispose",w);let W=m.source,Z=d.get(W);if(Z===void 0)Z={},d.set(W,Z);let z=k(m);if(z!==b.__cacheKey){if(Z[z]===void 0)Z[z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0;Z[z].usedTimes++;let ft=Z[b.__cacheKey];if(ft!==void 0){if(Z[b.__cacheKey].usedTimes--,ft.usedTimes===0)S(m)}b.__cacheKey=z,b.__webglTexture=Z[z].texture}return D}function Gt(b,m,D){return Math.floor(Math.floor(b/D)/m)}function q(b,m,D,W){let z=b.updateRanges;if(z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,m.width,m.height,D,W,m.data);else{z.sort((tt,ct)=>tt.start-ct.start);let ft=0;for(let tt=1;tt<z.length;tt++){let ct=z[ft],yt=z[tt],Mt=ct.start+ct.count,ht=Gt(yt.start,m.width,4),Ot=Gt(ct.start,m.width,4);if(yt.start<=Mt+1&&ht===Ot&&Gt(yt.start+yt.count-1,m.width,4)===ht)ct.count=Math.max(ct.count,yt.start+yt.count-ct.start);else++ft,z[ft]=yt}z.length=ft+1;let et=t.getParameter(t.UNPACK_ROW_LENGTH),xt=t.getParameter(t.UNPACK_SKIP_PIXELS),wt=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,m.width);for(let tt=0,ct=z.length;tt<ct;tt++){let yt=z[tt],Mt=Math.floor(yt.start/4),ht=Math.ceil(yt.count/4),Ot=Mt%m.width,A=Math.floor(Mt/m.width),ot=ht,it=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ot),t.pixelStorei(t.UNPACK_SKIP_ROWS,A),n.texSubImage2D(t.TEXTURE_2D,0,Ot,A,ot,1,D,W,m.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,et),t.pixelStorei(t.UNPACK_SKIP_PIXELS,xt),t.pixelStorei(t.UNPACK_SKIP_ROWS,wt)}}function rt(b,m,D){let W=t.TEXTURE_2D;if(m.isDataArrayTexture||m.isCompressedArrayTexture)W=t.TEXTURE_2D_ARRAY;if(m.isData3DTexture)W=t.TEXTURE_3D;let Z=re(b,m),z=m.source;n.bindTexture(W,b.__webglTexture,t.TEXTURE0+D);let ft=i.get(z);if(z.version!==ft.__version||Z===!0){n.activeTexture(t.TEXTURE0+D);let et=Ht.getPrimaries(Ht.workingColorSpace),xt=m.colorSpace===En?null:Ht.getPrimaries(m.colorSpace),wt=m.colorSpace===En||et===xt?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let tt=x(m.image,!1,s.maxTextureSize);tt=de(m,tt);let ct=r.convert(m.format,m.colorSpace),yt=r.convert(m.type),Mt=M(m.internalFormat,ct,yt,m.colorSpace,m.isVideoTexture);zt(W,m);let ht,Ot=m.mipmaps,A=m.isVideoTexture!==!0,ot=ft.__version===void 0||Z===!0,it=z.dataReady,pt=U(m,tt);if(m.isDepthTexture){if(Mt=T(m.format===Si,m.type),ot)if(A)n.texStorage2D(t.TEXTURE_2D,1,Mt,tt.width,tt.height);else n.texImage2D(t.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ct,yt,null)}else if(m.isDataTexture)if(Ot.length>0){if(A&&ot)n.texStorage2D(t.TEXTURE_2D,pt,Mt,Ot[0].width,Ot[0].height);for(let K=0,Y=Ot.length;K<Y;K++)if(ht=Ot[K],A){if(it)n.texSubImage2D(t.TEXTURE_2D,K,0,0,ht.width,ht.height,ct,yt,ht.data)}else n.texImage2D(t.TEXTURE_2D,K,Mt,ht.width,ht.height,0,ct,yt,ht.data);m.generateMipmaps=!1}else if(A){if(ot)n.texStorage2D(t.TEXTURE_2D,pt,Mt,tt.width,tt.height);if(it)q(m,tt,ct,yt)}else n.texImage2D(t.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ct,yt,tt.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){if(A&&ot)n.texStorage3D(t.TEXTURE_2D_ARRAY,pt,Mt,Ot[0].width,Ot[0].height,tt.depth);for(let K=0,Y=Ot.length;K<Y;K++)if(ht=Ot[K],m.format!==Xe)if(ct!==null)if(A){if(it)if(m.layerUpdates.size>0){let gt=_a(ht.width,ht.height,m.format,m.type);for(let Dt of m.layerUpdates){let Jt=ht.data.subarray(Dt*gt/ht.data.BYTES_PER_ELEMENT,(Dt+1)*gt/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Dt,ht.width,ht.height,1,ct,Jt)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ht.width,ht.height,tt.depth,ct,ht.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Mt,ht.width,ht.height,tt.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A){if(it)n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ht.width,ht.height,tt.depth,ct,yt,ht.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,K,Mt,ht.width,ht.height,tt.depth,0,ct,yt,ht.data)}else{if(A&&ot)n.texStorage2D(t.TEXTURE_2D,pt,Mt,Ot[0].width,Ot[0].height);for(let K=0,Y=Ot.length;K<Y;K++)if(ht=Ot[K],m.format!==Xe)if(ct!==null)if(A){if(it)n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ht.width,ht.height,ct,ht.data)}else n.compressedTexImage2D(t.TEXTURE_2D,K,Mt,ht.width,ht.height,0,ht.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A){if(it)n.texSubImage2D(t.TEXTURE_2D,K,0,0,ht.width,ht.height,ct,yt,ht.data)}else n.texImage2D(t.TEXTURE_2D,K,Mt,ht.width,ht.height,0,ct,yt,ht.data)}else if(m.isDataArrayTexture)if(A){if(ot)n.texStorage3D(t.TEXTURE_2D_ARRAY,pt,Mt,tt.width,tt.height,tt.depth);if(it)if(m.layerUpdates.size>0){let K=_a(tt.width,tt.height,m.format,m.type);for(let Y of m.layerUpdates){let gt=tt.data.subarray(Y*K/tt.data.BYTES_PER_ELEMENT,(Y+1)*K/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,tt.width,tt.height,1,ct,yt,gt)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,yt,tt.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,ct,yt,tt.data);else if(m.isData3DTexture)if(A){if(ot)n.texStorage3D(t.TEXTURE_3D,pt,Mt,tt.width,tt.height,tt.depth);if(it)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,yt,tt.data)}else n.texImage3D(t.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,ct,yt,tt.data);else if(m.isFramebufferTexture){if(ot)if(A)n.texStorage2D(t.TEXTURE_2D,pt,Mt,tt.width,tt.height);else{let K=tt.width,Y=tt.height;for(let gt=0;gt<pt;gt++)n.texImage2D(t.TEXTURE_2D,gt,Mt,K,Y,0,ct,yt,null),K>>=1,Y>>=1}}else if(Ot.length>0){if(A&&ot){let K=ae(Ot[0]);n.texStorage2D(t.TEXTURE_2D,pt,Mt,K.width,K.height)}for(let K=0,Y=Ot.length;K<Y;K++)if(ht=Ot[K],A){if(it)n.texSubImage2D(t.TEXTURE_2D,K,0,0,ct,yt,ht)}else n.texImage2D(t.TEXTURE_2D,K,Mt,ct,yt,ht);m.generateMipmaps=!1}else if(A){if(ot){let K=ae(tt);n.texStorage2D(t.TEXTURE_2D,pt,Mt,K.width,K.height)}if(it)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ct,yt,tt)}else n.texImage2D(t.TEXTURE_2D,0,Mt,ct,yt,tt);if(f(m))p(W);if(ft.__version=z.version,m.onUpdate)m.onUpdate(m)}b.__version=m.version}function nt(b,m,D){if(m.image.length!==6)return;let W=re(b,m),Z=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+D);let z=i.get(Z);if(Z.version!==z.__version||W===!0){n.activeTexture(t.TEXTURE0+D);let ft=Ht.getPrimaries(Ht.workingColorSpace),et=m.colorSpace===En?null:Ht.getPrimaries(m.colorSpace),xt=m.colorSpace===En||ft===et?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let wt=m.isCompressedTexture||m.image[0].isCompressedTexture,tt=m.image[0]&&m.image[0].isDataTexture,ct=[];for(let Y=0;Y<6;Y++){if(!wt&&!tt)ct[Y]=x(m.image[Y],!0,s.maxCubemapSize);else ct[Y]=tt?m.image[Y].image:m.image[Y];ct[Y]=de(m,ct[Y])}let yt=ct[0],Mt=r.convert(m.format,m.colorSpace),ht=r.convert(m.type),Ot=M(m.internalFormat,Mt,ht,m.colorSpace),A=m.isVideoTexture!==!0,ot=z.__version===void 0||W===!0,it=Z.dataReady,pt=U(m,yt);zt(t.TEXTURE_CUBE_MAP,m);let K;if(wt){if(A&&ot)n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,Ot,yt.width,yt.height);for(let Y=0;Y<6;Y++){K=ct[Y].mipmaps;for(let gt=0;gt<K.length;gt++){let Dt=K[gt];if(m.format!==Xe)if(Mt!==null)if(A){if(it)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,0,0,Dt.width,Dt.height,Mt,Dt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,Ot,Dt.width,Dt.height,0,Dt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(A){if(it)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,0,0,Dt.width,Dt.height,Mt,ht,Dt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,Ot,Dt.width,Dt.height,0,Mt,ht,Dt.data)}}}else{if(K=m.mipmaps,A&&ot){if(K.length>0)pt++;let Y=ae(ct[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,Ot,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){if(A){if(it)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ct[Y].width,ct[Y].height,Mt,ht,ct[Y].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ot,ct[Y].width,ct[Y].height,0,Mt,ht,ct[Y].data);for(let gt=0;gt<K.length;gt++){let Jt=K[gt].image[Y].image;if(A){if(it)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,0,0,Jt.width,Jt.height,Mt,ht,Jt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,Ot,Jt.width,Jt.height,0,Mt,ht,Jt.data)}}else{if(A){if(it)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Mt,ht,ct[Y])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ot,Mt,ht,ct[Y]);for(let gt=0;gt<K.length;gt++){let Dt=K[gt];if(A){if(it)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,0,0,Mt,ht,Dt.image[Y])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,Ot,Mt,ht,Dt.image[Y])}}}if(f(m))p(t.TEXTURE_CUBE_MAP);if(z.__version=Z.version,m.onUpdate)m.onUpdate(m)}b.__version=m.version}function vt(b,m,D,W,Z,z){let ft=r.convert(D.format,D.colorSpace),et=r.convert(D.type),xt=M(D.internalFormat,ft,et,D.colorSpace),wt=i.get(m),tt=i.get(D);if(tt.__renderTarget=m,!wt.__hasExternalTextures){let ct=Math.max(1,m.width>>z),yt=Math.max(1,m.height>>z);if(Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY)n.texImage3D(Z,z,xt,ct,yt,m.depth,0,ft,et,null);else n.texImage2D(Z,z,xt,ct,yt,0,ft,et,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,b),Tt(m))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Z,tt.__webglTexture,0,St(m));else if(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,W,Z,tt.__webglTexture,z);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pt(b,m,D){if(t.bindRenderbuffer(t.RENDERBUFFER,b),m.depthBuffer){let W=m.depthTexture,Z=W&&W.isDepthTexture?W.type:null,z=T(m.stencilBuffer,Z),ft=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,et=St(m);if(Tt(m))a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,z,m.width,m.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,et,z,m.width,m.height);else t.renderbufferStorage(t.RENDERBUFFER,z,m.width,m.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ft,t.RENDERBUFFER,b)}else{let W=m.textures;for(let Z=0;Z<W.length;Z++){let z=W[Z],ft=r.convert(z.format,z.colorSpace),et=r.convert(z.type),xt=M(z.internalFormat,ft,et,z.colorSpace),wt=St(m);if(D&&Tt(m)===!1)t.renderbufferStorageMultisample(t.RENDERBUFFER,wt,xt,m.width,m.height);else if(Tt(m))a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,wt,xt,m.width,m.height);else t.renderbufferStorage(t.RENDERBUFFER,xt,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Lt(b,m){if(m&&m.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(m.depthTexture);if(W.__renderTarget=m,!W.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0;J(m.depthTexture,0);let Z=W.__webglTexture,z=St(m);if(m.depthTexture.format===hs)if(Tt(m))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,z);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(m.depthTexture.format===Si)if(Tt(m))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,z);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw Error("Unknown depthTexture format")}function ue(b){let m=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==b.depthTexture){let W=b.depthTexture;if(m.__depthDisposeCallback)m.__depthDisposeCallback();if(W){let Z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),m.__depthDisposeCallback=Z}m.__boundDepthTexture=W}if(b.depthTexture&&!m.__autoAllocateDepthBuffer){if(D)throw Error("target.depthTexture not supported in Cube render targets");let W=b.texture.mipmaps;if(W&&W.length>0)Lt(m.__webglFramebuffer[0],b);else Lt(m.__webglFramebuffer,b)}else if(D){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=t.createRenderbuffer(),Pt(m.__webglDepthbuffer[W],b,!1);else{let Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=m.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,z),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,z)}}else{let W=b.texture.mipmaps;if(W&&W.length>0)n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer);if(m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),Pt(m.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,z),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function E(b,m,D){let W=i.get(b);if(m!==void 0)vt(W.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(D!==void 0)ue(b)}function jt(b){let m=b.texture,D=i.get(b),W=i.get(m);b.addEventListener("dispose",I);let Z=b.textures,z=b.isWebGLCubeRenderTarget===!0,ft=Z.length>1;if(!ft){if(W.__webglTexture===void 0)W.__webglTexture=t.createTexture();W.__version=m.version,o.memory.textures++}if(z){D.__webglFramebuffer=[];for(let et=0;et<6;et++)if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer[et]=[];for(let xt=0;xt<m.mipmaps.length;xt++)D.__webglFramebuffer[et][xt]=t.createFramebuffer()}else D.__webglFramebuffer[et]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer=[];for(let et=0;et<m.mipmaps.length;et++)D.__webglFramebuffer[et]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(ft)for(let et=0,xt=Z.length;et<xt;et++){let wt=i.get(Z[et]);if(wt.__webglTexture===void 0)wt.__webglTexture=t.createTexture(),o.memory.textures++}if(b.samples>0&&Tt(b)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let et=0;et<Z.length;et++){let xt=Z[et];D.__webglColorRenderbuffer[et]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[et]);let wt=r.convert(xt.format,xt.colorSpace),tt=r.convert(xt.type),ct=M(xt.internalFormat,wt,tt,xt.colorSpace,b.isXRRenderTarget===!0),yt=St(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,yt,ct,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.RENDERBUFFER,D.__webglColorRenderbuffer[et])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer)D.__webglDepthRenderbuffer=t.createRenderbuffer(),Pt(D.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(z){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),zt(t.TEXTURE_CUBE_MAP,m);for(let et=0;et<6;et++)if(m.mipmaps&&m.mipmaps.length>0)for(let xt=0;xt<m.mipmaps.length;xt++)vt(D.__webglFramebuffer[et][xt],b,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt);else vt(D.__webglFramebuffer[et],b,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);if(f(m))p(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ft){for(let et=0,xt=Z.length;et<xt;et++){let wt=Z[et],tt=i.get(wt),ct=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)ct=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(ct,tt.__webglTexture),zt(ct,wt),vt(D.__webglFramebuffer,b,wt,t.COLOR_ATTACHMENT0+et,ct,0),f(wt))p(ct)}n.unbindTexture()}else{let et=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)et=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(et,W.__webglTexture),zt(et,m),m.mipmaps&&m.mipmaps.length>0)for(let xt=0;xt<m.mipmaps.length;xt++)vt(D.__webglFramebuffer[xt],b,m,t.COLOR_ATTACHMENT0,et,xt);else vt(D.__webglFramebuffer,b,m,t.COLOR_ATTACHMENT0,et,0);if(f(m))p(et);n.unbindTexture()}if(b.depthBuffer)ue(b)}function Ut(b){let m=b.textures;for(let D=0,W=m.length;D<W;D++){let Z=m[D];if(f(Z)){let z=C(b),ft=i.get(Z).__webglTexture;n.bindTexture(z,ft),p(z),n.unbindTexture()}}}let It=[],_t=[];function te(b){if(b.samples>0){if(Tt(b)===!1){let{textures:m,width:D,height:W}=b,Z=t.COLOR_BUFFER_BIT,z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ft=i.get(b),et=m.length>1;if(et)for(let wt=0;wt<m.length;wt++)n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+wt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+wt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let xt=b.texture.mipmaps;if(xt&&xt.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let wt=0;wt<m.length;wt++){if(b.resolveDepthBuffer){if(b.depthBuffer)Z|=t.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)Z|=t.STENCIL_BUFFER_BIT}if(et){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ft.__webglColorRenderbuffer[wt]);let tt=i.get(m[wt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,tt,0)}if(t.blitFramebuffer(0,0,D,W,0,0,D,W,Z,t.NEAREST),l===!0){if(It.length=0,_t.length=0,It.push(t.COLOR_ATTACHMENT0+wt),b.depthBuffer&&b.resolveDepthBuffer===!1)It.push(z),_t.push(z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_t);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,It)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),et)for(let wt=0;wt<m.length;wt++){n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+wt,t.RENDERBUFFER,ft.__webglColorRenderbuffer[wt]);let tt=i.get(m[wt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+wt,t.TEXTURE_2D,tt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let m=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function St(b){return Math.min(s.maxSamples,b.samples)}function Tt(b){let m=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function pe(b){let m=o.render.frame;if(h.get(b)!==m)h.set(b,m),b.update()}function de(b,m){let{colorSpace:D,format:W,type:Z}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return m;if(D!==bi&&D!==En)if(Ht.getTransfer(D)===Kt){if(W!==Xe||Z!==dn)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",D);return m}function ae(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=E,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Tt}function Jf(t,e){function n(i,s=En){let r,o=Ht.getTransfer(s);if(i===dn)return t.UNSIGNED_BYTE;if(i===lr)return t.UNSIGNED_SHORT_4_4_4_4;if(i===cr)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Bo)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zo)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fo)return t.BYTE;if(i===Oo)return t.SHORT;if(i===yi)return t.UNSIGNED_SHORT;if(i===or)return t.INT;if(i===ei)return t.UNSIGNED_INT;if(i===fn)return t.FLOAT;if(i===Mi)return t.HALF_FLOAT;if(i===ko)return t.ALPHA;if(i===Ho)return t.RGB;if(i===Xe)return t.RGBA;if(i===hs)return t.DEPTH_COMPONENT;if(i===Si)return t.DEPTH_STENCIL;if(i===Go)return t.RED;if(i===hr)return t.RED_INTEGER;if(i===Vo)return t.RG;if(i===ur)return t.RG_INTEGER;if(i===dr)return t.RGBA_INTEGER;if(i===us||i===ds||i===fs||i===ps)if(o===Kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fr||i===pr||i===mr||i===gr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_r||i===xr||i===vr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_r||i===xr)return o===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yr||i===Mr||i===Sr||i===br||i===Er||i===Tr||i===Ar||i===wr||i===Rr||i===Cr||i===Ir||i===Pr||i===Lr||i===Dr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===br)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Er)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ar)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ir)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dr)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ur||i===Nr||i===Fr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ur)return o===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Or||i===Br||i===zr||i===kr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Or)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Br)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===ni)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var $f=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zl{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ts(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:$f,fragmentShader:Kf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new wi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kl extends pn{constructor(t,e){super();let n=this,i=null,s=1,r=null,o="local-floor",a=1,l=null,c=null,h=null,u=null,d=null,g=null,y=typeof XRWebGLBinding<"u",x=new zl,f={},p=e.getContextAttributes(),C=null,M=null,T=[],U=[],w=new Xt,I=null,H=new be;H.viewport=new se;let S=new be;S.viewport=new se;let v=[H,S],R=new pa,G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=T[q];if(rt===void 0)rt=new Ai,T[q]=rt;return rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=T[q];if(rt===void 0)rt=new Ai,T[q]=rt;return rt.getGripSpace()},this.getHand=function(q){let rt=T[q];if(rt===void 0)rt=new Ai,T[q]=rt;return rt.getHandSpace()};function k(q){let rt=U.indexOf(q.inputSource);if(rt===-1)return;let nt=T[rt];if(nt!==void 0)nt.update(q.inputSource,q.frame,l||r),nt.dispatchEvent({type:q.type,data:q.inputSource})}function J(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",V);for(let q=0;q<T.length;q++){let rt=U[q];if(rt===null)continue;U[q]=null,T[q].disconnect(rt)}G=null,X=null,x.reset();for(let q in f)delete f[q];t.setRenderTarget(C),d=null,u=null,h=null,i=null,M=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){if(s=q,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){if(o=q,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){if(h===null&&y)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(C=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",J),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0)await e.makeXRCompatible();if(I=t.getPixelRatio(),t.getSize(w),!(y&&("createProjectionLayer"in XRWebGLBinding.prototype))){let nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new sn(d.framebufferWidth,d.framebufferHeight,{format:Xe,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let nt=null,vt=null,Pt=null;if(p.depth)Pt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?Si:hs,vt=p.stencil?ni:ei;let Lt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Lt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new sn(u.textureWidth,u.textureHeight,{format:Xe,type:dn,depthTexture:new Es(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await i.requestReferenceSpace(o),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(q){for(let rt=0;rt<q.removed.length;rt++){let nt=q.removed[rt],vt=U.indexOf(nt);if(vt>=0)U[vt]=null,T[vt].disconnect(nt)}for(let rt=0;rt<q.added.length;rt++){let nt=q.added[rt],vt=U.indexOf(nt);if(vt===-1){for(let Lt=0;Lt<T.length;Lt++)if(Lt>=U.length){U.push(nt),vt=Lt;break}else if(U[Lt]===null){U[Lt]=nt,vt=Lt;break}if(vt===-1)break}let Pt=T[vt];if(Pt)Pt.connect(nt)}}let Q=new N,B=new N;function at(q,rt,nt){Q.setFromMatrixPosition(rt.matrixWorld),B.setFromMatrixPosition(nt.matrixWorld);let vt=Q.distanceTo(B),Pt=rt.projectionMatrix.elements,Lt=nt.projectionMatrix.elements,ue=Pt[14]/(Pt[10]-1),E=Pt[14]/(Pt[10]+1),jt=(Pt[9]+1)/Pt[5],Ut=(Pt[9]-1)/Pt[5],It=(Pt[8]-1)/Pt[0],_t=(Lt[8]+1)/Lt[0],te=ue*It,St=ue*_t,Tt=vt/(-It+_t),pe=Tt*-It;if(rt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pe),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pt[10]===-1)q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let de=ue+Tt,ae=E+Tt,b=te-pe,m=St+(vt-pe),D=jt*E/ae*de,W=Ut*E/ae*de;q.projectionMatrix.makePerspective(b,m,D,W,de,ae),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ut(q,rt){if(rt===null)q.matrixWorld.copy(q.matrix);else q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix);q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let{near:rt,far:nt}=q;if(x.texture!==null){if(x.depthNear>0)rt=x.depthNear;if(x.depthFar>0)nt=x.depthFar}if(R.near=S.near=H.near=rt,R.far=S.far=H.far=nt,G!==R.near||X!==R.far)i.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,X=R.far;R.layers.mask=q.layers.mask|6,H.layers.mask=R.layers.mask&3,S.layers.mask=R.layers.mask&5;let vt=q.parent,Pt=R.cameras;ut(R,vt);for(let Lt=0;Lt<Pt.length;Lt++)ut(Pt[Lt],vt);if(Pt.length===2)at(R,H,S);else R.projectionMatrix.copy(H.projectionMatrix);Ct(q,R,vt)};function Ct(q,rt,nt){if(nt===null)q.matrix.copy(rt.matrixWorld);else q.matrix.copy(nt.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld);if(q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera)q.fov=Qi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1}this.getCamera=function(){return R},this.getFoveation=function(){if(u===null&&d===null)return;return a},this.setFoveation=function(q){if(a=q,u!==null)u.fixedFoveation=q;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=q},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(R)},this.getCameraTexture=function(q){return f[q]};let zt=null;function re(q,rt){if(c=rt.getViewerPose(l||r),g=rt,c!==null){let nt=c.views;if(d!==null)t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M);let vt=!1;if(nt.length!==R.cameras.length)R.cameras.length=0,vt=!0;for(let E=0;E<nt.length;E++){let jt=nt[E],Ut=null;if(d!==null)Ut=d.getViewport(jt);else{let _t=h.getViewSubImage(u,jt);if(Ut=_t.viewport,E===0)t.setRenderTargetTextures(M,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(M)}let It=v[E];if(It===void 0)It=new be,It.layers.enable(E),It.viewport=new se,v[E]=It;if(It.matrix.fromArray(jt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(jt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),E===0)R.matrix.copy(It.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);if(vt===!0)R.cameras.push(It)}let Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let E=h.getDepthInformation(nt[0]);if(E&&E.isValid&&E.texture)x.init(E,i.renderState)}if(Pt&&Pt.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let E=0;E<nt.length;E++){let jt=nt[E].camera;if(jt){let Ut=f[jt];if(!Ut)Ut=new Ts,f[jt]=Ut;let It=h.getCameraImage(jt);Ut.sourceTexture=It}}}}for(let nt=0;nt<T.length;nt++){let vt=U[nt],Pt=T[nt];if(vt!==null&&Pt!==void 0)Pt.update(vt,rt,l||r)}if(zt)zt(q,rt);if(rt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:rt});g=null}let Gt=new Cl;Gt.setAnimationLoop(re),this.setAnimationLoop=function(q){zt=q},this.dispose=function(){}}}var Pn=new Ge,Qf=new oe;function jf(t,e){function n(f,p){if(f.matrixAutoUpdate===!0)f.updateMatrix();p.value.copy(f.matrix)}function i(f,p){if(p.color.getRGB(f.fogColor.value,$r(t)),p.isFog)f.fogNear.value=p.near,f.fogFar.value=p.far;else if(p.isFogExp2)f.fogDensity.value=p.density}function s(f,p,C,M,T){if(p.isMeshBasicMaterial)r(f,p);else if(p.isMeshLambertMaterial)r(f,p);else if(p.isMeshToonMaterial)r(f,p),u(f,p);else if(p.isMeshPhongMaterial)r(f,p),h(f,p);else if(p.isMeshStandardMaterial){if(r(f,p),d(f,p),p.isMeshPhysicalMaterial)g(f,p,T)}else if(p.isMeshMatcapMaterial)r(f,p),y(f,p);else if(p.isMeshDepthMaterial)r(f,p);else if(p.isMeshDistanceMaterial)r(f,p),x(f,p);else if(p.isMeshNormalMaterial)r(f,p);else if(p.isLineBasicMaterial){if(o(f,p),p.isLineDashedMaterial)a(f,p)}else if(p.isPointsMaterial)l(f,p,C,M);else if(p.isSpriteMaterial)c(f,p);else if(p.isShadowMaterial)f.color.value.copy(p.color),f.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(f,p){if(f.opacity.value=p.opacity,p.color)f.diffuse.value.copy(p.color);if(p.emissive)f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)f.map.value=p.map,n(p.map,f.mapTransform);if(p.alphaMap)f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform);if(p.bumpMap){if(f.bumpMap.value=p.bumpMap,n(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ce)f.bumpScale.value*=-1}if(p.normalMap){if(f.normalMap.value=p.normalMap,n(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ce)f.normalScale.value.negate()}if(p.displacementMap)f.displacementMap.value=p.displacementMap,n(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias;if(p.emissiveMap)f.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,f.emissiveMapTransform);if(p.specularMap)f.specularMap.value=p.specularMap,n(p.specularMap,f.specularMapTransform);if(p.alphaTest>0)f.alphaTest.value=p.alphaTest;let C=e.get(p),{envMap:M,envMapRotation:T}=C;if(M){if(f.envMap.value=M,Pn.copy(T),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1)Pn.y*=-1,Pn.z*=-1;f.envMapRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(Pn)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio}if(p.lightMap)f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,f.lightMapTransform);if(p.aoMap)f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,f.aoMapTransform)}function o(f,p){if(f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map)f.map.value=p.map,n(p.map,f.mapTransform)}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,C,M){if(f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*C,f.scale.value=M*0.5,p.map)f.map.value=p.map,n(p.map,f.uvTransform);if(p.alphaMap)f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform);if(p.alphaTest>0)f.alphaTest.value=p.alphaTest}function c(f,p){if(f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map)f.map.value=p.map,n(p.map,f.mapTransform);if(p.alphaMap)f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform);if(p.alphaTest>0)f.alphaTest.value=p.alphaTest}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,0.0001)}function u(f,p){if(p.gradientMap)f.gradientMap.value=p.gradientMap}function d(f,p){if(f.metalness.value=p.metalness,p.metalnessMap)f.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,f.metalnessMapTransform);if(f.roughness.value=p.roughness,p.roughnessMap)f.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,f.roughnessMapTransform);if(p.envMap)f.envMapIntensity.value=p.envMapIntensity}function g(f,p,C){if(f.ior.value=p.ior,p.sheen>0){if(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)f.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,f.sheenColorMapTransform);if(p.sheenRoughnessMap)f.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,f.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)f.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,f.clearcoatMapTransform);if(p.clearcoatRoughnessMap)f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(f.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce)f.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)f.dispersion.value=p.dispersion;if(p.iridescence>0){if(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap)f.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,f.iridescenceMapTransform);if(p.iridescenceThicknessMap)f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform)}if(p.transmission>0){if(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=C.texture,f.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap)f.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,f.transmissionMapTransform);if(f.thickness.value=p.thickness,p.thicknessMap)f.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,f.thicknessMapTransform);f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)f.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,f.anisotropyMapTransform)}if(f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap)f.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,f.specularColorMapTransform);if(p.specularIntensityMap)f.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,f.specularIntensityMapTransform)}function y(f,p){if(p.matcap)f.matcap.value=p.matcap}function x(f,p){let C=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(C.matrixWorld),f.nearDistance.value=C.shadow.camera.near,f.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tp(t,e,n,i){let s={},r={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,M){let T=M.program;i.uniformBlockBinding(C,T)}function c(C,M){let T=s[C.id];if(T===void 0)y(C),T=h(C),s[C.id]=T,C.addEventListener("dispose",f);let U=M.program;i.updateUBOMapping(C,U);let w=e.render.frame;if(r[C.id]!==w)d(C),r[C.id]=w}function h(C){let M=u();C.__bindingPointIndex=M;let T=t.createBuffer(),{__size:U,usage:w}=C;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,U,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,T),T}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let M=s[C.id],{uniforms:T,__cache:U}=C;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let w=0,I=T.length;w<I;w++){let H=Array.isArray(T[w])?T[w]:[T[w]];for(let S=0,v=H.length;S<v;S++){let R=H[S];if(g(R,w,S,U)===!0){let G=R.__offset,X=Array.isArray(R.value)?R.value:[R.value],k=0;for(let J=0;J<X.length;J++){let V=X[J],Q=x(V);if(typeof V==="number"||typeof V==="boolean")R.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,G+k,R.__data);else if(V.isMatrix3)R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0;else V.toArray(R.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT}t.bufferSubData(t.UNIFORM_BUFFER,G,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(C,M,T,U){let w=C.value,I=M+"_"+T;if(U[I]===void 0){if(typeof w==="number"||typeof w==="boolean")U[I]=w;else U[I]=w.clone();return!0}else{let H=U[I];if(typeof w==="number"||typeof w==="boolean"){if(H!==w)return U[I]=w,!0}else if(H.equals(w)===!1)return H.copy(w),!0}return!1}function y(C){let M=C.uniforms,T=0,U=16;for(let I=0,H=M.length;I<H;I++){let S=Array.isArray(M[I])?M[I]:[M[I]];for(let v=0,R=S.length;v<R;v++){let G=S[v],X=Array.isArray(G.value)?G.value:[G.value];for(let k=0,J=X.length;k<J;k++){let V=X[k],Q=x(V),B=T%U,at=B%Q.boundary,ut=B+at;if(T+=at,ut!==0&&U-ut<Q.storage)T+=U-ut;G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=Q.storage}}}let w=T%U;if(w>0)T+=U-w;return C.__size=T,C.__cache={},this}function x(C){let M={boundary:0,storage:0};if(typeof C==="number"||typeof C==="boolean")M.boundary=4,M.storage=4;else if(C.isVector2)M.boundary=8,M.storage=8;else if(C.isVector3||C.isColor)M.boundary=16,M.storage=12;else if(C.isVector4)M.boundary=16,M.storage=16;else if(C.isMatrix3)M.boundary=48,M.storage=48;else if(C.isMatrix4)M.boundary=64,M.storage=64;else if(C.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C);return M}function f(C){let M=C.target;M.removeEventListener("dispose",f);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let C in s)t.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Hl{constructor(t={}){let{canvas:e=tl(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;let g=new Uint32Array(4),y=new Int32Array(4),x=null,f=null,p=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,T=!1;this._outputColorSpace=Hr;let U=0,w=0,I=null,H=-1,S=null,v=new se,R=new se,G=null,X=new Wt(0),k=0,{width:J,height:V}=e,Q=1,B=null,at=null,ut=new se(0,0,J,V),Ct=new se(0,0,J,V),zt=!1,re=new bs,Gt=!1,q=!1,rt=new oe,nt=new N,vt=new se,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function ue(){return I===null?Q:1}let E=n;function jt(_,P){return e.getContext(_,P)}try{let _={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Ka}`);if(e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",pt,!1),E===null){if(E=jt("webgl2",_),E===null)if(jt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ut,It,_t,te,St,Tt,pe,de,ae,b,m,D,W,Z,z,ft,et,xt,wt,tt,ct,yt,Mt,ht;function Ot(){if(Ut=new _d(E),Ut.init(),yt=new Jf(E,Ut),It=new hd(E,Ut,t,yt),_t=new Yf(E,Ut),It.reversedDepthBuffer&&u)_t.buffers.depth.setReversed(!0);te=new yd(E),St=new Uf,Tt=new Zf(E,Ut,_t,St,It,yt,te),pe=new dd(M),de=new gd(M),ae=new Ac(E),Mt=new ld(E,ae),b=new xd(E,ae,te,Mt),m=new Sd(E,b,ae,te),wt=new Md(E,It,Tt),ft=new ud(St),D=new Df(M,pe,de,Ut,It,Mt,ft),W=new jf(M,St),Z=new Ff,z=new Gf(Ut),xt=new od(M,pe,de,_t,m,d,a),et=new Xf(M,m,It),ht=new tp(E,te,It,_t),tt=new cd(E,Ut,te),ct=new vd(E,Ut,te),te.programs=D.programs,M.capabilities=It,M.extensions=Ut,M.properties=St,M.renderLists=Z,M.shadowMap=et,M.state=_t,M.info=te}Ot();let A=new kl(M,E);this.xr=A,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let _=Ut.get("WEBGL_lose_context");if(_)_.loseContext()},this.forceContextRestore=function(){let _=Ut.get("WEBGL_lose_context");if(_)_.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(_){if(_===void 0)return;Q=_,this.setSize(J,V,!1)},this.getSize=function(_){return _.set(J,V)},this.setSize=function(_,P,F=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(J=_,V=P,e.width=Math.floor(_*Q),e.height=Math.floor(P*Q),F===!0)e.style.width=_+"px",e.style.height=P+"px";this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(J*Q,V*Q).floor()},this.setDrawingBufferSize=function(_,P,F){J=_,V=P,Q=F,e.width=Math.floor(_*F),e.height=Math.floor(P*F),this.setViewport(0,0,_,P)},this.getCurrentViewport=function(_){return _.copy(v)},this.getViewport=function(_){return _.copy(ut)},this.setViewport=function(_,P,F,O){if(_.isVector4)ut.set(_.x,_.y,_.z,_.w);else ut.set(_,P,F,O);_t.viewport(v.copy(ut).multiplyScalar(Q).round())},this.getScissor=function(_){return _.copy(Ct)},this.setScissor=function(_,P,F,O){if(_.isVector4)Ct.set(_.x,_.y,_.z,_.w);else Ct.set(_,P,F,O);_t.scissor(R.copy(Ct).multiplyScalar(Q).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(_){_t.setScissorTest(zt=_)},this.setOpaqueSort=function(_){B=_},this.setTransparentSort=function(_){at=_},this.getClearColor=function(_){return _.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(_=!0,P=!0,F=!0){let O=0;if(_){let L=!1;if(I!==null){let j=I.texture.format;L=j===dr||j===ur||j===hr}if(L){let j=I.texture.type,lt=j===dn||j===ei||j===yi||j===ni||j===lr||j===cr,mt=xt.getClearColor(),dt=xt.getClearAlpha(),{r:At,g:Rt,b:bt}=mt;if(lt)g[0]=At,g[1]=Rt,g[2]=bt,g[3]=dt,E.clearBufferuiv(E.COLOR,0,g);else y[0]=At,y[1]=Rt,y[2]=bt,y[3]=dt,E.clearBufferiv(E.COLOR,0,y)}else O|=E.COLOR_BUFFER_BIT}if(P)O|=E.DEPTH_BUFFER_BIT;if(F)O|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);E.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),Z.dispose(),z.dispose(),St.dispose(),pe.dispose(),de.dispose(),m.dispose(),Mt.dispose(),ht.dispose(),D.dispose(),A.dispose(),A.removeEventListener("sessionstart",ke),A.removeEventListener("sessionend",He),gn.stop()};function ot(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let _=te.autoReset,P=et.enabled,F=et.autoUpdate,O=et.needsUpdate,L=et.type;Ot(),te.autoReset=_,et.enabled=P,et.autoUpdate=F,et.needsUpdate=O,et.type=L}function pt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function K(_){let P=_.target;P.removeEventListener("dispose",K),Y(P)}function Y(_){gt(_),St.remove(_)}function gt(_){let P=St.get(_).programs;if(P!==void 0){if(P.forEach(function(F){D.releaseProgram(F)}),_.isShaderMaterial)D.releaseShaderCache(_)}}this.renderBufferDirect=function(_,P,F,O,L,j){if(P===null)P=Pt;let lt=L.isMesh&&L.matrixWorld.determinant()<0,mt=Gl(_,P,F,O,L);_t.setMaterial(O,lt);let dt=F.index,At=1;if(O.wireframe===!0){if(dt=b.getWireframeAttribute(F),dt===void 0)return;At=2}let Rt=F.drawRange,bt=F.attributes.position,Bt=Rt.start*At,Zt=(Rt.start+Rt.count)*At;if(j!==null)Bt=Math.max(Bt,j.start*At),Zt=Math.min(Zt,(j.start+j.count)*At);if(dt!==null)Bt=Math.max(Bt,0),Zt=Math.min(Zt,dt.count);else if(bt!==void 0&&bt!==null)Bt=Math.max(Bt,0),Zt=Math.min(Zt,bt.count);let ie=Zt-Bt;if(ie<0||ie===1/0)return;Mt.setup(L,O,mt,F,dt);let Qt,$t=tt;if(dt!==null)Qt=ae.get(dt),$t=ct,$t.setIndex(Qt);if(L.isMesh)if(O.wireframe===!0)_t.setLineWidth(O.wireframeLinewidth*ue()),$t.setMode(E.LINES);else $t.setMode(E.TRIANGLES);else if(L.isLine){let Et=O.linewidth;if(Et===void 0)Et=1;if(_t.setLineWidth(Et*ue()),L.isLineSegments)$t.setMode(E.LINES);else if(L.isLineLoop)$t.setMode(E.LINE_LOOP);else $t.setMode(E.LINE_STRIP)}else if(L.isPoints)$t.setMode(E.POINTS);else if(L.isSprite)$t.setMode(E.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Jn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(!Ut.get("WEBGL_multi_draw")){let{_multiDrawStarts:Et,_multiDrawCounts:ee,_multiDrawCount:Vt}=L,Ee=dt?ae.get(dt).bytesPerElement:1,Un=St.get(O).currentProgram.getUniforms();for(let Te=0;Te<Vt;Te++)Un.setValue(E,"_gl_DrawID",Te),$t.render(Et[Te]/Ee,ee[Te])}else $t.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)$t.renderInstances(Bt,ie,L.count);else if(F.isInstancedBufferGeometry){let Et=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ee=Math.min(F.instanceCount,Et);$t.renderInstances(Bt,ie,ee)}else $t.render(Bt,ie)};function Dt(_,P,F){if(_.transparent===!0&&_.side===We&&_.forceSinglePass===!1)_.side=Ce,_.needsUpdate=!0,Pi(_,P,F),_.side=$n,_.needsUpdate=!0,Pi(_,P,F),_.side=We;else Pi(_,P,F)}this.compile=function(_,P,F=null){if(F===null)F=_;if(f=z.get(F),f.init(P),C.push(f),F.traverseVisible(function(L){if(L.isLight&&L.layers.test(P.layers)){if(f.pushLight(L),L.castShadow)f.pushShadow(L)}}),_!==F)_.traverseVisible(function(L){if(L.isLight&&L.layers.test(P.layers)){if(f.pushLight(L),L.castShadow)f.pushShadow(L)}});f.setupLights();let O=new Set;return _.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let j=L.material;if(j)if(Array.isArray(j))for(let lt=0;lt<j.length;lt++){let mt=j[lt];Dt(mt,F,L),O.add(mt)}else Dt(j,F,L),O.add(j)}),f=C.pop(),O},this.compileAsync=function(_,P,F=null){let O=this.compile(_,P,F);return new Promise((L)=>{function j(){if(O.forEach(function(lt){if(St.get(lt).currentProgram.isReady())O.delete(lt)}),O.size===0){L(_);return}setTimeout(j,10)}if(Ut.get("KHR_parallel_shader_compile")!==null)j();else setTimeout(j,10)})};let Jt=null;function Yt(_){if(Jt)Jt(_)}function ke(){gn.stop()}function He(){gn.start()}let gn=new Cl;if(gn.setAnimationLoop(Yt),typeof self<"u")gn.setContext(self);this.setAnimationLoop=function(_){Jt=_,A.setAnimationLoop(_),_===null?gn.stop():gn.start()},A.addEventListener("sessionstart",ke),A.addEventListener("sessionend",He),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(_.matrixWorldAutoUpdate===!0)_.updateMatrixWorld();if(P.parent===null&&P.matrixWorldAutoUpdate===!0)P.updateMatrixWorld();if(A.enabled===!0&&A.isPresenting===!0){if(A.cameraAutoUpdate===!0)A.updateCamera(P);P=A.getCamera()}if(_.isScene===!0)_.onBeforeRender(M,_,P,I);if(f=z.get(_,C.length),f.init(P),C.push(f),rt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),re.setFromProjectionMatrix(rt,Xr,P.reversedDepth),q=this.localClippingEnabled,Gt=ft.init(this.clippingPlanes,q),x=Z.get(_,p.length),x.init(),p.push(x),A.enabled===!0&&A.isPresenting===!0){let j=M.xr.getDepthSensingMesh();if(j!==null)Ps(j,P,-1/0,M.sortObjects)}if(Ps(_,P,0,M.sortObjects),x.finish(),M.sortObjects===!0)x.sort(B,at);if(Lt=A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1,Lt)xt.addToRenderList(x,_);if(this.info.render.frame++,Gt===!0)ft.beginShadows();let F=f.state.shadowsArray;if(et.render(F,_,P),Gt===!0)ft.endShadows();if(this.info.autoReset===!0)this.info.reset();let O=x.opaque,L=x.transmissive;if(f.setupLights(),P.isArrayCamera){let j=P.cameras;if(L.length>0)for(let lt=0,mt=j.length;lt<mt;lt++){let dt=j[lt];Ra(O,L,_,dt)}if(Lt)xt.render(_);for(let lt=0,mt=j.length;lt<mt;lt++){let dt=j[lt];wa(x,_,dt,dt.viewport)}}else{if(L.length>0)Ra(O,L,_,P);if(Lt)xt.render(_);wa(x,_,P)}if(I!==null&&w===0)Tt.updateMultisampleRenderTarget(I),Tt.updateRenderTargetMipmap(I);if(_.isScene===!0)_.onAfterRender(M,_,P);if(Mt.resetDefaultState(),H=-1,S=null,C.pop(),C.length>0){if(f=C[C.length-1],Gt===!0)ft.setGlobalState(M.clippingPlanes,f.state.camera)}else f=null;if(p.pop(),p.length>0)x=p[p.length-1];else x=null};function Ps(_,P,F,O){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD){if(_.autoUpdate===!0)_.update(P)}else if(_.isLight){if(f.pushLight(_),_.castShadow)f.pushShadow(_)}else if(_.isSprite){if(!_.frustumCulled||re.intersectsSprite(_)){if(O)vt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(rt);let lt=m.update(_),mt=_.material;if(mt.visible)x.push(_,lt,mt,F,vt.z,null)}}else if(_.isMesh||_.isLine||_.isPoints){if(!_.frustumCulled||re.intersectsObject(_)){let lt=m.update(_),mt=_.material;if(O){if(_.boundingSphere!==void 0){if(_.boundingSphere===null)_.computeBoundingSphere();vt.copy(_.boundingSphere.center)}else{if(lt.boundingSphere===null)lt.computeBoundingSphere();vt.copy(lt.boundingSphere.center)}vt.applyMatrix4(_.matrixWorld).applyMatrix4(rt)}if(Array.isArray(mt)){let dt=lt.groups;for(let At=0,Rt=dt.length;At<Rt;At++){let bt=dt[At],Bt=mt[bt.materialIndex];if(Bt&&Bt.visible)x.push(_,lt,Bt,F,vt.z,bt)}}else if(mt.visible)x.push(_,lt,mt,F,vt.z,null)}}}let j=_.children;for(let lt=0,mt=j.length;lt<mt;lt++)Ps(j[lt],P,F,O)}function wa(_,P,F,O){let{opaque:L,transmissive:j,transparent:lt}=_;if(f.setupLightsView(F),Gt===!0)ft.setGlobalState(M.clippingPlanes,F);if(O)_t.viewport(v.copy(O));if(L.length>0)Ii(L,P,F);if(j.length>0)Ii(j,P,F);if(lt.length>0)Ii(lt,P,F);_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ra(_,P,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(f.state.transmissionRenderTarget[O.id]===void 0)f.state.transmissionRenderTarget[O.id]=new sn(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Mi:dn,minFilter:ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace});let j=f.state.transmissionRenderTarget[O.id],lt=O.viewport||v;j.setSize(lt.z*M.transmissionResolutionScale,lt.w*M.transmissionResolutionScale);let mt=M.getRenderTarget(),dt=M.getActiveCubeFace(),At=M.getActiveMipmapLevel();if(M.setRenderTarget(j),M.getClearColor(X),k=M.getClearAlpha(),k<1)M.setClearColor(16777215,0.5);if(M.clear(),Lt)xt.render(F);let Rt=M.toneMapping;M.toneMapping=nn;let bt=O.viewport;if(O.viewport!==void 0)O.viewport=void 0;if(f.setupLightsView(O),Gt===!0)ft.setGlobalState(M.clippingPlanes,O);if(Ii(_,F,O),Tt.updateMultisampleRenderTarget(j),Tt.updateRenderTargetMipmap(j),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Zt=0,ie=P.length;Zt<ie;Zt++){let Qt=P[Zt],{object:$t,geometry:Et,material:ee,group:Vt}=Qt;if(ee.side===We&&$t.layers.test(O.layers)){let Ee=ee.side;ee.side=Ce,ee.needsUpdate=!0,Ca($t,F,O,Et,ee,Vt),ee.side=Ee,ee.needsUpdate=!0,Bt=!0}}if(Bt===!0)Tt.updateMultisampleRenderTarget(j),Tt.updateRenderTargetMipmap(j)}if(M.setRenderTarget(mt,dt,At),M.setClearColor(X,k),bt!==void 0)O.viewport=bt;M.toneMapping=Rt}function Ii(_,P,F){let O=P.isScene===!0?P.overrideMaterial:null;for(let L=0,j=_.length;L<j;L++){let lt=_[L],{object:mt,geometry:dt,group:At,material:Rt}=lt;if(Rt.allowOverride===!0&&O!==null)Rt=O;if(mt.layers.test(F.layers))Ca(mt,P,F,dt,Rt,At)}}function Ca(_,P,F,O,L,j){if(_.onBeforeRender(M,P,F,O,L,j),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),L.onBeforeRender(M,P,F,O,_,j),L.transparent===!0&&L.side===We&&L.forceSinglePass===!1)L.side=Ce,L.needsUpdate=!0,M.renderBufferDirect(F,P,O,L,_,j),L.side=$n,L.needsUpdate=!0,M.renderBufferDirect(F,P,O,L,_,j),L.side=We;else M.renderBufferDirect(F,P,O,L,_,j);_.onAfterRender(M,P,F,O,L,j)}function Pi(_,P,F){if(P.isScene!==!0)P=Pt;let O=St.get(_),L=f.state.lights,j=f.state.shadowsArray,lt=L.state.version,mt=D.getParameters(_,L.state,j,P,F),dt=D.getProgramCacheKey(mt),At=O.programs;if(O.environment=_.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(_.isMeshStandardMaterial?de:pe).get(_.envMap||O.environment),O.envMapRotation=O.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,At===void 0)_.addEventListener("dispose",K),At=new Map,O.programs=At;let Rt=At.get(dt);if(Rt!==void 0){if(O.currentProgram===Rt&&O.lightsStateVersion===lt)return Pa(_,mt),Rt}else mt.uniforms=D.getUniforms(_),_.onBeforeCompile(mt,M),Rt=D.acquireProgram(mt,dt),At.set(dt,Rt),O.uniforms=mt.uniforms;let bt=O.uniforms;if(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)bt.clippingPlanes=ft.uniform;if(Pa(_,mt),O.needsLights=Wl(_),O.lightsStateVersion=lt,O.needsLights)bt.ambientLightColor.value=L.state.ambient,bt.lightProbe.value=L.state.probe,bt.directionalLights.value=L.state.directional,bt.directionalLightShadows.value=L.state.directionalShadow,bt.spotLights.value=L.state.spot,bt.spotLightShadows.value=L.state.spotShadow,bt.rectAreaLights.value=L.state.rectArea,bt.ltc_1.value=L.state.rectAreaLTC1,bt.ltc_2.value=L.state.rectAreaLTC2,bt.pointLights.value=L.state.point,bt.pointLightShadows.value=L.state.pointShadow,bt.hemisphereLights.value=L.state.hemi,bt.directionalShadowMap.value=L.state.directionalShadowMap,bt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,bt.spotShadowMap.value=L.state.spotShadowMap,bt.spotLightMatrix.value=L.state.spotLightMatrix,bt.spotLightMap.value=L.state.spotLightMap,bt.pointShadowMap.value=L.state.pointShadowMap,bt.pointShadowMatrix.value=L.state.pointShadowMatrix;return O.currentProgram=Rt,O.uniformsList=null,Rt}function Ia(_){if(_.uniformsList===null){let P=_.currentProgram.getUniforms();_.uniformsList=Ci.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function Pa(_,P){let F=St.get(_);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Gl(_,P,F,O,L){if(P.isScene!==!0)P=Pt;Tt.resetTextureUnits();let j=P.fog,lt=O.isMeshStandardMaterial?P.environment:null,mt=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bi,dt=(O.isMeshStandardMaterial?de:pe).get(O.envMap||lt),At=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Rt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),bt=!!F.morphAttributes.position,Bt=!!F.morphAttributes.normal,Zt=!!F.morphAttributes.color,ie=nn;if(O.toneMapped){if(I===null||I.isXRRenderTarget===!0)ie=M.toneMapping}let Qt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$t=Qt!==void 0?Qt.length:0,Et=St.get(O),ee=f.state.lights;if(Gt===!0){if(q===!0||_!==S){let xe=_===S&&O.id===H;ft.setState(O,_,xe)}}let Vt=!1;if(O.version===Et.__version){if(Et.needsLights&&Et.lightsStateVersion!==ee.state.version)Vt=!0;else if(Et.outputColorSpace!==mt)Vt=!0;else if(L.isBatchedMesh&&Et.batching===!1)Vt=!0;else if(!L.isBatchedMesh&&Et.batching===!0)Vt=!0;else if(L.isBatchedMesh&&Et.batchingColor===!0&&L.colorTexture===null)Vt=!0;else if(L.isBatchedMesh&&Et.batchingColor===!1&&L.colorTexture!==null)Vt=!0;else if(L.isInstancedMesh&&Et.instancing===!1)Vt=!0;else if(!L.isInstancedMesh&&Et.instancing===!0)Vt=!0;else if(L.isSkinnedMesh&&Et.skinning===!1)Vt=!0;else if(!L.isSkinnedMesh&&Et.skinning===!0)Vt=!0;else if(L.isInstancedMesh&&Et.instancingColor===!0&&L.instanceColor===null)Vt=!0;else if(L.isInstancedMesh&&Et.instancingColor===!1&&L.instanceColor!==null)Vt=!0;else if(L.isInstancedMesh&&Et.instancingMorph===!0&&L.morphTexture===null)Vt=!0;else if(L.isInstancedMesh&&Et.instancingMorph===!1&&L.morphTexture!==null)Vt=!0;else if(Et.envMap!==dt)Vt=!0;else if(O.fog===!0&&Et.fog!==j)Vt=!0;else if(Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==ft.numPlanes||Et.numIntersection!==ft.numIntersection))Vt=!0;else if(Et.vertexAlphas!==At)Vt=!0;else if(Et.vertexTangents!==Rt)Vt=!0;else if(Et.morphTargets!==bt)Vt=!0;else if(Et.morphNormals!==Bt)Vt=!0;else if(Et.morphColors!==Zt)Vt=!0;else if(Et.toneMapping!==ie)Vt=!0;else if(Et.morphTargetsCount!==$t)Vt=!0}else Vt=!0,Et.__version=O.version;let Ee=Et.currentProgram;if(Vt===!0)Ee=Pi(O,P,L);let Un=!1,Te=!1,ci=!1,ne=Ee.getUniforms(),Ie=Et.uniforms;if(_t.useProgram(Ee.program))Un=!0,Te=!0,ci=!0;if(O.id!==H)H=O.id,Te=!0;if(Un||S!==_){if(_t.buffers.depth.getReversed()&&_.reversedDepth!==!0)_._reversedDepth=!0,_.updateProjectionMatrix();ne.setValue(E,"projectionMatrix",_.projectionMatrix),ne.setValue(E,"viewMatrix",_.matrixWorldInverse);let Me=ne.map.cameraPosition;if(Me!==void 0)Me.setValue(E,nt.setFromMatrixPosition(_.matrixWorld));if(It.logarithmicDepthBuffer)ne.setValue(E,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2));if(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)ne.setValue(E,"isOrthographic",_.isOrthographicCamera===!0);if(S!==_)S=_,Te=!0,ci=!0}if(L.isSkinnedMesh){ne.setOptional(E,L,"bindMatrix"),ne.setOptional(E,L,"bindMatrixInverse");let xe=L.skeleton;if(xe){if(xe.boneTexture===null)xe.computeBoneTexture();ne.setValue(E,"boneTexture",xe.boneTexture,Tt)}}if(L.isBatchedMesh){if(ne.setOptional(E,L,"batchingTexture"),ne.setValue(E,"batchingTexture",L._matricesTexture,Tt),ne.setOptional(E,L,"batchingIdTexture"),ne.setValue(E,"batchingIdTexture",L._indirectTexture,Tt),ne.setOptional(E,L,"batchingColorTexture"),L._colorsTexture!==null)ne.setValue(E,"batchingColorTexture",L._colorsTexture,Tt)}let Pe=F.morphAttributes;if(Pe.position!==void 0||Pe.normal!==void 0||Pe.color!==void 0)wt.update(L,F,Ee);if(Te||Et.receiveShadow!==L.receiveShadow)Et.receiveShadow=L.receiveShadow,ne.setValue(E,"receiveShadow",L.receiveShadow);if(O.isMeshGouraudMaterial&&O.envMap!==null)Ie.envMap.value=dt,Ie.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1;if(O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null)Ie.envMapIntensity.value=P.environmentIntensity;if(Te){if(ne.setValue(E,"toneMappingExposure",M.toneMappingExposure),Et.needsLights)Vl(Ie,ci);if(j&&O.fog===!0)W.refreshFogUniforms(Ie,j);W.refreshMaterialUniforms(Ie,O,Q,V,f.state.transmissionRenderTarget[_.id]),Ci.upload(E,Ia(Et),Ie,Tt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0)Ci.upload(E,Ia(Et),Ie,Tt),O.uniformsNeedUpdate=!1;if(O.isSpriteMaterial)ne.setValue(E,"center",L.center);if(ne.setValue(E,"modelViewMatrix",L.modelViewMatrix),ne.setValue(E,"normalMatrix",L.normalMatrix),ne.setValue(E,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let xe=O.uniformsGroups;for(let Me=0,Ls=xe.length;Me<Ls;Me++){let _n=xe[Me];ht.update(_n,Ee),ht.bind(_n,Ee)}}return Ee}function Vl(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function Wl(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(_,P,F){let O=St.get(_);if(O.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1)O.__useRenderToTexture=!1;St.get(_.texture).__webglTexture=P,St.get(_.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:F,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,P){let F=St.get(_);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0};let Xl=E.createFramebuffer();this.setRenderTarget=function(_,P=0,F=0){I=_,U=P,w=F;let O=!0,L=null,j=!1,lt=!1;if(_){let dt=St.get(_);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(E.FRAMEBUFFER,null),O=!1;else if(dt.__webglFramebuffer===void 0)Tt.setupRenderTarget(_);else if(dt.__hasExternalTextures)Tt.rebindTextures(_,St.get(_.texture).__webglTexture,St.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let bt=_.depthTexture;if(dt.__boundDepthTexture!==bt){if(bt!==null&&St.has(bt)&&(_.width!==bt.image.width||_.height!==bt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(_)}}let At=_.texture;if(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)lt=!0;let Rt=St.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget){if(Array.isArray(Rt[P]))L=Rt[P][F];else L=Rt[P];j=!0}else if(_.samples>0&&Tt.useMultisampledRTT(_)===!1)L=St.get(_).__webglMultisampledFramebuffer;else if(Array.isArray(Rt))L=Rt[F];else L=Rt;v.copy(_.viewport),R.copy(_.scissor),G=_.scissorTest}else v.copy(ut).multiplyScalar(Q).floor(),R.copy(Ct).multiplyScalar(Q).floor(),G=zt;if(F!==0)L=Xl;if(_t.bindFramebuffer(E.FRAMEBUFFER,L)&&O)_t.drawBuffers(_,L);if(_t.viewport(v),_t.scissor(R),_t.setScissorTest(G),j){let dt=St.get(_.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+P,dt.__webglTexture,F)}else if(lt){let dt=P;for(let At=0;At<_.textures.length;At++){let Rt=St.get(_.textures[At]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+At,Rt.__webglTexture,F,dt)}}else if(_!==null&&F!==0){let dt=St.get(_.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,dt.__webglTexture,F)}H=-1},this.readRenderTargetPixels=function(_,P,F,O,L,j,lt,mt=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=St.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&lt!==void 0)dt=dt[lt];if(dt){_t.bindFramebuffer(E.FRAMEBUFFER,dt);try{let At=_.textures[mt],{format:Rt,type:bt}=At;if(!It.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(P>=0&&P<=_.width-O&&(F>=0&&F<=_.height-L)){if(_.textures.length>1)E.readBuffer(E.COLOR_ATTACHMENT0+mt);E.readPixels(P,F,O,L,yt.convert(Rt),yt.convert(bt),j)}}finally{let At=I!==null?St.get(I).__webglFramebuffer:null;_t.bindFramebuffer(E.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(_,P,F,O,L,j,lt,mt=0){if(!(_&&_.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=St.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&lt!==void 0)dt=dt[lt];if(dt)if(P>=0&&P<=_.width-O&&(F>=0&&F<=_.height-L)){_t.bindFramebuffer(E.FRAMEBUFFER,dt);let At=_.textures[mt],{format:Rt,type:bt}=At;if(!It.textureFormatReadable(Rt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(bt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Bt=E.createBuffer();if(E.bindBuffer(E.PIXEL_PACK_BUFFER,Bt),E.bufferData(E.PIXEL_PACK_BUFFER,j.byteLength,E.STREAM_READ),_.textures.length>1)E.readBuffer(E.COLOR_ATTACHMENT0+mt);E.readPixels(P,F,O,L,yt.convert(Rt),yt.convert(bt),0);let Zt=I!==null?St.get(I).__webglFramebuffer:null;_t.bindFramebuffer(E.FRAMEBUFFER,Zt);let ie=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await el(E,ie,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Bt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,j),E.deleteBuffer(Bt),E.deleteSync(ie),j}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,P=null,F=0){let O=Math.pow(2,-F),L=Math.floor(_.image.width*O),j=Math.floor(_.image.height*O),lt=P!==null?P.x:0,mt=P!==null?P.y:0;Tt.setTexture2D(_,0),E.copyTexSubImage2D(E.TEXTURE_2D,F,0,0,lt,mt,L,j),_t.unbindTexture()};let ql=E.createFramebuffer(),Yl=E.createFramebuffer();if(this.copyTextureToTexture=function(_,P,F=null,O=null,L=0,j=null){if(j===null)if(L!==0)Jn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=L,L=0;else j=0;let lt,mt,dt,At,Rt,bt,Bt,Zt,ie,Qt=_.isCompressedTexture?_.mipmaps[j]:_.image;if(F!==null)lt=F.max.x-F.min.x,mt=F.max.y-F.min.y,dt=F.isBox3?F.max.z-F.min.z:1,At=F.min.x,Rt=F.min.y,bt=F.isBox3?F.min.z:0;else{let Pe=Math.pow(2,-L);if(lt=Math.floor(Qt.width*Pe),mt=Math.floor(Qt.height*Pe),_.isDataArrayTexture)dt=Qt.depth;else if(_.isData3DTexture)dt=Math.floor(Qt.depth*Pe);else dt=1;At=0,Rt=0,bt=0}if(O!==null)Bt=O.x,Zt=O.y,ie=O.z;else Bt=0,Zt=0,ie=0;let $t=yt.convert(P.format),Et=yt.convert(P.type),ee;if(P.isData3DTexture)Tt.setTexture3D(P,0),ee=E.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)Tt.setTexture2DArray(P,0),ee=E.TEXTURE_2D_ARRAY;else Tt.setTexture2D(P,0),ee=E.TEXTURE_2D;E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,P.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,P.unpackAlignment);let Vt=E.getParameter(E.UNPACK_ROW_LENGTH),Ee=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Un=E.getParameter(E.UNPACK_SKIP_PIXELS),Te=E.getParameter(E.UNPACK_SKIP_ROWS),ci=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Qt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Qt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,At),E.pixelStorei(E.UNPACK_SKIP_ROWS,Rt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,bt);let ne=_.isDataArrayTexture||_.isData3DTexture,Ie=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){let Pe=St.get(_),xe=St.get(P),Me=St.get(Pe.__renderTarget),Ls=St.get(xe.__renderTarget);_t.bindFramebuffer(E.READ_FRAMEBUFFER,Me.__webglFramebuffer),_t.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let _n=0;_n<dt;_n++){if(ne)E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,St.get(_).__webglTexture,L,bt+_n),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,St.get(P).__webglTexture,j,ie+_n);E.blitFramebuffer(At,Rt,lt,mt,Bt,Zt,lt,mt,E.DEPTH_BUFFER_BIT,E.NEAREST)}_t.bindFramebuffer(E.READ_FRAMEBUFFER,null),_t.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(L!==0||_.isRenderTargetTexture||St.has(_)){let Pe=St.get(_),xe=St.get(P);_t.bindFramebuffer(E.READ_FRAMEBUFFER,ql),_t.bindFramebuffer(E.DRAW_FRAMEBUFFER,Yl);for(let Me=0;Me<dt;Me++){if(ne)E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Pe.__webglTexture,L,bt+Me);else E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Pe.__webglTexture,L);if(Ie)E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,xe.__webglTexture,j,ie+Me);else E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,xe.__webglTexture,j);if(L!==0)E.blitFramebuffer(At,Rt,lt,mt,Bt,Zt,lt,mt,E.COLOR_BUFFER_BIT,E.NEAREST);else if(Ie)E.copyTexSubImage3D(ee,j,Bt,Zt,ie+Me,At,Rt,lt,mt);else E.copyTexSubImage2D(ee,j,Bt,Zt,At,Rt,lt,mt)}_t.bindFramebuffer(E.READ_FRAMEBUFFER,null),_t.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Ie)if(_.isDataTexture||_.isData3DTexture)E.texSubImage3D(ee,j,Bt,Zt,ie,lt,mt,dt,$t,Et,Qt.data);else if(P.isCompressedArrayTexture)E.compressedTexSubImage3D(ee,j,Bt,Zt,ie,lt,mt,dt,$t,Qt.data);else E.texSubImage3D(ee,j,Bt,Zt,ie,lt,mt,dt,$t,Et,Qt);else if(_.isDataTexture)E.texSubImage2D(E.TEXTURE_2D,j,Bt,Zt,lt,mt,$t,Et,Qt.data);else if(_.isCompressedTexture)E.compressedTexSubImage2D(E.TEXTURE_2D,j,Bt,Zt,Qt.width,Qt.height,$t,Qt.data);else E.texSubImage2D(E.TEXTURE_2D,j,Bt,Zt,lt,mt,$t,Et,Qt);if(E.pixelStorei(E.UNPACK_ROW_LENGTH,Vt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ee),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Un),E.pixelStorei(E.UNPACK_SKIP_ROWS,Te),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ci),j===0&&P.generateMipmaps)E.generateMipmap(ee);_t.unbindTexture()},this.initRenderTarget=function(_){if(St.get(_).__webglFramebuffer===void 0)Tt.setupRenderTarget(_)},this.initTexture=function(_){if(_.isCubeTexture)Tt.setTextureCube(_,0);else if(_.isData3DTexture)Tt.setTexture3D(_,0);else if(_.isDataArrayTexture||_.isCompressedArrayTexture)Tt.setTexture2DArray(_,0);else Tt.setTexture2D(_,0);_t.unbindTexture()},this.resetState=function(){U=0,w=0,I=null,_t.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}}export{ji as AdditiveBlending,Re as BufferAttribute,qe as BufferGeometry,Wt as Color,be as PerspectiveCamera,ea as Points,Hr as SRGBColorSpace,jr as Scene,ze as ShaderMaterial,Xt as Vector2,N as Vector3,Hl as WebGLRenderer};
