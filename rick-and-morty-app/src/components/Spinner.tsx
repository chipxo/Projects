const Spinner = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-b-8 border-t-8 border-accent" />
        <div className="absolute left-0 top-0 h-12 w-12 animate-spin rounded-full border-b-8 border-t-8 border-primary" />
      </div>
    </div>
  );
};

export default Spinner;
