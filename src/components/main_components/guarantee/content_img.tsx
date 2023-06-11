interface IGrntContImg {
  contentImg: string;
  contentImgAlt?: string;
}

const GrntContentImg: React.FC<IGrntContImg> = ({
  contentImg,
  contentImgAlt,
}: IGrntContImg) => {
  return (
    <>
      <div className="guarantee-img">
        <img
          src={require('../../../assets/img/' + contentImg)}
          width="540"
          alt={contentImgAlt || 'content-img'}
        />
      </div>
    </>
  );
};

export default GrntContentImg;
