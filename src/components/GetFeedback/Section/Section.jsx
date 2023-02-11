import PropTypes from 'prop-types';

export default function Section({ children, title }) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
