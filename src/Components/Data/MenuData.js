const menuData = [

    {
        item: 'Home',
        path: '/'
    },
    {
        item: 'About',
        path: '/about',
        submenu: [
            {
                item: 'Skills',
                path: '/skills'
            },
            {
                item: 'Experience',
                path: '/experience'
            }
        ]
    }
    ,
    {
        item: 'Skills',
        path: '/skills'
    }
    ,
    {
        item: 'Portfolio',
        path: '/portfolio'
    }
    ,
    {
        item: 'Testimonials',
        path: '/testimonials'
    }
    ,
    {
        item: 'Experience',
        path: '/experience'
    }
    ,
    {
        item: 'Faqs',
        path: '/faqs'
    },
    {
        item: 'Contact',
        path: '/contact'
    }

]

export default menuData;