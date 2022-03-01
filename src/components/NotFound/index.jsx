import notFound from '../../assets/not-found.png';

const NotFound = () => {
  return (
    <>
      <h2>404 - Not found</h2>
      <img src={notFound} alt="oop - 404 not found" width={300} />
    </>
  );
};

export default NotFound;
