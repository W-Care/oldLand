Component({
properties:{
like:Boolean,
count: Number,
readOnly:Boolean
},
data:{
yes_url: 'images/like.png',
no_url: 'images/like@dis.png'
},
methods:{
 onLike:function(event){
   if(this.properties.readOnly){
     return
   }
   let count =this.properties.count
   count =this.properties.like?count -1:count+1
   this.setData({
     count:count,
     like:!this.properties.like
   })
 }
}




})