function hackpadDownload(format) {
    format = typeof format !== 'undefined' ? format : "md";
    var path_segments = window.location.pathname.split("-");
    var article_id = path_segments[path_segments.length - 1];
    //https://hackpad.com/ep/pad/export/ArW3b1khZZs/latest?format=md
    return "https://"+window.location.hostname+"/ep/pad/export/"+article_id+"/latest?format="+format;
}

$("#toc-div").after('<div id="dl-div" class="sidebar-div"><div class="sidebarheading" style="margin-bottom: 0px; display: block;">Download Page</div><ul><li class="toc-entry level0"><a href="'+hackpadDownload("txt")+'" target="_blank">TXT</a></li><li class="toc-entry level0"><a href="'+hackpadDownload("md")+'" target="_blank">Markdown</a></li><li class="toc-entry level0"><a href="'+hackpadDownload("html")+'" target="_blank">HTML</a></li></ul></div>');
