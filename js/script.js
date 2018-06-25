;
$("img, a").on("dragstart", function(event) { event.preventDefault(); });

$(document).ready( function () {
    var $form = $('#mc-embedded-subscribe-form1');
    if ( $form.length > 0 ) {
        $('#form1').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
            register($form);
        });
    }
});


function register($form) {
    toastr.options.closeDuration = 9000;
    $.ajax({
        type: 'post',
        url: 'https://one.us17.list-manage.com/subscribe/post-json?u=2208b78c1b5ddf1e49e32df66&amp;id=4bcfc8879b&c=?',
        data: $form.serialize(),
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        success : function(data) {
            $('#mce-EMAIL').val('');
            if (data.result != "success") {
                if (data.msg.indexOf('is already subscribed')+1) {
                    toastr.warning('You\'re already subscribed.', 'Subscribing is unavailable!');
                } else if (data.msg.indexOf('has too many recent signup requests')+1) {
                    toastr.warning('You has too many recent signed requests.', 'Subscribing is unavailable!');
                } else if (data.msg.indexOf('This email cannot be added to this list. Please enter a different email address.')+1) {
                    toastr.warning('This email cannot be added to this list. Please enter a different email address.');
                } else if (data.msg.indexOf('An email address must contain a single @')+1) {
                    toastr.warning('An email address must contain a single @', 'Subscribing is unavailable!');
                } else if (data.msg.indexOf('The username portion of the email address is empty')+1) {
                    toastr.warning('The username portion of the email address is empty', 'Subscribing is unavailable!');
                } else if (data.msg.indexOf('Please enter a value')+1) {
                    toastr.warning('Please enter a value', 'Subscribing is unavailable!');
                }
                else {
                    toastr.error('Subscribing is unavailable!');
                }
            } else {
                toastr.success('We\'ve just sent an invitation to your mail inbox', 'Please, check your email');
            }
        },
        error       : function(err) {
            $('#mce-EMAIL').val('');
            toastr.error('Subscribing is unavailable!');
        }
    });
}
