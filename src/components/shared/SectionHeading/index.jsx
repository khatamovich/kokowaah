import { StyledSectionHeading } from "./SectionHeading.styled";

const SectionHeading = ({ title, slogan }) => {
   return (
      <StyledSectionHeading>
         <p>{slogan}</p>
         <h2>
            {title.content}
            <strong>{title.highlight}</strong>
         </h2>
      </StyledSectionHeading>
   );
};

export default SectionHeading;
