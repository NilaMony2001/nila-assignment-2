function GiftVoucher(score) {
    if (score == 1) {
        return "10000Tk";
    } else if (score == 2) {
        return "8000Tk";
    } else if (score == 3) {
        return "7000Tk";
    } else if (score == 4) {
        return "6000Tk";
    } else if (score == 5) {
        return "5000Tk";
    } else {
        return "SORRY, Don't get any voucher";
    }
}

function getGrade() {
    var userName = document.getElementById("competitorNameBox").value;
    var userScore = parseInt(document.getElementById("competitorScoreBox").value);

    var voucherAmount = GiftVoucher(userScore);
    document.getElementById("container").innerHTML = `<h4>Hello ${userName}, your voucher amount is: ${voucherAmount}</h4>`;
}
       