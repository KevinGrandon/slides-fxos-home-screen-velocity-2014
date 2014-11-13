var iconMap = new WeakMap();
var container = document.body;

function renderIcon(icon) {
	var tile = document.createElement('div');
	tile.className = 'tile';

	iconMap.set(tile, icon);

	var iconPath = icon.icon;
	tile.innerHTML = `
		<div style="background-image: url(${iconPath});" class="back"></div>
		<div class="front"></div>`;

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
		renderIcon(icon);
	});
	shuffleDom();
});

window.addEventListener('click', function(e) {
	var icon = iconMap.get(e.target);
	var other = container.querySelector('.flipped');

	e.target.classList.add('flipped');

	if (!other) {
		return;
	}

	setTimeout(function() {
		if (icon == iconMap.get(other)) {
			icon.launch();
			shuffleDom();
		}

		e.target.classList.remove('flipped');
		other.classList.remove('flipped');
	}, 2000);
});
