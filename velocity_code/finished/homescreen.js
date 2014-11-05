var iconMap = new WeakMap();

function renderIcon(icon) {
	var tile = document.createElement('img');
	tile.className = 'tile';
	tile.src = icon.icon;

	iconMap.set(tile, icon);

	document.body.appendChild(tile);
}

FxosApps.all().then(icons => {
    icons.forEach(icon => {
    	renderIcon(icon);
    });
});

window.addEventListener('click', function(e) {
	var icon = iconMap.get(e.target);
	icon.launch();
});
