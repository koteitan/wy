var Wyseq=function(a){
  if(typeof a=="string")a=Wyseq.parse(a);
  for(var t=0;t<a.length;t++){
    Wyseq.push(a[t]);
  }
}

Wyseq.parse=function(instr){
  instr=instr.replace(/^[\n\s]/g, "");
  instr=instr.replace(/[\n\s]$/g, "");
  instr=instr.replace(/[\n\s][\n\s]*/g, " ");
  instr=instr.replace(/\s/g, ",");
  var a=instr.split(",");
  for(var i=0;i<a.length;i++){
    a[i]=parseInt(a[i]);
  }
  return new Wyseq(a);
}

Wyseq.prototype.toString=function(){
  var str="";
  if(this.seq.length!=0) str+=this.seq[0];
  for(var i=1;i<this.seq.length;i++){
    str+=","+this.seq[i];
  }
  return str;
}

var Wyseq.prototype.at=function(i){
  for(var t=0;t<this.nodelist.length;t++){
    if(this.nodelist[t].i==i) return this.nodelist[t];
  }
  return null;
}

var Wynode=function(seq){
  if(typeof seq=="undefined" || seq==null) this.seq=new Wy();
  this.seq=seq; //sequence this belongs
  this.seq.push(this); // register the node to the sequence
}


var Wynode.prototype.left=function(){
  if(this.memoleft!=undefined) return this.memoleft;
  this.memoleft=this.rightleg().parent().diff();
  return this.memoleft;
}

var Wynode.prototype.rightleg=function(){
  if(this.memorightleg!=undefined) return this.memorightleg;
  return null;
}
var Wynode.prototype.parent=function(){
  if(this.memoparent!=undefined) return this.memoparent;

}

var Wynode.prototype.getparent=function(){
  if(this.memoparent!=undefined) return this.memoparent;
}


