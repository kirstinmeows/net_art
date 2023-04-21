document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById ('canvas01')
cnv.style.background = `turquoise`

const ctx = cnv.getContext ("2d")

resize_canvas ()

window.onresize = resize_canvas

let x_pos = 0 

requestAnimationFrame (draw_frame)


function setup () {
   createCanvas (innerWidth, innerHeight)
}

function  draw_frame () 
{
ctx.fillStyle = `turqoise`
ctx.fillRect (0, 0, cnv.width, cnv.height)

requestAnimationFrame (draw_frame)
}

function resize_canvas ()
{
   cnv.width = innerWidth 
   cnv.height = innerHeight
}
