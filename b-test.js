$('body').append('<h1 id="h">HI</h1>');
console.log('im saying hi neeeeew updated again');

$('#i').on('click', event => {
  $(this).toggleClass('yellow');
});
$('#h').on('click', event => {
  $(this).toggleClass('yellow');
});
