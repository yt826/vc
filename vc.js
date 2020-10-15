let string = `
/*
* 我叫蘑菇头，我是一名前端新人
* 接下来我会画一个太极图来展示我学到的技能
* 首先，我要先画一个正方形
**/
#div1{
    border: 1px solid red;
     width: 200px;
    height: 200px;
}
/* 接下来，我们要把它变成一个圆
**/
#div1
{
   border-radius: 50%;
   box-shadow: 0 0 3px rgba(0,0,0,0.5);
   border: none;
}
/* 八卦是分阴阳的
**/
#div1{
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);

}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
 #div1::before{  width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
`
let last = document.querySelector('#last')
let style = document.querySelector("style")
let n = 0
let string2 = ''
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        }
        else if(string[n] === ' ') {
            string2 += '&nbsp;'
        }
        else {
            string2 += string[n]
        }
        last.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999);
        last.scrollTo(0, 99999);
        if (n < string.length-1) {
            n += 1
             step()
        }
       
    
    }, 0)
}
step()