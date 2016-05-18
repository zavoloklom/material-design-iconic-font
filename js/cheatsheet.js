

$('#search').keyup(function(){
  $(this).filterIcons();
});

$('.icon').on('click', function(){
  $('.icon').removeClass('selected');
  $(this).addClass('selected').showHint();
});

$.fn.extend({
	showHint: function(){
		var copy_txt = `&#x${this.data('code')}`,
				css_txt =
`span:before {
  font-family: 'Material-Design-Iconic-Font';
  content: '&#92;${this.data('code')}'
}`,
				html_txt =
`<i class='zmdi
          zmdi-${this.data('name')}'>
</i>`,
				ie9_txt = `<i class='zmdi'>&#38;#x${this.data('code')}</i>`;

		$('.hint .copy').html(copy_txt);
		$('.hint .css').html(css_txt);
		$('.hint .html').html(html_txt);
		$('.hint .ie9').html(ie9_txt);
	},
	filterIcons: function(){
		var icons = $('.icon-set .icon'),
				query = new RegExp(this.val(), "gi");

		if (!this.val()){
			icons.show();
      icons.parent().siblings('h2').show();
		} else {
      icons.parent().siblings('h2').hide();
			icons.hide().filter(function(index){
				var str = $(this).data('name'),
						tag = $(this).data('keywords') ? $(this).data('keywords') : '';
				return str.match(query) || tag.match(query);
			}).show();
		}
	}
});
