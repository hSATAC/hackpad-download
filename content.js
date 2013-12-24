function hackpadDownload(format) {
    format = typeof format !== 'undefined' ? format : "md";
    var path_segments = window.location.pathname.split("-");
    var article_id = path_segments[path_segments.length - 1];
    //https://hackpad.com/ep/pad/export/ArW3b1khZZs/latest?format=md
    return "https://"+window.location.hostname+"/ep/pad/export"+article_id+"/latest?format="+format;
}

$("#toc-div").after('<div id="dl-div" class="sidebar-div"><div class="sidebarheading" style="margin-bottom: 0px; display: block;">Download Page</div><ul><li class="toc-entry level0"><a href="'+hackpadDownload("txt")+'" target="_blank">TXT</a></li><li class="toc-entry level0"><a href="'+hackpadDownload("md")+'" target="_blank">Markdown</a></li><li class="toc-entry level0"><a href="'+hackpadDownload("html")+'" target="_blank">HTML</a></li><li><a href="javascript:void(0);" id="text_new_window">Text in New Window</a></li></ul></div>');
$("#text_new_window").on("click", function() {
	var result = "";
	$(".ace-line").each(function() {
		result += strip_tags($(this).html()) + "\n";
	});
	var txtWindow = window.open('','','resizable=yes,scrollbars=yes,width=1000,height=800');
	txtWindow.document.body.innerHTML = "<pre>" + result + "</pre>";
});

function strip_tags (input, allowed) {
  // From: http://phpjs.org/functions
  allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
}
