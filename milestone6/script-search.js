function searchToBrowse() {
	const input = document.getElementById("searchInput").value.toLowerCase();
	if (gameLinks[input]) {
		window.location.href = gameLinks[input];
	} else {
		alert(`No match found for "${input}". Try 'Word Crush' or 'Die Caster'.`);
	}
	return false;
}