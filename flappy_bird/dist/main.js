(()=>{"use strict";class t{constructor(t){this.dimensions=t}drawBackground(t){t.fillStyle="skyblue",t.fillRect(0,0,this.dimensions.width,this.dimensions.height)}animate(t){this.drawBackground(t)}}class i{constructor(t){this.dimensions=t,this.velocity=0,this.posX=160,this.posY=320}drawBird(t){t.fillStyle="yellow",t.fillRect(this.posX,this.posY,40,30)}animate(t){this.drawBird(t)}}const s=document.getElementById("bird-game");new class{constructor(t){this.ctx=t.getContext("2d"),this.dimensions={width:t.width,height:t.height},this.restart()}animate(){this.level.animate(this.ctx),this.bird.animate(this.ctx)}restart(){this.level=new t(this.dimensions),this.bird=new i(this.dimensions),this.animate()}}(s)})();