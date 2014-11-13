var iconMap = new WeakMap();
var container = document.body;

function renderIcon(icon) {
	var tile = document.createElement('div');
	tile.className = 'tile';

	iconMap.set(tile, icon);

	var iconPath = icon.icon;
	tile.innerHTML = `
		<div style="background-image: url(${iconPath});" class="front"></div>
		<div class="back"></div>`;

	container.appendChild(tile);
}

FxosApps.all().then(icons => {
    icons.forEach(icon => {
    	renderIcon(icon);
    });
});

window.addEventListener('click', function(e) {
	var icon = iconMap.get(e.target);
	e.target.classList.add('flipped');

	setTimeout(() => {
		icon.launch();
		e.target.classList.remove('flipped');
	}, 2000)
});

