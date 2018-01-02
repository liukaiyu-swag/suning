{
	let imgs=document.querySelectorAll('.bannertu li .bannerimgtu')
	let pagers=document.querySelectorAll('.s-zh-yd li')
	let banner=document.querySelector('.banner')
	let xiayi=document.querySelector('.s-ban-you')
	let shangyi=document.querySelector('.s-ban-zuo')
	pagers.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i=0;i<imgs.length;i++){
				pagers[i].classList.remove('active');
				imgs[i].classList.remove('active')
				
			}
			this.classList.add('active');
			imgs[index].classList.add('active')
			n=index
		}
	})
    let n=0
	function bannerFn(dir){
		if(dir){
			n--
		}else{
		n++;
		}
		if(n===-1){
			n=imgs.length-1
		}
		if(n===imgs.length){
			n=0
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove('active')
			pagers[i].classList.remove('active');
		}
		pagers[n].classList.add('active');
	    imgs[n].classList.add('active')
	}
	let st=setInterval(bannerFn,3000)
	banner.onmouseover=function(){
		clearInterval(st)
	}
	banner.onmouseout=function(){
		st=setInterval(bannerFn,3000)
	}
	xiayi.onclick=function(){
		bannerFn()
	}
	shangyi.onclick=function(){
		bannerFn()
	}
	let flat=true
	xiayi.onclick=function(){
		if(flat){
			flat=false
			bannerFn()
		}
	}
	shangyi.onclick=function(){
		if(flat){
			flat=false
			bannerFn(1)
		}
	}
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flat=true
		})
	})
}
{
	let prev=document.querySelector('.wu-zuod')
	let next=document.querySelector('.wu-zuoy')
	let pingyi=document.querySelector('.w-xaiyi')
//	console.log(pingyi)
	prev.onclick=function(){
		prev.classList.remove('active');
	    next.classList.add('active')
	    pingyi.style.transform="translateX(0px)"
	}
	next.onclick=function(){
		prev.classList.add('active');
	    next.classList.remove('active')
	    pingyi.style.transform='translateX(-1000px)'
	}
//	let n=0
//	function stay(){
//		n++
//		if(n%2==0){
//			next.onclick()
//		}else{
//			prev.onclick()
//		}
//	}
//	let st=setInterval(stay,3000)
//	pingyi.onmouseover=function(){
//		clearInterval(st)
//	}
//	pingyi.onmouseout=function(){
//		st=setInterval(stay,3000)
//	}
	
}
{
	let inner=document.querySelector(".haohuo3 .content .list")
	let prev=document.querySelector(".haohuo3 .content .btn-left")
	//let next=document.querySelector(".haohuo3 .content .bnt-right")
	 let next=document.querySelector('.haohuo3 .content .btn-right')
	let item=document.querySelectorAll(".haohuo3 .content .list .list2")
	let pages=document.querySelectorAll(".haohuo3 .content .yuan div")
	let items=item.length
	console.log(item)
	let n = 0;
	//console.log(inner)
	next.onclick = function() {
		n++
		if(n >=items) {
				n = items-1
				return
			}
			inner.style.marginLeft = -n * 379 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
				pages[n].classList.add("active")
			}
			prev.onclick = function() {
				n--
				if(n <0) {
				    n =0
					return
				}
		    inner.style.marginLeft = -n * 379 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
			pages[n].classList.add("active")
			}
			pages.forEach(function(ele, index) {
				let m = index
				ele.onmousemove = function() {
					for(let i = 0; i < pages.length; i++) {
						pages[i].classList.remove("active")
					}
					ele.classList.add("active")
					inner.style.marginLeft = -m * 379 + "px"
					n = index
				}
			})	
}
