/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { marked } from "marked";
import { MathJax } from "better-react-mathjax";
import styles from "@/styles/MarkdownMathRenderer.module.css";

declare global {
  interface Window {
    MathJax: any;
  }
}

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

  return (
    <MathJax>
      <div
        ref={containerRef}
        className={styles.markdownContent}
        dangerouslySetInnerHTML={{ __html: html as unknown as string }}
      />
    </MathJax>
  );
}
