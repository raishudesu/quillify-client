import { Card, CardBody, Typography } from "@material-tailwind/react";

const Cards = ({
  icon,
  characteristic,
  description,
}: {
  icon: string;
  characteristic: string;
  description: string;
}) => {
  return (
    <Card className="mt-6 max-w-96 hover:shadow-purple-500 transition ease-in-out delay-100">
      <CardBody>
        <span className="text-2xl">{icon}</span>
        <Typography variant="h5" color="blue-gray" className="my-2">
          {characteristic}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
};

export default Cards;
