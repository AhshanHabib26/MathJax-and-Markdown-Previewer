import Container from "@/utils/Container";
import { Logs, SquareFunction } from "lucide-react";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div className="text-white border-b border-dashed border-b-gray-500 py-3">
      <Container>
        <div className="flex items-center justify-between gap-5">
          <Link to="/">
            <div className="flex items-center gap-1.5">
              <SquareFunction size={20} />
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold">MathJax Previewer</h1>
                <span className="text-xs shadow border px-2 border-dashed rounded-2xl border-gray-500">
                  BETA
                </span>
              </div>
            </div>
          </Link>
          <div>
            <Logs className="cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
}
