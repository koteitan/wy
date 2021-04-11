var Wyseq=function(a){
  if(Array.isArray(a)){
    this.seq=a.clone();
  }else if(typeof a == "string"){
    b = Wyseq.parse(a);
    this.seq = b.seq.clone();
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

Wyseq.ananode=function(){
  var a=new Array(this.seq.length);
  for(var i=0;i<this.seq.length;i++){
    a[i]=new Wynode(this.seq[i]);
  }
  this.s=[a];

  s=this.s;
  while(true){
    var ys=s.length;
    var xs=s[0].length;
    var finished=true;
    for(var x=0;x<xs;x++){
      for(var y=ys;y>=0;y--){
        if(s[y][x]==1)break;
        if(s[y][x]!=0){
          finished=false;
          break;
        }
      }//for y
      if(!finished) break;
    }//for x
    if(finished) return;
    // not finished yet
    
    //find 
    for(var y=0;y<ys;y++){
      
    }
  }//while
}

var Wynode=function(seq){
  if(typeof seq=="undefined" || seq==null) this.seq=new Wy();
  this.seq=seq; //sequence this belongs
  this.seq.push(this); // register the node to the sequence
  if(typeof v!="undefined") this.v=v; // value
  if(typeof v!="undefined") this.v=v; // i[d]=dth dimension of index
  this.p; // parent node
  this.d; // diff node
  this.rightleg; // right leg
  this.leftleg; // left leg
}

var Wyseq.prototype.at=function(i){
  for(var t=0;t<this.nodelist.length;t++){
    if(this.nodelist[t].i==i) return this.nodelist[t];
  }
  return null;
}

var Wynode.prototype.left=function(){
  if(this.memoleft!=null) return this.left;
  var b=this.rightleg();
  
  //rightleg.parent
  var bp;
  if(b!=null){
    bp=b.parent();
  }else{// bottom nodes
    var i=b.i.clone();
    i[0]--;//just left
    bp=this.seq.at(i);
    if(bp==null){//origin 1
      this.memoleft=null;
    }
  }
  
  //rightleg.parent.
  var bpd=bp.diff();
  if(bpd==null){//if bpd=1
    bpd=bp;//bp takes over bpd
  }
  
  this.memoleft=bpd;
  
  return this.memoleft;
}

var Wynode.prototype.getparent=function(c){
  
}


