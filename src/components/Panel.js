import classNames from "classnames";
const Panel = ({ children, className, ...rest }) => {
  const classes = classNames("flex justify-between items-center", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
