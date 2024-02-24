const PanelTitle = () => {
  const name = localStorage.getItem("userName");

  return <h2 className="text-lg md:text-xl">Hi, {name}</h2>;
};

export default PanelTitle;
