$(function() {
    console.info('start');
    $("body").on('click', 'button[data-btn-type=ajax]', function(e) {
        var send_data;
        send_data = {
            hoge: $('input').val()
        };
        console.info(send_data);
        $.ajax({
                url: 'http://192.168.43.129:8000/index.php',
                dataType: "jsonp",
                data: send_data,
            })
            .done(function(res) {
                console.info(res);
                if (res.result === "OK") {
                    $("#result").text(res.key);
                } else {
                    $("#result").text("unknown");
                }
            })
            .fail(function(x, t, e) {
                $("#result").text("failed");
            });
        return false;
    });
});
