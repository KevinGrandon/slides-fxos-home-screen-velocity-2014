var container = document.body;

function renderIcon(icon) {
	var tile = document.createElement('div');
	tile.className = 'tile';

	var iconPath = icon.icon;
	tile.innerHTML = `<div style="background-image: url(${iconPath});"></div>`;

	container.appendChild(tile);
}

FxosApps.all().then(icons => {
    icons.forEach(icon => {
    	renderIcon(icon);
    });
});
