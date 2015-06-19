/*
 * jQuery Highlight Plugin
 * Examples and documentation at: http://demo.webcodingstudio.com/highlight/
 * Copyright (c) 2010 E. Matsakov
 * Version: 1.02 (10-JUL-2014)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 */
(function($){
	$.fn.highlight = function(element_params){
		
		var defaults = {
			// show source code tab
			source: true,
			// show zebra
			zebra: true,
			//indents: "tabs" or "space"  
			indent: 'tabs',
			//ordered or unordered list
			list: 'ol',
			//name of the tag attribute to add a special language highlighting
			attribute: 'lang'
		}
		
		var params = $.extend({}, defaults, element_params);

		return this.each(function(){
			var code_container = $(this);
			var code_class = $(code_container).attr('class');
			var code_lang = $(code_container).attr(params.attribute);
			var code_lang_class = '';
			if(code_lang!='') {
				code_lang_class = ' '+code_lang;
			} 
			$(code_container).wrap('<div class="highlight'+code_lang_class+'"></div>');
			var highlight_container = $(code_container).parent();

			var source = code_container.html();
			source = source.replace(/</gm, '&lt;');
			
			//replace tabs with spaces
			if(params.indent=='space') {
				source = source.replace(/\t/g,'    ');
			}
			
			var code = source;
			
			//hightlight
			switch(code_lang) {
				case 'html':
					code = $.highlightCode.hightlight_html(code);	
					break;
				case 'css':
					code = $.highlightCode.hightlight_css(code);	
					break;
				case 'php':
					code = $.highlightCode.hightlight_php(code);	
					break;
				case 'sql':
					code = $.highlightCode.hightlight_sql(code);	
					break;
				default:
					code = $.highlightCode.hightlight(code);	
					break;
			}
			
			code = code.replace(/(?:\r\n?|\n)$/, '');
			code = '<'+params.list+'><li>'+code.split(/\r\n|\n/).join('\n</li><li>')+'\n</li></'+params.list+'>';
								
			//add source and tabs
			if(params.source==true) {
				source = '<pre class="source">'+source+'</pre>';
				var tabs = '<ul class="tabs"><li class="code active">code</li><li class="source">source</li></ul>';				
				$(code_container).after(source);
				$(code_container).before(tabs);
			}
			
			
			//init tabs
			if(params.source==true) {
				var tabs = $(highlight_container).find('ul.tabs li');
				$.each(tabs , function(i,tab){
					$(tab).click(function() {
						$(tabs).removeClass('active');
						var tab_class = $(tab).attr('class');
						$(highlight_container).find('pre[class!="'+tab_class+'"]').css('display', 'none');
						$(highlight_container).find('pre[class^="'+tab_class+'"]').css('display', 'block');
						$(tab).addClass('active');
					});
				});
				
			}
			
			//replace instead of html, because of IE bug
			$(code_container).replaceWith('<pre class="'+code_class+'">'+code+'</pre>');
			
			//zebra
			if(params.zebra==true) {
				$(highlight_container).find('pre[class="'+code_class+'"] '+params.list+' li:even').addClass('even');
			}
		});
	};
	
	$.highlightCode = {
		
		//DEFAULT
		hightlight: function(code) {
					
			var comments		= [];	// store comments
		
			code = code
				//replace keywords
				.replace(/(var|function|typeof|new|return|if|for|in|while|break|do|continue|case|switch)([^a-z0-9\$_])/gi,'<span class="kwd">$1</span>$2')
				//replace keywords
				.replace(/(\{|\}|\]|\[|\|)/gi,'<span class="kwd">$1</span>')
				//replace strings
				.replace(/('.*?')/g,'<span class="str">$1</span>')
				//replace multiline comments
				.replace(/\/\*([\s\S]*?)\*\//g, function(m, t)
					{ return '\0C'+push(comments, multiline_comments(m))+'\0'; })
				.replace(/\0C(\d+)\0/g, function(m, i)
					{ return comments[i]; })
				//replace one line comments
				.replace(/\/\/(.*$)/gm,'<span class="com">//$1</span>')
				//replace functons
				.replace(/([a-z\_\$][a-z0-9_]*)\(/gi,'<span class="fnc">$1</span>(');
			return code;
		},
		
		//PHP
		hightlight_php: function(code) {
			
			var comments		= [];	// store comments
			
			var funcs	=	'abs acos acosh addcslashes addslashes ' +
				'array_change_key_case array_chunk array_combine array_count_values array_diff '+
				'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
				'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
				'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
				'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
				'array_push array_rand array_reduce array_reverse array_search array_shift '+
				'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
				'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
				'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
				'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
				'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
				'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
				'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
				'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
				'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
				'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
				'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
				'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
				'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
				'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
				'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
				'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
				'gettimeofday gettype glob gmdate gmmktime in_array ini_alter ini_get ini_get_all ini_restore ini_set '+
				'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
				'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
				'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
				'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
				'parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir '+
				'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
				'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
				'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
				'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
				'strtoupper strtr strval substr substr_compare';
	
			var keywords =	'and or xor array as break case ' +
				'cfunction const continue declare default die do else ' +
				'elseif enddeclare endfor endforeach endif endswitch endwhile ' +
				'extends for foreach function include include_once global if ' +
				'new old_function return static switch use require require_once ' +
				'while abstract interface public implements extends private protected throw';
	
			funcs = new RegExp(get_keywords(funcs), 'gi');
			keywords = new RegExp(get_keywords(keywords), 'gi');
			
			code = code
				//replace strings
				.replace(/(".*?")/g,'<span class="str">$1</span>')
				.replace(/('.*?')/g,'<span class="str">$1</span>')	
				//replace multiline comments
				.replace(/\/\*([\s\S]*?)\*\//g, function(m, t)
					{ return '\0C'+push(comments, multiline_comments(m))+'\0'; })
				.replace(/\0C(\d+)\0/g, function(m, i)
					{ return comments[i]; })
				//replace one line comments
				.replace(/\/\/(.*$)/gm,'<span class="com">//$1</span>')
				//replace variables
				.replace(/\$(\w+)/g,'<span class="var">$$$1</span>')
				//replace functions
				.replace(funcs,'<span class="fnc">$1</span>$2')
				//replace keywords
				.replace(keywords,'<span class="kwd">$1</span>$2');
			return code;
		},
		
		//CSS
		hightlight_css: function(code) {
			
			var comments		= [];	// store comments
			
			var keywords =	'background-color background-image background-position ' +
				'background-repeat background border-collapse border-color border-spacing border-style border-top ' +
				'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
				'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
				'border-bottom-width border-left-width border-width border color cursor direction display ' +
				'flex-direction flex-flow flex-wrap ' +
				'float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
				'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
				'margin-right margin-bottom margin-left margin max-height max-width min-height min-width ' +
				'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding position' +
				'quotes right size src table-layout text-align top text-decoration text-indent text-shadow text-transform ' +
				'vertical-align visibility white-space width word-spacing x-height z-index';
		
			var values =	'absolute all attr auto baseline behind below black blink block blue bold bolder '+
				'both bottom capitalize caption center center-left center-right circle close-quote collapse compact '+
				'continuous cursive dashed decimal default digits disc dotted double embed expanded fixed format '+
				'gray green groove help hidden hide high higher icon inline-table inline inset inside invert italic '+
				'justify large larger left-side left leftwards level line-through list-item '+
				'lowercase lower low ltr marker medium middle move none no-repeat normal nowrap oblique olive once outset '+
				'outside overline pointer print purple red relative repeat repeat-x repeat-y rgb right rtl screen scroll show silver slower slow '+
				'small small-caps small-caption smaller soft solid square s-resize static sub super '+
				'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group '+
				'text-bottom text-top thick thin top transparent underline upper-alpha uppercase upper-latin '+
				'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-low x-small x-soft yellow';
			
			var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier New mono sans serif';
			
			keywords = new RegExp(get_keywords(keywords), 'gi');
			values = new RegExp(get_keywords(values), 'gi');
			fonts = new RegExp(get_keywords(fonts), 'gi'); 
			
			code = code
				//replace comments
				.replace(/\/\*([\s\S]*?)\*\//g, function(m, t)
					{ return '\0C'+push(comments, multiline_comments(m))+'\0'; })
				.replace(/\0C(\d+)\0/g, function(m, i)
					{ return comments[i]; })		
				//replace keywords
				.replace(keywords,'<span class="kwd">$1</span>$2')
				//replace values
				.replace(values,'<span class="pln">$1</span>$2')
				//replace fonts
				.replace(fonts,'<span class="str">$1</span>$2')
				//replace hex colors
				.replace(/(\#[a-fA-F0-9]{3,6})/gi,'<span class="lit">$1</span>')
				//replace sizes
				.replace(/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/gi,'<span class="lit">$1$3</span>');
			return code;
		},
		
		//HTML
		hightlight_html: function(code) {
			
			code = code
				//replace attributes
				.replace(/\s+([a-zA-Z\-]{0,15})\=\"([-a-z0-9_ \/\.\#\:\=\;]{0,49})\"/gi,' <span class="atn">$1</span>=<span class="atv">"$2"</span>')
				//replace open tags
				.replace(/(&lt;)(\w{0,15})(\s+|&gt;|>)/gi,'$1<span class="tag">$2</span>$3')
				//replace close tags
				.replace(/(&lt;)\/(\w{0,15})(&gt;|>)/gi,'$1/<span class="tag">$2</span>$3')
				//replace doctype
				.replace(/(&lt;!)([-a-z0-9_ \/\.\#\:\"]{0,150})(&gt;|>)/gi,'<span class="dec">$1$2$3</span>')		
				//replace comments
				.replace(/(&lt;|<)!--([\s\S]*?)--(&gt;|>)/gm,'<span class="com">$1!--$2--$3</span>');
				
			return code;
		},
		
		//SQL
		hightlight_sql: function(code) {
			var comments		= [];	// store comments
			
			var funcs	=	'abs avg case cast coalesce convert count current_timestamp ' +
						'current_user day isnull left lower month nullif replace right ' +
						'session_user space substring sum system_user upper user year';
	
			var keywords =	'absolute action add after alter as asc at authorization begin bigint ' +
						'binary bit by cascade char character check checkpoint close collate ' +
						'column commit committed connect connection constraint contains continue ' +
						'create cube current current_date current_time cursor database date ' +
						'deallocate dec decimal declare default delete desc distinct double drop ' +
						'dynamic else end end-exec escape except exec execute false fetch first ' +
						'float for force foreign forward free from full function global goto grant ' +
						'group grouping having hour ignore index inner insensitive insert instead ' +
						'int integer intersect into is isolation key last level load local max min ' +
						'minute modify move name national nchar next no numeric of off on only ' +
						'open option order out output partial password precision prepare primary ' +
						'prior privileges procedure public read real references relative repeatable ' +
						'restrict return returns revoke rollback rollup rows rule schema scroll ' +
						'second section select sequence serializable set size smallint static ' +
						'statistics table temp temporary then time timestamp to top transaction ' +
						'translation trigger true truncate uncommitted union unique update values ' +
						'varchar varying view when where with work';
			
			var op =	'all and any between cross in join like not null or outer some';

			funcs = new RegExp(get_keywords(funcs), 'gi');
			keywords = new RegExp(get_keywords(keywords), 'gi');
			op = new RegExp(get_keywords(op), 'gi');

			code = code
				//replace strings
				.replace(/(".*?")/g,'<span class="str">$1</span>')
				.replace(/('.*?')/g,'<span class="str">$1</span>')	
				//replace multiline comments
				.replace(/\/\*([\s\S]*?)\*\//g, function(m, t)
					{ return '\0C'+push(comments, multiline_comments(m))+'\0'; })
				.replace(/\0C(\d+)\0/g, function(m, i)
					{ return comments[i]; })
				//replace one line comments
				.replace(/\/\/(.*$)/gm,'<span class="com">//$1</span>')
				//replace variables
				.replace(/\$(\w+)/g,'<span class="var">$$$1</span>')
				//replace functions
				.replace(funcs,'<span class="fnc">$1</span>$2')
				//replace keywords
				.replace(keywords,'<span class="kwd">$1</span>$2')
				//replace operators
				.replace(op,'<span class="op">$1</span>$2');
			return code;
		}
	};
	
	/*
	* helpers
	*/
	
	//prepare regexp template for keywords
	function get_keywords(str)
	{
		return '(' + str.replace(/ /g, '|') + ')([^a-z0-9\$_])';
	}
	
	//process multiline comments
	function multiline_comments(text)
	{
		text	= text.split('\n');
		for(var i=0; i<text.length; i++) {
			text[i] = '<span class="com">'+text[i]+'</span>';
		}
		return text.join('\n');
	}
	
	//add element, return index
	function push(array, element)
	{
		array.push(element);
		return array.length-1;
	}	
	
})(jQuery);
