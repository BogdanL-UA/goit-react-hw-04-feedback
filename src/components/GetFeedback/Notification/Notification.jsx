import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <>
      <h4>{message}</h4>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
