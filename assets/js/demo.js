"use strict";

$(document).ready(function() {

	// Plugins init
	$(".highlight")[0] && hljs.initHighlightingOnLoad();

	// Copy code blocks to clipboard
	$("figure.highlight, div.highlight").each(function() {
	    var t = '<div class="code-clipboard"><button class="btn-clipboard" title="Copy to clipboard">Copy</button></div>';
	    $(this).before(t);
	    $(".btn-clipboard").tooltip().on("mouseleave", function() {
	        $(this).tooltip("hide")
	    });
	});

	var t = new Clipboard(".btn-clipboard", {
	    target: function(e) {
	        return e.parentNode.nextElementSibling
	    }
	});
	t.on("success", function(t) {
	    e(t.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle");
	    t.clearSelection()
	});
	t.on("error", function(t) {
	    var n = /Mac/i.test(navigator.userAgent) ? "⌘" : "Ctrl-";
	    var r = "Press " + n + "C to copy";
	    e(t.trigger).attr("title", r).tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle")
	});
});

//
// Demo.js
// only for preview purposes - remove it when starting your project
//


$(document).ready(function() {
	$('[data-toggle="sweet-alert"]').on('click', function(){
			var type = $(this).data('sweet-alert');

			switch (type) {
					case 'basic':
							swal({
									title: "Here's a message!",
									text: 'A few words about this sweet alert ...',
									buttonsStyling: false,
									confirmButtonClass: 'btn btn-primary'
							})
					break;

					case 'info':
							swal({
									title: 'Info',
									text: 'A few words about this sweet alert ...',
									type: 'info',
									buttonsStyling: false,
									confirmButtonClass: 'btn btn-info'
							})
					break;

					case 'info':
							swal({
									title: 'Info',
									text: 'A few words about this sweet alert ...',
									type: 'info',
									buttonsStyling: false,
									confirmButtonClass: 'btn btn-info'
							})
					break;

					case 'success':
							swal({
									title: 'Success',
									text: 'A few words about this sweet alert ...',
									type: 'success',
									buttonsStyling: false,
									confirmButtonClass: 'btn btn-success'
							})
					break;

					case 'warning':
							swal({
									title: 'Warning',
									text: 'A few words about this sweet alert ...',
									type: 'warning',
									buttonsStyling: false,
									confirmButtonClass: 'btn btn-warning'
							})
					break;

					case 'question':
							swal({
									title: 'Are you sure?',
									text: 'A few words about this sweet alert ...',
									type: 'question',
									buttonsStyling: false,
									confirmButtonClass: 'btn btn-dark'
							})
					break;

					case 'confirm':
							swal({
									title: 'Are you sure?',
									text: "You won't be able to revert this!",
									type: 'warning',
									showCancelButton: true,
									buttonsStyling: false,
									confirmButtonClass: 'btn btn-danger',
									confirmButtonText: 'Yes, delete it!',
									cancelButtonClass: 'btn btn-secondary'
							}).then((result) => {
									if (result.value) {
											// Show confirmation
											swal({
													title: 'Deleted!',
													text: 'Your file has been deleted.',
													type: 'success',
													buttonsStyling: false,
													confirmButtonClass: 'btn btn-primary'
											});
									}
							})
					break;

					case 'image':
							swal({
									title: 'Sweet',
									text: "Modal with a custom image ...",
									imageUrl: '../../assets/img/prv/splash.png',
									buttonsStyling: false,
									confirmButtonClass: 'btn btn-primary',
									confirmButtonText: 'Super!'
					});
					break;

					case 'timer':
							swal({
									title: 'Auto close alert!',
									text: 'I will close in 2 seconds.',
									timer: 2000,
									showConfirmButton: false
							});
					break;
			}
	});
});
