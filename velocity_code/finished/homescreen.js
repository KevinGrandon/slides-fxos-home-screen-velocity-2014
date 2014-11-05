var iconMap = new WeakMap();
var container = document.getElementById('container');

function renderIcon(icon) {
	var tile = document.createElement('img');
	tile.className = 'tile';
	tile.src = icon.icon;

	iconMap.set(tile, icon);

	container.appendChild(tile);
}

function shuffleDom() {
	for (var i = container.children.length - 1; i > 0; i--) {
		container.appendChild(container.children[Math.random() * i | 0]);
	}
}

FxosApps.all().then(icons => {
    icons.forEach(icon => {
    	renderIcon(icon);
    });
    shuffleDom();

    // Shuffle the dom every 5s?
    setInterval(shuffleDom, 5 * 1000);
});

window.addEventListener('click', function(e) {
	var icon = iconMap.get(e.target);
	icon.launch();
});