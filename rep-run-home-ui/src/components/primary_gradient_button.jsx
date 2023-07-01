import PropTypes from "prop-types";

function PrimaryGradientButton({ prefix, btnText, textSize, width, height, maxWidth, maxHeight, paddingX, paddingY, onClick }) {
    return (
        <button 
            className={`
                ${width} ${height} ${maxWidth} ${maxHeight} ${textSize} ${paddingX} ${paddingY} 
                tw-flex
                tw-flex-row
                tw-items-center
                tw-justify-center
                tw-text-white 
                tw-rounded-lg
                tw-bg-gradient-to-r 
                tw-from-0% tw-from-[#9300E9] 
                tw-to-100% tw-to-[#5300FF] 
                hover:tw-opacity-75 
                active:tw-opacity-50 
                focus:tw-outline-none
                tw-font-bold
            `}
            onClick={onClick}
        >
            {prefix}
            {btnText}
        </button>
    );
}

PrimaryGradientButton.propTypes = {
    prefix: PropTypes.object,
    btnText: PropTypes.string.isRequired,
    textSize: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    maxWidth: PropTypes.string,
    maxHeight: PropTypes.string,
    paddingX: PropTypes.string,
    paddingY: PropTypes.string,
    onClick: PropTypes.func
};
PrimaryGradientButton.defaultProps = {
    prefix: null,
    textSize: 'tw-text-lg',
    width: 'tw-w-[150px]',
    height: 'tw-h-[45px]',
    maxWidth: null,
    maxHeight: null,
    paddingX: null,
    paddingY: null,
    onClick: null
};

export default PrimaryGradientButton;
