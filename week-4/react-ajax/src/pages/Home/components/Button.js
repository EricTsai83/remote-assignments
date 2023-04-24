const Button = ({setPageItemNum}) => {
  const updateContent = () => {
    setPageItemNum(prev => prev + 5);
  };
  return (
    <button onClick={updateContent} className="more-button">
      More
    </button>
  );
};

export default Button;
