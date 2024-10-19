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

this.half_steps = function(){

}






this.semiPasso = function()
{
  var posicaoInterna_Celula = ((this.etapaPasso%4)+1)/4 * TAMANHO_CELULA;

  switch (this.iniciouDirecao)
  {
    case ESQUERDA: this.x = this.oldx + posicaoInterna_Celula;this.direcaoImagem = IMAGEM_DIREITA; break;
    case DIREITA: this.x = this.oldx - posicaoInterna_Celula;this.direcaoImagem = IMAGEM_ESQUERDA; break;
    default:break;
  }
  this.etapaPasso = (this.etapaPasso+1) % 4;
  if (this.etapaPasso == 0 )
  {
    this.iniciouPasso = false;
  }
}
