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
        {
            name: 'instituteOfDesignText',
            title: 'Institute Of Design Text',
            type: 'singleText'
        },
        {
            name: 'instituteOfDesignImage',
            title: 'Institute Of Design Image',
            type: 'imageType'
        },
        {
            name: 'textilesOfSeneglaText',
            title: 'Textiles Of Senegal Text',
            type: 'singleText'
        },
        {
            name: 'textilesOfSeneglaImage',
            title: 'Textiles Of Senegal Image',
            type: 'imageType'
        },
        {
            name: 'movilityText',
            title: 'Mobility Text',
            type: 'singleText'
        },
        {
            name: 'movilityImage',
            title: 'Mobility Image',
            type: 'imageType'
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'singleText'
        },
        {
            name: 'quoteFrom',
            title: 'Quote From',
            type: 'singleText'
        },
        {
            name: 'studioText',
            title: 'Studio Text',
            type: 'singleText'
        },
        {
            name: 'studioImage',
            title: 'Studio Image',
            type: 'imageType'
        },
        {
            name: 'manufacturingText',
            title: 'Manufacturing Text',
            type: 'singleText'
        },
        {
            name: 'manufacturingImage',
            title: 'Manufacturing Image',
            type: 'imageType'
        },
        {
            name: 'takeTheNextStepBackgroundImage',
            title: 'Take The Next Step Background Image',
            type: 'imageType'
        },
    ],
}