export default {
  name: "featured",
  type: "document",
  title: "Featured Menu categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      // Allows the use of data within the restaurant schema to be used in this section
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
