let calculation = false;
let onOff = false;

function turnOnOff() {
    $('.showing-display').empty();
    if (onOff === false) {
        onOff = true;
        $('.showing-display').toggleClass('off-state');
        $('.led').addClass('light');
        $('#status').attr("value", "Off");
        $('#status').addClass("red");
    } else {
        onOff = false;
        $('.showing-display').removeClass('off-state');
        $('.led').removeClass('light');
        $('#status').attr("value", "On");
        $('#status').removeClass("red");
    }
}

function calculate() {
    if (onOff === true) {
        let input = $('.showing-display').val();
        $('.showing-display').empty();
        $('.showing-display').append(eval(input).toFixed(4));
        calculation = true;
    }
}

function num1() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(1);
    } else {
        $('.showing-display').append(1);
    }
}

function num2() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(2)
    } else {
        $('.showing-display').append(2);
    }
}

function num3() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(3);
    } else {
        $('.showing-display').append(3);
    }
}

function num4() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(4);
    } else {
        $('.showing-display').append(4);
    }
}

function num5() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(5);
    } else {
        $('.showing-display').append(5);
    }
}

function num6() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(6);
    } else {
        $('.showing-display').append(6);
    }
}

function num7() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(7);
    } else {
        $('.showing-display').append(7);
    }
}

function num8() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(8);
    } else {
        $('.showing-display').append(8);
    }
}

function num9() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(9);
    } else {
        $('.showing-display').append(9);
    }
}

function num0() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append(0);
    } else {
        $('.showing-display').append(0);
    }
}

function plus() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').append('+');
    } else {
        $('.showing-display').append('+');
    }
}

function sub() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').append('-');
    } else {
        $('.showing-display').append('-');
    }
}

function mul() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').append('*');
    } else {
        $('.showing-display').append('*');
    }
}

function div() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').append('/');
    } else {
        $('.showing-display').append('/');
    }
}

function period() {
    if (calculation === true) {
        calculation = false;
        $('.showing-display').empty();
        $('.showing-display').append('.');
    } else {
        $('.showing-display').append('.');
    }
}

function eraseAll() {
    $('.showing-display').empty();
}