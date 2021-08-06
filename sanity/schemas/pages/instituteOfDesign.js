export default {
    //
    name: 'instituteOfDesign',
    title: 'Institute Of Design',
    type: 'document',
    icon: () => `🎨`,
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
            name: 'descriptionEn',
            title: 'Description in english',
            type: 'blockModule'
        },
        {
            name: 'descriptionFr',
            title: 'Descriptif en français',
            type: 'blockModule'
        },
        {
            name: 'programDocument',
            title: 'Program Document',
            type: 'programDocument'
        },
        {
            name: 'aplicationDocument',
            title: 'Aplication Document',
            type: 'aplicationDocument'
        },
        {
            name: 'tuitionDocument',
            title: 'Tuition Document',
            type: 'tuitionDocument'
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{type: 'project'}]
        },
        {
            name: 'takeBackground',
            title: 'Take the next step background',
            type: 'imageType'
        }
    ],
}