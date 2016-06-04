window.document.onkeydown=myAction;
function myAction(evt){evt = window.event || evt;if(evt.keyCode==13){hideSuggest();go();}}
var fragmentStr="baidu.com";
function go(){
	var ky=document.getElementById("key");
	if(ky.value.length==0){
		ky.placeholder='输入为空';
		setTimeout(function(){ky.placeholder='请输入关键字';},1000);
		return false;
	}
	else{
		var url;
		var codeKey=encodeURIComponent(ky.value);
		if(fragmentStr.indexOf("baidu.com")==0){
			url="http://www.baidu.com/s?word="+codeKey+"&tn=12092018_15_hao_pg&ie=utf-8";
		}
		else if(fragmentStr.indexOf("google.com")==0){
			url="http://www.google.co.jp/#newwindow=1&q="+codeKey;
		}
		else if(fragmentStr.indexOf("so.com")==0){
			url="http://www.so.com/s?q="+codeKey;
		}
		else if(fragmentStr.indexOf("sogou.com")==0){
		url="http://www.sogou.com/sogou?ie=utf8&query="+codeKey+"&_ast=1385113856&_asf=null&w=01029901&pid=sogou-site-0084ae4bc24c0795&duppid=1&sut=2164&sst0=1385113797548&lkt=0%2C0%2C0";
		}
		else if(fragmentStr.indexOf("nipic.com")==0){
			url="http://soso.nipic.com/search.aspx?g=&x=&t=tk&q="+escape(ky.value)+"&pn=0";
		}
		else if(fragmentStr.indexOf("image.baidu.com")==0){
			url="http://image.baidu.com/i?word="+codeKey+"&tn=baiduimage&ct=201326592&cl=2&lm=-1&ie=utf-8&fm=hao123";
		}
		else if(fragmentStr.indexOf("tieba.baidu.com")==0){
			url="http://tieba.baidu.com/f?ie=utf-8&kw="+codeKey;
		}
		else if(fragmentStr.indexOf("yunpan.360.cn")==0){
			url="http://www.so.com/s?q=site%3Ayunpan.360.cn"+"+"+codeKey;
		}else if(fragmentStr.indexOf("sougouPic")==0){
			url="http://pic.sogou.com/pics?query="+codeKey+"&w=05009900&p=40030500&_asf=pic.sogou.com&_ast=1393412024&sut=1128&sst0=1393412023853";
		}else if(fragmentStr.indexOf("jianso.com")==0){
			url="http://search.jianso.com/s?q="+codeKey;
		}else if(fragmentStr.indexOf("weibo.com")==0){
			url="http://s.weibo.com/weibo/"+codeKey+"&Refer=index";
		}
		else{
			url="http://www.baidu.com/s?word=site%3A"+fragmentStr+"+"+codeKey+"&tn=82013038_111_hao_pg&ie=utf-8";
		}
		window.open(url);
		return true;
}}


var allData={
 "搜索":{"name":["百度","谷歌","360","搜狗","官网"],"u_val":["baidu.com","google.com","so.com","sogou.com","jianso.com"],"pic":["img/1.jpg","img/3.jpg","img/5.jpg","img/2.jpg","img/10.gif"]},
 "网盘":{"name":["百度","华为","115","360"],"u_val":["pan.baidu.com","dbank.com","115.com","yunpan.360.cn"],"pic":["img/1.jpg","img/9.jpg","img/8.jpg","img/5.jpg"]},
 "图片":{"name":["百度","昵图","搜狗"],"u_val":["image.baidu.com","nipic.com","sougouPic"],"pic":["img/1.jpg","img/6.jpg","img/2.jpg"]},
 "微博":{"name":["新浪"],"u_val":["weibo.com"],"pic":["img/11.png"]},
 "贴吧":{"name":["百度"],"u_val":["tieba.baidu.com"],"pic":["img/7.jpg"]}
}
function hideSuggestLater(){
	setTimeout(hideSuggest,200);
}
function checkF(d){
if(d){
getSuggest(d);
}
}
var re;
function showSuggest(data){
	r=data["s"];
	str="";
	ml=0;
	for(i in r){
		if(ml<r[i].length)
			ml=r[i].length;
		str+="<li class='li' onClick='reSearch(this.innerHTML);'>"+r[i]+"</li>";
	}
	re=document.getElementById("re");
	if(!re){
	re=document.createElement("ul");
	re.id="re";
	re.className="re col_bg";
	document.body.appendChild(re);
	}
	if(ml==0){
		re.style.display="none";
		return;
	}
	ml+=2;
	re.style.marginLeft=keyIn.offsetLeft+"px";	
	re.style.display="block";
	hideFragmentDiv();
	re.style.width=ml+"em";
	re.innerHTML=str;
}
function hideSuggest(){
	if(re){
	re.style.display="none";
}
}
function reSearch(d){
    hideSuggestLater();
	keyIn.value=d;
	go();
}
function getSuggest(tt){	
if(!tt){
hideSuggest();
return;}
$.ajax({
	type:"get",
	url:"http://suggestion.baidu.com/su",
	data:{ wd:tt+"",p:"3",cb:"window.showSuggest",sid:"1386310591483"},
	dataType:"script",
});
}
var fragment=document.getElementById("fragment");
var keyIn=document.getElementById("key");
var theInnerHTML="";
for(i in allData){
  theInnerHTML+="<b class='fra_cat'>"+i+"</b>:";
  for(j=0;j<allData[i].name.length;j++){
  	 theInnerHTML+="<a class='fra_a ' href='#' onClick='catelorySelected(this);' name='"+i+"'  title='"+allData[i].u_val[j]+"' >"+allData[i].name[j]+"</a>|"
  }
  console.log(theInnerHTML);
  theInnerHTML=theInnerHTML.substring(0,theInnerHTML.lastIndexOf('|'));
  theInnerHTML+="<br/>"
}
fragment.style.borderRadius="0px";
fragment.innerHTML=theInnerHTML;
var myE=document.getElementById("category");
function showFragmentDiv(e){
	hideSuggest();
if(fragment.style.display=="none"){
	fragment.style.marginLeft=e.offsetLeft+"px";
	fragment.style.display="block";
}else{
	hideFragmentDiv();
}
}
var imgMe=document.getElementById("imgMe");
var imgA=document.getElementById("imgA");
function init(){
	l_ih=localStorage.innerHTML;
	l_name=localStorage.name;
	if(l_ih){
		myE.value=l_ih+""+l_name;
		l_pos=allData[l_name].name.indexOf(l_ih);
		fragmentStr=allData[l_name].u_val[l_pos];
		imgMe.src=allData[l_name].pic[l_pos];
		imgA.href="http://www."+fragmentStr;
	}
}
function catelorySelected(t){
	if(localStorage){
	localStorage.innerHTML=t.innerHTML+"";
	localStorage.name=t.name+"";}
	myE.value=t.innerHTML+t.name;
	fragmentStr=t.title;
	imgMe.src=allData[t.name].pic[allData[t.name].name.indexOf(t.innerHTML)];
	imgA.href="http://www."+t.title;}
function hideFragmentDiv(){
	fragment.style.display="none";
}
init();