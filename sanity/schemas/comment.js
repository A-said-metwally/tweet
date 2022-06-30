export default {
  name: 'comment',
  title: 'comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'tweet',
      title: 'tweet',
      type: 'tweet',
      options: {
        hotspot: true,
      },
    },
  ],
}
