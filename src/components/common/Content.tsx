import MarkdownEditor from "@/components/common/MarkdownEditor";
import MarkdownMathRenderer from "@/components/common/MarkdownMathRenderer";
import Container from "@/utils/Container";
import { useState } from "react";

const Content = () => {
  const [content, setContent] = useState<string>("");

  return (
    <Container>
      <div className=" space-y-5 mt-5">
        {/* Editor */}
        <div className="rounded overflow-hidden">
          <MarkdownEditor
            initialContent={content}
            onChange={(value: string) => setContent(value)}
          />
        </div>

        {content && (
          <div className="flex-1 border rounded overflow-auto bg-gray-50 p-3">
            <h2 className="font-semibold mb-2">Preview</h2>
            {/* Markdown + MathJax */}
            <MarkdownMathRenderer markdown={content} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Content;
