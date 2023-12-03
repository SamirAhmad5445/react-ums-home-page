const Button = ({ children, href, type, onClick }) => {
  if (href)
    return (
      <a
        href={href}
        className={`btn ${type === "accent" ? "btn-accent" : ""}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  return (
    <button
      className={`btn ${type === "accent" ? "btn-accent" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
