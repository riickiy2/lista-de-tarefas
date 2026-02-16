import { Button } from "../components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center"> 
      <Card className="w-lg p-4">
        <div className="flex gap-2">
          <Input />
          <Button variant="outline">Cadastrar</Button> {/* muda o botão para um estilo claro com letra preta */}
        </div>

        <Separator/>

      </Card>
    </main>
  );
};

export default Home;
