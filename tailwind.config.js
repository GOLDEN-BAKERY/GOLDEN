
module.exports = {
    content: [
        './views/**/*.pug', './public/**/*.{html,js}'
    ],
    theme: {
        extend: {
            colors: {
                'dark-gold': '#a67c00', 
            },
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'], 
                'cinzel': ['Cinzel', 'serif'],
            }
        }
    }
}
