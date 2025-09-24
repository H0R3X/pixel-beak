const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Code",
				weight: 12.3
			}, {
				text: "Build",
				weight: 8
			}, {
				text: "Create",
				weight: 14
			}, {
				text: "Design",
				weight: 3
			}, {
				text: "Develop",
				weight: 7
			}, {
				text: "Innovate",
				weight: 10
			}, {
				text: "Deploy",
				weight: 9
			}, {
				text: "Launch",
				weight: 15
			}, {
				text: "Hack",
				weight: 6
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 1000; 
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"Shaping ideas into working products.","Every problem is an opportunity to create.", "love chalenges.", "solve problems.", "Code is our way of solving puzzles.", 
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#19c064ff"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
