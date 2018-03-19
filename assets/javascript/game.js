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
        randomNumber = Math.floor(Math.random() * (120 - 19+1) + 19);
        $("#random").html("Your random number is : " + randomNumber);

        crystal1 = Math.floor(Math.random() * (12 - 1+1) + 1);
        crystal2 = Math.floor(Math.random() * (12 - 1+1) + 1);
        crystal3 = Math.floor(Math.random() * (12 - 1+1) + 1);
        crystal4 = Math.floor(Math.random() * (12 - 1+1) + 1);
        result = 0;
    }

    $("#img1").on("click", function () {
        result += crystal1;
        checkResult();
        $("#score").html("Score : " + result);
    });
    $("#img2").click(function () {
        result += crystal2;
        checkResult();
        $("#score").html("Score : " + result);

    });
    $("#img3").click(function () {
        result += crystal3;
        checkResult();
        $("#score").html("Score : " + result);

    });
    $("#img4").click(function () {
        result += crystal4;
        checkResult();
        $("#score").html("Score : " + result);

    });

    function checkResult() {
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
            $("#wins").html("Wins : "+wins);
            $("#loses").html("Loses : "+loses);
            $("#score").html("Score : " + result);
            generate();
        }
    }
});