import { PropTypes } from 'prop-types';
import badges from '../utils/badges';

export default function Badge({ type }) {
  if (Object.values(badges.Badges).includes(type)) {
    const badgeIndex = Object.keys(badges.BadgeColors).indexOf(type);
    const badgeValue = Object.values(badges.BadgeColors)[badgeIndex];

    return (
      <div
        className=' text-white px-2 rounded-full text-lg'
        style={{ backgroundColor: badgeValue }}
      >
        {type}
      </div>
    );
  }
}

Badge.propTypes = {
  type: PropTypes.string.isRequired,
};
