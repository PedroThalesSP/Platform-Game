let left = 39;
let right = 37;
let size_cell = 32;
let height_personage = 52;
let image_hight = 2;
let image_left = 1;




function sprite(x,y,ctx){
this.x = x;
this.t = y;
this.oldx = x;
this.oldy = y;
this.ctx = ctx;

this.stage_steps = 0;
this.started_steps = false
this.started_direction = 0;
this.direction_image = 0;
}



// inicio da codificação
this.half_steps = function(){
let internal_position_cell = ((this.stage_steps%4) + 1) / 4 * size_cell;
switch (this.started_direction){
    case left: this.x = this.oldx + internal_position_cell; this.direction_image = image_hight; break;
    case right: this.x = this.oldx - internal_position_cell; this.direction_image = image_left; break;
    default:break;
}

this.stage_steps = (this.stage_steps + 1) % 4;
if (this.stage_steps == 0) {
    this.stage_steps = false;
}
}



//terminar de codificar
this.draw = function (){
    this.ctx.drawImage(this.image, this.stage_steps * size_cell, this.direction_image * height_personage, size_cell, height_personage, this.x, this.y + 10, size_cell, height_personage);
}


// this.passo = function(direcao)
// {
//   if (!this.iniciouPasso)
//   {
//     var tempx = -1;
//     var tempy = -1;
//     this.iniciouPasso=true;
//     this.iniciouDirecao = direcao;
//     this.oldx=this.x;
//     this.oldy=this.y;
//   }
// }
// this.setaMovimento = function(dx,dy)
// {
//     this.dx = dx;
//     this.dy = dy;
// }
// }
// sprite.prototype.ciclo = function()
// {
//   if (!this.ativo)
//     return false;
//   this.x = this.x+this.dx;
//   this.y = this.y+this.dy;
//   return true;
// }

