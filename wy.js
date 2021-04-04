var Wy=function(a){
  if(Array.isArray(a)){
    this.s=a.clone();
  }else if(typeof a == "string"){
    b = Wy.parse(a);
    this.s = b.s.clone();
  }
}

Wy.parse=function(instr){
  instr=instr.replace(/^[\n\s]/g, "");
  instr=instr.replace(/[\n\s]$/g, "");
  instr=instr.replace(/[\n\s][\n\s]*/g, " ");
  instr=instr.replace(/\s/g, ",");
  var a=instr.split(",");
  for(var i=0;i<a.length;i++){
    a[i]=parseInt(a[i]);
  }
  return new Wy(a);
}

Wy.prototype.toString=function(){
  var str="";
  if(this.s.length!=0) str+=this.s[0];
  for(var i=1;i<this.s.length;i++){
    str+=","+this.s[i];
  }
  return str;
}

