import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export const CtaButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-background bg-primary rounded-md py-1 px-6 text-lg font-normal hover:bg-primary-dark transition-all">
          Connect
        </Button>
      </DialogTrigger>
      <DialogContent className="md:p-8">
        <iframe
          className="w-full h-[calc(100vh-140px)] md:h-[50vh] overflow-y-auto "
          src="https://calendar.app.google/yhVgjnK75KnU8CrU8"
          title="Book a consultation"
        />
      </DialogContent>
    </Dialog>
  );
};
