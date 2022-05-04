import katex from "katex";
import styled from "@emotion/styled";

const InvalidSyntax = styled.div`
  color: var(--color-error);
  text-align: center;
`;

interface Props {
  block?: boolean;
  children: string;
  value?: string;
}

/**
 * The custom math renderer since the plugins doesn't work with Gatsby mdx.
 * Also some content comes from backend so it need to be rendered.
 *
 * Warning: Doesn't sanitize against XSS, so do not render user inputs
 */
export const MathDisplay = ({ block = false, children, value }: Props) => {
  let renderedContent = null;
  try {
    renderedContent = katex.renderToString(value || children);
  } catch (e) {
    console.error("Failed to render LaTeX:", children, e);
    // Probably not a string, use component as <MathDisplay>{"\\frac{1}{2}"}</MathDisplay>
  }

  if (!renderedContent) {
    return <InvalidSyntax>Invalid syntax, preview unavailable</InvalidSyntax>;
  }

  if (block) {
    return (
      <span className="math math-display">
        <span
          className="katex-display"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </span>
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: renderedContent }} />;
};
