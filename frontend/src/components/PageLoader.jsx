import { LoaderIcon } from "lucide-react";


function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-stone-200 ">
      <LoaderIcon className="size-10 animate-spin" />
    </div>
  );
}
export default PageLoader;
