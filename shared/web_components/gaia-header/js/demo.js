window.onload = function() {
    document.getElementById('edit1').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header1 : Edit!";
    });
    document.getElementById('add1').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header1 : Add!";
    });
    document.getElementById('header2').addEventListener('action', function() {
        document.getElementById('message').innerHTML = "header2 : Back!";
    });
    document.getElementById('edit2').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header2 : Edit!";
    });
    document.getElementById('header3').addEventListener('action', function() {
        document.getElementById('message').innerHTML = "header3 : Menu!";
    });
    document.getElementById('edit3').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header3 : Edit!";
    });
    document.getElementById('add3').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header3 : Add!";
    });
    document.getElementById('header4').addEventListener('action', function() {
        document.getElementById('message').innerHTML = "header4 : Close!";
    });
    document.getElementById('done4').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header4 : Done!";
        var header = document.getElementById('header4');
        var headerH1 = header.querySelector("h1");
        var shadow = header.shadowRoot;
        var h1 = shadow.querySelector("h1");
        h1.innerHTML = "Done!";
    });
    document.getElementById('header5').addEventListener('action', function() {
        document.getElementById('message').innerHTML = "header5 : Back!";
    });
    document.getElementById('edit5').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header5 : Edit!";
    });
    document.getElementById('done5').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header5 : Done!";
    });
    document.getElementById('header6').addEventListener('action', function() {
        document.getElementById('message').innerHTML = "header6 : Back!";
    });
    document.getElementById('edit6').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header6 : Edit!";
    });
    document.getElementById('done6').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header6 : Done!";
    });
    document.getElementById('header7').addEventListener('action', function() {
        document.getElementById('message').innerHTML = "header7 : Back!";
    });
    document.getElementById('edit7').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header7 : Edit!";
    });
    document.getElementById('done7').addEventListener('click', function() {
        document.getElementById('message').innerHTML = "header7 : Done!";
    });
};

