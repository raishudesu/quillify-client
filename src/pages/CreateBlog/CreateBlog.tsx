import Editor from "./components/Editor";

const CreateBlog = () => {
  return (
    <div className="py-6 mx-auto max-w-screen-2xl px-6 flex flex-col items-center justify-center gap-24 text-blue-gray-900 max-h-content">
      <Editor />
    </div>
  );
};

export default CreateBlog;
