$(document).ready(function(){jQuery.fn.anim_progressbar=function(e){var t=1e3,r=60*t,a=3600*t,i=86400*t,s={start:new Date,finish:(new Date).setTime((new Date).getTime()+20*t),interval:100},l=jQuery.extend(s,e),m=this;return this.each(function(){var e=l.finish-l.start;$(m).children(".pbar").progressbar();var s=setInterval(function(){var o=l.finish-new Date,h=new Date-l.start,w=parseInt(o/i),d=parseInt((o-w*i)/a),p=parseInt((o-w*i-d*a)/r),c=parseInt((o-w*i-p*r-d*a)/t),D=h>0?h/e*100:0;if($(m).children(".percent").html("<b>"+D.toFixed(1)+"%</b>"),$(m).children(".elapsed").html(w+" days "+d+"h:"+p+"m:"+c+"s</b>"),$(m).children(".pbar").children(".ui-progressbar-value").css("width",D+"%"),D>=100){if(clearInterval(s),$(m).children(".percent").html("<b>100%</b>"),$(m).children(".elapsed").html("完成"),n++,3==n)return window.onbeforeunload=null,void $("#tt").html("你的电脑成功被征服");$("#tt").html("革命完成了"+n+"/3")}},l.interval)})};var e=(new Date).setTime((new Date).getTime()),t=(new Date).setTime((new Date).getTime()+4e3);$("#progress1").anim_progressbar({start:e,finish:t,interval:100}),e=(new Date).setTime((new Date).getTime()),t=(new Date).setTime((new Date).getTime()+15e3),$("#progress2").anim_progressbar({start:e,finish:t,interval:100}),e=(new Date).setTime((new Date).getTime()),t=(new Date).setTime((new Date).getTime()+6e3),$("#progress3").anim_progressbar({start:e,finish:t,interval:100}),window.onbeforeunload=function(){return"正在进行复杂操作,不能关闭"};var n=0});