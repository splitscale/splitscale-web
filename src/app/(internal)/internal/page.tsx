import { Sidebar } from "@/app/_components/internal/navbar";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const statsData = [
  { title: "Total Visitors", value: "345k+" },
  { title: "Waitlist", value: "23" },
  { title: "Messages", value: "2.3k+" },
];

export default function Home() {
  return (
    <body className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="grid w-screen grid-cols-3 grid-rows-3">
        {statsData.map((data, index) => (
          <StatCard key={index} title={data.title} value={data.value} />
        ))}
      </div>
    </body>
  );
}

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => (
  <div className="flex flex-col items-center justify-center">
    <Card className="h-32 w-80 py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase text-default-500">
          {title}
        </p>
      </CardHeader>
      <CardBody className="items-center justify-center">
        <h1 className="text-3xl font-bold text-primary-500">{value}</h1>
      </CardBody>
    </Card>
  </div>
);
