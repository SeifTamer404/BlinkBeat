import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  targetTime,
  ref,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const isLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {isLost && <h2>You Lost</h2>}
      {!isLost && <h2>You Won! Score: {score}</h2>}
      <p>
        The Target Time Was <strong>{targetTime} Seconds.</strong>
      </p>
      {isLost ? (
        <p>You couldn't stop the timer before it expires</p>
      ) : (
        <p>
          You stopped the timer with{" "}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
      )}

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
