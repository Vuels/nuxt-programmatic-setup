const siteTitle = 'Test Title'
const siteDesc = 'A Description Goes Here'

// Icon should be placed in static folder and href added here
const siteIcon = 'icon.png'

module.exports = {
    head: {
        title: siteTitle,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: siteDesc }
        ],
        script: [
            { src: 'https://use.fontawesome.com/releases/v5.0.1/js/all.js' }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: siteIcon,
            },
        ]
    },
    css: [
        '@/assets/styles/main.scss'
    ]
}