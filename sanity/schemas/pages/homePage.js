export default {
    //
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {   
        name: 'title',
        title: 'Page Title',
        type: 'string'
        },
        {
            name: 'marqueeText',
            title: 'Marquee',
            type: 'singleText'
        },
        {
            name: 'sliderHome',
            title: 'Slider Home',
            type: 'array',
            of: [{ type: 'slide' }]
        },
        {
            name: 'whoWeAreTitle',
            title: 'Who We Are Title',
            type: 'singleText'
        },
        {
            name: 'whoWeAreDescription',
            title: 'Who We Are Description',
            type: 'longText'
        },
        {
            name: 'whoWeAreText1',
            title: 'Who We Are Text 1',
            type: 'longText'
        },
        {
            name: 'whoWeAreText2',
            title: 'Who We Are Text 2',
            type: 'longText'
        },
    ],
}