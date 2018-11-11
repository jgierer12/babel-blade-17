import { Image, query } from "./framework";

const pageQuery = `
  query {
    page {
      image {
        ...FrameworkImage
      }
    }
  }
`;

export default () => {
  query(pageQuery).then(data => <Image image={data.page.image} />);
};
