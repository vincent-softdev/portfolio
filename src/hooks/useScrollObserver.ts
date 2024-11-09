import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * This hook will take a function, and returns a ref.
 * The ref can be assigned to any JSX element as a prop, and
 * when the element reaches 50% of the viewport, the passed
 * in function will be called with the element id as the parameter.
 * @param {function} action - The callback function that gets triggered with the element id when in view.
 * @returns {RefObject<HTMLElement>} - A React RefObject to be assigned to a JSX element.
 */
export default function useScrollObserver(action: (id: string) => void) {
  const { ref, inView, entry } = useInView({
    rootMargin: '-50% 0% -50% 0%', // trigger when element reaches 50% in the viewport
  });

  // Wrap the ref callback in a RefObject
  const refObject = useRef<HTMLElement>(null);

  // Sync the ref callback with the refObject
  useEffect(() => {
    if (refObject.current) {
      ref(refObject.current); // Call the ref callback with the current DOM node
    }
  }, [ref]);

  useEffect(() => {
    if (entry && inView) {
      action(entry.target.id);
    }
  }, [entry, action, inView]);

  return refObject; // Return the refObject
}
