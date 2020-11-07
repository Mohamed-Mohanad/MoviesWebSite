// Left Post Animation Controller
var leftPost = document.querySelector('#leftPost');

// Posts Fade-in Controller
var posts = document.querySelectorAll(".post");

window.onload = function(){
	leftPost.classList.add("ani-left-post");
};

const options = {
	threshold: .1
};

const observer = new IntersectionObserver(function
	(entries, observer) {
		entries.forEach(entry => {
			if(!entry.isIntersecting)
			{
				entry.target.classList.remove("fade-in-anim");
				return;
			}
			entry.target.classList.toggle("fade-in-anim");
		})
	}, options)

posts.forEach(item => {
	observer.observe(item);
});