'use client'

import CardMovieDetails from "@/components/CardMovieDetails";
import TitleSparkles from "@/components/TitleSparkles";
import { useTvSerie } from "@/hooks/useTvSerie";



const Page = ({ params }: { params: { serieid: string } }) => {
  
  const { serie } = useTvSerie({ id: params.serieid });

  console.log(params);
  
  
    return (
      <div >
       <TitleSparkles media={serie}/>
       <CardMovieDetails media={serie}/>
      </div>
    );
  };
  
  export default Page;
  