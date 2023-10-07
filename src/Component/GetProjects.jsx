import { useEffect, useState } from "react";
import { createClient } from "contentful";
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_KEY,
});

export const useGetProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "portfolio",
      });
      const projects = response.items.map((item) => {
        const { title, liveDemo, repoUrl, image, description, urlDesign } =
          item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, liveDemo, repoUrl, img, id, description, urlDesign };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading, projects };
};
