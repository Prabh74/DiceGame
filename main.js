    var player1Score = Math.floor(Math.random()*6) + 1 ;
    var player2Score = Math.floor(Math.random()*6) + 1 ;

    var imgSource1 = "Images/" + player1Score + ".png";
    var imgSource2 = "Images/" + player2Score + ".png";

    document.querySelector("#player1img").setAttribute("src",imgSource1);
    document.querySelector("#player2img").setAttribute("src",imgSource2);

    if(player1Score > player2Score){
        document.querySelector(".changingText").textContent="Player 1 Won";
    }
    else if(player1Score < player2Score){
        document.querySelector(".changingText").textContent="Player 2 Won";
    }
    else if(player1Score === player2Score){
        document.querySelector(".changingText").textContent="Draw";
    }