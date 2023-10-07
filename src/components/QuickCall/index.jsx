// Styled components
import StyledQuickCall from "./QuickCall.styled";

import { BsHeadphones } from "react-icons/bs";

const QuickCall = ({ phoneNumber }) => {
   return (
      <StyledQuickCall href={`tel:${phoneNumber.href}`}>
         <BsHeadphones />
         {phoneNumber.textContent}
      </StyledQuickCall>
   );
};

export default QuickCall;
