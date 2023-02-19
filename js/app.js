function disable(x){
    x.style.cssText = `
    pointer-events: none;
    cursor: default;
  `;
  x.style.backgroundColor="lightblue";
  x.style.border='none'
}
function idInner(i){
    const parse=parseInt(i)
    const cardTitle=document.getElementById(parse)
    const inner=cardTitle.innerText;
  
    return inner;
}


const btn=document.querySelectorAll('#btn')
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        const ol=document.getElementById('ol')
        const li=document.createElement('li');
        const inner= i;
        const fun=idInner(inner);
        const innerText=fun;
        li.innerText=innerText;
        ol.appendChild(li);
       

       
    })
    

}


// const p1=document.getElementById('p1');

function costCount(id){
    const perPlayer=document.getElementById(id);
    const perPlayerValue=perPlayer.value ;
    const perPlayerValueCon=parseInt(perPlayerValue);
    return perPlayerValueCon;
}
document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayer=costCount('per-player');
    const claculate=perPlayer*5;
    const playerEx=document.getElementById('player-expense');
    playerEx.innerText=claculate;

})
document.getElementById('calculate-total').addEventListener('click',function (){
    const perPlayer=costCount('per-player');
    const claculate=perPlayer*5;
    const managerCost= costCount('manager');
    const cochCost=costCount('coach');
   
   const sum=managerCost+cochCost;
   const totalSum=claculate+sum;
   const totalCost=document.getElementById('total-coast');
   totalCost.innerText=totalSum;

})