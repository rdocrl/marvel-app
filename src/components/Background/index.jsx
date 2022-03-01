import './Background.scss';

const Background = ({ image, children }) => {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url('${image}')`
        }}>
        <div className="background__opacity"></div>
      </div>
      <div className="content">{children}</div>
    </>
  );
};

export default Background;
