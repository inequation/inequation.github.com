// simple script to help keep the titles in sync
function syncTitles() {
	if (top.location.href != window.location.href) {
		top.document.title = document.title;
	}
}
