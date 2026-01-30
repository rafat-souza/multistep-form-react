import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const Thanks = () => {
  return (
    <div className="thanks-container">
      <h2>Almost there...</h2>
      <p>
        Your opinion is very important, soon you'll receive a 10% OFF coupon for
        your next order.
      </p>
      <p>Click the Submit button below to finish your review.</p>
      <h3>Here is your review's summary:</h3>
      <p className="review-data">
        <span>Satisfaction with the product:</span>
      </p>
      <p className="review-data">
        <span>Comment:</span>
      </p>
    </div>
  );
};

export default Thanks;
