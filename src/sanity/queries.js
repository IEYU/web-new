import { defineQuery } from "groq";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(image.asset) && defined(url)]
    | order(displayOrder asc, title asc) {
      _id,
      title,
      url,
      image,
      technologies
    }
`);
