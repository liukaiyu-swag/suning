{
	let imgs = document.querySelectorAll(".luobo-neikuan-zhong li");
	let pagings = document.querySelectorAll(".xiaoyuandain li");
	let banners = document.querySelector(".luobo-neir");
	let next = document.querySelector(".lb-yjt");
	let prev = document.querySelector(".lb-zjt");
	pagings.forEach(function(ele, index) {
		ele.onmouseover = function() {
			for(let i = 0; i < pagings.length; i++) {
				pagings[i].classList.remove("active");
				imgs[i].classList.remove("active");
			}
			ele.classList.add("active");
			imgs[index].classList.add("active");
			n = index;
		}
	})
	let n = 0;

	function bannerdh(x) {
		if(x) {
			n--;
		} else {
			n++;
		}
		if(n === -1) {
			n = imgs.length - 1
		}
		if(n == imgs.length) {
			n = 0
		}
		for(let i = 0; i < pagings.length; i++) {
			pagings[i].classList.remove("active");
			imgs[i].classList.remove("active");
		}
		pagings[n].classList.add("active");
		imgs[n].classList.add("active");
	}
	let st = setInterval(bannerdh, 3000);
	banners.onmouseover = function() {
		clearInterval(st)
	};
	banners.onmouseout = function() {
		st = setInterval(bannerdh, 3000);
	}
	let flat = true
	next.onclick = function() {
		if(flat) {
			flat = false
			bannerdh()
		}
	}
	prev.onclick = function() {
		if(flat) {
			flat = false
			bannerdh(1)
		}
	}
	imgs.forEach(function(ele) {
		ele.addEventListener("transitionend", function() {
			flat = true
		})
	})
}
//大聚惠
{
	let djh=document.querySelector(".djh-img1 ul")
	let prev=document.querySelector(".btn8-left")
	let next=document.querySelector(".btn8-right")
	next.onclick=function(){
		djh.style.transform='translateX(-1000px)'
	}
	prev.onclick=function(){
	    djh.style.transform="translateX(0px)"
	}
//	next.onclick=function(){
//		djh.style.transform='translateX(-1000px)'
//	}
}
//楼层跳转
{
	let nav_top=document.querySelector(".zuidingbu")
	let floors = document.querySelectorAll(".beijing .shumaqiche")
	let nav = document.querySelector("aside")
	let navs = document.querySelectorAll(".aside_nr li")
	let toptop = document.querySelector(".toptop")
	let flag = true;
	window.onscroll = function() {
		if(flag) {
			let st = document.documentElement.scrollTop;
			if(st>1000){
				nav_top.style.display="block"
			}else{
				nav_top.style.display="none"
			}
			if(st > 2180) {
				nav.style.display = "block"
			} else {
				nav.style.display = "none"
			}
			floors.forEach(function(ele, index) {
				if(st < floors[0].offsetTop) {
					for(let i = 0; i < navs.length; i++) {
						navs[i].classList.remove("active")
					}
					navs[0].classList.add("active")
				}
				if(st >= ele.offsetTop) {
					for(let i = 0; i < navs.length; i++) {
						navs[i].classList.remove("active")
					}
					navs[index + 1].classList.add("active")
				}
			})
		}
	}
	navs.forEach(function(ele, index) {
		ele.onclick = function() {
			flag = false;
			let st = floors[index].offsetTop;
			st-=70
			let now = document.documentElement.scrollTop;
			let speed = (st - now) * 30 / 300;
			let time = 0;
			let t = setInterval(function() {
				now += speed;
				time += 30;
				if(time === 300) {
					clearInterval(t);
					now = st;
					flag=true;
				}
				document.documentElement.scrollTop = now;
			}, 30)
		}
	})
	toptop.onclick = function() {
		let st = document.documentElement.scrollTop
		let speed = st * 30 / 500
		let t = setInterval(function() {
			st -= speed
			if(st <= 0) {
				st = 0;
				clearInterval(t)
			}
			document.documentElement.scrollTop = st
		}, 30)
	}
}
{
	let inner=document.querySelector(".haohuo3 .content .list1")
	let prev=document.querySelector(".haohuo3 .content .btn-left")
	let next=document.querySelector('.haohuo3 .content .btn-right')
	let item=document.querySelectorAll(".haohuo3 .content .list .list2")
	let pages=document.querySelectorAll(".haohuo3 .content .yuan div")
	let items=item.length
	console.log(item)
	let n = 0;
	next.onclick = function() {
		n++
		if(n >=items) {
				n = items-1
				return
			}
			inner.style.marginLeft = -n * 369 + "px"
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
		    inner.style.marginLeft = -n * 369 + "px"
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