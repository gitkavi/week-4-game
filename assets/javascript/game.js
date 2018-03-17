$(document).ready(function () {
    var randomNumber
    var result = 0;
    var crystal1 = "";
    var crystal2 = "";
    var crystal3 = "";
    var crystal4 = "";
    var wins = 0;
    var loses = 0;
    generate();

    function generate() {
        randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
        $("#random").html("Your random number is : " + randomNumber);
        console.log("user's Random Number:" + randomNumber);

        crystal1 = Math.floor(Math.random() * (10 - 1) + 1);
        crystal2 = Math.floor(Math.random() * (10 - 1) + 1);
        crystal3 = Math.floor(Math.random() * (10 - 1) + 1);
        crystal4 = Math.floor(Math.random() * (10 - 1) + 1);

        console.log("crystal 1:" + crystal1);
        console.log("crystal 2:" + crystal2);
        console.log("crystal 3:" + crystal3);
        console.log("crystal 4:" + crystal4);
        result = 0;
    }

    $("#img1").on("click", function () {
        console.log("image1 clicked");
        result += crystal1;
        checkResult();
        $("#score").html("Score : " + result);
    });
    $("#img2").click(function () {
        console.log("image2 clicked");
        result += crystal2;
        checkResult();
        $("#score").html("Score : " + result);

    });
    $("#img3").click(function () {
        console.log("image2 clicked");
        result += crystal3;
        checkResult();
        $("#score").html("Score : " + result);

    });
    $("#img4").click(function () {
        console.log("image2 clicked");
        result += crystal4;
        checkResult();
        $("#score").html("Score : " + result);

    });

    function checkResult() {
        console.log("Inside check result");
        console.log("random: "+randomNumber);
        console.log("Result: "+result);
        if (result == randomNumber) {
            alert("You Win!!!");
            wins += 1;
            $("#wins").html("Wins : "+wins);
            $("#loses").html("Loses : "+loses);
            $("#score").html("Score : " + result);
            generate();
        }
        if (result > randomNumber) {
            alert("computer win!!!");
            loses +=1;
            $("#wins").append(wins);
            $("#loses").append(loses);
            $("#score").append(result);
            generate();
        }
    }
});