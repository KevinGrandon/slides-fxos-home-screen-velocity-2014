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
});

window.addEventListener('click', function(e) {
	var icon = iconMap.get(e.target);
	e.target.classList.add('flipped');
	setTimeout(() => {
		icon.launch();
		e.target.classList.remove('flipped');
	}, 1000)
});
