import LightBox from "yet-another-react-lightbox";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

type IProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  images?: any;
};

const ProductImageGallery = ({ open, setOpen, images }: IProps) => {
  return (
    <LightBox
      slides={images}
      open={open}
      close={() => setOpen(false)}
      plugins={[Thumbnails, Zoom]}
      zoom={{
        scrollToZoom: true,
        maxZoomPixelRatio: 3,
      }}
      animation={{
        zoom: 500,
      }}
      styles={{
        container: {
          backgroundColor: "rgba(0, 0, 0, .8)",
          backdropFilter: "blur(10px)",
        },
        thumbnailsContainer: {
          backgroundColor: "rgba(0, 0, 0, .9)",
          backdropFilter: "blur(10px)",
        },
        thumbnail: {
          backgroundColor: "transparent",
        },
      }}
    />
  );
};

export default ProductImageGallery;
