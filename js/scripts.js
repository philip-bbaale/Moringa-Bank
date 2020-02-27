var names, initialDeposit, depositAmount, withdrawAmount, totalDeposit,totalWithdraw, accountBalance;

$(document).ready(function(){

    $("form#registration").submit(function(){
        event.preventDefault();
        names = $("#exampleFormControlInput1").val();
        initialDeposit = parseInt($("#exampleFormControlInput2").val());
        accountBalance = initialDeposit;
        $("#account_names").append(names);
        $("#balance_statement").text('KCS: '+accountBalance);
        $("form").trigger('reset');
    });

    $("#account_names").click(function(){
        $(".funding").toggle();
    });

    $("form#deposits").submit(function(){
        event.preventDefault();
        depositAmount = parseInt($("#exampleFormControlInput3").val());
        totalDeposit = accountBalance+depositAmount;
        accountBalance = totalDeposit;
        $("#balance_statement").text('KCS: '+accountBalance);
        $("form").trigger('reset');
    });
    $("form#withdraws").submit(function(){
        event.preventDefault();
        withdrawAmount = parseInt($("#exampleFormControlInput4").val());
        totalWithdraw = accountBalance-withdrawAmount;
        accountBalance = totalWithdraw;
        $("#balance_statement").text('KCS: '+accountBalance);
        $("form").trigger('reset');
    });
});