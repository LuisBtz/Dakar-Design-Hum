export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'imageType'
        },
        {
            name: 'socialMediaUrl',
            title: 'Social Media Url',
            type: 'url'
        }
    ],
    preview: {
        select: {
          title: 'socialMediaUrl',
          media: 'icon'
        },
      },
}