function renderIcon(icon) {
	var tile = document.createElement('img');
	tile.className = 'tile';
	tile.src = icon.icon;
	document.body.appendChild(tile);
}

FxosApps.all().then(icons => {
    icons.forEach(icon => {
    	renderIcon(icon);
    });
});
