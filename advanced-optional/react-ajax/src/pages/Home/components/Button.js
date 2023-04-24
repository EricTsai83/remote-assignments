const Button = ({setPage}) => {
  const updateContent = () => {
    setPage(prev => prev + 1);
  };
  return (
    <button onClick={updateContent} className="more-button">
      More
    </button>
  );
};

export default Button;
