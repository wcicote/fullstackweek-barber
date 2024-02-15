import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiveItemProps {
  service: Service
}

const ServiceItem = ({service}: ServiveItemProps) => {
  return ( 
    <Card>
      <CardContent>
        <div className="flex">
          <div className="relative">
            <Image src={service.imageUrl} alt={service.name}  />
          </div>
        </div>
        
      </CardContent>
    </Card>
   );
}
 
export default ServiceItem;