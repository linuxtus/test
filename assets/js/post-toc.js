!function(e){e.fn.toc=function(n){function t(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function s(e){var n=e.textContent===undefined?e.innerText:e.textContent;return"<a class='"+o.classes.link+"' href='#"+t(e.id)+"'>"+n+"</a>"}var i={noBackToTopLinks:!1,title:"Table Of Contents",minimumHeaders:3,headers:"h1, h2, h3, h4, h5, h6",listType:"ol",showEffect:"none",showSpeed:"none",classes:{list:"toc-list",item:"toc-item",link:"toc-anchor"}},o=e.extend(i,n),c=e(o.headers).filter(function(){var n=e(this).prev().attr("name");return!this.id&&n&&(this.id=e(this).attr("id",n.replace(/\./g,"-"))),this.id}),l=e(this);if(!c.length||c.length<o.minimumHeaders||!l.length)e(this).hide();else{0===o.showSpeed&&(o.showEffect="none");var a,h={show:function(){l.hide().html(f).show(o.showSpeed)},slideDown:function(){l.hide().html(f).slideDown(o.showSpeed)},fadeIn:function(){l.hide().html(f).fadeIn(o.showSpeed)},none:function(){l.html(f)}},r=function(e){return parseInt(e.nodeName.replace("H",""),10)},d=(c.map(function(e,n){return r(n)}).get().sort()[0],r(c[0])),f=" <"+o.listType+' class="'+o.classes.list+'">';c.on("click",function(){o.noBackToTopLinks||(window.location.hash=this.id)}).addClass("clickable-header").each(function(e,n){if(a=r(n),o.noBackToTopLinks,a===d)f+='<li class="'+o.classes.item+'">'+s(n);else if(a<=d){for(var t=a;t<d;t++)f+="</li></"+o.listType+">";f+='<li class="'+o.classes.item+'">'+s(n)}else if(a>d){for(t=a;t>d;t--)f+="<"+o.listType+' class="'+o.classes.list+'"><li class="'+o.classes.item+'">';f+=s(n)}d=a}),f+="</"+o.listType+">",o.noBackToTopLinks||e(document).on("click",".back-to-top",function(){e(window).scrollTop(0),window.location.hash=""}),h[o.showEffect]()}}}(jQuery);