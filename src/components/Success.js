const Success = ({ children, className }) => {
  return (
    <div
      className={`bg-green-400 text-green-950 text-sm py-2 px-6 rounded-2xl -mt-4 -mb-4 ${className}`}
    >
      {children.toUpperCase()}
    </div>
  );
};

export default Success;
