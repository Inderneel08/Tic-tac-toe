let boxes=Array.from(document.getElementsByClassName('box'));

let chance = false;

let match_over=false;

let game=document.getElementById("resetButton");

let ping = new Audio("/Externals/ting.mp3");

let gameOver = new Audio("/Externals/gameover.mp3");

let wins=[  
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]   
];


function resetGame()
{
    boxes.forEach((element)=>{
        let spanbox=element.getElementsByClassName("boxText");
        spanbox[0].innerHTML="";
    });

    game.disabled=true;
    game.style.opacity=0;
    match_over=false;
    document.getElementsByClassName("win_scenario")[0].innerHTML="";
    chance=false
}




game.addEventListener('click',(resetGame));

boxes.forEach((element)=>{

    element.addEventListener('click',()=>{

        if(match_over==false){
            let spanbox=element.getElementsByClassName('boxText');

            if(spanbox[0].innerHTML==""){
                if(chance==false){
                    spanbox[0].innerHTML="X";
                    chance=true;
                }
                else{
                    spanbox[0].innerHTML="0";
                    chance=false;
                }
            }
            
        }
    });

    element.addEventListener('click',()=>{

        if(match_over==false){
            ping.play();
            ping.playbackRate=5;
            wins.forEach((e)=>{
                if((boxes[e[0]].innerText===boxes[e[1]].innerText)&&(boxes[e[1]].innerText===boxes[e[2]].innerText)&&((boxes[e[0]].innerText!== "")||(boxes[e[1]].innerText!=="")||(boxes[e[2]].innerText!==""))){
                    match_over=true;
                    
                    game.disabled=false;
                    
                    gameOver.play();                    

                    game.style.opacity=1;

                    if(chance==true){
                        document.getElementsByClassName("win_scenario")[0].innerHTML="X won";
                    }
                    else{
                        document.getElementsByClassName("win_scenario")[0].innerHTML="0 won";
                    }
                }
            });
        }

    });

});






