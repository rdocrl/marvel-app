import notFound from '../../assets/not-found.png';

const ErrorComponent = () => {
  return (
    <>
      <h2>Something went wrong</h2>
      <img src={notFound} alt="Something went wrong" width={300} />
    </>
  );
};

export default ErrorComponent;
