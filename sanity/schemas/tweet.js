export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'text in Tweet',
      type: 'text',
    },
    {
      name: 'ahmedsaid',
      title: 'ahmedTweet',
      description:'Block Tweet from ahmed said',
      type: 'string',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'muhammad_said',
      title: 'my_first_Tweet',
      type: 'string',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main_image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'image',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
