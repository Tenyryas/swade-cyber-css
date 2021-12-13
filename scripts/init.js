Hooks.on(`ready`, () => {
    console.log('SWADE Cyberpunk Theme | Ready');
    register_settings();
    const scrolling = game.settings.get('swade-cyber-css', 'moving-bg');

    if(!scrolling){
        document.documentElement.style.setProperty('--animation', 'none');
    }

});

function register_settings() {
    game.settings.register('swade-cyber-css', 'moving-bg', {
        name: game.i18n.localize("SWADECyberpunkCSS.Scrolling-BG"), //or use 'Name' if you don't want localisation.
        hint: game.i18n.localize("SWADECyberpunkCSS.Scrolling-BG-Desc"),
        type: Boolean, //you can also use Boolean or Number, for file pickers you'll need a lib I think, but that's not too difficult if you need it. Colour codes are also possible with or without a lib I THINK but I always use a lib for that as it gives me alpha.
        default: true, //for Boolean use true or false obviously or a number for number.
        scope: 'world', //makes the setting true for this world.
        config: true,
        //Use the following if you require the world to reload on change. Be careful though, as this could cause settings to be lost if changed in the same sitting. But it doesn't always happen.
        onChange: () => {
            window.location.reload();
        }
    });
}