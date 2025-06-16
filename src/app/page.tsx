import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>iam a button</Button>
        </div>
        <div>
          <Input placeholder="i am an input"/>
        </div>
        <div>
          <Progress value={50}></Progress>
        </div>
        <div>
          <Textarea placeholder="i am a textarea"></Textarea>
        </div>
        <div>
          <Checkbox></Checkbox>
        </div>
      </div>
    </div>
  );
}
