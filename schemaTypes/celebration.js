export default {
  name: 'celebration',
  type: 'document',
  title: 'Celebration',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'conent',
      titile: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
