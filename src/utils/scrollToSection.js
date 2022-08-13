import { checkCurrentWidth } from 'hooks/useIsMobile';
import { scroller } from 'react-scroll';
export const scrollToSection = () => {
  let currentLocation = window.location.href;
  const hasCommentAnchor = currentLocation.includes('/#');
  if (hasCommentAnchor) {
    const anchorCommentId = `${currentLocation.substring(currentLocation.indexOf('#') + 1)}`;

    scroller.scrollTo(`${anchorCommentId}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: checkCurrentWidth() ? -120 : 0,
    });
  }
};
