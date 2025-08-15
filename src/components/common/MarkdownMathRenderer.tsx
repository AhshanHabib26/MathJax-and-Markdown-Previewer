import { useEffect, useRef } from "react";
import { marked } from "marked";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from "@/styles/MarkdownMathRenderer.module.css";

type MarkdownMathRendererProps = {
  markdown: string;
};

marked.setOptions({
  breaks: true,
});

export default function MarkdownMathRenderer({
  markdown,
}: MarkdownMathRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const html = marked(markdown);

  useEffect(() => {
  }, [markdown]);

  return (
    <MathJaxContext>
      <MathJax dynamic>
        <div
          ref={containerRef}
          className={styles.markdownContent}
          dangerouslySetInnerHTML={{ __html: html as string }}
        />
      </MathJax>
    </MathJaxContext>
  );
}
