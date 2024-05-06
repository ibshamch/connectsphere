const Error = ({ children, className }) => {
  return (
    <div
      className={`bg-red-600 text-white text-sm py-2 px-6 rounded-2xl -mt-4 -mb-4 ${className}`}
    >
      {children.toUpperCase()}
    </div>
  );
};

export default Error;
