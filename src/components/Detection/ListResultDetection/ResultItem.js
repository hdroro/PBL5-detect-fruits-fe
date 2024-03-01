import "./ListResultDetection.scss";

function ResultItem({ children, leftIcon, rightIcon }) {
  return (
    <div className="result-item-container d-flex">
      {leftIcon && <span className={"icon"}>{leftIcon}</span>}
      <span className={"title text-center w-100"}>{children}</span>
      {rightIcon && <span className={"icon"}>{rightIcon}</span>}
    </div>
  );
}

export default ResultItem;
