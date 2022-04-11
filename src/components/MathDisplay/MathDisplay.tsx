import * as React from "react";
import katex from "katex";

interface Props {
  block?: boolean;
  children: string;
}

/**
 * The custom math renderer since the plugins doesn't work with Gatsby mdx.
 * Also some content comes from backend so it need to be rendered.
 *
 * Warning: Doesn't sanitize against XSS, so do not render user inputs
 */
export const MathDisplay = ({ block = false, children }: Props) => {
  let renderedContent = null;
  try {
    renderedContent = katex.renderToString(children);
  } catch (e) {
    console.log(children);
    // Probably not a string, use component as <MathDisplay>{"\\frac{1}{2}"}</MathDisplay>
  }

  if (block) {
    return (
      <div className="math math-display">
        <div
          className="katex-display"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </div>
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: renderedContent }} />;
};
