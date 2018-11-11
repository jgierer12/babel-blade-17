export const Image = ({ image }) => (
  <img
    src={image.src}
    alt={image.alt}
    width={image.size.width}
    height={image.size.height}
  />
);

const imageFragment = `
  fragment FrameworkImage on Image {
    src
    alt
    size {
      width
      height
    }
  }
`;

export const query = gql => {
  gql += imageFragment;
  return fetch(gql);
};
