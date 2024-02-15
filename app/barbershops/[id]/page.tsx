import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { Key } from "react";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  }
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {

  if (!params.id) {
    // TODO: redirecionar para home page
    return null
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      service: true
    }
  })

  if (!barbershop) {
    // TODO: redirecionar para home page
    return null
  }
  
  return ( 
    <div>
      <BarbershopInfo barbershop={barbershop} />

      {barbershop.service.map((service: { id: Key | null | undefined; }) =>(
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
    
   );
}
 
export default BarbershopDetailsPage;