var container = document.body;
var iconMap = new WeakMap();

function renderIcon(icon) {
	var tile = document.createElement('div');
	tile.className = 'tile';

	var iconPath = icon.icon;
	tile.innerHTML = `
		<div class="back" style="background-image: url(${iconPath});"></div>
		<div class="front"></div>`;

	iconMap.set(tile, icon);

	container.appendChild(tile);
}

FxosApps.all().then(icons => {

	icons = icons.concat(icons);

	icons.sort(() => { return 0.5 - Math.random() });

    icons.forEach(icon => {
    	renderIcon(icon);
    });
});

window.addEventListener('click', function(e) {

    var other = container.querySelector('.flipped');
	var icon = iconMap.get(e.target);

	e.target.classList.add('flipped');

	if (!other) {
		return;
	}

	setTimeout(() => {
		if (icon === iconMap.get(other)) {
			icon.launch();
		}
		e.target.classList.remove('flipped');
        other.classList.remove('flipped');
	}, 2000);
});
