interface IImpactHeading {
  impactHeading: string;
}

const ImpactHeading: React.FC<IImpactHeading> = ({
  impactHeading,
}: IImpactHeading) => {
  return (
    <>
      <h3 className="h2">{impactHeading}</h3>
    </>
  );
};

export default ImpactHeading;
