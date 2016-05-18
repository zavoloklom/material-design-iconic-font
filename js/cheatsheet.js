$(function(){
  $.ajax({
    url: "keywords",
    type: 'GET',
    dataType: 'text',
    success: function(data) {
      data = txtToJSON(data);
      tagKeywords(data);
    }
  }).done(function(){
    $('#search').keyup(function(){
      $(this).filterIcons();
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $('#navbar').height() + $('.header').height()) {
      $(".filter-control").width($('section').width()).addClass("sticky");
    } else {
      $(".filter-control").removeClass("sticky");
    }
  });

  $('.icon').on('click', function(){
    $('.icon').removeClass('selected');
    $(this).addClass('selected').showHint();
  });

});

var txtToJSON = function(txt){
	var pairArray = txt.split('\n');
	var data = [];

	pairArray.forEach(function(d){
		var pair = d.split(' ');
		data.push({'name': pair[0], 'code': pair[1]});
	});
	return data.slice(0, data.length - 1);
}

var tagKeywords = function(dataArray) {
	dataArray.forEach(function(d){
		var target = $(`.icon-set .icon[data-name = ${d.name}]`),
				keywords = target.data('keywords') ? target.data('keywords') + d.code : d.code;
		target.attr('data-keywords', keywords);
	});
}

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
