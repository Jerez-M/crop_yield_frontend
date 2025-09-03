import { ArrowLeft, ArrowRight } from 'lucide-react';

export const PrevArrow = (props) => {
  const { className, style, onClick, currentSlide } = props;
  // Destructure currentSlide but don't pass it to the button
  
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      // Don't include currentSlide here
    >
      <ArrowLeft size={24} />
    </button>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick, currentSlide } = props;
  // Destructure currentSlide but don't pass it to the button
  
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      // Don't include currentSlide here
    >
      <ArrowRight size={24} />
    </button>
  );
};