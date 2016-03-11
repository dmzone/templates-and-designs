/* ======= AJAX Request - Object Method ======= */
var ajax = {
	init: function() {
		$('.btn').on('click', this.fetchRequest);
	},
	fetchRequest: function() {
		$.ajax("ajaxcontent.html", {
			success: function(response) {
				$('#firstAjax').html(response).fadeIn();
			},
			error: function(response) {
				$('#firstAjax').html('There was a problem fetching the data. My bad!');
				console.log(response);
			},
			timeout: 3000,
			beforeSend: function() {
				$('.loading').removeClass('hidden');
			},
			complete: function() {
				$('.loading').addClass('hidden');
			}
		});
	}
};
// NOTE: the fetchRequest will only work when running on a web server,
// as AJAX does not allow for local file retrieval.

// jQuery DOM Ready
$(function() {
	ajax.init(); // for object method
});