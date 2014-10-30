var iconMap = new WeakMap();

/**
<brick-flipbox>
  <div>Front</div>
  <div>Back</div>
</brick-flipbox>
 */
function renderIcon(icon) {
	var iconSrc = icon.icon;

	var tile = document.createElement('brick-flipbox');
	tile.innerHTML = `
<brick-flipbox>
  <div><img src="${iconSrc}"></div>
  <div>Back</div>
</brick-flipbox>
`;

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
