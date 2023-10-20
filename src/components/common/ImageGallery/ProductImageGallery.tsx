import LightBox from "yet-another-react-lightbox";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

type IProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  images?: any;
};

const ProductImageGallery = ({ open, setOpen, images }: IProps) => {
  console.log(images);
  return (
    <LightBox
      slides={images}
      open={open}
      close={() => setOpen(false)}
      plugins={[Thumbnails, Zoom]}
      zoom={{
        scrollToZoom: true,
      }}
      animation={{
        zoom: 500,
      }}
    />
  );
};

export default ProductImageGallery;
