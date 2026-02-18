import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Plus, List, Check, BadgeAlert } from 'lucide-react';
import { Badge } from "../components/ui/badge";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center"> 
      <Card className="w-lg p-4">
        <div className="flex gap-2">
          <Input placeholder="Adicionar tarefa"/>
          <Button variant="outline" className="cursor-pointer"> <Plus/>Cadastrar</Button> {/* muda o botão para um estilo claro com letra preta */}
        </div>

        {<Separator/>}

        <div className="flex gap-2">
          <Badge className="cursor-pointer"> <List/>Todas</Badge>
          <Badge className="cursor-pointer"> <BadgeAlert/>Não finalizadas</Badge>
          <Badge className="cursor-pointer"> <Check/>Concluidas</Badge>

        </div>

      </Card>
    </main>
  );
};

export default Home;