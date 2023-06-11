interface IImpContImg {
  contentImg: string;
}

const ImpContImg: React.FC<IImpContImg> = ({ contentImg }: IImpContImg) => {
  return (
    <>
      <div className="bg-spot">
        <img
          src={require('../../../../assets/img/' + contentImg)}
          alt="content-img"
        />
      </div>
    </>
  );
};

export default ImpContImg;
