export default {
    //
    name: 'studioPage',
    title: 'Studio',
    type: 'document',
    fields: [
        {   
        name: 'title',
        title: 'Page Title',
        type: 'singleText'
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
    preview: {
        select: {
          title: 'title.en'
        }
      }
}