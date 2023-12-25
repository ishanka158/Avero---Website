import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button
      className="transition-all duration-300 ease-in-out px-4 py-2 border border-black rounded-full text-black bg-white hover:bg-black hover:text-white hover:border-white"
      style={{
        width: "190px",
        height: "51px",
        padding: "16px 32px",
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
