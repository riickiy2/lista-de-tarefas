import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Plus, List, Check, BadgeAlert, SquarePen, Trash  } from 'lucide-react';
import { Badge } from "../components/ui/badge";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center"> 
      <Card className="w-lg">

        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa"/>
          <Button variant="default" className="cursor-pointer"> <Plus/>Cadastrar</Button> {/* muda o botão para um estilo claro com letra preta */}
        </CardHeader>

       
        <CardContent>
          <Separator className="mb-4"/>
          <div className="flex gap-2">
            <Badge className="cursor-pointer"> <List/>Todas</Badge>
            <Badge className="cursor-pointer"> <BadgeAlert/>Não finalizadas</Badge>
            <Badge className="cursor-pointer"> <Check/>Concluidas</Badge>
          </div>

          <div className="mt-4">
            <div className="h-12 flex justify-between items-center">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2">Estudar React</p>

              <div className="flex items-center">
                <SquarePen/>
                <Trash/>
              </div>
              
            </div>
          </div>
        </CardContent>
        

      </Card>
    </main>
  );
};

export default Home;