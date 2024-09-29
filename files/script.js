$('#modal-popup').hide()
$('#modal-popup').fadeIn()

$('#modal-popup').click(() => {
    console.log('click')
    $('#modal-popup').fadeOut()
})