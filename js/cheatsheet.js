$('#search').keyup(function(){
  $(this).filterIcons();
});

$.fn.extend({
// 	showHint: function(){
// 		var copy_txt = `&#x${this.data('code')}`,
// 				css_txt =
// `span:before {
//   font-family: 'Material Icons';
//   content: '&#92;${this.data('code')}'
// }`,
// 				html_txt =
// `<i class='material-icons'>
//   ${this.data('name')}
// </i>`,
// 				ie9_txt = `<i class='material-icons'>&#38;#x${this.data('code')}</i>`;
//
// 		$('.hint .copy').html(copy_txt);
// 		$('.hint .css').html(css_txt);
// 		$('.hint .html').html(html_txt);
// 		$('.hint .ie9').html(ie9_txt);
// 	},
	filterIcons: function(){
		var icons = $('.icon-set .icon'),
				query = new RegExp(this.val(), "gi");

		if (!this.val()){
			icons.show();
      console.log(this.val());
		} else {
			icons.hide().filter(function(index){
				var str = $(this).data('name'),
						tag = $(this).data('keywords') ? $(this).data('keywords') : '';
				return str.match(query) || tag.match(query);
			}).show();
		}
	}
});
