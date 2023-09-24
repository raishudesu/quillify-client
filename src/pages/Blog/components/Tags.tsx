import { Chip } from "@material-tailwind/react";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag: string, index: number) => (
        <Chip key={index} value={tag} variant="ghost" />
      ))}
    </div>
  );
};

export default Tags;
