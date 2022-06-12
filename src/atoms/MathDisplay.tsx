import { Nullable } from "app/types";
import katex from "katex";
import styled from "@emotion/styled";
import { useMemo } from "react";

interface Props {
  block?: boolean;
  value?: string;
}

/**
 * The custom math renderer for content received from backend.
 * Warning: Doesn't sanitize against XSS, so do not render user inputs.
 */
export const MathDisplay = ({ block = false, value }: Props) => {
  const renderedContent: Nullable<string> = useMemo(() => {
    try {
      return katex.renderToString(value);
    } catch (e) {
      console.error("Failed to render LaTeX:", e);
    }
    return null;
  }, [value]);

  if (!renderedContent) {
    return <InvalidSyntax>Invalid syntax, preview unavailable.</InvalidSyntax>;
  }

  if (block) {
    return (
      <span className="math math-display" data-block={true}>
        <span
          className="katex-display"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </span>
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: renderedContent }} />;
};

const InvalidSyntax = styled.div`
  color: var(--color-error);
  text-align: center;
`;
